import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto", // Auto inject service worker registration

      // Workbox configuration for offline caching
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,mp3,wav,ogg,json}",
        ],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],

        // Clean up old caches automatically
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,

        // Runtime caching strategies for different resource types
        runtimeCaching: [
          // For HTML pages - Network First (freshest content)
          {
            urlPattern: /\.html$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24, // 24 hours
              },
              networkTimeoutSeconds: 10, // Fallback to cache if network takes >10s
            },
          },

          // For images - Cache First (fast loading)
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // For audio files - Cache First
          {
            urlPattern: /\.(?:mp3|wav|ogg|m4a)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "audio-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },

          // For CSS and JS - StaleWhileRevalidate (cached but check for updates)
          {
            urlPattern: /\.(?:js|css)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
            },
          },

          // For external resources
          {
            urlPattern: /^https:\/\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "external-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
              networkTimeoutSeconds: 5,
            },
          },

          // Fallback for all other requests
          {
            urlPattern: /.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "fallback-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24, // 24 hours
              },
            },
          },
        ],

        // Navigate fallback for SPA routing
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^\/api/, /^\/admin/, /\.(?:json|xml)$/],
      },

      // Manifest configuration
      manifest: {
        name: "Brillia",
        short_name: "Brillia",
        description:
          "A fun app with quizzes, facts, stories, and brain teasers",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4f46e5",
        orientation: "portrait",
        scope: "/",

        icons: [
          {
            src: "/images/logo.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/images/logo.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/images/logo.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/images/logo.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/images/logo.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/images/logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/images/logo.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/images/logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],

 
        // Categories for app stores
        categories: ["education", "entertainment", "games"],

        // Screenshots for app stores (optional)
        screenshots: [
          {
            src: "/screenshots/screenshot1.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },

      // Development options
      devOptions: {
        enabled: false, // Disable in dev to avoid SW conflicts
        type: "module",
        navigateFallback: "index.html",
      },

      // For custom offline page
      includeAssets: ["/images/logo.png", "/sounds/*.mp3"],

      // Strategy for service worker
      strategies: "generateSW", // Use generateSW for automatic generation
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
