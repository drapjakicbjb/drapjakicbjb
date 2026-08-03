/* ===================================================
   DR. A.P.J. ABDUL KALAM SCHOOL — Main JavaScript
   =================================================== */

// Register Service Worker for client-side caching and offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    let pathPrefix = '';
    const scriptEl = document.querySelector('script[src*="js/main.js"]');
    if (scriptEl) {
      const src = scriptEl.getAttribute('src');
      const idx = src.indexOf('js/main.js');
      if (idx > 0) {
        pathPrefix = src.substring(0, idx);
      }
    }
    navigator.serviceWorker.register(pathPrefix + 'sw.js')
      .then(reg => console.log('[Service Worker] Scope:', reg.scope))
      .catch(err => console.error('[Service Worker] Registration failed:', err));
  });
}

document.addEventListener('DOMContentLoaded', async () => {

  /* ─── 0. COMPONENT LOADER ────────────────────────── */
  async function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Dynamically detect script path prefix for subdirectories (e.g. simulators/)
    let pathPrefix = '';
    const scriptEl = document.querySelector('script[src*="js/main.js"]');
    if (scriptEl) {
      const src = scriptEl.getAttribute('src');
      const idx = src.indexOf('js/main.js');
      if (idx > 0) {
        pathPrefix = src.substring(0, idx);
      }
    }

    const loadTask = [];

    if (headerPlaceholder) {
      loadTask.push(
        fetch(pathPrefix + 'components/header.html')
          .then(response => response.text())
          .then(data => {
            headerPlaceholder.innerHTML = data;
          })
      );
    }

    if (footerPlaceholder) {
      loadTask.push(
        fetch(pathPrefix + 'components/footer.html')
          .then(response => response.text())
          .then(data => {
            footerPlaceholder.innerHTML = data;
          })
      );
    }

    const zoomControlsPlaceholder = document.getElementById('zoom-controls-placeholder');
    if (zoomControlsPlaceholder) {
      loadTask.push(
        fetch(pathPrefix + 'components/zoom-controls.html')
          .then(response => response.text())
          .then(data => {
            zoomControlsPlaceholder.innerHTML = data;
          })
      );
    }

    let scrollbarPlaceholder = document.getElementById('scrollbar-placeholder');
    if (!scrollbarPlaceholder) {
      scrollbarPlaceholder = document.createElement('div');
      scrollbarPlaceholder.id = 'scrollbar-placeholder';
      document.body.appendChild(scrollbarPlaceholder);
    }

    loadTask.push(
      fetch(pathPrefix + 'components/scrollbar.html')
        .then(response => response.text())
        .then(data => {
          scrollbarPlaceholder.innerHTML = data;
        })
    );

    try {
      await Promise.all(loadTask);
      initComponents();
    } catch (err) {
      console.error('Error loading school components:', err);
    }
  }

  /* ─── 1. LOADER ─────────────────────────────────── */
  const loader = document.getElementById('loader');
  let loaderHidden = false;

  function hideLoader() {
    if (loader && !loaderHidden) {
      loaderHidden = true;
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (loader) {
    // Hide loader when the page has fully loaded
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 200);
    });

    // Safety fallback: Hide loader after a maximum of 1.5 seconds anyway,
    // preventing the loading screen from getting stuck.
    setTimeout(hideLoader, 1500);

    document.body.style.overflow = 'hidden';
  }

  /* ─── 2. HERO PARTICLES ──────────────────────────── */
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement('span');
      dot.style.cssText = `left:${Math.random() * 100}%;animation-duration:${6 + Math.random() * 10}s;animation-delay:${Math.random() * 10}s;width:${2 + Math.random() * 4}px;height:${2 + Math.random() * 4}px;opacity:${0.3 + Math.random() * 0.5}`;
      frag.appendChild(dot);
    }
    particlesContainer.appendChild(frag);
  }

  /* ─── 3. COMPONENT INITIALIZATION ────────────────── */
  /**
   * Binds event listeners to header/footer elements after they are injected.
   */
  function initComponents() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    // Sticky nav and Floating buttons scroll effect
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);
          if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', scrollY > 500);
          updateActiveNavLink();
          scrollTicking = false;
        });
      }
    }, { passive: true });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }



    // Samarth-style Gov Banner Toggle
    const govBannerToggle = document.getElementById('govBannerToggle');
    const govBannerDropdown = document.getElementById('govBannerDropdown');
    if (govBannerToggle && govBannerDropdown) {
      govBannerToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = govBannerDropdown.classList.toggle('open');
        govBannerToggle.setAttribute('aria-expanded', isOpen);

        // Update arrow icon
        const icon = govBannerToggle.querySelector('i');
        if (icon) {
          if (isOpen) {
            icon.className = 'fas fa-chevron-up';
          } else {
            icon.className = 'fas fa-chevron-down';
          }
        }
      });

      // Close dropdown if user clicks anywhere else
      document.addEventListener('click', () => {
        if (govBannerDropdown.classList.contains('open')) {
          govBannerDropdown.classList.remove('open');
          govBannerToggle.setAttribute('aria-expanded', 'false');
          const icon = govBannerToggle.querySelector('i');
          if (icon) icon.className = 'fas fa-chevron-down';
        }
      });
    }

    // Mobile Hamburger Logic
    function closeMenu() {
      if (!hamburger) return;
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      navOverlay.classList.remove('visible');
      if (navbar) navbar.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    if (hamburger && navMenu && navOverlay) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        navMenu.classList.toggle('open', isOpen);
        navOverlay.classList.toggle('visible', isOpen);
        if (navbar) navbar.classList.toggle('menu-open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      navOverlay.addEventListener('click', closeMenu);

      const mobileMenuClose = document.getElementById('mobileMenuClose');
      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
      }

      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    updateActiveNavLink();

    // Smooth scroll for nav links (including those just injected)
    document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const offset = (navbar ? navbar.offsetHeight : 0) + 10;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        } else if (href.includes('#') && (href.startsWith('index.html') || href.startsWith('/#') || href.startsWith('/index.html'))) {
          // If on homepage already, handle as smooth scroll
          const isHome = window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('index');
          if (isHome) {
            const targetId = href.split('#')[1];
            const target = document.getElementById(targetId);
            if (target) {
              e.preventDefault();
              const offset = (navbar ? navbar.offsetHeight : 0) + 10;
              const top = target.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }
        }
      });
    });

    // Initialize zoom controls if they exist on the page
    initZoomControls();
  }

  /* ─── 4. ZOOM CONTROLS LOGIC ───────────────────── */
  function initZoomControls() {
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');
    const zoomResetBtn = document.getElementById('zoom-level-text');

    if (!zoomInBtn || !zoomOutBtn || !zoomResetBtn) return;

    let currentZoom = 1;
    const step = 0.1;
    const maxZoom = 2.0;
    const minZoom = 0.5;

    function getZoomTarget() {
      return document.querySelector('.solar-viewer') ||
        document.querySelector('.sim-app-container') ||
        document.querySelector('.content-section') ||
        document.querySelector('.pt-container') ||
        document.querySelector('main') ||
        document.body;
    }

    function applyZoom() {
      const target = getZoomTarget();
      if (target) {
        target.style.zoom = currentZoom;
      }
      zoomResetBtn.innerText = Math.round(currentZoom * 100) + '%';

      // Auto-enable scrolling if zoomed in or out so hidden elements become reachable
      if (currentZoom !== 1) {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }

    zoomInBtn.addEventListener('click', () => {
      if (currentZoom < maxZoom) {
        currentZoom += step;
        currentZoom = Math.round(currentZoom * 10) / 10;
        applyZoom();
      }
    });

    zoomOutBtn.addEventListener('click', () => {
      if (currentZoom > minZoom) {
        currentZoom -= step;
        currentZoom = Math.round(currentZoom * 10) / 10;
        applyZoom();
      }
    });

    zoomResetBtn.addEventListener('click', () => {
      currentZoom = 1;
      applyZoom();
    });

    applyZoom();
  }

  /* ─── 5. ACTIVE NAV LINK LOGIC ─────────────────── */
  const sections = document.querySelectorAll('section[id]');
  let sectionCache = [];

  function cacheSectionPositions() {
    sectionCache = Array.from(sections).map(section => ({
      id: section.getAttribute('id'),
      top: section.offsetTop,
      height: section.offsetHeight
    }));
  }

  // Rebuild cache on resize (debounced) and after components load
  let resizeCacheTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeCacheTimer);
    resizeCacheTimer = setTimeout(cacheSectionPositions, 200);
  }, { passive: true });

  function updateActiveNavLink() {
    const scrollY = window.scrollY + 150;
    const path = window.location.pathname;
    const isHomepage = path === '/' || path === '' || path.endsWith('index.html') || path.endsWith('index');

    // 1. Handle page-based active (Study Hub, Link Hub)
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      link.classList.remove('active');

      const cleanHref = href.replace(/^\//, '').replace(/\.html$/, '');
      const cleanPath = path.replace(/^\//, '').replace(/\.html$/, '');

      if (cleanHref === cleanPath && cleanHref !== '') {
        link.classList.add('active');
      }
    });

    // 2. Handle hash-based active for homepage (uses cached positions — no forced reflow)
    if (isHomepage) {
      for (const sec of sectionCache) {
        const navLink = document.querySelector(`.nav-link[href="index.html#${sec.id}"], .nav-link[href="/#${sec.id}"], .nav-link[href="#${sec.id}"]`);
        if (navLink && scrollY >= sec.top && scrollY < sec.top + sec.height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    }
  }

  /* ─── 5. SCROLL REVEAL ANIMATIONS ───────────────── */
  const animatedEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  animatedEls.forEach(el => revealObserver.observe(el));

  /* ─── 6. COUNTER ANIMATION ───────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString('en-IN') + suffix;
    }, 16);
  }

  /* ─── 7. TESTIMONIALS CAROUSEL ───────────────────── */
  const wrapper = document.getElementById('testimonialsWrapper');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  const dots = document.querySelectorAll('.t-dot');

  if (wrapper && prevBtn && nextBtn) {
    let currentIndex = 0;
    const cards = wrapper.querySelectorAll('.testimonial-card');
    const totalSlides = cards.length;
    let cachedCardWidth = 0;

    function cacheCardWidth() {
      if (cards.length) cachedCardWidth = cards[0].offsetWidth + 24;
    }

    function getVisible() {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, totalSlides - getVisible());
    }

    function slide(index) {
      currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
      wrapper.style.transform = `translateX(-${currentIndex * cachedCardWidth}px)`;
      if (dots.length) updateDots();
    }

    function updateDots() {
      dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    nextBtn.addEventListener('click', () => slide(currentIndex + 1));
    prevBtn.addEventListener('click', () => slide(currentIndex - 1));
    dots.forEach((d, i) => d.addEventListener('click', () => slide(i)));

    let autoSlide = setInterval(() => {
      const maxIdx = getMaxIndex();
      slide(currentIndex >= maxIdx ? 0 : currentIndex + 1);
    }, 5000);

    wrapper.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
    wrapper.parentElement.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => {
        const maxIdx = getMaxIndex();
        slide(currentIndex >= maxIdx ? 0 : currentIndex + 1);
      }, 5000);
    });

    window.addEventListener('resize', () => { cacheCardWidth(); slide(0); });
    cacheCardWidth();
  }

  /* ─── 8. CONTACT FORM (EmailJS) ──────────────────── */
  const EMAILJS_PUBLIC_KEY = '6DYmieZwBu3lhi_FR';
  const EMAILJS_SERVICE_ID = 'service_tarunk435';
  const EMAILJS_TEMPLATE_ID = 'template_tarunk435';

  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const contactForm = document.getElementById('contactForm');

  function showFormBanner(type, message) {
    if (!contactForm) return;
    const existing = contactForm.querySelector('.form-banner');
    if (existing) existing.remove();

    const banner = document.createElement('div');
    banner.className = 'form-banner';
    const isSuccess = type === 'success';
    banner.style.min.cssText = `
      display:flex;align-items:center;gap:10px;
      padding:14px 20px;border-radius:12px;margin-bottom:20px;
      font-size:0.9rem;font-weight:600;
      background:${isSuccess ? '#e8f5e9' : '#fdecea'};
      color:${isSuccess ? '#2E7D32' : '#c62828'};
      border:1px solid ${isSuccess ? '#a5d6a7' : '#ef9a9a'};
      animation:fadeIn .3s ease;
    `;
    banner.innerHTML = `
      <i class="fas fa-${isSuccess ? 'check-circle' : 'exclamation-circle'}" style="font-size:1.1rem"></i>
      <span>${message}</span>
    `;
    contactForm.prepend(banner);
    if (isSuccess) {
      setTimeout(() => banner.remove(), 6000);
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        showFormBanner('error', 'Email service not configured yet.');
        return;
      }

      const btn = contactForm.querySelector('.btn-submit');
      const originalHTML = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending…`;
      btn.style.opacity = '0.8';

      const params = {
        from_name: contactForm.fname.value.trim() + ' ' + contactForm.lname.value.trim(),
        from_email: contactForm.email.value.trim(),
        phone: contactForm.phone.value.trim() || 'Not provided',
        subject: contactForm.subject.value || 'General Enquiry',
        message: contactForm.message.value.trim(),
        to_name: 'Dr. A.P.J. Abdul Kalam Inter College',
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        btn.innerHTML = `<i class="fas fa-check"></i> Message Sent!`;
        btn.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
        showFormBanner('success', 'Thank you! Your message has been received. We will get back to you within 1–2 working days.');
        contactForm.reset();
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      } catch (err) {
        btn.innerHTML = `<i class="fas fa-times"></i> Failed`;
        btn.style.background = 'linear-gradient(135deg, #c62828, #e53935)';
        showFormBanner('error', 'Something went wrong. Please try again later.');
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }
    });
  }

  /* ─── 9. GALLERY LIGHTBOX ───────────────────────── */
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const overlay = document.createElement('div');
      overlay.style.min.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;
        display:flex;align-items:center;justify-content:center;
        cursor:pointer;padding:20px;animation:fadeIn 0.3s ease;
      `;
      const style = document.createElement('style');
      style.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
      document.head.appendChild(style);
      const image = document.createElement('img');
      image.src = img.src;
      image.style.min.cssText = `max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 30px 80px rgba(0,0,0,0.8);animation:fadeIn 0.3s ease;`;
      overlay.appendChild(image);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => { overlay.remove(); style.remove(); });
    });
  });



  // Kick off component loading
  await loadComponents();
  // Cache section positions after components are loaded and layout is stable
  requestAnimationFrame(cacheSectionPositions);
});

// Global copy to clipboard function
window.copyToClipboard = function (text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = 'fas fa-check';
      btn.classList.add('copied');
      setTimeout(() => {
        icon.className = 'far fa-copy';
        btn.classList.remove('copied');
      }, 2000);
    }
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
};

