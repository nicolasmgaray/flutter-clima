'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b388d3279b8495ab27d04409cfbb3f19",
"assets/FontManifest.json": "d3a8e6b3e3d94eeb86e95d982b31ffbc",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/SpartanMB-Black.otf": "574787237607a0795b7007988bd0e906",
"assets/images/city_background.jpg": "3f31f446bcfeb4a6d1112c1110b63ca1",
"assets/images/location_background.jpg": "17c27d970917469dc0e4181c24b605bf",
"assets/LICENSE": "0315dcdb6a7ea6af4cf1409e5e79d2b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f1194defd37b34805425c19d9feeaba3",
"/": "f1194defd37b34805425c19d9feeaba3",
"main.dart.js": "56af718a06262a04140e50a994f63505",
"manifest.json": "69252b5dbefb4a4926dff0ae08729c02"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
