'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0f77a2baeca49f324ee7cf4bc4094cfd",
"assets/AssetManifest.bin.json": "99593ffcebd9c2b26f94bd119f6ce302",
"assets/AssetManifest.json": "bd9368e1a0b162f4a06c868d3ded032f",
"assets/assets/images/angular-logo.png": "30b26fa68daa92f3fc4a7e15b399ad0f",
"assets/assets/images/antra.JPG": "2a844450042194baaddd0d8a769acc8c",
"assets/assets/images/app-store.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/images/C%2523.png": "2fe2343e1b9c97dd455299e94ac8c26e",
"assets/assets/images/communication.png": "57cef0bcd0555611c0df7f73960e6ea4",
"assets/assets/images/csu.png": "76f4e65076964cfbef5ceaffa11dc847",
"assets/assets/images/csuimg.JPG": "9f28d840fbbe6fc501146709ef081b88",
"assets/assets/images/Dart_logo.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/images/diletta.jpg": "046da00a875332ffa0e1586a7bc4c5a1",
"assets/assets/images/firebase.png": "746a735443319a845a38a291a7de8f32",
"assets/assets/images/Flag_of_Brazil.png": "d6a1b2211c45f1a4754b0f75992ef950",
"assets/assets/images/Flag_of_the_United_States.png": "fa1435c89e78e9dd9d2c5625eb2f112e",
"assets/assets/images/flutter-icon.webp": "a7d58da4cd5fb8989466c55a327a11ec",
"assets/assets/images/fotoCurriculo_Linkedin.PNG": "6be3c0e7587b00f1b81df8d3b485efbb",
"assets/assets/images/google-play-badge.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/googleCloud.png": "57ba3795d3b96993772904384d18a47e",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/joao_piment_black_center.png": "5fa4a1fbb4b8486ad9e76d6a8d3c693f",
"assets/assets/images/leader.jpg": "92e9c0e6dac0dc9ac28f146cd4d6b9ea",
"assets/assets/images/linkedin.png": "7bc93e1f389d60514c508e9e0e419e0d",
"assets/assets/images/medal.png": "697c3104e6c32a56e3387d441bc32c41",
"assets/assets/images/microsoftGet.png": "c62abca7ab70db62aeb2112afce301ad",
"assets/assets/images/net.png": "ec0db8a2f3ffc028cd6048834549833e",
"assets/assets/images/postman.png": "2f9a6a109eed88e49041a3b398afb7b3",
"assets/assets/images/puc.JPG": "8d95ecd4e935796e47bc07cb6e1ca6b7",
"assets/assets/images/puclogo.png": "15190e2a5abedcf91bd385b6336e5d27",
"assets/assets/images/react.png": "1bf9e36a76d7c9c41691fb26026caf55",
"assets/assets/images/SQL.png": "1e1d78bff77dc94b01fe464f6150313c",
"assets/assets/images/usp.JPG": "106dabb3ed52b3d19c975f8dd4126dc7",
"assets/assets/images/usplogo.png": "351e9d0983b5adfbef8b1de1f75c05f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "066eb6051da2641f9dbe35b373400908",
"assets/NOTICES": "a7918dd2d7fff9c25ef5716f3e247e6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "622af44a9dced4f4765d29e0e2ccd569",
"/": "622af44a9dced4f4765d29e0e2ccd569",
"main.dart.js": "28c577a76bf12b28416835b0ded5d961",
"manifest.json": "4471167666cb16ad7cbb0f11835285bf",
"version.json": "6db67f4bdc351a55a2ff76481556ac35"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
