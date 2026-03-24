/* ===================================================
   DR. A.P.J. ABDUL KALAM SCHOOL — Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

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

  /* ─── 3. NAVBAR: scroll behaviour ───────────────── */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');

  // Sticky nav
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }

    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scrollY > 500);
    }

    updateActiveNavLink();
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── 4. MOBILE HAMBURGER ────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');

  function closeMenu() {
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

  /* ─── 5. ACTIVE NAV LINK ON SCROLL ──────────────── */
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNavLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (navLink) {
        navLink.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  }

  /* ─── 6. SCROLL REVEAL ANIMATIONS ───────────────── */
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

  /* ─── 7. COUNTER ANIMATION ───────────────────────── */
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

  /* ─── 8. TESTIMONIALS CAROUSEL ───────────────────── */
  const wrapper       = document.getElementById('testimonialsWrapper');
  const prevBtn       = document.getElementById('tPrev');
  const nextBtn       = document.getElementById('tNext');
  const dots          = document.querySelectorAll('.t-dot');

  if (wrapper && prevBtn && nextBtn) {
    let currentIndex  = 0;
    const cards       = wrapper.querySelectorAll('.testimonial-card');
    const totalSlides = cards.length;

    // How many visible depends on viewport
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
      const cardWidth = cards[0].offsetWidth + 24; // gap = 24px
      wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      updateDots();
    }

    function updateDots() {
      dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    nextBtn.addEventListener('click', () => slide(currentIndex + 1));
    prevBtn.addEventListener('click', () => slide(currentIndex - 1));
    dots.forEach((d, i) => d.addEventListener('click', () => slide(i)));

    // Auto-slide
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

  /* ─── 9. CONTACT FORM (EmailJS) ──────────────────── */

  // ╔══════════════════════════════════════════════════╗
  // ║   EMAILJS CONFIG — paste your 3 values below    ║
  // ╚══════════════════════════════════════════════════╝
  const EMAILJS_PUBLIC_KEY  = '6DYmieZwBu3lhi_FR';   // Account → API Keys
  const EMAILJS_SERVICE_ID  = 'service_tarunk435';   // Email Services → Service ID
  const EMAILJS_TEMPLATE_ID = 'template_tarunk435';  // Email Templates → Template ID

  // Initialise EmailJS once
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const contactForm = document.getElementById('contactForm');

  // ── Helper: show an inline banner above the form ──
  function showFormBanner(type, message) {
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

      // Config guard — warn if keys are still placeholders
      if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        showFormBanner('error',
          'Email service not configured yet. Please add your EmailJS keys to js/main.js.'
        );
        return;
      }

      const btn = contactForm.querySelector('.btn-submit');
      const originalHTML = btn.innerHTML;

      // ── Loading state ──
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

        // ── Success ──
        btn.innerHTML = `<i class="fas fa-check"></i> ${translations[currentLang]['form-sent'] || 'Message Sent!'}`;
        btn.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
        btn.style.opacity = '1';
        showFormBanner('success',
          translations[currentLang]['form-success'] || 'Thank you! Your message has been received.'
        );
        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);

      } catch (err) {
        // ── Error ──
        btn.innerHTML = `<i class="fas fa-times"></i> ${translations[currentLang]['form-failed'] || 'Failed — Try Again'}`;
        btn.style.background = 'linear-gradient(135deg, #c62828, #e53935)';
        btn.style.opacity = '1';
        showFormBanner('error',
          translations[currentLang]['form-error'] || 'Something went wrong. Please try again.'
        );

        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }
    });
  }

  /* ─── 10. GALLERY LIGHTBOX ───────────────────────── */
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
      image.style.cssText = `
        max-width:90vw;max-height:90vh;border-radius:12px;
        box-shadow:0 30px 80px rgba(0,0,0,0.8);
        animation:fadeIn 0.3s ease;
      `;
      overlay.appendChild(image);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        overlay.remove();
        style.remove();
      });
    });
  });

  /* ─── 11. SMOOTH LINK SCROLLING ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 10;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─── 12. INTERNATIONALIZATION (i18n) ────────── */
  const langModal = document.getElementById('languageModal');
  const langButtons = document.querySelectorAll('.lang-btn');

  function updateContent(lang) {
    if (!translations[lang]) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        // Use innerHTML only if needed, otherwise textContent
        if (translations[lang][key].includes('<br>') || translations[lang][key].includes('<span') || translations[lang][key].includes('<i')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    updateContent(lang);
    langModal.classList.remove('visible');
    // Ensure scroll is enabled back
    document.body.style.overflow = '';
  }

  // Initial Check
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    updateContent(savedLang);
    langModal.classList.remove('visible');
  } else {
    // Show modal after a small delay or after loader
    window.addEventListener('load', () => {
      setTimeout(() => {
        langModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
      }, 2500); // Slightly after loader disappears
    });
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      langModal.classList.add('visible');
      document.body.style.overflow = 'hidden';
    });
  }

});
