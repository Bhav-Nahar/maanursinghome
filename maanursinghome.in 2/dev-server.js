const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Simple in-memory session mock for local testing
let localSession = { loggedIn: false };

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let urlObj = new URL(req.url, `http://localhost:${PORT}`);
  let urlPath = decodeURIComponent(urlObj.pathname);

  // MOCK PHP BACKEND IN LOCAL ENVIRONMENT
  if (urlPath === '/cms-api.php') {
    handlePhpMock(req, res, urlObj);
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Mock PHP actions in Node
async function handlePhpMock(req, res, urlObj) {
  res.setHeader('Content-Type', 'application/json');
  const action = urlObj.searchParams.get('action');

  // Helper for CORS or normal responses
  const sendJson = (data, statusCode = 200) => {
    res.writeHead(statusCode);
    res.end(JSON.stringify(data));
  };

  // 1. LOGIN
  if (action === 'login') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const input = JSON.parse(body);
        if (input.email === 'admin@gmail.com' && input.password === 'admin123') {
          localSession.loggedIn = true;
          sendJson({ success: true });
        } else {
          sendJson({ error: 'Invalid email or password' }, 401);
        }
      } catch (e) {
        sendJson({ error: 'Invalid JSON body' }, 400);
      }
    });
    return;
  }

  // 2. LOGOUT
  if (action === 'logout') {
    localSession.loggedIn = false;
    sendJson({ success: true });
    return;
  }

  // AUTH PROTECTION FOR REST OF THE APIS
  if (!localSession.loggedIn) {
    sendJson({ error: 'Unauthorized access' }, 401);
    return;
  }

  // 3. CHECK AUTH
  if (action === 'check_auth') {
    sendJson({ success: true });
    return;
  }

  // 4. GET BLOGS
  if (action === 'get_blogs') {
    const dbPath = path.join(__dirname, 'blogs-metadata.json');
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify([]));
    }
    const data = fs.readFileSync(dbPath, 'utf-8');
    res.writeHead(200);
    res.end(data);
    return;
  }

  // 5. SAVE BLOG
  if (action === 'save_blog') {
    try {
      const data = await parseMultipartForm(req);
      const dbPath = path.join(__dirname, 'blogs-metadata.json');
      let blogs = [];
      if (fs.existsSync(dbPath)) {
        blogs = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
      }

      // Handle Cover Image File Upload
      let coverImagePath = data.fields.coverImagePath || 'assets/img/images/imgi_3_eye_intro.png';
      
      if (data.file) {
        const cleanName = Date.now() + '_' + data.file.filename.replace(/[^a-zA-Z0-9.]/g, '_');
        const uploadDir = path.join(__dirname, 'assets', 'img', 'images');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        fs.writeFileSync(path.join(uploadDir, cleanName), data.file.data);
        coverImagePath = 'assets/img/images/' + cleanName;
      }

      const id = data.fields.id || '';
      const isEditing = !!id;
      const finalId = isEditing ? id : String(Date.now());

      const newBlog = {
        id: finalId,
        title: data.fields.title,
        slug: data.fields.slug.toLowerCase(),
        category: data.fields.category,
        date: data.fields.date,
        author: 'Admin',
        excerpt: data.fields.excerpt,
        coverImage: coverImagePath,
        seoTitle: data.fields.seoTitle || data.fields.title,
        seoDescription: data.fields.seoDescription || data.fields.excerpt,
        seoKeywords: data.fields.seoKeywords || 'Maa Nursing Home, blog',
        content: data.fields.content
      };

      if (isEditing) {
        const idx = blogs.findIndex(b => b.id == id);
        if (idx !== -1) blogs[idx] = newBlog;
      } else {
        blogs.push(newBlog);
      }

      // Write JSON db
      fs.writeFileSync(dbPath, JSON.stringify(blogs, null, 2));

      // Rebuild HTML Pages
      compileBlogPage(newBlog);
      compileBlogsListingPage(blogs);
      compileIndexPage();

      sendJson({ success: true, blog: newBlog });
    } catch (e) {
      console.error(e);
      sendJson({ error: 'Server compiler error: ' + e.message }, 500);
    }
    return;
  }

  // 6. DELETE BLOG
  if (action === 'delete_blog') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const input = JSON.parse(body);
        const id = input.id;
        const dbPath = path.join(__dirname, 'blogs-metadata.json');
        
        if (!fs.existsSync(dbPath)) return sendJson({ error: 'Database not found' }, 404);
        
        let blogs = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        const idx = blogs.findIndex(b => b.id == id);
        
        if (idx !== -1) {
          const slug = blogs[idx].slug;
          const htmlFile = path.join(__dirname, `${slug}.html`);
          if (fs.existsSync(htmlFile)) {
            fs.unlinkSync(htmlFile);
          }
          
          blogs.splice(idx, 1);
          fs.writeFileSync(dbPath, JSON.stringify(blogs, null, 2));
          compileBlogsListingPage(blogs);
          compileIndexPage();
          sendJson({ success: true });
        } else {
          sendJson({ error: 'Blog not found' }, 404);
        }
      } catch (err) {
        sendJson({ error: 'Delete execution failed' }, 500);
      }
    });
    return;
  }

  // 7. SYNC TEMPLATES
  if (action === 'sync_templates') {
    const dbPath = path.join(__dirname, 'blogs-metadata.json');
    if (fs.existsSync(dbPath)) {
      const blogs = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
      blogs.forEach(b => compileBlogPage(b));
      compileBlogsListingPage(blogs);
      compileIndexPage();
      sendJson({ success: true });
    } else {
      sendJson({ error: 'No database to sync' }, 404);
    }
    return;
  }

  // 8. GET HOMEPAGE DATA
  if (action === 'get_homepage_data') {
    const dbPath = path.join(__dirname, 'index-metadata.json');
    if (!fs.existsSync(dbPath)) {
      sendJson({});
      return;
    }
    const data = fs.readFileSync(dbPath, 'utf-8');
    res.writeHead(200);
    res.end(data);
    return;
  }

  // 9. SAVE HOMEPAGE
  if (action === 'save_homepage') {
    try {
      const data = await parseMultipartForm(req);
      const dbPath = path.join(__dirname, 'index-metadata.json');
      let meta = {};
      if (fs.existsSync(dbPath)) {
        meta = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
      }

      // Fields list
      const fields = [
        'seoTitle', 'seoDescription', 'seoKeywords',
        'heroBadge', 'heroTitle', 'heroDescription', 'heroExperienceNumber', 'heroExperienceLabel',
        'eyeCampBadge', 'eyeCampTitle', 'eyeCampDescription', 'eyeCampFeatures', 'eyeCampVenue',
        'eyeCampDateTime', 'eyeCampContacts', 'eyeCampWhatsappLink', 'eyeCampPhone',
        'aboutHeading', 'aboutDescription', 'aboutSatisfaction', 'aboutLivesImproved'
      ];

      fields.forEach(field => {
        if (data.fields[field] !== undefined) {
          meta[field] = data.fields[field];
        }
      });

      if (data.fields.eyeCampEnabled !== undefined) {
        meta.eyeCampEnabled = data.fields.eyeCampEnabled === 'true' || data.fields.eyeCampEnabled === '1' || data.fields.eyeCampEnabled === true;
      }

      // Handle Image File Uploads
      const uploadDir = path.join(__dirname, 'assets', 'img', 'images');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const images = {
        heroImage: 'heroImageFile',
        eyeCampImage1: 'eyeCampImage1File',
        eyeCampImage2: 'eyeCampImage2File',
        aboutPrimaryImage: 'aboutPrimaryImageFile',
        aboutSecondaryImage1: 'aboutSecondaryImage1File',
        aboutSecondaryImage2: 'aboutSecondaryImage2File'
      };

      for (const [metaKey, fileKey] of Object.entries(images)) {
        if (data.files && data.files[fileKey]) {
          const fileData = data.files[fileKey];
          const cleanName = Date.now() + '_' + metaKey + '_' + fileData.filename.replace(/[^a-zA-Z0-9.]/g, '_');
          fs.writeFileSync(path.join(uploadDir, cleanName), fileData.data);
          meta[metaKey] = 'assets/img/images/' + cleanName;
        }
      }

      fs.writeFileSync(dbPath, JSON.stringify(meta, null, 2));

      // Re-compile index.html
      compileIndexPage();

      sendJson({ success: true, data: meta });
    } catch (e) {
      console.error(e);
      sendJson({ error: 'Server compiler error: ' + e.message }, 500);
    }
    return;
  }

  sendJson({ error: 'Action not matched' }, 404);
}

// Compiler: Single Page
function compileBlogPage(blog) {
  const templatePath = path.join(__dirname, 'blog-template.html');
  if (!fs.existsSync(templatePath)) return;
  
  let text = fs.readFileSync(templatePath, 'utf-8');
  text = text.replace(/{{SEO_TITLE}}/g, blog.seoTitle);
  text = text.replace(/{{SEO_DESCRIPTION}}/g, blog.seoDescription);
  text = text.replace(/{{SEO_KEYWORDS}}/g, blog.seoKeywords);
  text = text.replace(/{{BLOG_TITLE}}/g, blog.title);
  text = text.replace(/{{COVER_IMAGE}}/g, blog.coverImage);
  text = text.replace(/{{AUTHOR}}/g, blog.author);
  text = text.replace(/{{DATE}}/g, blog.date);
  text = text.replace(/{{CONTENT}}/g, blog.content);

  fs.writeFileSync(path.join(__dirname, `${blog.slug}.html`), text);
}

// Compiler: Listing Index
function compileBlogsListingPage(blogs) {
  const listingPath = path.join(__dirname, 'blogs.html');
  if (!fs.existsSync(listingPath)) return;

  const sorted = [...blogs].reverse();
  let cardsHtml = '';
  sorted.forEach((blog, index) => {
    cardsHtml += `
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <article class="blog-card">
              <div class="blog-img">
                <img src="${blog.coverImage}" alt="${blog.title}" class="img-fluid">
                <span class="blog-category">${blog.category}</span>
              </div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span><i class="bi bi-person"></i> ${blog.author}</span>
                  <span><i class="bi bi-calendar"></i> ${blog.date}</span>
                </div>
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <a href="${blog.slug}.html" class="read-more">Read More <i class="bi bi-arrow-right"></i></a>
              </div>
            </article>
          </div>`;
  });

  let blogsContent = fs.readFileSync(listingPath, 'utf-8');
  const startMarker = '<!-- BLOG_LIST_START -->';
  const endMarker = '<!-- BLOG_LIST_END -->';

  const startIndex = blogsContent.indexOf(startMarker);
  const endIndex = blogsContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) return;

  const beforePart = blogsContent.substring(0, startIndex + startMarker.length);
  const afterPart = blogsContent.substring(endIndex);

  fs.writeFileSync(listingPath, beforePart + "\n" + cardsHtml + "\n" + afterPart);
}

// Helper: Parse multipart/form-data
function parseMultipartForm(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const contentType = req.headers['content-type'];
      const boundaryMatch = contentType.match(/boundary=(.+)/);
      if (!boundaryMatch) return reject(new Error('No boundary in multipart headers'));
      const boundary = '--' + boundaryMatch[1];
      
      const parts = splitBuffer(buffer, Buffer.from(boundary));
      const fields = {};
      const files = {};
      let file = null;

      parts.forEach(part => {
        if (part.length === 0 || part.toString() === '--\r\n') return;
        
        // Find header boundary
        const headerEndIndex = part.indexOf(Buffer.from('\r\n\r\n'));
        if (headerEndIndex === -1) return;
        
        const headerText = part.slice(0, headerEndIndex).toString();
        const body = part.slice(headerEndIndex + 4, part.length - 2); // slice off body and final \r\n
        
        const disposition = headerText.match(/Content-Disposition: form-data; name="([^"]+)"(; filename="([^"]+)")?/);
        if (!disposition) return;
        
        const fieldName = disposition[1];
        const isFile = !!disposition[3];
        
        if (isFile) {
          const filename = disposition[3];
          if (filename) {
            const fileObj = {
              filename,
              data: body
            };
            files[fieldName] = fileObj;
            if (!file) file = fileObj;
          }
        } else {
          fields[fieldName] = body.toString();
        }
      });

      resolve({ fields, file, files });
    });
  });
}

function splitBuffer(buffer, separator) {
  const result = [];
  let index = 0;
  while (true) {
    const searchIndex = buffer.indexOf(separator, index);
    if (searchIndex === -1) {
      result.push(buffer.slice(index));
      break;
    }
    result.push(buffer.slice(index, searchIndex));
    index = searchIndex + separator.length;
  }
  return result;
}

function compileIndexPage() {
  const templatePath = path.join(__dirname, 'index-template.html');
  const metaPath = path.join(__dirname, 'index-metadata.json');
  const blogsPath = path.join(__dirname, 'blogs-metadata.json');
  const outputPath = path.join(__dirname, 'index.html');

  if (!fs.existsSync(templatePath) || !fs.existsSync(metaPath)) return;

  let template = fs.readFileSync(templatePath, 'utf-8');
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));

  // 1. Compile recent blogs
  let blogs = [];
  if (fs.existsSync(blogsPath)) {
    blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
  }

  const sorted = [...blogs].reverse();
  const recentBlogs = sorted.slice(0, 3);

  let recentHtml = '';
  recentBlogs.forEach((blog, index) => {
    const delay = (index + 2) * 100;
    recentHtml += `
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="service-card h-100">
              <div class="service-image">
                <img src="${blog.coverImage}" alt="${blog.title}" class="img-fluid">
              </div>
              <div class="service-content">
                <div class="meta mb-2" style="font-size: 0.85rem; color: #6c757d;">
                  <i class="bi bi-calendar me-1"></i> ${blog.date}
                </div>
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <a href="${blog.slug}.html" class="service-link">Read More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>`;
  });

  const startMarker = '<!-- RECENT_BLOGS_START -->';
  const endMarker = '<!-- RECENT_BLOGS_END -->';
  const startIndex = template.indexOf(startMarker);
  const endIndex = template.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const beforePart = template.substring(0, startIndex + startMarker.length);
    const afterPart = template.substring(endIndex);
    template = beforePart + "\n" + recentHtml + "\n" + afterPart;
  }

  // 2. Compile Eye Camp section
  const campStartMarker = '<!-- EYE_CAMP_SECTION_START -->';
  const campEndMarker = '<!-- EYE_CAMP_SECTION_END -->';
  const campStartIndex = template.indexOf(campStartMarker);
  const campEndIndex = template.indexOf(campEndMarker);

  if (campStartIndex !== -1 && campEndIndex !== -1) {
    const enabled = meta.eyeCampEnabled === true || meta.eyeCampEnabled === 'true' || meta.eyeCampEnabled === 1 || meta.eyeCampEnabled === '1';
    if (!enabled) {
      const beforePart = template.substring(0, campStartIndex);
      const afterPart = template.substring(campEndIndex + campEndMarker.length);
      template = beforePart + afterPart;
    } else {
      let campBlock = template.substring(campStartIndex, campEndIndex + campEndMarker.length);
      campBlock = campBlock.replace(/{{EYE_CAMP_IMAGE1}}/g, meta.eyeCampImage1);
      campBlock = campBlock.replace(/{{EYE_CAMP_IMAGE2}}/g, meta.eyeCampImage2);
      campBlock = campBlock.replace(/{{EYE_CAMP_BADGE}}/g, meta.eyeCampBadge);
      campBlock = campBlock.replace(/{{EYE_CAMP_TITLE}}/g, meta.eyeCampTitle);
      campBlock = campBlock.replace(/{{EYE_CAMP_DESCRIPTION}}/g, meta.eyeCampDescription);

      const features = meta.eyeCampFeatures ? meta.eyeCampFeatures.split(',') : [];
      let featuresHtml = '';
      features.forEach(f => {
        const trimmed = f.trim();
        if (trimmed) {
          featuresHtml += `
                <div class="col-sm-6 mb-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-danger me-2 fs-5"></i>
                    <span>${escapeHtml(trimmed)}</span>
                  </div>
                </div>`;
        }
      });

      campBlock = campBlock.replace(/{{EYE_CAMP_FEATURES_LIST_HTML}}/g, featuresHtml);
      campBlock = campBlock.replace(/{{EYE_CAMP_VENUE}}/g, meta.eyeCampVenue);
      campBlock = campBlock.replace(/{{EYE_CAMP_DATETIME}}/g, meta.eyeCampDateTime);
      campBlock = campBlock.replace(/{{EYE_CAMP_CONTACTS}}/g, meta.eyeCampContacts);
      campBlock = campBlock.replace(/{{EYE_CAMP_WHATSAPP_LINK}}/g, meta.eyeCampWhatsappLink);
      campBlock = campBlock.replace(/{{EYE_CAMP_PHONE}}/g, meta.eyeCampPhone);

      const beforePart = template.substring(0, campStartIndex);
      const afterPart = template.substring(campEndIndex + campEndMarker.length);
      template = beforePart + campBlock + afterPart;
    }
  }

  // 3. Compile static sections
  template = template.replace(/{{SEO_TITLE}}/g, meta.seoTitle);
  template = template.replace(/{{SEO_DESCRIPTION}}/g, meta.seoDescription);
  template = template.replace(/{{SEO_KEYWORDS}}/g, meta.seoKeywords);
  template = template.replace(/{{HERO_IMAGE}}/g, meta.heroImage);
  template = template.replace(/{{HERO_BADGE}}/g, meta.heroBadge);
  template = template.replace(/{{HERO_TITLE}}/g, meta.heroTitle);
  template = template.replace(/{{HERO_DESCRIPTION}}/g, meta.heroDescription);
  template = template.replace(/{{HERO_EXPERIENCE_NUMBER}}/g, meta.heroExperienceNumber);
  template = template.replace(/{{HERO_EXPERIENCE_LABEL}}/g, meta.heroExperienceLabel);
  template = template.replace(/{{ABOUT_HEADING}}/g, meta.aboutHeading);
  template = template.replace(/{{ABOUT_DESCRIPTION}}/g, meta.aboutDescription);
  template = template.replace(/{{ABOUT_PRIMARY_IMAGE}}/g, meta.aboutPrimaryImage);
  template = template.replace(/{{ABOUT_SECONDARY_IMAGE1}}/g, meta.aboutSecondaryImage1);
  template = template.replace(/{{ABOUT_SECONDARY_IMAGE2}}/g, meta.aboutSecondaryImage2);
  template = template.replace(/{{ABOUT_SATISFACTION}}/g, meta.aboutSatisfaction);
  template = template.replace(/{{ABOUT_LIVES_IMPROVED}}/g, meta.aboutLivesImproved);

  fs.writeFileSync(outputPath, template);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

server.listen(PORT, () => {
  console.log(`Local dev server running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT}/admin.html to manage blogs.`);
});
