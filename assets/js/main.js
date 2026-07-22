/**
* Template Name: MediNest
* Template URL: https://bootstrapmade.com/medinest-bootstrap-hospital-template/
* Updated: Aug 11 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Floating WhatsApp Widget Injection & Toggle Logic
   */
  function initWhatsAppWidget() {
    // Create widget container
    const widget = document.createElement('div');
    widget.className = 'whatsapp-floating-widget';
    widget.id = 'whatsappWidget';
    
    // Set widget HTML
    widget.innerHTML = `
      <button class="whatsapp-trigger-btn" id="whatsappTrigger" aria-label="WhatsApp Support">
        <i class="bi bi-whatsapp"></i>
        <span class="whatsapp-badge"></span>
      </button>
      <div class="whatsapp-popup-card" id="whatsappPopup">
        <div class="whatsapp-card-header">
          <div class="whatsapp-avatar">
            <img src="assets/img/imgi_1_maa logo.jpg" alt="Maa Logo">
            <span class="online-indicator"></span>
          </div>
          <div class="whatsapp-header-info">
            <h5>Maa Nursing Home</h5>
            <span>Usually replies in a few minutes</span>
          </div>
          <button class="whatsapp-close-btn" id="whatsappClose">&times;</button>
        </div>
        <div class="whatsapp-card-body">
          <div class="whatsapp-msg">
            <p class="whatsapp-msg-bubble">
              Namaste! 🙏 Welcome to Maa Nursing Home & NetraJyoti Eyecare Centre. How can we assist you today?
            </p>
            <span class="whatsapp-msg-time">Just now</span>
          </div>
          <div class="whatsapp-actions-list">
            <a href="https://wa.me/919820072543?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Maa%20Nursing%20Home." target="_blank" class="whatsapp-action-item">
              <i class="bi bi-calendar-check-fill text-success"></i>
              <div class="action-text">
                <strong>Book on WhatsApp</strong>
                <span>Schedule your hospital visit</span>
              </div>
              <i class="bi bi-chevron-right arrow"></i>
            </a>
            <a href="https://wa.me/919820072543?text=Hi,%20I%20would%20like%20to%20book%20a%20Video%20Consultation." target="_blank" class="whatsapp-action-item">
              <i class="bi bi-camera-video-fill text-primary"></i>
              <div class="action-text">
                <strong>Video Consultation</strong>
                <span>Consult doctor online from home</span>
              </div>
              <i class="bi bi-chevron-right arrow"></i>
            </a>
            <a href="https://wa.me/919820072543?text=Hi,%20I%20have%20a%20general%20query%20about%20your%20treatments." target="_blank" class="whatsapp-action-item">
              <i class="bi bi-chat-dots-fill text-warning"></i>
              <div class="action-text">
                <strong>Chat on WhatsApp</strong>
                <span>General inquiry & support</span>
              </div>
              <i class="bi bi-chevron-right arrow"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    
    // Append to body
    document.body.appendChild(widget);
    
    // Event listeners
    const trigger = document.getElementById('whatsappTrigger');
    const popup = document.getElementById('whatsappPopup');
    const closeBtn = document.getElementById('whatsappClose');
    const badge = widget.querySelector('.whatsapp-badge');
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.toggle('show');
      if (popup.classList.contains('show') && badge) {
        badge.style.display = 'none'; // Hide unread badge once opened
      }
    });
    
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.remove('show');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target)) {
        popup.classList.remove('show');
      }
    });
  }
  
  // Add Google verification icon next to patient names in testimonials page
  function initGoogleReviewLinks() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach(item => {
      // Add verification link next to name
      const h3 = item.querySelector('h3');
      if (h3 && !h3.querySelector('.google-verification-link')) {
        const link = document.createElement('a');
        link.href = 'https://share.google/X9V7DCsfep9B7EqWL';
        link.target = '_blank';
        link.className = 'ms-2 google-verification-link';
        link.title = 'Verify Review on Google';
        link.innerHTML = '<i class="bi bi-google text-danger" style="font-size: 0.8em;"></i>';
        h3.appendChild(link);
      }
      
      // Also add a nice clickable badge at the bottom: "Verified Google Review"
      if (!item.querySelector('.google-verify-badge') && !item.querySelector('.google-badge')) {
        const badge = document.createElement('div');
        badge.className = 'text-end mt-2 pt-2 border-top';
        badge.innerHTML = `
          <a href="https://share.google/X9V7DCsfep9B7EqWL" target="_blank" class="google-verify-badge text-decoration-none" style="font-size: 0.85rem; color: #4285F4; font-weight: 500;">
            <i class="bi bi-google me-1"></i> Verified Google Review
          </a>
        `;
        item.appendChild(badge);
      }
    });
  }
  
  window.addEventListener('load', () => {
    initWhatsAppWidget();
    initGoogleReviewLinks();
  });

})();