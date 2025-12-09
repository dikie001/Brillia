const CACHE_VERSION = "brillia-offline-v3"; // Increment version
const ASSETS = [
  // Core app shell
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/vite.svg",

  // App routes (SPA pages)
  "/quick-challenges",
  "/flash-stories",
  "/quick-quiz",
  "/life-gems",
  "/clear-speech",
  "/fun-facts",
  "/contact-developer",
  "/settings",
  "/communication",
  "/word-power",
  "/about",
  "/help",

  // Images
  "/images/logo.png",
  "/images/logo.ico",
  "/images/apple.jpeg",
  "/images/icon.png",

  // Audio files
  "/sounds/error.mp3",
  "/sounds/finish.mp3",
  "/sounds/send.mp3",
  "/sounds/success.mp3",
];

// Precache critical assets on install
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);

      try {
        // Try to add all assets
        await cache.addAll(ASSETS);
      } catch (error) {
        console.warn("Some assets failed to cache:", error);
      }

      // Clone index.html for all SPA routes
      const html = await cache.match("/index.html");
      if (html) {
        const routes = [
          "/quick-challenges",
          "/flash-stories",
          "/quick-quiz",
          "/life-gems",
          "/clear-speech",
          "/fun-facts",
          "/results",
          "/contact-developer",
          "/settings",
          "/communication",
          "/word-power",
          "/about",
          "/help",
        ];

        for (const route of routes) {
          // Check if route already exists before adding
          const existing = await cache.match(route);
          if (!existing) {
            await cache.put(route, html.clone());
          }
        }
      }

      // Skip waiting to activate immediately
      self.skipWaiting();
      console.log(`Service Worker ${CACHE_VERSION} installed`);
    })()
  );
});

// Clean up old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();

      // Delete all old caches
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );

      // Claim all clients immediately
      await self.clients.claim();
      console.log(`Service Worker ${CACHE_VERSION} activated`);
    })()
  );
});

// Enhanced fetch handler with different strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and browser extensions
  if (request.method !== "GET" || url.protocol === "chrome-extension:") {
    return;
  }

  // Strategy 1: Navigation requests (SPA routes)
  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  // Strategy 2: Static assets (images, sounds, CSS, JS)
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // Strategy 3: Default - Cache falling back to network
  event.respondWith(handleDefaultRequest(request));
});

// Navigation request handler
async function handleNavigationRequest(request) {
  try {
    // Try cache first for SPA routes
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Try network for navigation
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // Fallback to index.html for SPA
    const fallback = await caches.match("/index.html");
    if (fallback) {
      return fallback;
    }

    // Ultimate fallback
    return new Response("You are offline. Please check your connection.", {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}

// Static asset handler (Cache First)
async function handleStaticAsset(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cachedResponse = await cache.match(request);

  // Return cached version if available
  if (cachedResponse) {
    // Update cache in background
    updateCacheInBackground(request);
    return cachedResponse;
  }

  // Fetch from network
  try {
    const networkResponse = await fetch(request);

    // Cache if successful
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // If we have no cached version and network fails
    return new Response("", { status: 408 });
  }
}

// Default request handler (Network First)
async function handleDefaultRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // No cache available
    return new Response("Network error", { status: 408 });
  }
}

// Background cache update
async function updateCacheInBackground(request) {
  try {
    const response = await fetch(request);

    // Only store FULL responses, no partial 206
    if (!response || response.status !== 200) return;

    const cache = await caches.open(CACHE_VERSION);
    cache.put(request, response.clone());
  } catch (err) {
    // silent
    console.log(err)
  }
}


// Helper to identify static assets
function isStaticAsset(request) {
  const url = request.url;
  return (
    url.includes("/images/") ||
    url.includes("/sounds/") ||
    url.includes(".css") ||
    url.includes(".js") ||
    url.includes(".svg") ||
    url.includes(".ico") ||
    url.includes(".woff") ||
    url.includes(".woff2") ||
    url.includes(".ttf")
  );
}

// Periodic cache cleanup (optional)
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "cleanup-cache") {
    event.waitUntil(cleanupOldCacheEntries());
  }
});

async function cleanupOldCacheEntries() {
  const cache = await caches.open(CACHE_VERSION);
  const requests = await cache.keys();
  const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

  for (const request of requests) {
    const response = await cache.match(request);
    if (response) {
      const dateHeader = response.headers.get("date");
      if (dateHeader) {
        const cachedDate = new Date(dateHeader).getTime();
        if (cachedDate < oneWeekAgo) {
          cache.delete(request);
        }
      }
    }
  }
}
