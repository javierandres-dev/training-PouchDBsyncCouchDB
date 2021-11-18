const cacheData = 'cacheV1';

this.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/vendors~main.chunk.js',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/manifest.json',
        '/favicon.ico',
        '/index.html',
        '/',
      ]);
    })
  );
});

this.addEventListener('fetch', (e) => {
  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then((response) => {
        if (response) {
          return response;
        }
        const requestUrl = e.request.clone();
        fetch(requestUrl);
      })
    );
  }
});

//console.log('From "sw" file: Hello!');
