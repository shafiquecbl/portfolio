'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5c0649d45230b141fc2b22578b289dd5",
"assets/assets/food/1.png": "8b9be2d592d42c401f198563c7e2c09e",
"assets/assets/food/10.png": "c331295867964b70fd110809711b4bf6",
"assets/assets/food/11.png": "37a467960bc65ac833a8c04cd9ce3e23",
"assets/assets/food/12.png": "69480c76b55600b6d347010833ae9ba7",
"assets/assets/food/13.png": "04d89c37621982510789c048cd30a2ab",
"assets/assets/food/14.png": "93a0c259b91c2aac1c2abf14670cbe97",
"assets/assets/food/15.png": "693b951ec1b4ac04d3fd4d76ecfadaef",
"assets/assets/food/16.png": "04c0ecd93707928450a8f1e49361521b",
"assets/assets/food/17.png": "22d86b1d195cbe059afe0b701fbb737a",
"assets/assets/food/18.png": "77f6691c93dd532b01ea8e44f56ee48c",
"assets/assets/food/19.png": "3ab9cd5efcd03c6b6fec0e52c817ffa6",
"assets/assets/food/2.png": "3698406da0e3000fdaf6138f1b44d2b8",
"assets/assets/food/20.png": "e89a4c444e334c992dfa6edbac8ba43c",
"assets/assets/food/21.png": "1410aadd0d1b56c55feca0141837e73a",
"assets/assets/food/22.png": "545807fef5c400ac059257a493f53cbd",
"assets/assets/food/23.png": "b266bb2412178c12df67676e67f4edb3",
"assets/assets/food/24.png": "a87db6aa034a3d097ef50254757a1d43",
"assets/assets/food/25.png": "6eb2bd0fcd9537fafc88883f28aac008",
"assets/assets/food/26.png": "97ddb9d783dc9c17417e59865482ee84",
"assets/assets/food/27.png": "7d9c530c20be308195362eb243d76ba9",
"assets/assets/food/28.png": "fb34974492b6a8520f6847614c6bbfb6",
"assets/assets/food/29.png": "50a11e27db467ed77138876d875088db",
"assets/assets/food/3.png": "b40459ede14d08baf30f8d5d094b9ca5",
"assets/assets/food/30.png": "76104bf5814346b3e06235df62b149e8",
"assets/assets/food/4.png": "2397f0ccac3078ee2e551af43ce86581",
"assets/assets/food/5.png": "c1b49e3203152056b86289e293a799a0",
"assets/assets/food/6.png": "86051c555c72b18919c26d29a6f30e59",
"assets/assets/food/7.png": "b8bf0278a2f1afc84dbf1eb549213cb4",
"assets/assets/food/8.png": "dcbe2c2dc33112f77dc64d3630003071",
"assets/assets/food/9.png": "984520cf7fe837bcfe6ba9567a01ce59",
"assets/assets/footankle/1.png": "73deb1a889eb423a21cdc9cbedfb868f",
"assets/assets/footankle/2.png": "34b49aa8bf8003c3b67d7ee7e87d1ffb",
"assets/assets/footankle/3.png": "c081ed6f9a9ec4d27f79e4b8c6573213",
"assets/assets/footankle/4.png": "9c6217ac1b2004e3ffa6fcc3889d61a0",
"assets/assets/footankle/5.png": "3362b86a16346b5b111bdda6c2c51d57",
"assets/assets/got/1.png": "425879792dbedfa102ff8a6313d029ba",
"assets/assets/got/10.png": "855b03a38ef2dd2bc930a982898b8da0",
"assets/assets/got/11.png": "b905c588bcb7eab1e9c0102a4829b313",
"assets/assets/got/12.png": "5b69ddc0f3896e2029cd89513edf1a5d",
"assets/assets/got/13.png": "c2e8345ef24569289158789a92003cc8",
"assets/assets/got/14.png": "050040a9155c0f4402cb09bbd5eb5b42",
"assets/assets/got/15.png": "8113a57eaf0de694f2dbc602e14f2c59",
"assets/assets/got/16.png": "07f0a933a60a3146840f17ae6a91b7f6",
"assets/assets/got/17.png": "3c52cc6c0996db71813381addb5b148e",
"assets/assets/got/18.png": "851df3a32911f2add6002a709e2bf4ce",
"assets/assets/got/19.png": "1b053c650d15df8fb976ac59191cdef3",
"assets/assets/got/2.png": "73c237c4bb6e463b399775444b141098",
"assets/assets/got/20.png": "4d521cd83e0dc8b0c6124442c9356c5e",
"assets/assets/got/21.png": "412f7174d54f69c7c4c39b1a1a99d6e9",
"assets/assets/got/3.png": "1c6b71d9af1ef3ebc353de8ec175b0e8",
"assets/assets/got/4.png": "d3d2c21330b193b11ec0af892e21c1a5",
"assets/assets/got/5.png": "9c2b70d99ea86dccd2c06d8d397c1fea",
"assets/assets/got/6.png": "6bf189000fe9d9dd14fd8a070e924cc3",
"assets/assets/got/7.png": "941299d59a6f573303dad5114e540e99",
"assets/assets/got/8.png": "6eba9cf126ce159cd0e05712154734c6",
"assets/assets/got/9.png": "9149f06706ce18059a6285b37e907bb5",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/dp.png": "02f4a2fd65ea66192ac456b37068fa2e",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/moonport/1.png": "ff27e1095a6d66bea78d8915707379c1",
"assets/assets/moonport/10.png": "ad16a94a5b36be151a744e36d1fe63c5",
"assets/assets/moonport/11.png": "1cb197e664d8c5178ffbfaf03cfb6ef5",
"assets/assets/moonport/12.png": "4b859cd1eaca79bb68a330a31b2df308",
"assets/assets/moonport/13.png": "b23b6c4a5c8c13216d3c3cc21b3d41e5",
"assets/assets/moonport/14.png": "5fc6ebbe4e22653b90fae1a1a6030d67",
"assets/assets/moonport/15.png": "fed1ef32f3a68776f3a0e96e14382b65",
"assets/assets/moonport/16.png": "84723c718ccfc4ee0f90eb9da59e6019",
"assets/assets/moonport/17.png": "3a95485b41c8bb2370890f4aebb50bcd",
"assets/assets/moonport/18.png": "505cdaa5d64e660253d669afa2bb1e98",
"assets/assets/moonport/19.png": "7d96fda7d3595776d72fbaa51270f9d8",
"assets/assets/moonport/2.png": "44c59af36d24b8e1e6bded863099e6a7",
"assets/assets/moonport/20.png": "98c1c1b69fc9cf885fb695478cd7aa64",
"assets/assets/moonport/21.png": "b03dc4e86d19e07230474558294a582c",
"assets/assets/moonport/22.png": "4922f3878c87c5e767e17fd6436fecdc",
"assets/assets/moonport/23.png": "0c65c25f328946ffd129caff40c19cd2",
"assets/assets/moonport/24.png": "318032f7a0678d511d3b1b148b1ae5e6",
"assets/assets/moonport/25.png": "b8c2d2a7ef57a95b0cd5b01c6c0e61df",
"assets/assets/moonport/26.png": "305f0334f84910fea25782f3f2f2624f",
"assets/assets/moonport/27.png": "2143c8bb3dbe917d4464c2bc6dbe12cf",
"assets/assets/moonport/28.png": "308c9e5e38aa188f6958bd4ccb288f7b",
"assets/assets/moonport/3.png": "275f6ed0dad6db65c2432ff63c9e508c",
"assets/assets/moonport/4.png": "c3243308471cee78d57e2593bb95f60b",
"assets/assets/moonport/5.png": "d4571c1b8e3ad96602842fcaecefe100",
"assets/assets/moonport/6.png": "3789b20b569c5788bcf135f06c94e491",
"assets/assets/moonport/7.png": "9c1a1421143a616abeabf84fc5addcd1",
"assets/assets/moonport/8.png": "64f0eb78b629d6405c269059b9c605b8",
"assets/assets/moonport/9.png": "9303a176c06cc7499c685acd685c3204",
"assets/assets/period_tracker/1.png": "91a087a7f45386ee9286ba38bd88e054",
"assets/assets/period_tracker/2.png": "0438aaa7d183a062ad61dc924d629527",
"assets/assets/period_tracker/3.png": "c5effccc7d6848d29eed4410070bd0cd",
"assets/assets/period_tracker/4.png": "24a73513189028e13c473d4716b5efd3",
"assets/assets/period_tracker/5.png": "022cb3714b40c5bdcf15540e91e434f2",
"assets/assets/period_tracker/6.png": "3fe41c1c547682c7ef56ea466a5a8cd0",
"assets/assets/period_tracker/7.png": "1f63dacd7f25426520636a13a992292f",
"assets/assets/restaurant/1.png": "c58a4f01aeb4b4da98898957ca4a7808",
"assets/assets/restaurant/10.png": "bbca861cbc0140c520015e85c556ac20",
"assets/assets/restaurant/11.png": "ebf530345a2e8bb62e6018a35ce88e66",
"assets/assets/restaurant/12.png": "91b5f44fb48fb0ccac0ff747774aa2ea",
"assets/assets/restaurant/13.png": "6a361f1cae1e16e377a2e9d29dc0acbc",
"assets/assets/restaurant/14.png": "47ac2b2ade99bcc774d57b8b87125e5f",
"assets/assets/restaurant/15.png": "b414725b7d739d2e67ff54f83b0f4f32",
"assets/assets/restaurant/16.png": "983ad49368dcca1b9f90e2e4ee5318d0",
"assets/assets/restaurant/17.png": "96e52fd5d33c2af3569aa5ac179f1236",
"assets/assets/restaurant/18.png": "d1fe2cfc3f4ea072974f42c21451d65f",
"assets/assets/restaurant/19.png": "e66a8241558edd75a6d6d8dd1603384f",
"assets/assets/restaurant/2.png": "ac90a1c81c3114ebc88fab58b2c94a93",
"assets/assets/restaurant/20.png": "90670a878d7fea217b6dc05121aa7956",
"assets/assets/restaurant/21.png": "c4b376128295ba0a8d355876c586622c",
"assets/assets/restaurant/22.png": "7c77f3966f896758791fe3d917a0882e",
"assets/assets/restaurant/23.png": "d6879395b09c24474987098f48cc73e5",
"assets/assets/restaurant/24.png": "bf2ab357706dbd05650f51f4ff761abb",
"assets/assets/restaurant/25.png": "c8120bafaf8c0c6abe70ba4ed351d183",
"assets/assets/restaurant/26.png": "af061b0049ec33cbb8e6a46e5b3bcf91",
"assets/assets/restaurant/27.png": "33a2e5562bdd58cb1f2c9addc4d29d80",
"assets/assets/restaurant/28.png": "d6f4f6bdad738c90098a0976f3f13f99",
"assets/assets/restaurant/29.png": "44270b08de60ee70722ec78c7d38b5d2",
"assets/assets/restaurant/3.png": "b025825430d7606146347461c99cedc7",
"assets/assets/restaurant/30.png": "3ec405543b017b495e2dc942d9e45f9c",
"assets/assets/restaurant/31.png": "e5470a400f6aa1ca5bc2bd034e04f6dd",
"assets/assets/restaurant/32.png": "12ae7864b924ce45eee2ac2081ff26fb",
"assets/assets/restaurant/33.png": "2b1735bb3fd29e99d2923670fb9c7906",
"assets/assets/restaurant/34.png": "c084c0197821d1ccd996fbfbb05ba12f",
"assets/assets/restaurant/35.png": "0865eb9a7f0c7a5e19a20223c25614bc",
"assets/assets/restaurant/36.png": "79457182e95960c7f8cf2b97d01586f2",
"assets/assets/restaurant/37.png": "51cf4cdd2febdbda6696d98caf7017c9",
"assets/assets/restaurant/38.png": "5463fdd70a99c9bfcb421fbeba7bfe30",
"assets/assets/restaurant/39.png": "10fb49bfab32c7f7edb5c7404237033a",
"assets/assets/restaurant/4.png": "faa8a0bcc5a444ac33e418115ce20b96",
"assets/assets/restaurant/5.png": "70d962321d708470147f37a43ff8391a",
"assets/assets/restaurant/6.png": "f60dfbcc6a467ce60c36629d58e4d135",
"assets/assets/restaurant/7.png": "5f3c9afd91d23266fce97ae085d38d5e",
"assets/assets/restaurant/8.png": "578ea8f3a05c9d0be26b14616e55613d",
"assets/assets/restaurant/9.png": "456d6e5c41737b111af2e63d621ddeb4",
"assets/assets/tv/1.png": "d746fe64095aa508f84bc374d1f92486",
"assets/assets/tv/2.png": "bc11ebd208a75ff954ebc2e2cafc5252",
"assets/assets/tv/3.png": "af861aad77de7a3f39104f5fd63df7bf",
"assets/assets/tv/4.png": "ff26b11dbf0bf6253c9c95a1994ec829",
"assets/assets/tv/5.png": "7bb3174f7f2af28fd335e48780ae7fa4",
"assets/assets/tv/6.png": "e56a6369d1b806ec53b33909d0c0f9d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3f3ef8e994ec75911f78ab016cdf43f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "a3ad5f88b638b30812411b4e37920b48",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "a3ad5f88b638b30812411b4e37920b48",
"icons/Icon-512.png": "a3ad5f88b638b30812411b4e37920b48",
"index.html": "531672db4362376e01c884167d05ec41",
"/": "531672db4362376e01c884167d05ec41",
"main.dart.js": "db9c48655a2f2f01c993e0afcbc76834",
"manifest.json": "502168388c56809995e2f4fc21b8ad50",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
