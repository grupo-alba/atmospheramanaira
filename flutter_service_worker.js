'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b9bc42570a2bce2e9f09b9fe355ce5fa",
"assets/AssetManifest.bin.json": "38bb3d507da7f731d9027060c2c6c7c9",
"assets/AssetManifest.json": "3c0fcf591bab019fb69809a04d8f0371",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ea8834992eda0394437360e9856fb270",
"assets/lib/assets/alba_icone.png": "ee255703beca2b28d1e1fe4e756ce387",
"assets/lib/assets/alba_logo_branco.png": "5b0e42d8c878b18768a587452d71f4fb",
"assets/lib/assets/alba_logo_completo_branco.png": "417159b040b0e09ca75e8cb51781b64b",
"assets/lib/assets/alba_logo_completo_preto.png": "36c4ffe25568ab079fc3ef4058df50f8",
"assets/lib/assets/alba_logo_preto.png": "80ff449a6681c84253dd51d436a072a5",
"assets/lib/assets/base_atmosphera_cabo_branco.json": "76b3a69c754f1199f46411405e6717c6",
"assets/lib/assets/base_atmosphera_manaira.json": "16e2be691c880ab8e1d6a3f958433c63",
"assets/lib/assets/cover_1080_360_2.jpg": "590873b1aa9e43ea263b660e7bf9c468",
"assets/lib/assets/cover_1080_360_3.png": "42e32cf3f05e9fb2a03b193d33cec741",
"assets/lib/assets/logo_atmosphera_manaira.png": "d558b8470a81d02d2cedc96d381e3110",
"assets/lib/assets/logo_atmosphera_manaira_1024.png": "c584995c8615a4c9df59465ccc68aa08",
"assets/lib/assets/logo_atmosphera_manaira_512.png": "63255db5300dc613d1a6dc3743b23914",
"assets/lib/assets/logo_atmosphera_manaira_teste.png": "b7dcc547bd79fecec375d01d6d078645",
"assets/lib/assets/logo_grupo_alba.png": "9e0ec1a2961228642664178455e2f20d",
"assets/lib/assets/logo_grupo_alba_completo.png": "9c5a36086fa0d99fdf0bec40d79d19d7",
"assets/lib/assets/manaira_capa_001.jpeg": "68e72c0d008a90327b634d5ab99058ae",
"assets/lib/assets/manaira_capa_002.jpeg": "ad405705fe407908f4a16124afe89e7c",
"assets/lib/assets/manaira_logo_azul_claro.png": "70296fb4418b66328768c54773a14fac",
"assets/lib/assets/manaira_logo_azul_escuro.png": "d558b8470a81d02d2cedc96d381e3110",
"assets/lib/assets/manaira_logo_bege.png": "4b573bea85cc5a17c0348251877c1d22",
"assets/lib/assets/manaira_logo_preto.png": "c8b9a2470a985730692d0e66e8a53c3b",
"assets/lib/assets/manaira_tipo_001.jpeg": "ea63aeb1769a215a3d0a6aa0aa959583",
"assets/lib/assets/manaira_tipo_001.png": "38bfff3fb7528c6785726ef47002785d",
"assets/lib/assets/manaira_tipo_002.jpeg": "864b548f7f572cd231dc0ee00936d255",
"assets/lib/assets/manaira_tipo_002.png": "bdcd270402781583fdc4cb4369b0502c",
"assets/lib/assets/manaira_tipo_003.jpeg": "82c094dc29b0622007d2a6b98df989a8",
"assets/lib/assets/manaira_tipo_003.png": "df6887e7a6ddd10b0622e234b6c060e9",
"assets/lib/assets/whatsapp_icon.png": "ee255703beca2b28d1e1fe4e756ce387",
"assets/lib/assets/whatsapp_icon_black.png": "7353d2d66d06e50bd4ba25e1f50c64f4",
"assets/NOTICES": "95b46c343026a4cf41ed7a0f4a303d6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bbd31666c66873f41ba8e29c5690257a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24ca6760a83ebf7a9c74f1ca431ae767",
"/": "24ca6760a83ebf7a9c74f1ca431ae767",
"main.dart.js": "416c44c3442b5a4a2cbf8353fe08167b",
"manifest.json": "65c26e26e9e4c86e9436c2a4947e5d37",
"version.json": "60f98390412647b7ef6443639ce88b09"};
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
