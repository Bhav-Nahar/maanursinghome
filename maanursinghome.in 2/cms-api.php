<?php
session_start();

// Disable error display in output, but log them
ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Handle Actions
$action = isset($_GET['action']) ? $_GET['action'] : '';

// 1. LOGIN ACTION (No auth session required)
if ($action === 'login') {
    $input = json_decode(file_get_contents('php://input'), true);
    $email = isset($input['email']) ? trim($input['email']) : '';
    $password = isset($input['password']) ? $input['password'] : '';

    if ($email === 'admin@gmail.com' && $password === 'admin123') {
        $_SESSION['cms_logged_in'] = true;
        echo json_encode(['success' => true]);
        exit;
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid email or password']);
        exit;
    }
}

// 2. LOGOUT ACTION
if ($action === 'logout') {
    $_SESSION = array();
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();
    echo json_encode(['success' => true]);
    exit;
}

// 3. AUTHENTICATION SHIELD FOR PROTECTED ENDPOINTS
if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized access. Please log in.']);
    exit;
}

// 4. CHECK AUTH STATUS ENDPOINT
if ($action === 'check_auth') {
    echo json_encode(['success' => true]);
    exit;
}

// 5. GET ALL BLOGS
if ($action === 'get_blogs') {
    $dbPath = __DIR__ . '/blogs-metadata.json';
    if (!file_exists($dbPath)) {
        file_put_contents($dbPath, json_encode([]));
    }
    echo file_get_contents($dbPath);
    exit;
}

// 6. SAVE BLOG (Create or Update)
if ($action === 'save_blog') {
    $dbPath = __DIR__ . '/blogs-metadata.json';
    
    // Read current data
    $blogs = [];
    if (file_exists($dbPath)) {
        $blogs = json_decode(file_get_contents($dbPath), true);
        if (!is_array($blogs)) $blogs = [];
    }

    $id = isset($_POST['id']) ? trim($_POST['id']) : '';
    $title = isset($_POST['title']) ? trim($_POST['title']) : '';
    $slug = isset($_POST['slug']) ? trim(strtolower($_POST['slug'])) : '';
    $category = isset($_POST['category']) ? trim($_POST['category']) : '';
    $date = isset($_POST['date']) ? trim($_POST['date']) : '';
    $excerpt = isset($_POST['excerpt']) ? trim($_POST['excerpt']) : '';
    $content = isset($_POST['content']) ? $_POST['content'] : '';
    $seoTitle = isset($_POST['seoTitle']) && trim($_POST['seoTitle']) !== '' ? trim($_POST['seoTitle']) : $title;
    $seoDescription = isset($_POST['seoDescription']) && trim($_POST['seoDescription']) !== '' ? trim($_POST['seoDescription']) : $excerpt;
    $seoKeywords = isset($_POST['seoKeywords']) && trim($_POST['seoKeywords']) !== '' ? trim($_POST['seoKeywords']) : 'Maa Nursing Home, blog';

    if (empty($title) || empty($slug) || empty($excerpt) || empty($content)) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields.']);
        exit;
    }

    // Handle Cover Image Upload
    $coverImagePath = isset($_POST['coverImagePath']) ? $_POST['coverImagePath'] : 'assets/img/images/imgi_3_eye_intro.png';
    
    if (isset($_FILES['coverImageFile']) && $_FILES['coverImageFile']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['coverImageFile'];
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        
        if (in_array(strtolower($ext), $allowed)) {
            $filename = time() . '_' . preg_replace('/[^a-zA-Z0-9.]/', '_', $file['name']);
            $uploadDir = __DIR__ . '/assets/img/images/';
            
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            
            $targetPath = $uploadDir . $filename;
            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                $coverImagePath = 'assets/img/images/' . $filename;
            }
        }
    }

    $isEditing = !empty($id);
    $finalId = $isEditing ? $id : strval(round(microtime(true) * 1000));

    $newBlog = [
        'id' => $finalId,
        'title' => $title,
        'slug' => $slug,
        'category' => $category,
        'date' => $date,
        'author' => 'Admin',
        'excerpt' => $excerpt,
        'coverImage' => $coverImagePath,
        'seoTitle' => $seoTitle,
        'seoDescription' => $seoDescription,
        'seoKeywords' => $seoKeywords,
        'content' => $content
    ];

    if ($isEditing) {
        $found = false;
        foreach ($blogs as $key => $blog) {
            if ($blog['id'] == $id) {
                $blogs[$key] = $newBlog;
                $found = true;
                break;
            }
        }
        if (!$found) {
            $blogs[] = $newBlog;
        }
    } else {
        $blogs[] = $newBlog;
    }

    // Save JSON back
    file_put_contents($dbPath, json_encode($blogs, JSON_PRETTY_PRINT));

    // Compile the static HTML page for this blog
    compileBlogPage($newBlog);

    // Rebuild the blogs.html index
    compileBlogsListingPage($blogs);

    // Rebuild the index.html homepage
    compileIndexPage();

    echo json_encode(['success' => true, 'blog' => $newBlog]);
    exit;
}

// 7. DELETE BLOG
if ($action === 'delete_blog') {
    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($input['id']) ? $input['id'] : '';

    if (empty($id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing ID parameter.']);
        exit;
    }

    $dbPath = __DIR__ . '/blogs-metadata.json';
    if (!file_exists($dbPath)) {
        http_response_code(404);
        echo json_encode(['error' => 'Database not found.']);
        exit;
    }

    $blogs = json_decode(file_get_contents($dbPath), true);
    $foundKey = -1;
    $slugToDelete = '';

    foreach ($blogs as $key => $blog) {
        if ($blog['id'] == $id) {
            $foundKey = $key;
            $slugToDelete = $blog['slug'];
            break;
        }
    }

    if ($foundKey !== -1) {
        // Delete static HTML file if exists
        $htmlFile = __DIR__ . '/' . $slugToDelete . '.html';
        if (file_exists($htmlFile)) {
            unlink($htmlFile);
        }

        // Remove from array
        array_splice($blogs, $foundKey, 1);

        // Write back database
        file_put_contents($dbPath, json_encode($blogs, JSON_PRETTY_PRINT));

        // Rebuild blogs.html listing cards
        compileBlogsListingPage($blogs);

        // Rebuild the index.html homepage
        compileIndexPage();

        echo json_encode(['success' => true]);
        exit;
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Post not found.']);
        exit;
    }
}

// 8. SYNC TEMPLATES
if ($action === 'sync_templates') {
    $dbPath = __DIR__ . '/blogs-metadata.json';
    if (file_exists($dbPath)) {
        $blogs = json_decode(file_get_contents($dbPath), true);
        if (is_array($blogs)) {
            foreach ($blogs as $blog) {
                compileBlogPage($blog);
            }
            compileBlogsListingPage($blogs);
            compileIndexPage();
            echo json_encode(['success' => true]);
            exit;
        }
    }
    http_response_code(404);
    echo json_encode(['error' => 'No blogs to sync.']);
    exit;
}

// 9. GET HOMEPAGE DATA
if ($action === 'get_homepage_data') {
    $dbPath = __DIR__ . '/index-metadata.json';
    if (!file_exists($dbPath)) {
        echo json_encode([]);
        exit;
    }
    echo file_get_contents($dbPath);
    exit;
}

// 10. SAVE HOMEPAGE
if ($action === 'save_homepage') {
    $dbPath = __DIR__ . '/index-metadata.json';
    if (!file_exists($dbPath)) {
        http_response_code(404);
        echo json_encode(['error' => 'Homepage metadata file not found.']);
        exit;
    }

    $meta = json_decode(file_get_contents($dbPath), true);
    if (!is_array($meta)) $meta = [];

    // Fields list
    $fields = [
        'seoTitle', 'seoDescription', 'seoKeywords',
        'heroBadge', 'heroTitle', 'heroDescription', 'heroExperienceNumber', 'heroExperienceLabel',
        'eyeCampBadge', 'eyeCampTitle', 'eyeCampDescription', 'eyeCampFeatures', 'eyeCampVenue',
        'eyeCampDateTime', 'eyeCampContacts', 'eyeCampWhatsappLink', 'eyeCampPhone',
        'aboutHeading', 'aboutDescription', 'aboutSatisfaction', 'aboutLivesImproved'
    ];

    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            $meta[$field] = $_POST[$field];
        }
    }

    // Toggle field
    if (isset($_POST['eyeCampEnabled'])) {
        $meta['eyeCampEnabled'] = $_POST['eyeCampEnabled'] === 'true' || $_POST['eyeCampEnabled'] === '1' || $_POST['eyeCampEnabled'] === true;
    }

    // Image Uploads Helper
    $uploadDir = __DIR__ . '/assets/img/images/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $images = [
        'heroImage' => 'heroImageFile',
        'eyeCampImage1' => 'eyeCampImage1File',
        'eyeCampImage2' => 'eyeCampImage2File',
        'aboutPrimaryImage' => 'aboutPrimaryImageFile',
        'aboutSecondaryImage1' => 'aboutSecondaryImage1File',
        'aboutSecondaryImage2' => 'aboutSecondaryImage2File'
    ];

    foreach ($images as $metaKey => $fileKey) {
        if (isset($_FILES[$fileKey]) && $_FILES[$fileKey]['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES[$fileKey];
            $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
            $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            if (in_array(strtolower($ext), $allowed)) {
                $filename = time() . '_' . $metaKey . '_' . preg_replace('/[^a-zA-Z0-9.]/', '_', $file['name']);
                if (move_uploaded_file($file['tmp_name'], $uploadDir . $filename)) {
                    $meta[$metaKey] = 'assets/img/images/' . $filename;
                }
            }
        }
    }

    file_put_contents($dbPath, json_encode($meta, JSON_PRETTY_PRINT));

    // Re-compile index.html
    compileIndexPage();

    echo json_encode(['success' => true, 'data' => $meta]);
    exit;
}

// COMPILER FUNCTIONS

function compileIndexPage() {
    $templatePath = __DIR__ . '/index-template.html';
    $metaPath = __DIR__ . '/index-metadata.json';
    $blogsPath = __DIR__ . '/blogs-metadata.json';
    $outputPath = __DIR__ . '/index.html';

    if (!file_exists($templatePath) || !file_exists($metaPath)) {
        return;
    }

    $template = file_get_contents($templatePath);
    $meta = json_decode(file_get_contents($metaPath), true);
    if (!$meta) return;

    // 1. Compile recent blogs
    $blogs = [];
    if (file_exists($blogsPath)) {
        $blogs = json_decode(file_get_contents($blogsPath), true);
        if (!is_array($blogs)) $blogs = [];
    }

    // Sort chronologically in reverse (newest first)
    $sortedBlogs = array_reverse($blogs);
    $recentBlogs = array_slice($sortedBlogs, 0, 3);

    $recentHtml = '';
    foreach ($recentBlogs as $index => $blog) {
        $delay = ($index + 2) * 100;
        $recentHtml .= '
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="' . $delay . '">
            <div class="service-card h-100">
              <div class="service-image">
                <img src="' . htmlspecialchars($blog['coverImage']) . '" alt="' . htmlspecialchars($blog['title']) . '" class="img-fluid">
              </div>
              <div class="service-content">
                <div class="meta mb-2" style="font-size: 0.85rem; color: #6c757d;">
                  <i class="bi bi-calendar me-1"></i> ' . htmlspecialchars($blog['date']) . '
                </div>
                <h3>' . htmlspecialchars($blog['title']) . '</h3>
                <p>' . htmlspecialchars($blog['excerpt']) . '</p>
                <a href="' . htmlspecialchars($blog['slug']) . '.html" class="service-link">Read More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>';
    }

    $startMarker = '<!-- RECENT_BLOGS_START -->';
    $endMarker = '<!-- RECENT_BLOGS_END -->';
    $startIndex = strpos($template, $startMarker);
    $endIndex = strpos($template, $endMarker);

    if ($startIndex !== false && $endIndex !== false) {
        $beforePart = substr($template, 0, $startIndex + strlen($startMarker));
        $afterPart = substr($template, $endIndex);
        $template = $beforePart . "\n" . $recentHtml . "\n" . $afterPart;
    }

    // 2. Compile Eye Camp section
    $campStartMarker = '<!-- EYE_CAMP_SECTION_START -->';
    $campEndMarker = '<!-- EYE_CAMP_SECTION_END -->';
    $campStartIndex = strpos($template, $campStartMarker);
    $campEndIndex = strpos($template, $campEndMarker);

    if ($campStartIndex !== false && $campEndIndex !== false) {
        $enabled = isset($meta['eyeCampEnabled']) && ($meta['eyeCampEnabled'] === true || $meta['eyeCampEnabled'] === 'true' || $meta['eyeCampEnabled'] === 1 || $meta['eyeCampEnabled'] === '1');
        
        if (!$enabled) {
            // Remove eye camp completely
            $beforePart = substr($template, 0, $campStartIndex);
            $afterPart = substr($template, $campEndIndex + strlen($campEndMarker));
            $template = $beforePart . $afterPart;
        } else {
            // Compile eye camp placeholders inside the block
            $campBlock = substr($template, $campStartIndex, $campEndIndex + strlen($campEndMarker) - $campStartIndex);
            
            $campBlock = str_replace('{{EYE_CAMP_IMAGE1}}', $meta['eyeCampImage1'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_IMAGE2}}', $meta['eyeCampImage2'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_BADGE}}', $meta['eyeCampBadge'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_TITLE}}', $meta['eyeCampTitle'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_DESCRIPTION}}', $meta['eyeCampDescription'], $campBlock);
            
            $features = isset($meta['eyeCampFeatures']) ? explode(',', $meta['eyeCampFeatures']) : [];
            $featuresHtml = '';
            foreach ($features as $f) {
                $f = trim($f);
                if ($f !== '') {
                    $featuresHtml .= '
                <div class="col-sm-6 mb-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-danger me-2 fs-5"></i>
                    <span>' . htmlspecialchars($f) . '</span>
                  </div>
                </div>';
                }
            }
            $campBlock = str_replace('{{EYE_CAMP_FEATURES_LIST_HTML}}', $featuresHtml, $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_VENUE}}', $meta['eyeCampVenue'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_DATETIME}}', $meta['eyeCampDateTime'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_CONTACTS}}', $meta['eyeCampContacts'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_WHATSAPP_LINK}}', $meta['eyeCampWhatsappLink'], $campBlock);
            $campBlock = str_replace('{{EYE_CAMP_PHONE}}', $meta['eyeCampPhone'], $campBlock);

            $beforePart = substr($template, 0, $campStartIndex);
            $afterPart = substr($template, $campEndIndex + strlen($campEndMarker));
            $template = $beforePart . $campBlock . $afterPart;
        }
    }

    // 3. Compile static sections
    $template = str_replace('{{SEO_TITLE}}', $meta['seoTitle'], $template);
    $template = str_replace('{{SEO_DESCRIPTION}}', $meta['seoDescription'], $template);
    $template = str_replace('{{SEO_KEYWORDS}}', $meta['seoKeywords'], $template);
    
    $template = str_replace('{{HERO_IMAGE}}', $meta['heroImage'], $template);
    $template = str_replace('{{HERO_BADGE}}', $meta['heroBadge'], $template);
    $template = str_replace('{{HERO_TITLE}}', $meta['heroTitle'], $template);
    $template = str_replace('{{HERO_DESCRIPTION}}', $meta['heroDescription'], $template);
    $template = str_replace('{{HERO_EXPERIENCE_NUMBER}}', $meta['heroExperienceNumber'], $template);
    $template = str_replace('{{HERO_EXPERIENCE_LABEL}}', $meta['heroExperienceLabel'], $template);
    
    $template = str_replace('{{ABOUT_HEADING}}', $meta['aboutHeading'], $template);
    $template = str_replace('{{ABOUT_DESCRIPTION}}', $meta['aboutDescription'], $template);
    $template = str_replace('{{ABOUT_PRIMARY_IMAGE}}', $meta['aboutPrimaryImage'], $template);
    $template = str_replace('{{ABOUT_SECONDARY_IMAGE1}}', $meta['aboutSecondaryImage1'], $template);
    $template = str_replace('{{ABOUT_SECONDARY_IMAGE2}}', $meta['aboutSecondaryImage2'], $template);
    $template = str_replace('{{ABOUT_SATISFACTION}}', $meta['aboutSatisfaction'], $template);
    $template = str_replace('{{ABOUT_LIVES_IMPROVED}}', $meta['aboutLivesImproved'], $template);

    file_put_contents($outputPath, $template);
}

function compileBlogPage($blog) {
    $templatePath = __DIR__ . '/blog-template.html';
    if (!file_exists($templatePath)) {
        return;
    }

    $template = file_get_contents($templatePath);

    // Replace placeholders
    $template = str_replace('{{SEO_TITLE}}', $blog['seoTitle'], $template);
    $template = str_replace('{{SEO_DESCRIPTION}}', $blog['seoDescription'], $template);
    $template = str_replace('{{SEO_KEYWORDS}}', $blog['seoKeywords'], $template);
    $template = str_replace('{{BLOG_TITLE}}', $blog['title'], $template);
    $template = str_replace('{{COVER_IMAGE}}', $blog['coverImage'], $template);
    $template = str_replace('{{AUTHOR}}', $blog['author'], $template);
    $template = str_replace('{{DATE}}', $blog['date'], $template);
    $template = str_replace('{{CONTENT}}', $blog['content'], $template);

    // Save output
    $outputPath = __DIR__ . '/' . $blog['slug'] . '.html';
    file_put_contents($outputPath, $template);
}

function compileBlogsListingPage($blogs) {
    $blogsHtmlPath = __DIR__ . '/blogs.html';
    if (!file_exists($blogsHtmlPath)) {
        return;
    }

    // Sort chronologically in reverse (newest first)
    $sortedBlogs = array_reverse($blogs);

    $cardsHtml = '';
    foreach ($sortedBlogs as $index => $blog) {
        $delay = ($index + 1) * 100;
        $cardsHtml .= '
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="' . $delay . '">
            <article class="blog-card">
              <div class="blog-img">
                <img src="' . $blog['coverImage'] . '" alt="' . htmlspecialchars($blog['title']) . '" class="img-fluid">
                <span class="blog-category">' . htmlspecialchars($blog['category']) . '</span>
              </div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span><i class="bi bi-person"></i> ' . htmlspecialchars($blog['author']) . '</span>
                  <span><i class="bi bi-calendar"></i> ' . htmlspecialchars($blog['date']) . '</span>
                </div>
                <h2 class="blog-title">' . htmlspecialchars($blog['title']) . '</h2>
                <p class="blog-excerpt">' . htmlspecialchars($blog['excerpt']) . '</p>
                <a href="' . $blog['slug'] . '.html" class="read-more">Read More <i class="bi bi-arrow-right"></i></a>
              </div>
            </article>
          </div>';
    }

    $blogsContent = file_get_contents($blogsHtmlPath);

    $startMarker = '<!-- BLOG_LIST_START -->';
    $endMarker = '<!-- BLOG_LIST_END -->';

    $startIndex = strpos($blogsContent, $startMarker);
    $endIndex = strpos($blogsContent, $endMarker);

    if ($startIndex === false || $endIndex === false) {
        return;
    }

    $beforePart = substr($blogsContent, 0, $startIndex + strlen($startMarker));
    $afterPart = substr($blogsContent, $endIndex);

    $newContent = $beforePart . "\n" . $cardsHtml . "\n" . $afterPart;
    file_put_contents($blogsHtmlPath, $newContent);
}
?>
