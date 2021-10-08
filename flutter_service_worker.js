'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5690b907c19d052eb278dff73645e17b",
".git/config": "51cdcd33c88c153bf5d21bc3cb2c01ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "215ef36fab01797773024984fbae1123",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56c2f76a274e460b8430d45b0357aaa4",
".git/logs/refs/heads/main": "ece58cf1b85f95a12e8bf0091b1ad218",
".git/logs/refs/remotes/origin/main": "0949f95ba53bb0c1d7d1c071c5a0ee99",
".git/objects/02/39d04867a6577b30dbe35ab84f0d0952d82ee8": "bd65b531eaccce8ea6bf89b8a6c321ef",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/17/16512f0e9b0ad7116a06021bcac673bdb74219": "026899ea67220bb92e7559eca57b3aae",
".git/objects/17/a722d22e16204bb2b99c41ee57c0bd3d657350": "1faa536c074cfb709501dbc1512db860",
".git/objects/1a/5e2ed0c183160ca0c37a0423c0708e1ca33e28": "189bbb26993607d6fccf18e0136a9130",
".git/objects/1b/3b5f827ffc03113cf0084d1f1c25fcc790d029": "7aeb00b5f8b394ae86883ea11ce926b4",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/434b799e5314e39297a0374e2e3a96c7a30deb": "932ca271042f1fe1ffbd4851ed4e5761",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/30/b67cf787760e2679205f540162503adf87e97f": "c1ace787f6dc8bb6233be7b3afc771fb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/8f0af3c404d692db8565eed1a3a227cc38df32": "dd8e26ebf8e14d5472f4d02402010db6",
".git/objects/36/0d3ba7a1e6aea88f249a5381df993ebfbfe1c1": "9a7ff7da6098a212c1bc6dbacc7e8b55",
".git/objects/38/43f0e860a551d75769ceff46455a60132d96ed": "45490506cbc781586361176c1de6fdb5",
".git/objects/3a/6bbf6c200cf62866ba66b93c2179c6bb77c805": "2fc7b1b6646b18794d3f046783b687eb",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/41/2b90b41c8f41fbddb534dc6c35d79d4de9d04e": "539b9e62b73d18ac5ef32df63702c120",
".git/objects/46/013de2d134eb1f1ca6d05d961b48b9ba7f404d": "2da0bda0620ec76df481ba86257cbd25",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/49/65b80aea694149278bdd876bea78bcd4ad77e9": "a9c37f8857e385a673598dcc56dbbe1a",
".git/objects/4b/89bb919b55da86930dbbdcdc0e384c60b5b13d": "88bbcea6166632193801605da9d43866",
".git/objects/4c/e9ce5d1b9c8747102808f5d87ff6ce281fcdc6": "90f9e6dd2e4a8ee89534ecb68501e5a6",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4f/3c1345d7a69d5b1fe154c2fa445b45bad67126": "256b499aa5659409014e969acad2ae75",
".git/objects/52/53fba0075ca8880c9cc98417447fb43d098f56": "c332663b9fdd4a58e7bf1edd222c9258",
".git/objects/55/25776ac9458c99f351240e3cd678e5e9685272": "9271a84ebb283751a00efbfe9de378e8",
".git/objects/56/eb76d7929f71e87b60863e8b8cddf8b91b8822": "378fc6dd039ac9b29bf808590bf6b5e9",
".git/objects/5c/fec509c6fc40c30dccf959a861ebc7170a5b6d": "6c8c07f3d94e936df963f479375d7bc1",
".git/objects/66/9f3c65b2a47ffbc1cc5a5be7efeac7ce5dc5b0": "5d17dc183a54743b2bc3f15b18633b59",
".git/objects/66/ed647c0ad87dc4df2bb997733c05e8efa3ca33": "560f00244eb22aad855e8bee627ca386",
".git/objects/67/5c092ddee178a8b089b529cf07a80aa1dedcac": "d4301bf93eee95307b2ee6138fdecb7e",
".git/objects/69/39df95d99c1c5c9904153504239529af07af46": "5c701f24e120ce1ad7c17db43854d55b",
".git/objects/69/5be4fd45c7277556449983e257be98c4d7657c": "2d677688693ee5b62136bd7ca150b501",
".git/objects/6b/25aab73f80f208660fa1ab53c333eecb154c2e": "fed03233674e001b539f2bf129c93fbc",
".git/objects/6d/a9f33b3ca7a1056a0c9fe7a93501053d90808e": "d20b92a686451d13f8e6063977b97eb5",
".git/objects/75/6aa07ba26291d935828a72427e32af11fcb2a0": "8b22bcca236711adfb55976459af47fd",
".git/objects/78/708ad2c5c2de84c5fc2652c625108f37e917a3": "9d20d5f0d5fc9070a67d03a389841105",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/375265a0fe1485b4c880001fc065ec64df7b78": "6082e34085386ecbfda7e1c8f31d8051",
".git/objects/7d/b0405432220b0371ea0ab688598dc8e33b70f7": "430e3a45fb3dfd30ed4dba5c9bf1b0dd",
".git/objects/7d/dc0f4a07a9da11e051b9cd2d91a149fa783270": "b5e4d8dbcced72754be3b4d0ecb662c8",
".git/objects/82/274cd0c93859797bbf180f9d111bdcfea3d695": "5eaa00cc6655f075dd11a276c8dfcd74",
".git/objects/82/e0ef196bea4390fd95c65f412dd6bb45708140": "67e43973972ffb990fda7a77f539dd85",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/85/085f324d553d1f0eb7df3a822a0f96b9a2f458": "62ff9c343a882d64897c709d18817ba8",
".git/objects/85/5dfe6e0d0b1915f1419a03c9f23e4a30a203b7": "2e61384b92b9fc6f991010dc49d3ed4a",
".git/objects/86/1e8fc79e3e249cf5fc9a229472993fd85fc4bc": "5a9cf1122ddb96c963bc7636b3df3116",
".git/objects/89/cda5d1b2cefa131eb60e42639053043cf041ee": "beb6d6407a9882c318bf25ec25fdf9c1",
".git/objects/8b/a1974cd6ee8a8031f416951803e10a8e7b5881": "7fdd42e90ef1079f78df5743092a9ca5",
".git/objects/8c/8c3b8bd258c01b6f59f1aebea278fa420bd0c6": "f47f29bd352a986fdc494f8c703fa6de",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/464051b12ce45c12e728b9bed3a987eef53f02": "5139f0dfd719bcbb06533551761c8dd0",
".git/objects/92/a8b47326a3c0f920c72429e35407ef92b60dfe": "4d0118c1aea0df3894b864a3006133d1",
".git/objects/95/e0c22add56e78df6879ad747ecb582645f2699": "aef90d9edfbd7524798c0d1dd32df403",
".git/objects/9b/1fd4d642863e3e335e0e20c8021d87f182f244": "382f36eb44156c0d0f08be2331283ed7",
".git/objects/9b/3e1f2a2b6a1412bdbe83bda5250b8eed27bb19": "48987399290dccef9d6f8eda43a09efa",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/fd7811bb55efa07b32673401f1ee827a7674aa": "ebcde14c1e888614ce5a45fd35cc84f4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fa5ffda13f85843c0c431341b0e871b3a3dbfb": "ff2fca55385a096bb2ddc3763a5147af",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/35d537308eb56e3b379d40df13f8d2b35767f6": "1d33f8ed06cd2ddf26590d0bf2d09ea2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b1/979c84b530ce0c7feef706ebd18a51bbe1d18f": "7e49c49987ccf58e8968f2472cbd897e",
".git/objects/b3/f42518db047e8839afb5aeefe511d4f999a122": "35b1b241c93534f492ba230e4ba8b945",
".git/objects/b6/1ec9d031656483a8d6315dcca8a3e0e1f1494b": "7d01bee0dbb1143268a11bb8304213fa",
".git/objects/b8/c7225fc07763fa5e10e6b025671beeb2aa3916": "767552d90a8d223827a34fccca9e9e1a",
".git/objects/b9/4cdcf8c9095361488c534d5823837fba4f8c44": "94c56ecb6d5f9d47210520d60d7144ea",
".git/objects/c1/3a6dbccfa04d533cace6b1b639b16177fac228": "d132301bf4dbc65d55fae8e7f42aa9b6",
".git/objects/c6/d0cffc08def1ff2014641631748a58213885d8": "96aa866bc9081eb2f992d090ae986c4f",
".git/objects/c8/76908880a883176e2faa10f2b106ec3b78005d": "9723faad417fff108fc87ec748d135f9",
".git/objects/c9/a34a170f077e8066bc4f5875bc916d6fd150e6": "56a776c6965bbebab93c62884c5410d5",
".git/objects/c9/e1e4f6f06453c0ee545b0f60991d0f84e910d8": "df1683cf1fec1317da9794ebda0eb881",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/ca/b0d6447aba4d3ec9fd52be1fc89db38f7a3a6c": "b0ae29a26816b6a46e06ae6babaacdd7",
".git/objects/d1/6bcf7b4f39b7904f82349d133e690027ddc7d2": "bebbd6cb8390206d0dae3e9778956d75",
".git/objects/d5/e8655fa55fd0c329fdc2b76b816110c78d39f6": "fc14e177d2769ab65cf526fc8ea31e6f",
".git/objects/d8/af13798af44678cb807421ed6be461df7ba061": "b5622476dca202c7d2a40dbb224d65d9",
".git/objects/db/11118ddf0b146058f1aa4a2d3d73425489c9d3": "0c32c39fb6e7ee0fa3ac32fd4c97ae65",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/82db09711a9001a489854f0164e94a4d4da24a": "38a8a7586ce55103e2ff6f5b1e73cf6b",
".git/objects/e8/0ff295c433233b2ec6bf7c22e8c2fee965ccec": "1f0598891ac8823c9592a5debee06280",
".git/objects/ea/65207e2032a327535d8310e4b6df618ec9b060": "c7d99c309951da03a81add1a4f158a47",
".git/objects/ee/ee4284e97e6af4d7fee45f21d39564662509b7": "54c1e3136e1c238034bfbd96d033e8dc",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f1/c5eb6deea8c80c9f8ef5284b85fde1d44f212d": "df92043b2020b42e51ef6be0020f9b69",
".git/objects/f3/bea5c5ceaf01756d91de294d1963627743c8ac": "84e7cbd39e3ad8e8b5f241f91f904381",
".git/objects/fc/2d229e2d17360976e142f59d58ec13e2f1ddda": "7b7d4ddc79519a14d1a316b09cd88e3d",
".git/refs/heads/main": "714c70b44e98ad7759a8d0720c72cd0b",
".git/refs/remotes/origin/main": "714c70b44e98ad7759a8d0720c72cd0b",
"assets/AssetManifest.json": "e8d249ba12342f593887c63a5ff3c663",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/21.png": "f528465a93c9b9522eb632673a4348c9",
"assets/assets/3.png": "4f2e1db7b6d28b1ad85d6b60e36a36a2",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/1.png": "1cb71dd8e1f9e2daeab241e98a554ac1",
"assets/assets/projects/1p.jpeg": "c8335efb62ad1d59635c99bc327b35e8",
"assets/assets/projects/2.png": "8820cbbda83f026f541011c584151f2f",
"assets/assets/projects/2p.jpeg": "6b79b125982697822a9ef5f8b4058004",
"assets/assets/projects/3.png": "ccd5ac6559d2c3647b3a13edde167fbb",
"assets/assets/projects/3p.jpeg": "6dec9ac870a0c0e0a663a4d198de4e6a",
"assets/assets/projects/4.png": "677735f52d3149d3c3cca119c61dcb7a",
"assets/assets/projects/5.png": "c342c5df9a9814ad3e6cd36708c9186f",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d6159ada2a79249622caf04e288e825d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "57838d52c318faff743130c3fcfae0c6",
"icons/Icon-192.png": "57838d52c318faff743130c3fcfae0c6",
"icons/Icon-512.png": "57838d52c318faff743130c3fcfae0c6",
"index.html": "42f452d6b3db63297696141efbfd9428",
"/": "42f452d6b3db63297696141efbfd9428",
"loading.gif": "926310caa619c247a2b13b4fb0c9a9be",
"main.dart.js": "92a24543c551867c7d7c0da4d9db55e3",
"manifest.json": "107ed63498eb0b17095861b3083f0fd5",
"style.css": "eae818eed5634b806106636b9109d897",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
