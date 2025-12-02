const CACHE_VERSION = "brillia-offline-v2";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",

  "/brain-teasers",
  "/mini-stories",
  "/quiz-quest",
  "/wisdom-nuggets",
  "/tongue-twisters",
  "/amazing-facts",
  "/contact-developer",
  "/settings",
  "/about",
  "/help",

  "/images/logo.png",
  "/images/logo.ico",
  "/images/apple.jpeg",
  "/images/icon.png",

  "/sounds/correct.mp3",
  "/sounds/error.mp3",
  "/sounds/finish.mp3",
  "/sounds/send.mp3",
  "/sounds/success.mp3",
  "/sounds/wrong.mp3",

  "/vite.svg",
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async (cache) => {
      await cache.addAll(ASSETS);

      const html = await cache.match("/index.html");
      const routes = [
        "/brain-teasers",
        "/mini-stories",
        "/quiz-quest",
        "/wisdom-nuggets",
        "/tongue-twisters",
        "/amazing-facts",
        "/contact-developer",
        "/settings",
        "/about",
        "/help",
      ];

      if (html) {
        for (const r of routes) {
          await cache.put(r, html.clone());
        }
      }

      return self.skipWaiting();
    })
  );
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_VERSION && caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

// FETCH — bulletproof version
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only GET is cacheable
  if (req.method !== "GET") {
    return;
  }

  // SPA fallback
  if (req.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html").then((cached) => cached || fetch(req))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(async (cached) => {
      if (cached) return cached;

      try {
        const network = await fetch(req);

        // Can't cache opaque, error, or non-cloneable responses
        if (!network || !network.ok || network.type === "opaque") {
          return network;
        }

        // Safe clone
        const clone = network.clone();

        // Store safely
        const cache = await caches.open(CACHE_VERSION);
        cache.put(req, clone);

        return network;
      } catch {
        return cached;
      }
    })
  );
});
