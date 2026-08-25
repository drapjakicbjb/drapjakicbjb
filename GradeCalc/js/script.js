/**
 * GradeCalc - Main Core & UI Script
 * Handles navigation, mobile menu, active link highlighting, FAQ accordions, component loading, dynamic year updater, and helper utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderNewFooterComponent();
  updateDynamicYear();
  initNavigation();
  initFaqAccordions();
  highlightActiveLink();
});

/**
 * Returns the current calendar year automatically
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Updates any element with [data-year], #currentYear, or .auto-year dynamically
 */
function updateDynamicYear() {
  const currentYear = getCurrentYear();
  const yearElements = document.querySelectorAll('[data-year], #currentYear, .auto-year');
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

/**
 * Dynamically renders the new sleek modern footer component across all pages with automated dynamic year
 */
function renderNewFooterComponent() {
  const footerEl = document.querySelector('footer.site-footer');
  if (!footerEl) return;

  const currentYear = getCurrentYear();

  // Render new sleek footer bar
  footerEl.innerHTML = `
    <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem; padding-top: 0.5rem; padding-bottom: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <a href="index.html" class="brand-logo" style="font-size: 1.15rem; color: #ffffff;">
          <svg style="width: 24px; height: 24px; color: var(--accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          </svg>
          <span>Grade<span style="color: var(--accent);">Calc</span></span>
        </a>
        <span style="color: #334155; display: inline-block;">|</span>
        <p style="font-size: 0.875rem; color: #cbd5e1; margin: 0;">© <span id="currentYear">${currentYear}</span> Dr. A.P.J. Abdul Kalam Inter College (<a href="https://drapjakicbjb.ac.in" target="_blank" style="color: #fbbf24; text-decoration: none;">drapjakicbjb.ac.in</a>). All rights reserved.</p>
      </div>

      <div style="display: flex; align-items: center; gap: 1.25rem; font-size: 0.9rem; flex-wrap: wrap;">
        <a href="index.html" style="color: #94a3b8; text-decoration: none;">Home</a>
        <a href="sgpa.html" style="color: #94a3b8; text-decoration: none;">SGPA</a>
        <a href="cgpa.html" style="color: #94a3b8; text-decoration: none;">CGPA</a>
        <a href="about.html" style="color: #94a3b8; text-decoration: none;">About</a>
        <a href="sitemap.html" style="color: #94a3b8; text-decoration: none;">Sitemap</a>
        <a href="/" style="color: #94a3b8; text-decoration: none;">School Website</a>
        <a href="/study" style="color: #94a3b8; text-decoration: none;">Study Hub</a>
        <a href="footer.html" style="color: #fbbf24; font-weight: 600; text-decoration: none;">Full Directory & Disclaimers →</a>
      </div>
    </div>
  `;
}

/**
 * Mobile Navigation Toggle & Outside Click Handler
 */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu when resizing to desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }
}

function openMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (navMenu && mobileToggle) {
    navMenu.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    `;
  }
}

function closeMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (navMenu && mobileToggle) {
    navMenu.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;
  }
}

/**
 * Automatically highlight the active nav item based on URL
 */
function highlightActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Collapsible FAQ Accordion System
 */
function initFaqAccordions() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isOpen = faqItem.classList.contains('open');

      // Close all other open accordion items for a clean UI
      document.querySelectorAll('.faq-item.open').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('open');
          const qBtn = item.querySelector('.faq-question');
          if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        faqItem.classList.remove('open');
        question.setAttribute('aria-expanded', 'false');
      } else {
        faqItem.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Utility: Display inline form field error message
 */
function showInlineError(inputElement, message) {
  if (!inputElement) return;
  inputElement.classList.add('is-invalid');
  
  let parent = inputElement.parentElement;
  if (parent.classList.contains('input-with-suffix')) {
    parent = parent.parentElement;
  }

  let errorSpan = parent.querySelector('.error-msg');
  if (!errorSpan) {
    errorSpan = document.createElement('span');
    errorSpan.className = 'error-msg';
    parent.appendChild(errorSpan);
  }
  errorSpan.textContent = message;
}

/**
 * Utility: Clear inline form field error message
 */
function clearInlineError(inputElement) {
  if (!inputElement) return;
  inputElement.classList.remove('is-invalid');
  
  let parent = inputElement.parentElement;
  if (parent.classList.contains('input-with-suffix')) {
    parent = parent.parentElement;
  }

  const errorSpan = parent.querySelector('.error-msg');
  if (errorSpan) {
    errorSpan.remove();
  }
}

/**
 * Utility: Format numbers to safe 2 decimal places display
 */
function safeFormatNumber(val) {
  if (isNaN(val) || !isFinite(val)) return '0.00';
  return (Math.round((val + Number.EPSILON) * 100) / 100).toFixed(2);
}
