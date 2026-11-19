/* ==========================================================================
   DR. A.P.J. ABDUL KALAM INTER COLLEGE - GLOBAL OVERLAYS SYSTEM
   1. Cookie & Tracking Consent Overlay Banner
   2. Winter Breeze Seasonal Overlay (Winter in India • शीत ऋतु आगमन)
   ========================================================================== */

(function () {
  'use strict';

  function getPathPrefix() {
    let prefix = '';
    const scriptEl =
      document.querySelector('script[src*="js/overlays.js"]') ||
      document.querySelector('script[src*="js/main.js"]') ||
      document.querySelector('script[src*="main.js"]');
    if (scriptEl) {
      const src = scriptEl.getAttribute('src');
      const idx = src.indexOf('js/');
      if (idx > 0) {
        prefix = src.substring(0, idx);
      }
    }
    return prefix;
  }

  /* ───────────────────────────────────────────────────────────
     1. COOKIE & TRACKING CONSENT OVERLAY BANNER
     ─────────────────────────────────────────────────────────── */
  function initCookieConsent(prefix) {
    const CONSENT_KEY = 'kalam_cookie_consent';
    try {
      if (localStorage.getItem(CONSENT_KEY)) {
        return; // User has already given consent
      }
    } catch (e) {
      // In case localStorage is disabled or restricted
    }

    if (document.getElementById('kalam-cookie-banner')) return;

    const pathPrefix = prefix || getPathPrefix();

    // 1. Create Banner Element
    const banner = document.createElement('div');
    banner.id = 'kalam-cookie-banner';
    banner.className = 'kalam-cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie and Tracking Consent Notice');
    banner.innerHTML = `
      <div class="kalam-cookie-container">
        <div class="kalam-cookie-content">
          <div class="kalam-cookie-icon" aria-hidden="true">
            <i class="fas fa-cookie-bite"></i>
          </div>
          <div class="kalam-cookie-text">
            <div class="kalam-cookie-title">
              <span>Cookie &amp; Tracking Consent</span>
              <span class="kalam-cookie-tag">Notice</span>
            </div>
            <p class="kalam-cookie-desc">
              We use cookies and other tracking tools to improve your browsing experience, personalize academic content, and analyze website traffic. By continuing to browse this website, you consent to our use of cookies and tracking technologies in accordance with our <a href="${pathPrefix}privacy-policy.html" class="kalam-cookie-link">Privacy Policy</a>.
            </p>
          </div>
        </div>
        <div class="kalam-cookie-actions">
          <button type="button" class="kalam-cookie-btn-accept" id="kalam-cookie-accept">
            <i class="fas fa-check"></i>
            <span>Accept &amp; Continue</span>
          </button>
          <button type="button" class="kalam-cookie-btn-close" id="kalam-cookie-close" aria-label="Dismiss cookie notice" title="Dismiss">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    document.body.classList.add('kalam-cookie-active');

    // Smooth entrance after slight delay
    setTimeout(() => {
      banner.classList.add('show');
    }, 450);

    // Consent dismissal handler
    let isDismissed = false;
    function acceptConsent() {
      if (isDismissed) return;
      isDismissed = true;

      try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify({
          consented: true,
          date: new Date().toISOString()
        }));
      } catch (e) {}

      // Clean up event listeners
      window.removeEventListener('scroll', onScrollConsent);
      document.removeEventListener('click', onPageClickConsent);

      banner.classList.remove('show');
      banner.classList.add('hide');
      document.body.classList.remove('kalam-cookie-active');

      setTimeout(() => {
        if (banner && banner.parentNode) {
          banner.parentNode.removeChild(banner);
        }
      }, 450);
    }

    // Explicit Accept & Close buttons
    const acceptBtn = banner.querySelector('#kalam-cookie-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        acceptConsent();
      });
    }

    const closeBtn = banner.querySelector('#kalam-cookie-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        acceptConsent();
      });
    }

    // Auto-consent when user continues browsing (scroll or click interaction)
    const initialScrollY = window.scrollY || window.pageYOffset || 0;
    function onScrollConsent() {
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      if (Math.abs(currentScrollY - initialScrollY) > 180) {
        acceptConsent();
      }
    }

    function onPageClickConsent(e) {
      if (!banner.contains(e.target)) {
        acceptConsent();
      }
    }

    // Attach browsing continuation triggers after a short grace period (1.5s)
    setTimeout(() => {
      window.addEventListener('scroll', onScrollConsent, { passive: true });
      document.addEventListener('click', onPageClickConsent, { passive: true });
    }, 1500);
  }

  /* ───────────────────────────────────────────────────────────
     2. WINTER BREEZE ATMOSPHERIC OVERLAY
     ─────────────────────────────────────────────────────────── */
  const BREEZE_SESSION_KEY = 'kalam_winter_breeze_shown';

  function initWinterBreeze() {
    // Show only once per visit/session (not on every page switch).
    // When the user closes the site and reopens it, sessionStorage is cleared,
    // so the breeze greets them again on their fresh visit.
    try {
      if (sessionStorage.getItem(BREEZE_SESSION_KEY) === 'true') {
        return; // Already shown during this browsing session
      }
      sessionStorage.setItem(BREEZE_SESSION_KEY, 'true');
    } catch (e) {
      // Graceful fallback if sessionStorage is restricted
    }

    setTimeout(() => {
      showWinterBreezeOverlay();
    }, 450);
  }

  // Developer / Admin testing hook available globally
  window.triggerWinterBreeze = function () {
    showWinterBreezeOverlay(true);
  };

  function showWinterBreezeOverlay(isManualTrigger = false) {
    if (document.getElementById('kalam-winter-breeze-overlay')) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Create Overlay DOM (Transparent, non-blocking pointer-events: none)
    const overlay = document.createElement('div');
    overlay.id = 'kalam-winter-breeze-overlay';
    overlay.className = 'winter-breeze-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
      <div class="winter-frost-vignette"></div>
      <div class="winter-mist-layer"></div>
      <canvas id="winter-breeze-canvas" class="winter-breeze-canvas"></canvas>
    `;

    document.body.appendChild(overlay);

    // Trigger smooth entrance
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });

    // 2. Synthesized Ambient Cold Breeze Audio (Web Audio API)
    let audioCtx = null;
    let masterGain = null;
    let isSoundPlaying = false;

    function startColdBreezeAudio() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        audioCtx = new AudioContext();

        const bufferSize = audioCtx.sampleRate * 2.5;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(420, audioCtx.currentTime);
        filter.Q.setValueAtTime(3.8, audioCtx.currentTime);

        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        lfo.frequency.setValueAtTime(0.35, audioCtx.currentTime);
        lfoGain.gain.setValueAtTime(120, audioCtx.currentTime);
        lfo.connect(filter.frequency);

        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        // Soft, gentle ambient breeze volume
        masterGain.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 1.2);

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(audioCtx.destination);

        whiteNoise.start();
        lfo.start();
        isSoundPlaying = true;
      } catch (err) {
        // Autoplay policy restriction handled silently
      }
    }

    function stopColdBreezeAudio() {
      if (audioCtx && masterGain && isSoundPlaying) {
        try {
          masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
          setTimeout(() => {
            if (audioCtx && audioCtx.state !== 'closed') {
              audioCtx.close().catch(() => {});
            }
            audioCtx = null;
            masterGain = null;
            isSoundPlaying = false;
          }, 1250);
        } catch (e) {
          audioCtx = null;
        }
      }
    }

    startColdBreezeAudio();

    // 3. Canvas Cold Breeze & Snow/Frost Particles
    const canvas = overlay.querySelector('#winter-breeze-canvas');
    let ctx = canvas ? canvas.getContext('2d') : null;
    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      if (ctx) ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wind Streamlines (flowing cold breeze gusts)
    const streamlineCount = prefersReducedMotion ? 4 : 15;
    const streamlines = [];
    for (let i = 0; i < streamlineCount; i++) {
      streamlines.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 600),
        length: 140 + Math.random() * 240,
        speed: 5.5 + Math.random() * 7,
        amplitude: 8 + Math.random() * 14,
        alpha: 0.16 + Math.random() * 0.26,
        width: 1 + Math.random() * 1.5,
        offset: Math.random() * Math.PI * 2
      });
    }

    // Snowflakes and frost crystal particles
    const particleCount = prefersReducedMotion ? 12 : 55;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 600),
        radius: 1.2 + Math.random() * 2.8,
        speedX: 3.0 + Math.random() * 5.5,
        speedY: (Math.random() - 0.25) * 1.4,
        alpha: 0.35 + Math.random() * 0.55,
        type: Math.random() > 0.6 ? 'flake' : 'dot',
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03
      });
    }

    let time = 0;

    function renderFrame() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      time += 0.03;

      // Draw wind streamlines
      for (let i = 0; i < streamlines.length; i++) {
        const s = streamlines[i];
        s.x += s.speed;
        if (s.x - s.length > width) {
          s.x = -s.length;
          s.y = Math.random() * height;
        }

        ctx.beginPath();
        const startX = s.x - s.length;
        const endX = s.x;
        const cpX = (startX + endX) / 2;
        const startY = s.y + Math.sin(time + s.offset) * s.amplitude;
        const cpY = s.y + Math.cos(time + s.offset * 1.2) * (s.amplitude * 1.3);
        const endY = s.y + Math.sin(time + s.offset * 0.8) * s.amplitude;

        const grad = ctx.createLinearGradient(startX, startY, endX, endY);
        grad.addColorStop(0, 'rgba(224, 242, 254, 0)');
        grad.addColorStop(0.5, `rgba(224, 242, 254, ${s.alpha})`);
        grad.addColorStop(1, 'rgba(186, 230, 253, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(cpX, cpY, endX, endY);
        ctx.stroke();
      }

      // Draw snowflakes / frost particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY + Math.sin(time + i) * 0.5;
        p.rotation += p.rotSpeed;

        if (p.x > width + 20) {
          p.x = -20;
          p.y = Math.random() * height;
        }
        if (p.y > height + 20) p.y = -10;
        if (p.y < -20) p.y = height + 10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'flake') {
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.lineWidth = 1.1;
          const sz = p.radius * 2;
          for (let a = 0; a < 3; a++) {
            ctx.beginPath();
            ctx.moveTo(-sz, 0);
            ctx.lineTo(sz, 0);
            ctx.stroke();
            ctx.rotate(Math.PI / 3);
          }
        } else {
          ctx.fillStyle = `rgba(224, 242, 254, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(renderFrame);
    }

    if (canvas && ctx) {
      animId = requestAnimationFrame(renderFrame);
    }

    // 4. Smooth Transition & Wind Dissipation
    // After 6.5s, breeze slows down and fades away smoothly
    setTimeout(() => {
      stopColdBreezeAudio();
      overlay.classList.remove('active');
      overlay.classList.add('fading-out');
    }, 6500);

    setTimeout(() => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 8200);
  }

  /* ───────────────────────────────────────────────────────────
     3. INITIALIZATION & EXPORTS
     ─────────────────────────────────────────────────────────── */
  function initOverlays(prefix) {
    initCookieConsent(prefix);
    initWinterBreeze();
  }

  window.initKalamOverlays = initOverlays;

  // Auto-init on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initOverlays();
    });
  } else {
    initOverlays();
  }
})();
