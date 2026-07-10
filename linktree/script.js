document.addEventListener('DOMContentLoaded', () => {
    const platforms = [
        // {
        //     id: 'admission-portal',
        //     name: 'Admission Portal',
        //     description: 'Apply for the new academic session. Download prospectus and fill out the online admission form.',
        //     icon: 'fa-file-signature',
        //     iconClass: 'admission',
        //     url: "",
        //     onclick: 'alert("We are curruntly working on it, Please fill offline form.")',
        //     actionText: 'Apply Now',
        //     featured: true
        // },
        {
            id: 'whatsapp-contact',
            name: 'WhatsApp Support',
            description: 'Message us directly on WhatsApp (+91 94542 42284).',
            icon: 'fa-whatsapp',
            iconClass: 'whatsapp',
            url: 'https://wa.me/919454242284',
            actionText: 'Message Us'
        },
        {
            id: 'youtube-channel',
            name: 'YouTube Channel',
            description: 'Watch educational videos and school event highlights.',
            icon: 'fa-youtube',
            iconClass: 'youtube',
            url: 'https://youtube.com/@drapjakicbjb',
            actionText: 'Watch Videos'
        },
        {
            id: 'official-website',
            name: 'Official Website',
            description: 'School news, policies, and calendar of events.',
            icon: 'fa-globe',
            iconClass: 'website',
            url: '../index.html',
            actionText: 'View Website'
        },
        {
            id: 'study-hub',
            name: 'Study Hub',
            description: 'Explore interactive educational simulations and discover immersive learning materials.',
            icon: 'fa-graduation-cap',
            iconClass: 'study-hub',
            url: '../study.html',
            actionText: 'Explore Simulations'
        },
        {
            id: 'whatsapp-channel',
            name: 'WhatsApp Channel',
            description: 'Follow our official channel for real-time school announcements.',
            icon: 'fa-whatsapp',
            iconClass: 'whatsapp',
            url: 'https://whatsapp.com/channel/0029ValVXTv5q08k3bcxT10R',
            actionText: 'Follow Channel'
        },
        {
            id: 'facebook-group',
            name: 'Facebook Group',
            description: 'Join our community on Facebook for updates and discussions.',
            icon: 'fa-facebook',
            iconClass: 'facebook',
            url: 'https://www.facebook.com/share/g/17W4khXV5J/',
            actionText: 'Join Group'
        },
        {
            id: 'facebook-page',
            name: 'Facebook Page',
            description: 'Like and follow our official Facebook page for news and events.',
            icon: 'fa-facebook',
            iconClass: 'facebook',
            url: 'https://www.facebook.com/profile.php?id=100090759948402',
            actionText: 'Like Page'
        },
        {
            id: 'instagram-page',
            name: 'Instagram Page',
            description: 'Follow our daily school life and photo gallery.',
            icon: 'fa-instagram',
            iconClass: 'instagram',
            url: 'https://instagram.com/drapjakicbjb',
            actionText: 'Follow Us'
        },
        {
            id: 'twitter-page',
            name: 'Twitter (X) Page',
            description: 'Follow our official timeline for quick updates.',
            icon: 'fa-twitter',
            iconClass: 'twitter',
            url: 'https://twitter.com/drapjakicbjb',
            actionText: 'Follow Us'
        }
    ];

    // ===== DOM ELEMENTS =====
    const platformGrid = document.getElementById('platform-grid');
    const searchInput = document.getElementById('platform-search');
    const navbar = document.getElementById('navbar');
    const themeToggle = document.getElementById('theme-toggle');

    // ===== RENDER CARDS =====
    function renderCards(filterText = '') {
        platformGrid.innerHTML = '';
        
        const filtered = platforms.filter(p => 
            p.name.toLowerCase().includes(filterText.toLowerCase()) || 
            p.description.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filtered.length === 0) {
            platformGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--on-surface-variant)">No platforms found matching your search.</p>';
            return;
        }

        filtered.forEach((platform, index) => {
            const card = document.createElement('div');
            card.className = `card fade-in ${platform.featured ? 'card-featured' : ''}`;
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                ${platform.featured ? '<div class="featured-badge">Featured</div>' : ''}
                <div class="card-icon ${platform.iconClass}">
                    ${(() => {
                        if (platform.icon.includes(' ')) {
                            return `<i class="${platform.icon}"></i>`;
                        } else {
                            const isBrand = ['whatsapp', 'youtube', 'facebook', 'instagram', 'twitter', 'github'].some(b => platform.icon.includes(b));
                            return `<i class="${isBrand ? 'fa-brands' : 'fa-solid'} ${platform.icon}"></i>`;
                        }
                    })()}
                </div>
                <div class="card-content">
                    <h3>${platform.name}</h3>
                    <p>${platform.description}</p>
                </div>
                <div class="card-actions">
                    <a href="${platform.url}" ${platform.url.startsWith('..') ? '' : 'target="_blank" rel="noopener noreferrer"'} class="btn-visit">
                        ${platform.actionText || 'Visit'} ${platform.url.startsWith('..') ? '<i class="fa-solid fa-arrow-right" style="font-size: 0.8em; margin-left: 5px;"></i>' : '<i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8em; margin-left: 5px;"></i>'}
                    </a>
                </div>
            `;
            platformGrid.appendChild(card);
        });

        // Re-trigger intersection observer for newly added cards
        observeElements();
    }

    // Initial render
    renderCards();

    // ===== SEARCH FUNCTIONALITY =====
    searchInput.addEventListener('input', (e) => {
        renderCards(e.target.value);
    });

    // ===== STICKY NAVBAR =====
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });



    // ===== DARK MODE TOGGLE =====
    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ===== ENTRANCE ANIMATIONS =====
    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
    
    observeElements();
    
    // ===== SCROLL LOGO INTERPOLATION ENGINE =====
    const navLogoGroup = document.getElementById('nav-logo-group');
    const footerLogoGroup = document.getElementById('footer-logo-group');
    const floatingLogos = document.getElementById('floating-logos');
    
    let ticking = false;

    function updateFloatingLogo() {
        if (!navLogoGroup || !footerLogoGroup || !floatingLogos) {
            ticking = false;
            return;
        }

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Handle pages that cannot scroll
        if (scrollHeight <= 0) {
            const navRect = navLogoGroup.getBoundingClientRect();
            floatingLogos.style.transform = `translate(${navRect.left}px, ${navRect.top}px)`;
            ticking = false;
            return;
        }

        const scrollPercent = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        
        // Dynamic Layout Collapsing
        if (scrollPercent > 0.05) {
            navLogoGroup.classList.add('collapsed');
        } else {
            navLogoGroup.classList.remove('collapsed');
        }

        if (scrollPercent < 0.95) {
            footerLogoGroup.classList.add('collapsed');
        } else {
            footerLogoGroup.classList.remove('collapsed');
        }

        const navRect = navLogoGroup.getBoundingClientRect();
        const footerRect = footerLogoGroup.getBoundingClientRect();
        
        // Define Center Coordinates for Transform Origin matching
        const navCX = navRect.left + navRect.width / 2;
        const navCY = navRect.top + navRect.height / 2;
        
        const footCX = footerRect.left + footerRect.width / 2;
        const footCY = footerRect.top + footerRect.height / 2;
        
        const floatW = floatingLogos.offsetWidth || 120; // fallback width if hidden
        const floatH = floatingLogos.offsetHeight || 36;

        // Target corner center (Bottom Right)
        const cornerScale = 1.0;
        const padding = 30; // 30px offset from viewport edges
        
        // Use floatW to ensure the entire logo fits perfectly securely on the screen regardless of scaling
        const cornerCX = window.innerWidth - padding - (floatW * cornerScale) / 2;
        const cornerCY = window.innerHeight - padding - (floatH * cornerScale) / 2;
        
        let currentCX, currentCY, currentScale, currentOpacity;
        
        // Smoothstep function for butter-smooth easing
        const smoothstep = (t) => t * t * (3 - 2 * t);
        
        if (scrollPercent < 0.15) {
            // Phase 1: Detach and Slide to Corner (0 - 15%)
            let p = scrollPercent / 0.15;
            let ease = smoothstep(p);
            currentCX = navCX + ease * (cornerCX - navCX);
            currentCY = navCY + ease * (cornerCY - navCY);
            currentScale = 1 - (ease * (1 - cornerScale));
            currentOpacity = 1 - (ease * 0.3); // drops to 0.7
        } else if (scrollPercent <= 0.85) {
            // Phase 2: Hover freely in the corner (15 - 85%)
            currentCX = cornerCX;
            currentCY = cornerCY;
            currentScale = cornerScale;
            currentOpacity = 0.7;
        } else {
            // Phase 3: Slide from Corner into Footer Dock (85 - 100%)
            let p = (scrollPercent - 0.85) / 0.15;
            let ease = smoothstep(p);
            currentCX = cornerCX + ease * (footCX - cornerCX);
            currentCY = cornerCY + ease * (footCY - cornerCY);
            currentScale = cornerScale + (ease * (1 - cornerScale));
            currentOpacity = 0.7 + (ease * 0.3); // rises to 1.0
        }
        
        const finalLeft = currentCX - floatW / 2;
        const finalTop = currentCY - floatH / 2;
        
        floatingLogos.style.transform = `translate(${finalLeft}px, ${finalTop}px) scale(${currentScale})`;
        floatingLogos.style.opacity = currentOpacity;
        
        ticking = false;
    }

    if (floatingLogos) {
        // Wait for fonts/images to load to get correct bounding boxes initially
        window.addEventListener('load', updateFloatingLogo);
        updateFloatingLogo();
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateFloatingLogo);
                ticking = true;
            }
            
            // Keep ticking for 600ms after scrolling stops to catch trailing CSS Layout Transitions
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                let start = performance.now();
                function settle(time) {
                    updateFloatingLogo();
                    if (time - start < 600) {
                        window.requestAnimationFrame(settle);
                    }
                }
                window.requestAnimationFrame(settle);
            }, 50);
            
        }, { passive: true });
        
        window.addEventListener('resize', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateFloatingLogo);
                ticking = true;
            }
        }, { passive: true });
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

    // ===== DYNAMIC YEAR UPDATE =====
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
