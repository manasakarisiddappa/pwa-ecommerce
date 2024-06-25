// module.exports = {
//   globDirectory: "build/",
//   globPatterns: ["**/*.{html,js,css,svg,png,jpg,jpeg,json,webmanifest}"],
//   swDest: "build/service-worker.js",
//   runtimeCaching: [
//     {
//       urlPattern: /^https:\/\/fakestoreapi\.com\/products/,
//       handler: "NetworkFirst",
//       options: {
//         cacheName: "api-cache",
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 24 * 60 * 60, // 1 day
//         },
//         cacheableResponse: {
//           statuses: [0, 200],
//         },
//       },
//     },
//   ],
// };

module.exports = {
  globDirectory: "build/",
  globPatterns: [
    "**/*.{html,js,css}",
    "static/media/**/*.{jpg,png,svg,gif,woff,woff2,eot,ttf,otf}",
  ],
  swDest: "build/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: ({ url }) => url.origin === "https://fakestoreapi.com",
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
        networkTimeoutSeconds: 10,
      },
    },
    {
      urlPattern: ({ request }) => request.destination === "image",
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      },
    },
    {
      urlPattern: ({ request }) =>
        request.destination === "script" || request.destination === "style",
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
      },
    },
    {
      // Cache the app shell for navigation requests.
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      },
    },
  ],
};
