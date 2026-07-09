/* ===================================================
   DR. A.P.J. ABDUL KALAM SCHOOL — Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', async () => {

  /* ─── 0. COMPONENT LOADER ────────────────────────── */
  /**
   * Loads shared HTML components (header/footer) into placeholders.
   * This is essential for maintaining a DRY codebase.
   */
  async function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    const loadTask = [];

    if (headerPlaceholder) {
      loadTask.push(
        fetch('components/header.html')
          .then(response => response.text())
          .then(data => {
            headerPlaceholder.innerHTML = data;
          })
      );
    }

    if (footerPlaceholder) {
      loadTask.push(
        fetch('components/footer.html')
          .then(response => response.text())
          .then(data => {
            footerPlaceholder.innerHTML = data;
          })
      );
    }
    
    const zoomControlsPlaceholder = document.getElementById('zoom-controls-placeholder');
    if (zoomControlsPlaceholder) {
      loadTask.push(
        fetch('components/zoom-controls.html')
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
      fetch('components/scrollbar.html')
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
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2200);
  });
  document.body.style.overflow = 'hidden';

  /* ─── 2. HERO PARTICLES ──────────────────────────── */
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement('span');
      dot.style.left = Math.random() * 100 + '%';
      dot.style.animationDuration = (6 + Math.random() * 10) + 's';
      dot.style.animationDelay = (Math.random() * 10) + 's';
      dot.style.width = dot.style.height = (2 + Math.random() * 4) + 'px';
      dot.style.opacity = (0.3 + Math.random() * 0.5);
      particlesContainer.appendChild(dot);
    }
  }

  /* ─── 3. COMPONENT INITIALIZATION ────────────────── */
  /**
   * Binds event listeners to header/footer elements after they are injected.
   */
  function initComponents() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    const langToggleFloat = document.getElementById('langToggleFloat');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const langModal = document.getElementById('languageModal');
    const langButtons = document.querySelectorAll('.lang-btn');

    // Sticky nav and Floating buttons scroll effect
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);
      if (langToggleFloat) langToggleFloat.classList.toggle('minimized', scrollY > 100);
      if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', scrollY > 500);
      updateActiveNavLink();
    }, { passive: true });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile Hamburger Logic
    function closeMenu() {
      if (!hamburger) return;
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      navOverlay.classList.remove('visible');
      document.body.style.overflow = '';
    }

    if (hamburger && navMenu && navOverlay) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        navMenu.classList.toggle('open', isOpen);
        navOverlay.classList.toggle('visible', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      navOverlay.addEventListener('click', closeMenu);
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    // Translation logic within components
    if (langButtons) {
      langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          setLanguage(lang);
          if (langModal) langModal.classList.remove('visible');
        });
      });
    }

    const langToggleTrigger = document.getElementById('langToggleFloat');
    if (langToggleTrigger && langModal) {
      langToggleTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        langModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
      });
    }

    // Trigger initial translation for injected content
    const activeLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(activeLang);
    updateActiveNavLink();
    
    // Smooth scroll for nav links (including those just injected)
    document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const offset = (navbar ? navbar.offsetHeight : 0) + 10;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        } else if (href.includes('#') && href.startsWith('index.html')) {
           // If on index.html already, handle as smooth scroll
           if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
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
      if(target) {
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
      if(currentZoom < maxZoom) {
        currentZoom += step;
        currentZoom = Math.round(currentZoom * 10) / 10;
        applyZoom();
      }
    });

    zoomOutBtn.addEventListener('click', () => {
      if(currentZoom > minZoom) {
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
  function updateActiveNavLink() {
    const scrollY = window.scrollY + 150;
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // 1. Handle page-based active (Study Hub, Link Hub)
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove('active');
      
      if (href === currentPath) {
        link.classList.add('active');
      }
    });

    // 2. Handle hash-based active for homepage
    if (currentPath === 'index.html' || currentPath === '') {
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="index.html#${id}"], .nav-link[href="#${id}"]`);
        
        if (navLink && scrollY >= top && scrollY < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
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
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 2000;
    const step     = Math.ceil(target / (duration / 16));
    let current    = 0;

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
  const wrapper       = document.getElementById('testimonialsWrapper');
  const prevBtn       = document.getElementById('tPrev');
  const nextBtn       = document.getElementById('tNext');
  const dots          = document.querySelectorAll('.t-dot');

  if (wrapper && prevBtn && nextBtn) {
    let currentIndex  = 0;
    const cards       = wrapper.querySelectorAll('.testimonial-card');
    const totalSlides = cards.length;

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
      const cardWidth = cards[0].offsetWidth + 24; 
      wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
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

    window.addEventListener('resize', () => slide(0));
  }

  /* ─── 8. CONTACT FORM (EmailJS) ──────────────────── */
  const EMAILJS_PUBLIC_KEY  = '6DYmieZwBu3lhi_FR';
  const EMAILJS_SERVICE_ID  = 'service_tarunk435';
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
    banner.style.cssText = `
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
      const currentLang = localStorage.getItem('preferredLanguage') || 'en';
      btn.disabled = true;
      btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translations[currentLang]['form-sending'] || 'Sending…'}`;
      btn.style.opacity = '0.8';

      const params = {
        from_name : contactForm.fname.value.trim() + ' ' + contactForm.lname.value.trim(),
        from_email: contactForm.email.value.trim(),
        phone     : contactForm.phone.value.trim() || 'Not provided',
        subject   : contactForm.subject.value || 'General Enquiry',
        message   : contactForm.message.value.trim(),
        to_name   : 'Dr. A.P.J. Abdul Kalam Inter College',
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        btn.innerHTML = `<i class="fas fa-check"></i> ${translations[currentLang]['form-sent'] || 'Message Sent!'}`;
        btn.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
        showFormBanner('success', translations[currentLang]['form-success'] || 'Thank you! Received.');
        contactForm.reset();
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      } catch (err) {
        btn.innerHTML = `<i class="fas fa-times"></i> ${translations[currentLang]['form-failed'] || 'Failed'}`;
        btn.style.background = 'linear-gradient(135deg, #c62828, #e53935)';
        showFormBanner('error', translations[currentLang]['form-error'] || 'Error.');
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
      overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;
        display:flex;align-items:center;justify-content:center;
        cursor:pointer;padding:20px;animation:fadeIn 0.3s ease;
      `;
      const style = document.createElement('style');
      style.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
      document.head.appendChild(style);
      const image = document.createElement('img');
      image.src = img.src;
      image.style.cssText = `max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 30px 80px rgba(0,0,0,0.8);animation:fadeIn 0.3s ease;`;
      overlay.appendChild(image);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => { overlay.remove(); style.remove(); });
    });
  });

  /* ─── 10. INTERNATIONALIZATION (i18n) ────────── */
  function updateContent(lang) {
    if (!translations[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        let content = translations[lang][key];
        
        // Dynamic placeholders
        if (content.includes('{{year}}')) {
          content = content.replace('{{year}}', new Date().getFullYear());
        }

        if (content.includes('<br>') || content.includes('<span') || content.includes('<i')) {
          el.innerHTML = content;
        } else {
          el.textContent = content;
        }
      }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    document.documentElement.lang = lang;
  }

  function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    updateContent(lang);
    document.body.style.overflow = '';
  }

  // Initial Check
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    updateContent(savedLang);
  }

  // Kick off component loading
  await loadComponents();

  // If no language set, show modal after components load
  if (!savedLang) {
    setTimeout(() => {
      const langModal = document.getElementById('languageModal');
      if (langModal) {
        langModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
      }
    }, 500);
  }

  // Public translation trigger
  window.updatePageTranslations = function() {
    const activeLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(activeLang);
  };
});

