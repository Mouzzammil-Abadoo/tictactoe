var cacheName = 'tictactoe-pwa';
var filesToCache = [
    '/tictactoe/',
    '/tictactoe/index.html',
    '/tictactoe/assets/css/vendor.css',
    '/tictactoe/assets/css/style.css',
    '/tictactoe/js/vendor.js',
    '/tictactoe/js/all.js',
    '/tictactoe/js/templates.js'
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