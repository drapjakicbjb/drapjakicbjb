const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupReveal() {
  const elements = Array.from(document.querySelectorAll(".reveal"));
  if (!elements.length) return;

  if (prefersReducedMotion.matches) {
    elements.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isExpanded);
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  // Close menu when clicking on a link
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (prefersReducedMotion.matches) {
    document.body.classList.add("is-loaded");
  } else {
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));
  }
  setupReveal();
  setupTilt();
  setupMobileMenu();
  setupAmbientParallax();
});

function setupAmbientParallax() {
  if (prefersReducedMotion.matches) return;
  const glowContainer = document.querySelector(".ambient-glow");
  if (!glowContainer) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isTicking = false;

  window.addEventListener("pointermove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 45;
    targetY = (e.clientY / window.innerHeight - 0.5) * 45;

    if (!isTicking) {
      requestAnimationFrame(updateParallax);
      isTicking = true;
    }
  });

  function updateParallax() {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;
    glowContainer.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

    if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
      requestAnimationFrame(updateParallax);
    } else {
      isTicking = false;
    }
  }
}

function setupTilt() {
  if (prefersReducedMotion.matches) return;

  const tiltItems = Array.from(document.querySelectorAll("[data-tilt]"));
  if (!tiltItems.length) return;

  let useDeviceTilt = false;

  function applyTilt(item, x, y) {
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    item.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  }

  function resetTilt(item) {
    item.style.transform = "";
  }

  function setupPointerTilt() {
    tiltItems.forEach((item) => {
      item.addEventListener("pointermove", (event) => {
        if (useDeviceTilt) return;
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        applyTilt(item, x, y);
      });

      item.addEventListener("pointerleave", () => {
        if (useDeviceTilt) return;
        resetTilt(item);
      });
    });
  }

  function setupDeviceTilt() {
    if (!("DeviceOrientationEvent" in window)) return;

    const requestPermission =
      typeof DeviceOrientationEvent.requestPermission === "function"
        ? DeviceOrientationEvent.requestPermission.bind(DeviceOrientationEvent)
        : null;

    async function enableDeviceTilt() {
      if (requestPermission) {
        try {
          const response = await requestPermission();
          if (response !== "granted") return;
        } catch (err) {
          return;
        }
      }

      useDeviceTilt = true;
      window.addEventListener("deviceorientation", (event) => {
        const beta = event.beta || 0; // x-axis
        const gamma = event.gamma || 0; // y-axis
        // normalize to 0-1 range
        const x = (gamma + 90) / 180;
        const y = (beta + 180) / 360;
        tiltItems.forEach((item) => applyTilt(item, x, y));
      });
    }

    // activate on first pointer/touch to avoid unsolicited prompts
    window.addEventListener(
      "click",
      () => {
        enableDeviceTilt();
      },
      { once: true }
    );
  }

  setupPointerTilt();
  setupDeviceTilt();
}

