'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ad223a8a1a8f83cc0451c58ac6b280ad",
"assets/AssetManifest.bin.json": "69a9e0d9cbd5a73519c147360c4c0b53",
"assets/AssetManifest.json": "17245482f92efd8917545cc0ddfd7540",
"assets/assets/images/accessibility.PNG": "f79d069d50256ae987093e8e9f89f2c9",
"assets/assets/images/angular-logo.png": "30b26fa68daa92f3fc4a7e15b399ad0f",
"assets/assets/images/antra.JPG": "2a844450042194baaddd0d8a769acc8c",
"assets/assets/images/app-store.svg": "1b65926236d951b2af57201b275f595b",
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
"assets/assets/images/flutterRobot.PNG": "e976b627d4b27b778a0870a99ca0fca3",
"assets/assets/images/flutterTree.PNG": "e7b2598c27a92245b2c35fb7d25467e0",
"assets/assets/images/fotoCurriculo_Linkedin.PNG": "6be3c0e7587b00f1b81df8d3b485efbb",
"assets/assets/images/google-play-badge.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/googleCloud.png": "57ba3795d3b96993772904384d18a47e",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/joao_piment_black_center.png": "5fa4a1fbb4b8486ad9e76d6a8d3c693f",
"assets/assets/images/leader.jpg": "92e9c0e6dac0dc9ac28f146cd4d6b9ea",
"assets/assets/images/lifecycle.JPG": "d894a91efac36add83b77899ee83f6d8",
"assets/assets/images/linkedin.png": "7bc93e1f389d60514c508e9e0e419e0d",
"assets/assets/images/medal.png": "697c3104e6c32a56e3387d441bc32c41",
"assets/assets/images/microsoftGet.png": "c62abca7ab70db62aeb2112afce301ad",
"assets/assets/images/net.png": "ec0db8a2f3ffc028cd6048834549833e",
"assets/assets/images/postman.png": "2f9a6a109eed88e49041a3b398afb7b3",
"assets/assets/images/puc.JPG": "8d95ecd4e935796e47bc07cb6e1ca6b7",
"assets/assets/images/puclogo.png": "15190e2a5abedcf91bd385b6336e5d27",
"assets/assets/images/react.png": "1bf9e36a76d7c9c41691fb26026caf55",
"assets/assets/images/renderingPipeline.JPG": "de523bd4709d0be1205d4ad9a9f6138e",
"assets/assets/images/SQL.png": "1e1d78bff77dc94b01fe464f6150313c",
"assets/assets/images/usp.JPG": "106dabb3ed52b3d19c975f8dd4126dc7",
"assets/assets/images/usplogo.png": "351e9d0983b5adfbef8b1de1f75c05f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/NOTICES": "451960cd13af08d31a40cdf064e53f72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d603b424744a1f969259c52a0f36f511",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e838eb7f3172eaae37e895a895b40361",
"/": "e838eb7f3172eaae37e895a895b40361",
"main.dart.js": "83cdbbb8b7a28cf125a58c906c3ab69b",
"manifest.json": "4471167666cb16ad7cbb0f11835285bf",
"version.json": "6db67f4bdc351a55a2ff76481556ac35"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
