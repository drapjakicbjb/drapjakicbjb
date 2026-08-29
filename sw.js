const CACHE_NAME = 'apj-school-cache-v6';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles/main.min.css',
  './styles/fontawesome.min.css',
  './js/main.js',
  './assets/images/logo.webp',
  './assets/images/new_logo.webp',
  './assets/images/Manager.webp',
  './assets/images/about.webp',
  './assets/images/campus.webp',
  './assets/images/Flag_of_India.svg'
];

// Third-party CDN URLs to cache
const CDN_URLS = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
  'https://fonts.gstatic.com/'
];

// Install Event - Pre-cache critical static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching static assets');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[Service Worker] Pre-cache failed for some assets, continuing...', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up older caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Handle Caching Strategies
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Strategy 1: Network-First (or Stale-While-Revalidate) for notices and dynamic/page files.
  // This ensures returning visitors get updates (like noticeboard alerts) immediately.
  const hasNoExtension = !url.pathname.split('/').pop().includes('.');
  if (
    url.pathname.endsWith('.html') ||
    hasNoExtension ||
    url.pathname.includes('/notices.js') ||
    url.pathname.includes('noticeboard')
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response to store in cache
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if offline
          return caches.match(event.request);
        })
    );
    return;
  }

  // Strategy 2: Cache-First for static assets (images, stylesheets, fonts, icons)
  // These rarely change, so loading from cache saves time and bandwidth.
  if (
    event.request.destination === 'image' ||
    event.request.destination === 'font' ||
    url.pathname.endsWith('.css') ||
    url.pathname.includes('font-awesome') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('cloudflareinsights.com')
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache, then fetch in the background to keep cache updated (stale-while-revalidate style)
          fetch(event.request).then((networkResponse) => {
            if (
              networkResponse.status === 200 ||
              (networkResponse.status === 0 && (
                url.hostname.includes('cloudflareinsights.com') ||
                url.hostname.includes('fonts.gstatic.com') ||
                url.hostname.includes('fonts.googleapis.com')
              ))
            ) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {/* Ignore network errors for background sync */ });

          return cachedResponse;
        }

        // Cache miss: fetch from network and cache
        return fetch(event.request).then((networkResponse) => {
          if (
            networkResponse.status === 200 ||
            (networkResponse.status === 0 && (
              url.hostname.includes('cloudflareinsights.com') ||
              url.hostname.includes('fonts.gstatic.com') ||
              url.hostname.includes('fonts.googleapis.com')
            ))
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Default: Network with cache fallback
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
