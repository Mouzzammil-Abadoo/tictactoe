var cacheName = 'tictactoe-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/assets/css/vendor.css',
    '/assets/css/style.css',
    '/assets/images/tictactoe/*.png',
    '/js/vendor.js',
    '/js/all.js',
    '/js/templates.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});