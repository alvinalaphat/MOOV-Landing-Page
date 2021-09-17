'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "54bfddbbe755d307495f341d7ed8681f",
"index.html": "80bedc631f0ab41b81f492253bca280d",
"/": "80bedc631f0ab41b81f492253bca280d",
"main.dart.js": "909aed8ae1b8de44fd4dc0d204dfcea5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81055cc793a1481826cb4cce37b76b44",
"assets/AssetManifest.json": "fe0205840e9a58d1dacb640777b5e449",
"assets/NOTICES": "aa1b0fdace31cf094cfe92e492556265",
"assets/FontManifest.json": "7735189998bf436a6fe6d9cc012ffd63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/lib/assets/friendsIconWhite.png": "e2a7914dd241bd8803b8df5293acbf12",
"assets/lib/assets/placeholderbar3.jpg": "dfcda4115e06271974658a0e11af2a67",
"assets/lib/assets/runningGif.gif": "f3e4257cb4d06fef9b369f2f0456c069",
"assets/lib/assets/placeholderbar2.jpg": "da43937b4e253591d396a3f5e7e39aab",
"assets/lib/assets/trophy.png": "cd840f2dd12837e0f13acce940729473",
"assets/lib/assets/askJoin.gif": "864695fb01ceea616c7eeda767e58606",
"assets/lib/assets/incognitoPic.jpg": "eaba9a95c29822f1c1d5a140368ab9b7",
"assets/lib/assets/placeholderbar0.jpg": "f84d85f72e6ff65531b3b339cdf25640",
"assets/lib/assets/dashboard.png": "4f7d95c05d329e1343a35659cc8cecc0",
"assets/lib/assets/placeholderbar1.jpg": "3ddfd2204ac8c0e786de600b96c5e616",
"assets/lib/assets/mapIcon.png": "ee48501f4e88fd890f75aee3dfe5ba57",
"assets/lib/assets/marg.png": "b9427772ae6f2de0feb0707bc07ccfeb",
"assets/lib/assets/verif2.png": "c15d5bf1d661909b2d3ca4e0ca7c3658",
"assets/lib/assets/greenmountain.png": "2227c8b00745646fd3cead61395043bb",
"assets/lib/assets/mapIconWhite.png": "9e33ca38753675afc28097718ffe4e4d",
"assets/lib/assets/addMoney2.png": "313a7aaacfa328a356dfa4b3449ec748",
"assets/lib/assets/micGif.gif": "3dc758c0c8fbc334b6c98e65d5d55879",
"assets/lib/assets/bouts.jpg": "5438df60423f12e67e982e984e63d15e",
"assets/lib/assets/landingpage.png": "f063cbf7fbfde00673c75205d7125c4d",
"assets/lib/assets/mopass.png": "918def81862ca529a99bd82c2d0d7371",
"assets/lib/assets/readRoom.gif": "88421f958461a5b6cf0576df9ef51282",
"assets/lib/assets/placeholderfood0.jpg": "4a0370d22a19bf429c34b6ef2b053082",
"assets/lib/assets/moovblue.png": "a30fa870bee5a7c93df71519bef6b9ef",
"assets/lib/assets/middleFinger.gif": "0d04983656678252bb6d15ef39c711c3",
"assets/lib/assets/placeholderfood1.jpg": "67355dc0a766e644cbaeedee5b0b4d41",
"assets/lib/assets/ff.png": "87a0c8ac450732a9f8f9a0fadf5447e2",
"assets/lib/assets/moovmoney.png": "d96499942045dd5613407bfab03f556b",
"assets/lib/assets/chatGif.gif": "c00f3981c7596bab24635ca10a0942f2",
"assets/lib/assets/clubDash.jpeg": "6e5ec94fa193060e81503a7b2b63b37d",
"assets/lib/assets/placeholderfood3.jpg": "b7003c4c348398312c25f052f3dc4d19",
"assets/lib/assets/trophy2.png": "82d1e39fb55b41125053ab9bc813d039",
"assets/lib/assets/ghost.png": "418fdc5c55cadc036183f262d9d5d02e",
"assets/lib/assets/suggestion.png": "84144aa513bb20b5a326a740616d0be9",
"assets/lib/assets/placeholderfood2.jpg": "1cfc68f5562c8f0c36f48983588cefa4",
"assets/lib/assets/incognito.png": "8b5d8509da2544346b5157fa3007dcaf",
"assets/lib/assets/addMoney.png": "af67100678880e4f7536dd75c9cce456",
"assets/lib/assets/motd.jpg": "c18f9bc720820d0a52ea52b85f36fc25",
"assets/lib/assets/venmo-icon.png": "82d526951209e7ce627b8a95f0649b07",
"assets/lib/assets/rateGif.gif": "014e8ac261127a1151b2084a6a1758cc",
"assets/lib/assets/readRoomTransparent.gif": "e658ac4d94b039f6a9a7b36e107406b9",
"assets/lib/assets/random.jpg": "84180943924e3b99cefccad12ecf75a6",
"assets/lib/assets/placeholderparty1.jpg": "eb903156522e035bd4920ae8df9dd677",
"assets/lib/assets/friendsIcon.png": "96831731500fa372928ef1b10707768c",
"assets/lib/assets/sausage.png": "c13a86f47593976a9d6caa837a0fa823",
"assets/lib/assets/placeholderparty0.jpg": "4b0d482ca0fa055a210f996651014520",
"assets/lib/assets/tux.jpg": "787ceb8fd095db8c616a5a5ff609255c",
"assets/lib/assets/appicon.png": "a30fa870bee5a7c93df71519bef6b9ef",
"assets/lib/assets/placeholderparty2.jpg": "b00f0790858f19dc9d581b2f7d2300e3",
"assets/lib/assets/ndMap.json": "9b9ec0edce1c1e413c4177bd81815ba1",
"assets/lib/assets/placeholderparty3.jpg": "20bc792ca4e0e07f7bb2ea0648571022",
"assets/lib/assets/lead.png": "3a8191cd7a21017a96ae0de89f9357b8",
"assets/lib/assets/verif.png": "10708461f63489fe6d1b455ecb73bb3e",
"assets/lib/assets/fg.jpeg": "c28b61d8669acac7a03f15d34757fc9b",
"assets/lib/assets/dashboardWhite.png": "66b9d5b2d8873570dd5cf4997355db5d",
"assets/lib/assets/clouds.jpeg": "15f187872705398533cee0096cbbbb31",
"assets/lib/assets/wachaIntoPics/bars.jpeg": "06d9135f5d9b61a54aa8090a2aefbbc4",
"assets/lib/assets/wachaIntoPics/sports.jpg": "0c1729a897f68afc87423776cbfe9e08",
"assets/lib/assets/wachaIntoPics/board.jpg": "b4503045ea73721259aaa6160f0ac689",
"assets/lib/assets/wachaIntoPics/new.jpg": "ee8568801cc03ed24fd480313a1a4afc",
"assets/lib/assets/wachaIntoPics/outdoors.gif": "41c48a647753fd62a99c684985d67570",
"assets/lib/assets/wachaIntoPics/shows.jpg": "8b023da4c8517f43bdf5654079f7a2f9",
"assets/lib/assets/gif_icons/bus_confirm.gif": "f6f754e53ae1a18f17775d65e99859a0",
"assets/lib/assets/gif_icons/food.gif": "c235f975b206ac55dc0f76deafc07f6d",
"assets/lib/assets/gif_icons/cup.gif": "844df2c3d51deef5cd398a52bc6b59d4",
"assets/lib/assets/gif_icons/money.gif": "082847ee34dacc7b0d7cc89455b4135d",
"assets/lib/assets/gif_icons/clock.gif": "a9d0bfda0fb7334f2cf3120a8f4b6d37",
"assets/lib/assets/gif_icons/rec.gif": "ff46d8441b3848ad44be7f895bdaeb77",
"assets/lib/assets/gif_icons/more.gif": "2eb64f23f0780392eaa71f956db65d47",
"assets/lib/assets/gif_icons/bus.gif": "cd684ffd3e484bbafc1579093b83518d",
"assets/lib/assets/gif_icons/notch.gif": "af116a159e8285374f280d06cb48da71",
"assets/lib/assets/gif_icons/camera.gif": "3d7f2af3df41ebeb402ca7838b48038f",
"assets/lib/assets/gif_icons/send.gif": "bac4cb74852b8523c4fed2a7a148aba5",
"assets/lib/assets/gif_icons/hangouts.gif": "2b93b29f89f875f8a9c52b4ccee3b40e",
"assets/lib/assets/gif_icons/shows.gif": "044d0423a248a760a1de4d3b146a0d06",
"assets/lib/assets/gif_icons/mass.gif": "9798a6b2d7bd5bef00ac1986b10aa343",
"assets/lib/assets/gif_icons/pin.gif": "918ee86fd07719dbacf9c858df31d537",
"assets/lib/assets/gif_icons/lock.gif": "d7a303626958e518d278b4ad2912ee01",
"assets/lib/assets/gif_icons/games.gif": "62d9f999018399bcab62f895c50c86ee",
"assets/lib/assets/gif_icons/service.gif": "0f5fe3941efe116fd248cfc1b4ba608d",
"assets/lib/assets/gif_icons/sports.gif": "0352016434c2298d38a24a6d31895cdb",
"assets/lib/assets/placeholderProfile.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/lib/assets/messageIos.png": "d24d77181a133cd7959fbb44b3a4d583",
"assets/lib/assets/tip.jpeg": "10cc06cb68bd130420a9f710e9a07557",
"assets/lib/assets/invite.gif": "5c33de0025af1c543584d2bf8c6df8d9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/google_pay_payment_profile.json": "f7be286f553407cac17f5cc93c8fa4cc"
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
