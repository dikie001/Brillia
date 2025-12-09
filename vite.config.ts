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
      // 1. CHANGE THIS TO 'prompt'
      // This gives your UI control over when to activate the new version
      registerType: "prompt",

      injectRegister: "auto",

      // 2. Enable this to test updates in development
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      },

      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,mp3,wav,ogg,json}",
        ],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],

        // 3. These settings are crucial for "Immediate" updates
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,

        // Your runtime caching rules look good, keeping them as is:
        runtimeCaching: [
          {
            urlPattern: /\.html$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24,
              },
              networkTimeoutSeconds: 10,
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:mp3|wav|ogg|m4a)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "audio-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /\.(?:js|css)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
            },
          },
          {
            urlPattern: /^https:\/\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "external-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
              networkTimeoutSeconds: 5,
            },
          },
          {
            urlPattern: /.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "fallback-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^\/api/, /^\/admin/, /\.(?:json|xml)$/],
      },

      manifest: {
        name: "Brillia",
        short_name: "Brillia",
        description:
          "A fun app with quizzes, facts, stories, and Quick Challenges",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4f46e5",
        orientation: "portrait",
        scope: "/",
        icons: [
          {
            src: "/images/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        categories: ["education", "entertainment", "games"],
      },

      includeAssets: ["/images/logo.png", "/sounds/*.mp3"],
      strategies: "generateSW",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
