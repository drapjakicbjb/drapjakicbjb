/**
 * ============================================================================
 * ROYAL DIWALI CELEBRATION OVERLAY & UNOBSTRUCTED SKY ENGINE
 * Dr. A.P.J. Abdul Kalam Inter College, Belwariya Jungle, Basti (U.P.)
 * ============================================================================
 * Combined Grand Spectacular: Titanium Anars, Deepotsav Diyas & Sky Lanterns,
 * Spinning Chakras, and Heavy Rocket Symphony — all running simultaneously.
 * Wishes card docked compactly at bottom, 75%+ sky open for pyrotechnics.
 * Audio: Rocket blast detonation, gentle anar sizzle, chakra whir.
 * ============================================================================
 */

(function () {
  'use strict';

  if (window.DiwaliCelebrationInitialized) return;
  window.DiwaliCelebrationInitialized = true;

  /* --------------------------------------------------------------------------
   * 1. CONFIGURATION & STATE
   * -------------------------------------------------------------------------- */
  const EFFECTS = [
    {
      id: 'grand-spectacular',
      name: 'महा दीपोत्सव',
      englishName: 'Grand Diwali Spectacular',
      tagline: 'Titanium Anars · Deepotsav Diyas & Sky Lanterns · Spinning Chakras · Heavy Rocket Symphony'
    }
  ];

  let isMinimized = sessionStorage.getItem('diwali_gift_minimized') === 'true';
  let isSoundEnabled = true;
  let isOverlayOpen = false;
  let animFrameId = null;

  // DOM Elements cache
  let giftWrapper = null;
  let minimizedDock = null;
  let celebrationOverlay = null;
  let canvas = null;
  let ctx = null;
  let soundToggleBtn = null;
  let modalCard = null;

  // High-precision particle registries
  let particles = [];
  let rockets = [];
  let lanterns = [];
  let chakras = [];
  let anars = [];
  let diyas = [];
  let stardust = [];
  let boxFountainTimer = 0;
  let skyGlowIntensity = 0;

  /* --------------------------------------------------------------------------
   * 2. REALISTIC PHYSICAL PYROTECHNIC ACOUSTICS (WEB AUDIO API)
   * -------------------------------------------------------------------------- */
  let audioCtx = null;
  let noiseBuffer = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      const bufferSize = audioCtx.sampleRate * 3;
      noiseBuffer = audioCtx.createBuffer(2, bufferSize, audioCtx.sampleRate);
      for (let channel = 0; channel < 2; channel++) {
        const data = noiseBuffer.getChannelData(channel);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  /* --- Realistic Rocket Blasting Sound (Detonation & Deep Echo) --- */
  function playRocketBlast(isWillow) {
    if (!isSoundEnabled || !audioCtx || !noiseBuffer) return;
    try {
      const now = audioCtx.currentTime;

      // 1. Initial Shell Break Crack (crisp pyrotechnic detonation burst)
      const crack = audioCtx.createBufferSource();
      crack.buffer = noiseBuffer;
      const crackFilter = audioCtx.createBiquadFilter();
      crackFilter.type = 'bandpass';
      crackFilter.frequency.setValueAtTime(1150, now);
      crackFilter.Q.setValueAtTime(2.2, now);

      const crackGain = audioCtx.createGain();
      crackGain.gain.setValueAtTime(0.45, now);
      crackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      crack.connect(crackFilter);
      crackFilter.connect(crackGain);
      crackGain.connect(audioCtx.destination);
      crack.start(now);
      crack.stop(now + 0.09);

      // 2. Heavy Sub-Bass Explosion Boom (42Hz deep atmospheric thud)
      const bassOsc = audioCtx.createOscillator();
      const bassGain = audioCtx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(110, now);
      bassOsc.frequency.exponentialRampToValueAtTime(38, now + 0.36);

      bassGain.gain.setValueAtTime(0.65, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.54);

      bassOsc.connect(bassGain);
      bassGain.connect(audioCtx.destination);
      bassOsc.start(now);
      bassOsc.stop(now + 0.58);

      // 3. Atmospheric Rolling Rumble & Echo
      const rumble = audioCtx.createBufferSource();
      rumble.buffer = noiseBuffer;
      const rumbleFilter = audioCtx.createBiquadFilter();
      rumbleFilter.type = 'lowpass';
      rumbleFilter.frequency.setValueAtTime(220, now);
      rumbleFilter.frequency.exponentialRampToValueAtTime(70, now + 1.4);

      const rumbleGain = audioCtx.createGain();
      rumbleGain.gain.setValueAtTime(0.32, now);
      rumbleGain.gain.linearRampToValueAtTime(0.2, now + 0.15);
      rumbleGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      rumble.connect(rumbleFilter);
      rumbleFilter.connect(rumbleGain);
      rumbleGain.connect(audioCtx.destination);
      rumble.start(now);
      rumble.stop(now + 1.45);
    } catch (e) {}
  }

  function playChakraWhir() {
    if (!isSoundEnabled || !audioCtx || !noiseBuffer || Math.random() > 0.3) return;
    try {
      const now = audioCtx.currentTime;
      const noise = audioCtx.createBufferSource();
      noise.buffer = noiseBuffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(950 + Math.random() * 400, now);
      filter.Q.setValueAtTime(3, now);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start(now);
      noise.stop(now + 0.12);
    } catch (e) {}
  }

  /* --------------------------------------------------------------------------
   * 3. DOM INJECTION & SETUP
   * -------------------------------------------------------------------------- */
  function injectComponents() {
    // 1. Bottom-Center Grounded Giftbox (Pedestal)
    giftWrapper = document.createElement('div');
    giftWrapper.id = 'diwali-gift-wrapper';
    giftWrapper.setAttribute('aria-label', 'Diwali Celebration Gift Box');

    giftWrapper.innerHTML = `
      <div class="diwali-box-container" id="diwali-box-trigger" title="Click to open your Diwali celebration surprise!">
        <div class="diwali-gift-badge">
          <span class="sparkle-icon">✨</span>
          <span>Open</span>
          <span class="sparkle-icon">🪔</span>
        </div>
        <button type="button" class="diwali-close-btn" id="diwali-gift-close-btn" title="Minimize to side" aria-label="Minimize gift box">×</button>
        <div class="diwali-gift-3d" id="diwali-gift-model">
          <div class="diwali-box-light-beam"></div>
          <div class="diwali-box-lid" id="diwali-box-lid">
            <div class="diwali-box-bow">
              <div class="diwali-bow-left"></div>
              <div class="diwali-bow-right"></div>
              <div class="diwali-bow-center"></div>
            </div>
          </div>
          <div class="diwali-box-body"></div>
          <div class="diwali-aura"></div>
        </div>
      </div>
    `;

    // 2. Minimized Side Dock (Bottom-Left)
    minimizedDock = document.createElement('div');
    minimizedDock.id = 'diwali-minimized-dock';
    minimizedDock.setAttribute('role', 'button');
    minimizedDock.setAttribute('tabindex', '0');
    minimizedDock.setAttribute('title', 'Click to open Diwali Celebration Gift Box');
    minimizedDock.innerHTML = `
      <span class="diwali-dock-icon">🪔</span>
      <span class="diwali-dock-text">Diwali Wishes</span>
      <span class="diwali-dock-badge">OPEN</span>
    `;

    // 3. Fullscreen Celebration Overlay & Compact Royal Wishes Card
    celebrationOverlay = document.createElement('div');
    celebrationOverlay.id = 'diwali-celebration-overlay';
    celebrationOverlay.innerHTML = `
      <canvas id="diwali-canvas"></canvas>

      <!-- Prominent Top Controls Bar (Always Visible at Top of Overlay) -->
      <div class="diwali-overlay-top-bar">
        <div class="diwali-festive-badge-top">
          <span class="sparkle-icon">✨</span>
          <span>महा दीपोत्सव महोत्सव</span>
          <span class="sparkle-icon">🪔</span>
        </div>

        <div class="diwali-top-right-group">
          <button type="button" class="diwali-top-icon-btn" id="diwali-sound-btn" title="Toggle realistic sound" aria-label="Toggle sound">
            <i class="fas fa-volume-up"></i>
          </button>
          <button type="button" class="diwali-top-icon-btn btn-close" id="diwali-top-close-btn" title="Close celebration" aria-label="Close celebration">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="diwali-modal-card" id="diwali-modal-card">
        <span class="diwali-corner-ornament diwali-corner-tl"></span>
        <span class="diwali-corner-ornament diwali-corner-tr"></span>
        <span class="diwali-corner-ornament diwali-corner-bl"></span>
        <span class="diwali-corner-ornament diwali-corner-br"></span>

        <div class="diwali-sanskrit-shloka">॥ ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ॥</div>

        <div class="diwali-arch-motif">
          <span class="diwali-arch-line"></span>
          <span class="diwali-diya-glow diya-small">🪔</span>
          <span class="diwali-diya-glow">✨</span>
          <span class="diwali-diya-glow diya-small">🪔</span>
          <span class="diwali-arch-line"></span>
        </div>

        <div class="diwali-festive-herald">दीपोत्सव की हार्दिक शुभकामनाएँ</div>
        <h1 class="diwali-english-title">Happy Diwali</h1>

        <div class="diwali-school-crest">
          <i class="fas fa-graduation-cap"></i>
          <span>Dr. A.P.J. Abdul Kalam Inter College</span>
        </div>

        <p class="diwali-greeting-text">
          May the divine lights of Deepavali illuminate your path with eternal wisdom, supreme knowledge, and joyous prosperity. Wishing our students, teachers, parents, and patrons a luminous, blessed Diwali.
        </p>

        <!-- Final Launch Action Grid -->
        <div class="diwali-actions-grid">
          <button type="button" class="diwali-btn diwali-btn-minimize" id="diwali-modal-minimize">
            <i class="fas fa-compress-alt"></i>
            <span>Minimize to Side</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(giftWrapper);
    document.body.appendChild(minimizedDock);
    document.body.appendChild(celebrationOverlay);

    canvas = document.getElementById('diwali-canvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();

    soundToggleBtn = document.getElementById('diwali-sound-btn');
    modalCard = document.getElementById('diwali-modal-card');

    initStardust();

    if (isMinimized) {
      minimizeGiftbox(false);
    }

    setupEventListeners();
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    if (ctx) ctx.scale(dpr, dpr);
    initStardust();
  }

  function initStardust() {
    stardust = [];
    const count = Math.floor(window.innerWidth / 22);
    for (let i = 0; i < count; i++) {
      stardust.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 0.6 + Math.random() * 1.0,
        alpha: 0.15 + Math.random() * 0.45,
        speed: 0.015 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function getBoxCoords() {
    return {
      x: window.innerWidth * 0.5,
      y: window.innerHeight - 70
    };
  }

  /* --------------------------------------------------------------------------
   * 4. INTERACTION & EMERGENCE LOGIC
   * -------------------------------------------------------------------------- */
  function setupEventListeners() {
    window.addEventListener('resize', () => resizeCanvas(), { passive: true });

    // Gift box trigger click
    const trigger = document.getElementById('diwali-box-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (e.target.closest('#diwali-gift-close-btn')) return;
        triggerBurstOpening();
      });
    }

    // Close cross button on the giftbox
    const closeBtn = document.getElementById('diwali-gift-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        minimizeGiftbox(true);
      });
    }

    // Minimized side dock click
    if (minimizedDock) {
      minimizedDock.addEventListener('click', () => restoreGiftbox());
      minimizedDock.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          restoreGiftbox();
        }
      });
    }

    // Top Bar close button & modal minimize
    const topCloseBtn = document.getElementById('diwali-top-close-btn');
    if (topCloseBtn) {
      topCloseBtn.addEventListener('click', () => closeOverlay(false));
    }

    const modalMinimize = document.getElementById('diwali-modal-minimize');
    if (modalMinimize) {
      modalMinimize.addEventListener('click', () => closeOverlay(true));
    }

    // Sound toggle
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        isSoundEnabled = !isSoundEnabled;
        soundToggleBtn.innerHTML = isSoundEnabled
          ? '<i class="fas fa-volume-up"></i>'
          : '<i class="fas fa-volume-mute"></i>';
        soundToggleBtn.style.color = isSoundEnabled ? '#ffd700' : '#ff6b6b';
        if (isSoundEnabled) {
          initAudio();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOverlayOpen) {
        closeOverlay(false);
      }
    });
  }

  function minimizeGiftbox(saveState) {
    if (giftWrapper) {
      giftWrapper.classList.remove('diwali-open');
      giftWrapper.classList.add('diwali-hidden');
    }
    if (minimizedDock) minimizedDock.classList.add('diwali-active');
    isMinimized = true;
    if (saveState) sessionStorage.setItem('diwali_gift_minimized', 'true');
  }

  function restoreGiftbox() {
    if (minimizedDock) minimizedDock.classList.remove('diwali-active');
    if (giftWrapper) giftWrapper.classList.remove('diwali-hidden');
    isMinimized = false;
    sessionStorage.removeItem('diwali_gift_minimized');
  }

  function triggerBurstOpening() {
    initAudio();

    const boxModel = document.getElementById('diwali-gift-model');
    if (boxModel) boxModel.classList.add('diwali-box-shake');

    setTimeout(() => {
      if (boxModel) boxModel.classList.remove('diwali-box-shake');
      if (giftWrapper) giftWrapper.classList.add('diwali-open');

      eruptFromBox();
      playRocketBlast(true);
      openOverlay();
    }, 120);
  }

  function eruptFromBox() {
    const box = getBoxCoords();
    for (let i = 0; i < 45; i++) {
      const spreadX = (Math.random() - 0.5) * 3.6;
      const speedY = -(10 + Math.random() * 12);
      particles.push({
        x: box.x + (Math.random() - 0.5) * 20,
        y: box.y - 10,
        vx: spreadX,
        vy: speedY,
        alpha: 1,
        drag: 0.98,
        gravity: 0.28,
        decay: 0.03 + Math.random() * 0.02,
        size: 0.8 + Math.random() * 1.3,
        palette: ['#ffffff', '#fff9c4', '#ffd54f', '#ff9800', '#d50000']
      });
    }

    setTimeout(() => {
      spawnRocket(box.x, box.y - 20, true);
    }, 50);
  }

  function openOverlay() {
    isOverlayOpen = true;
    celebrationOverlay.classList.add('diwali-active');
    startAnimationLoop();
    spawnEffectEntities(true);
  }

  function closeOverlay(minimizeToSide) {
    isOverlayOpen = false;
    celebrationOverlay.classList.remove('diwali-active');
    stopAnimationLoop();

    if (giftWrapper) {
      giftWrapper.classList.remove('diwali-open');
    }

    if (minimizeToSide) {
      minimizeGiftbox(true);
    } else {
      if (!isMinimized && giftWrapper) {
        giftWrapper.classList.remove('diwali-hidden');
      } else if (minimizedDock) {
        minimizedDock.classList.add('diwali-active');
      }
    }
  }

  /* --------------------------------------------------------------------------
   * 5. HIGH-PRECISION COMBINED PYROTECHNIC ENGINE (1/6 + 2/6 + 4/6 + 6/6)
   * -------------------------------------------------------------------------- */
  function spawnEffectEntities(clearExisting) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const box = getBoxCoords();

    if (clearExisting) {
      particles = [];
      rockets = [];
      lanterns = [];
      chakras = [];
      anars = [];
      diyas = [];
    }

    // 1. Titanium Anar Fountains (1/6: Flanking & Central Pedestal on Box)
    anars = [
      { x: width * 0.1, y: height - 12 },
      { x: box.x, y: box.y - 10, isCentralBox: true },
      { x: width * 0.9, y: height - 12 }
    ];

    // 2. Terracotta Clay Diyas (2/6: Evenly spaced glowing along ground)
    diyas = [];
    const numDiyas = Math.min(6, Math.floor(width / 160));
    const step = width / (numDiyas + 1);
    for (let i = 1; i <= numDiyas; i++) {
      diyas.push({
        x: step * i,
        y: height - 36,
        size: 20,
        flicker: Math.random() * Math.PI,
        flickerSpeed: 0.08 + Math.random() * 0.05
      });
    }

    // 3. Ascending Candlelit Sky Lanterns (2/6: Floating upwards)
    for (let i = 0; i < 14; i++) {
      spawnRealisticLantern(Math.random() * width, height + Math.random() * 250);
    }

    // 4. High-RPM Spinning Ground Chakras (4/6: Flanking wheels)
    chakras = [
      { x: width * 0.14, y: height - 52, radius: 22, angle: 0, speed: 0.44 },
      { x: width * 0.86, y: height - 52, radius: 22, angle: 0, speed: -0.44 }
    ];

    // 5. Heavy Multi-Caliber Rocket Salvos (6/6: Sky detonations)
    for (let i = 0; i < 4; i++) {
      setTimeout(() => spawnRocket(box.x + (Math.random() - 0.5) * 110, box.y, true), 150 + i * 420);
    }
    for (let i = 0; i < 2; i++) {
      setTimeout(() => spawnRocket(width * (0.2 + Math.random() * 0.6), height - 30), 650 + i * 520);
    }
  }

  /* --- High-Density Micro-Particle Aerial Shell Physics --- */
  function spawnRocket(startX, startY, isWillow) {
    rockets.push({
      x: startX,
      y: startY,
      // Target is high in open upper sky (8% to 32% of viewport height)
      targetY: window.innerHeight * (0.08 + Math.random() * 0.24),
      vx: (Math.random() - 0.5) * 1.8,
      vy: -(16.5 + Math.random() * 4.0),
      trail: [],
      isWillow: !!isWillow,
      palette: [
        ['#ffffff', '#fff176', '#ffb300', '#e65100'], // Heavy Gold Willow
        ['#ffffff', '#69f0ae', '#00e676', '#00b0ff'], // Emerald & Cyan
        ['#ffffff', '#ff80ab', '#ff1744', '#b71c1c'], // Ruby Crimson
        ['#ffffff', '#e1bee7', '#ab47bc', '#ffd54f']  // Imperial Amethyst
      ][Math.floor(Math.random() * 4)]
    });
  }

  function explodeRealisticShell(x, y, palette, isWillow) {
    playRocketBlast(isWillow); // Realistic rocket blast sound on detonation
    skyGlowIntensity = 1.0;

    const count = isWillow ? 95 : 75;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.16;
      const speed = isWillow ? (3.8 + Math.random() * 5.8) : (4.8 + Math.random() * 6.8);

      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        drag: isWillow ? 0.968 : 0.974,
        gravity: isWillow ? 0.055 : 0.085,
        decay: isWillow ? (0.015 + Math.random() * 0.009) : (0.024 + Math.random() * 0.012),
        size: 0.9 + Math.random() * 1.3,
        palette: palette,
        isWillow: isWillow
      });
    }
  }

  function spawnRealisticLantern(x, y) {
    lanterns.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(0.55 + Math.random() * 0.5),
      width: 22 + Math.random() * 8,
      height: 30 + Math.random() * 10,
      flicker: Math.random() * Math.PI,
      sway: Math.random() * 100
    });
  }

  /* --------------------------------------------------------------------------
   * 6. CANVAS ANIMATION & RENDER LOOP
   * -------------------------------------------------------------------------- */
  function startAnimationLoop() {
    if (!animFrameId) {
      animFrameId = requestAnimationFrame(render);
    }
  }

  function stopAnimationLoop() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  function render() {
    if (!ctx || !isOverlayOpen) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const box = getBoxCoords();

    // 1. CLEAR & SKY ILLUMINATION
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(7, 3, 14, 0.24)';
    ctx.fillRect(0, 0, width, height);

    if (skyGlowIntensity > 0.01) {
      const flashGrad = ctx.createRadialGradient(width * 0.5, height * 0.2, 10, width * 0.5, height * 0.2, width * 0.85);
      flashGrad.addColorStop(0, `rgba(255, 180, 50, ${skyGlowIntensity * 0.16})`);
      flashGrad.addColorStop(0.6, `rgba(180, 50, 90, ${skyGlowIntensity * 0.08})`);
      flashGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = flashGrad;
      ctx.fillRect(0, 0, width, height);
      skyGlowIntensity *= 0.86;
    }

    // 2. STARDUST
    stardust.forEach((s) => {
      s.phase += s.speed;
      const curAlpha = s.alpha * (0.6 + Math.sin(s.phase) * 0.4);
      ctx.fillStyle = `rgba(255, 243, 196, ${curAlpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // 3. BOX FOUNTAIN SPARKS
    boxFountainTimer++;
    if (boxFountainTimer % 2 === 0) {
      for (let k = 0; k < 2; k++) {
        particles.push({
          x: box.x + (Math.random() - 0.5) * 16,
          y: box.y - 14,
          vx: (Math.random() - 0.5) * 1.8,
          vy: -(3.5 + Math.random() * 5.5),
          alpha: 0.95,
          drag: 0.98,
          gravity: 0.08,
          decay: 0.025 + Math.random() * 0.015,
          size: 0.8 + Math.random() * 1.2,
          palette: ['#ffffff', '#fff9c4', '#ffd54f', '#ff8c00']
        });
      }
    }

    // ── 1. TITANIUM ANAR FOUNTAINS (1/6) ──────────────────────────────────
    anars.forEach((anar) => {
      ctx.fillStyle = '#8d3b2a';
      ctx.beginPath();
      ctx.moveTo(anar.x - 18, anar.y);
      ctx.lineTo(anar.x + 18, anar.y);
      ctx.lineTo(anar.x + 8, anar.y - 24);
      ctx.lineTo(anar.x - 8, anar.y - 24);
      ctx.closePath();
      ctx.fill();

      for (let i = 0; i < 3; i++) {
        particles.push({
          x: anar.x + (Math.random() - 0.5) * 4,
          y: anar.y - 24,
          vx: (Math.random() - 0.5) * 3.0,
          vy: -(10 + Math.random() * 12),
          alpha: 1,
          drag: 0.98,
          gravity: 0.34,
          decay: 0.045 + Math.random() * 0.025,
          size: 0.8 + Math.random() * 1.3,
          palette: ['#ffffff', '#fff9c4', '#ffd54f', '#ff9800', '#ff3d00']
        });
      }
    });

    // ── 2. DEEPOTSAV DIYAS & ASCENDING SKY LANTERNS (2/6) ──────────────────
    diyas.forEach((diya) => {
      diya.flicker += diya.flickerSpeed;
      const flameOffset = Math.sin(diya.flicker) * 2;
      const flameHeight = 17 + Math.cos(diya.flicker * 1.3) * 4;

      const bowlGrad = ctx.createLinearGradient(diya.x, diya.y - 6, diya.x, diya.y + 10);
      bowlGrad.addColorStop(0, '#bd5a22');
      bowlGrad.addColorStop(0.7, '#80340c');
      bowlGrad.addColorStop(1, '#4e1d04');
      ctx.fillStyle = bowlGrad;
      ctx.beginPath();
      ctx.ellipse(diya.x, diya.y, diya.size, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      const glow = ctx.createRadialGradient(diya.x, diya.y - 12, 2, diya.x, diya.y - 12, 42);
      glow.addColorStop(0, 'rgba(255, 195, 50, 0.7)');
      glow.addColorStop(0.45, 'rgba(255, 110, 0, 0.22)');
      glow.addColorStop(1, 'rgba(255, 50, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(diya.x, diya.y - 12, 42, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ff8c00';
      ctx.beginPath();
      ctx.moveTo(diya.x - 5, diya.y - 6);
      ctx.quadraticCurveTo(diya.x - 7 + flameOffset, diya.y - 6 - flameHeight * 0.6, diya.x + flameOffset, diya.y - 6 - flameHeight);
      ctx.quadraticCurveTo(diya.x + 7 + flameOffset, diya.y - 6 - flameHeight * 0.6, diya.x + 5, diya.y - 6);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#fffde7';
      ctx.beginPath();
      ctx.moveTo(diya.x - 2.5, diya.y - 6);
      ctx.quadraticCurveTo(diya.x - 3.5 + flameOffset * 0.7, diya.y - 6 - flameHeight * 0.5, diya.x + flameOffset * 0.7, diya.y - 6 - flameHeight * 0.85);
      ctx.quadraticCurveTo(diya.x + 3.5 + flameOffset * 0.7, diya.y - 6 - flameHeight * 0.5, diya.x + 2.5, diya.y - 6);
      ctx.closePath();
      ctx.fill();
    });

    lanterns.forEach((l) => {
      l.y += l.vy;
      l.sway += 0.02;
      l.x += Math.sin(l.sway) * 0.45;
      l.flicker += 0.06;

      if (l.y < -50) {
        l.y = height + 35;
        l.x = Math.random() * width;
      }

      const rad = ctx.createRadialGradient(l.x, l.y, 3, l.x, l.y, l.width * 1.6);
      rad.addColorStop(0, 'rgba(255, 210, 80, 0.65)');
      rad.addColorStop(0.5, 'rgba(255, 120, 0, 0.22)');
      rad.addColorStop(1, 'rgba(255, 50, 0, 0)');
      ctx.fillStyle = rad;
      ctx.beginPath();
      ctx.arc(l.x, l.y, l.width * 1.6, 0, Math.PI * 2);
      ctx.fill();

      const paperGrad = ctx.createLinearGradient(l.x - l.width / 2, l.y, l.x + l.width / 2, l.y);
      paperGrad.addColorStop(0, '#e65100');
      paperGrad.addColorStop(0.5, '#ffa726');
      paperGrad.addColorStop(1, '#e65100');
      ctx.fillStyle = paperGrad;
      ctx.beginPath();
      ctx.roundRect(l.x - l.width / 2, l.y - l.height / 2, l.width, l.height, 4);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(l.x, l.y + l.height * 0.22, 2.5 + Math.sin(l.flicker) * 1.0, 0, Math.PI * 2);
      ctx.fill();
    });

    // ── 3. SPINNING GROUND CHAKRAS & PHULJHADI (4/6) ───────────────────────
    chakras.forEach((c) => {
      c.angle += c.speed;

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.angle);
      ctx.fillStyle = '#ff8f00';
      ctx.beginPath();
      ctx.arc(0, 0, c.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      for (let i = 0; i < 6; i++) {
        const spAngle = c.angle + (Math.PI * 2 / 6) * i;
        const spX = c.x + Math.cos(spAngle) * c.radius;
        const spY = c.y + Math.sin(spAngle) * c.radius;
        const spSpeed = 6 + Math.random() * 7;

        particles.push({
          x: spX,
          y: spY,
          vx: Math.cos(spAngle + Math.PI / 2) * spSpeed * Math.sign(c.speed),
          vy: Math.sin(spAngle + Math.PI / 2) * spSpeed * Math.sign(c.speed) - 0.4,
          alpha: 1,
          drag: 0.97,
          gravity: 0.18,
          decay: 0.045 + Math.random() * 0.025,
          size: 0.8 + Math.random() * 1.3,
          palette: ['#ffffff', '#fff9c4', '#ffd54f', '#ff6f00', '#d50000']
        });
      }
      playChakraWhir();
    });

    // ── 4. CONTINUOUS ROCKET SYMPHONY (6/6) ─────────────────────────────────
    if (Math.random() < 0.038 && rockets.length < 5) {
      spawnRocket(box.x + (Math.random() - 0.5) * 130, box.y, Math.random() > 0.3);
    }

    // ── 4. UPDATE & RENDER ROCKETS ───────────────────────────────────────
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.x += r.vx;
      r.y += r.vy;

      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 14) r.trail.shift();

      ctx.strokeStyle = '#ffcc00';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (let t = 0; t < r.trail.length; t++) {
        const pt = r.trail[t];
        if (t === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(r.x, r.y, 2.6, 0, Math.PI * 2);
      ctx.fill();

      if (r.y <= r.targetY || r.vy >= 0) {
        explodeRealisticShell(r.x, r.y, r.palette, r.isWillow);
        rockets.splice(i, 1);
      }
    }

    // ── 5. UPDATE & RENDER MICRO-PARTICLES (ADDITIVE BLEND) ─────────────
    ctx.globalCompositeOperation = 'lighter';

    if (particles.length > 500) {
      particles.splice(0, particles.length - 500);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      if (p.drag) {
        p.vx *= p.drag;
        p.vy *= p.drag;
      }
      if (p.gravity) p.vy += p.gravity;

      p.x += p.vx;
      p.y += p.vy;

      if (p.decay) p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      let renderColor = '#ffd700';
      if (p.palette && p.palette.length > 0) {
        const palIdx = Math.min(
          p.palette.length - 1,
          Math.floor((1 - p.alpha) * p.palette.length)
        );
        renderColor = p.palette[palIdx];
      }

      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = renderColor;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';

    animFrameId = requestAnimationFrame(render);
  }

  /* --------------------------------------------------------------------------
   * 6. PUBLIC API & BOOTSTRAP
   * -------------------------------------------------------------------------- */
  window.DiwaliCelebration = {
    open: function () {
      triggerBurstOpening();
    },
    minimize: function () {
      minimizeGiftbox(true);
    },
    restore: function () {
      restoreGiftbox();
    },
    ignite: function () {
      initAudio();
      eruptFromBox();
      playRocketBlast(true);
      spawnEffectEntities(false);
    },
    getEffects: function () {
      return EFFECTS;
    },
    getCurrentEffect: function () {
      return EFFECTS[0];
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }
})();
