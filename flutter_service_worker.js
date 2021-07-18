'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7cdd9387b6c1571d5d6e245f3e7e6390",
"index.html": "7a487aef7967ad441cb2e08abb3257a3",
"/": "7a487aef7967ad441cb2e08abb3257a3",
"main.dart.js": "3d4f24dfb41e1d999a17a0cd43e60f7d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81055cc793a1481826cb4cce37b76b44",
"assets/AssetManifest.json": "4cb6f602f10ba419b5972c8e1c4f7dfd",
"assets/NOTICES": "d14d64143712426d70d2fcae546fc81b",
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
"assets/lib/assets/me.jpg": "eb860b4e569ac33aef25fb635bebb700",
"assets/lib/assets/gamesbutton1.png": "2d0e894a6d96b9b2cf3ae54ff7af3cc5",
"assets/lib/assets/friendsIconWhite.png": "e2a7914dd241bd8803b8df5293acbf12",
"assets/lib/assets/placeholderbar3.jpg": "dfcda4115e06271974658a0e11af2a67",
"assets/lib/assets/dance.png": "2a020ead1ba51f37d0526f786b7b23f3",
"assets/lib/assets/runningGif.gif": "f3e4257cb4d06fef9b369f2f0456c069",
"assets/lib/assets/music1.png": "0fc3ae2321e6b2b74338db9faff8e043",
"assets/lib/assets/placeholderbar2.jpg": "da43937b4e253591d396a3f5e7e39aab",
"assets/lib/assets/chinese.png": "4f6853add3eba6e0010f162b1fcebc3e",
"assets/lib/assets/trophy.png": "cd840f2dd12837e0f13acce940729473",
"assets/lib/assets/govbutton1.png": "2b6170c5d3268045157d19c26b5dd388",
"assets/lib/assets/launchscreen1.png": "decde570f0b13ab36576f93a8de30796",
"assets/lib/assets/incognitoPic.jpg": "eaba9a95c29822f1c1d5a140368ab9b7",
"assets/lib/assets/calendarBack.jpeg": "5dab4d5e50156cb929c1b1946085bdde",
"assets/lib/assets/placeholderbar0.jpg": "f84d85f72e6ff65531b3b339cdf25640",
"assets/lib/assets/dashboard.png": "4f7d95c05d329e1343a35659cc8cecc0",
"assets/lib/assets/placeholderbar1.jpg": "3ddfd2204ac8c0e786de600b96c5e616",
"assets/lib/assets/mapIcon.png": "ee48501f4e88fd890f75aee3dfe5ba57",
"assets/lib/assets/marg.png": "b9427772ae6f2de0feb0707bc07ccfeb",
"assets/lib/assets/partybutton1.png": "ef244b6a565ed4f577255bd23bcecfa4",
"assets/lib/assets/studybutton1.png": "5fab308cafef60e4a936af59665c38be",
"assets/lib/assets/dummyqr.png": "4b5bf412543bdefdf05601dff1f93ddd",
"assets/lib/assets/club2.png": "022dc58312a89cf9c04b7dffca412088",
"assets/lib/assets/verif2.png": "c15d5bf1d661909b2d3ca4e0ca7c3658",
"assets/lib/assets/fire.png": "f8f45a96e558dea77c1d69f4f876a4bf",
"assets/lib/assets/relax.png": "0bf5811baf3cc836f8474ede40bbde6e",
"assets/lib/assets/greenmountain.png": "2227c8b00745646fd3cead61395043bb",
"assets/lib/assets/mapIconWhite.png": "9e33ca38753675afc28097718ffe4e4d",
"assets/lib/assets/otherbutton2.png": "e562d1ae370bdb2658e8ee2ddf3a809b",
"assets/lib/assets/friendfinder.png": "eaef09f4a39aad9d3f98a63c547f07d3",
"assets/lib/assets/food5.png": "be63c2105bd461b058e02e5efdc849d0",
"assets/lib/assets/clemson.HEIC": "0d22c431b92838810069fce284f46c52",
"assets/lib/assets/bouts.jpg": "5438df60423f12e67e982e984e63d15e",
"assets/lib/assets/otherbutton1.png": "aba1ebc08023976f307a5bdebc5cac27",
"assets/lib/assets/editclub.jpeg": "3bbe3f01ea4637dda16c26ffba1ae774",
"assets/lib/assets/landingpage.png": "a8030182189f8989656eded276437dfa",
"assets/lib/assets/moovlogo2.png": "7e6a4c8819588d9f118d3582c954063b",
"assets/lib/assets/mopass.png": "918def81862ca529a99bd82c2d0d7371",
"assets/lib/assets/placeholderfood0.jpg": "4a0370d22a19bf429c34b6ef2b053082",
"assets/lib/assets/moovblue.png": "3bec1a955aea4463769d50e85f72ece9",
"assets/lib/assets/popularSpots.png": "5fc74531151a0ca3cc6d3e7e60bcc09c",
"assets/lib/assets/middleFinger.gif": "0d04983656678252bb6d15ef39c711c3",
"assets/lib/assets/placeholderfood1.jpg": "67355dc0a766e644cbaeedee5b0b4d41",
"assets/lib/assets/ff.png": "87a0c8ac450732a9f8f9a0fadf5447e2",
"assets/lib/assets/moovmoney.png": "d96499942045dd5613407bfab03f556b",
"assets/lib/assets/foodbutton1.png": "9099ad2eeb629a720673f3885224e39b",
"assets/lib/assets/clubDash.jpeg": "6e5ec94fa193060e81503a7b2b63b37d",
"assets/lib/assets/moovheader.png": "d56765998d54e18cb0e75f4f28de8a62",
"assets/lib/assets/pete!!.jpg": "6be72f006fd38aadcdf6f84e19367648",
"assets/lib/assets/placeholderfood3.jpg": "b7003c4c348398312c25f052f3dc4d19",
"assets/lib/assets/trophy2.png": "82d1e39fb55b41125053ab9bc813d039",
"assets/lib/assets/headerNoWhite.jpg": "03c703e71633446159459840fd8be2f7",
"assets/lib/assets/SomethingNew.png": "34fd5b3e776f86b0fd87e336deae98c9",
"assets/lib/assets/ratioChart.png": "ff91d4002fc924f9b2fcb510e5848398",
"assets/lib/assets/ghost.png": "418fdc5c55cadc036183f262d9d5d02e",
"assets/lib/assets/suggestion.png": "84144aa513bb20b5a326a740616d0be9",
"assets/lib/assets/placeholderfood2.jpg": "1cfc68f5562c8f0c36f48983588cefa4",
"assets/lib/assets/BrothersLogo.png": "a1ba782c8e10ee6808cb66d6a4408253",
"assets/lib/assets/incognito.png": "8b5d8509da2544346b5157fa3007dcaf",
"assets/lib/assets/bag1.png": "fff77faad7d4c184cffa51941a0bc541",
"assets/lib/assets/dorm1.png": "575071d54ff11f2e63b6116004e90943",
"assets/lib/assets/motd.jpg": "c18f9bc720820d0a52ea52b85f36fc25",
"assets/lib/assets/venmo-icon.png": "82d526951209e7ce627b8a95f0649b07",
"assets/lib/assets/colorGrid.png": "f9302c627da9c6d48169e07837ea0efb",
"assets/lib/assets/blockedOverlay.jpg": "c1b819efb485d1118885d348b34abaa0",
"assets/lib/assets/poll.png": "9328c786cffbfd549ceab11c0f52c34e",
"assets/lib/assets/header.jpg": "ff9fb93548dee69288bac5b9437ce720",
"assets/lib/assets/fg1.png": "aebe46804a4fd4a6f96cf4c868a929de",
"assets/lib/assets/virtual1.png": "b0fee139bd4ba2c6f5f34ec6821a023d",
"assets/lib/assets/random.jpg": "7e583f17177fe7d0fe370f2cfce7e261",
"assets/lib/assets/placeholderparty1.jpg": "da5ea920ba42de4d9ebd49757d0dc2f0",
"assets/lib/assets/filmbutton1.png": "9b01f7641f299244f0e5af9ecf860ae5",
"assets/lib/assets/friendsIcon.png": "96831731500fa372928ef1b10707768c",
"assets/lib/assets/sausage.png": "c13a86f47593976a9d6caa837a0fa823",
"assets/lib/assets/recruit.jpeg": "444b71e2167ff9dacf21bd34985078bc",
"assets/lib/assets/icons/HangoutsICON2.png": "f55428f0868492b92c0eeedcc976c463",
"assets/lib/assets/icons/VirtualICON.png": "d20e9cdad81e902bc9f1ae9d4f1db27e",
"assets/lib/assets/icons/VirtualICON2.png": "2c49b55a136cd03e07c7402480f11952",
"assets/lib/assets/icons/RecICON.png": "fc548ea5a7b8202a50a5b51259c5d62a",
"assets/lib/assets/icons/BarICON2.png": "917c2bc02898ca2f65bf9385ff409339",
"assets/lib/assets/icons/SportICON2.png": "0aed56d9de9adf597388eee97e6ca3e3",
"assets/lib/assets/icons/ShowICON.png": "169c4b2887300d7acce1a928b0eb8ae8",
"assets/lib/assets/icons/RecICON2.png": "f636369f85a343a0c68cb429844cf19d",
"assets/lib/assets/icons/PartyICON.png": "4a9f03fa0840179ecf180cd14b961024",
"assets/lib/assets/icons/ShowICON2.png": "5a3756f552f7ab5cc5fe64a2972df138",
"assets/lib/assets/icons/HangoutsICON.png": "e4d6b9c2730c3fe9cd512d34daadaca4",
"assets/lib/assets/icons/ClubICON.png": "80a03559ea6126651ba1c8f59b44406c",
"assets/lib/assets/icons/PartyICON2.png": "768f88c7a84e39b72b7d44f86b36ffac",
"assets/lib/assets/icons/BarICON.png": "fa9689e76651ded4f945fe1db226b89e",
"assets/lib/assets/icons/ClubICON2.png": "1db7826d6ceb08146c9d3ec0839959b0",
"assets/lib/assets/icons/SportICON.png": "715fcafb34a90a707f458c9bd6d5f843",
"assets/lib/assets/placeholderparty0.jpg": "4b0d482ca0fa055a210f996651014520",
"assets/lib/assets/moovmoney2.jpg": "8a1d7382ac5521dc4b546144c8411482",
"assets/lib/assets/tux.jpg": "787ceb8fd095db8c616a5a5ff609255c",
"assets/lib/assets/massbutton1.png": "20c20ab6bf97e9cc66d7aed1cb5c4aae",
"assets/lib/assets/clubMeeting.gif": "7aa1ff8ce42808f5dfc276c3f48bec75",
"assets/lib/assets/appicon.png": "23558d10a816ee9cf242d5ef0c66de7a",
"assets/lib/assets/placeholderparty2.jpg": "1be2e8131bad1e4d3aded0ade99e5315",
"assets/lib/assets/alvin.png": "fad1cc09dcf986b56af2cfef24ebf078",
"assets/lib/assets/ndlogo1.png": "e8ab3a984685deb0b30537079afd19f3",
"assets/lib/assets/ndMap.json": "9b9ec0edce1c1e413c4177bd81815ba1",
"assets/lib/assets/placeholderparty3.jpg": "20bc792ca4e0e07f7bb2ea0648571022",
"assets/lib/assets/sendmoov.png": "9c51a6ff2b672ea0972e609152020680",
"assets/lib/assets/welcomePage.png": "ed82ce430a13a13bdd49ba1ce006ad12",
"assets/lib/assets/chens.jpg": "2efae027e4a9a68db6848421dfb1ea5d",
"assets/lib/assets/woman.jpg": "d4df9d8c8a2a9c48ccccfa263e2e808f",
"assets/lib/assets/montLogo.png": "91b045ea27b00aeae6ede369cb42cff0",
"assets/lib/assets/lead.png": "3a8191cd7a21017a96ae0de89f9357b8",
"assets/lib/assets/ndlogo.png": "8b994d3447b1540325bb5fc86fc1c07d",
"assets/lib/assets/mm.png": "ad6c5c986907abb66bf75614298ee995",
"assets/lib/assets/charitybutton1.png": "fda08c9ac8ee936af1edeccd9a80f74d",
"assets/lib/assets/verif.png": "10708461f63489fe6d1b455ecb73bb3e",
"assets/lib/assets/tailgatebutton1.png": "938da713a8ccc5c0191367cc34caa30b",
"assets/lib/assets/fg.jpeg": "c28b61d8669acac7a03f15d34757fc9b",
"assets/lib/assets/newfsLogo.png": "e0cc674b02680e719aee74d5da09f01e",
"assets/lib/assets/dashboardWhite.png": "66b9d5b2d8873570dd5cf4997355db5d",
"assets/lib/assets/rec.png": "de6cb76d6a43c5f76230bd5f21ece0a3",
"assets/lib/assets/plate.png": "5efa77186bd7ca39e06aae2bad562351",
"assets/lib/assets/egg.png": "4d5026d4123db686b704f548a0c74eed",
"assets/lib/assets/clouds.jpeg": "15f187872705398533cee0096cbbbb31",
"assets/lib/assets/sportbutton1.png": "d940316f5e3878ff983f25ac0353ed73",
"assets/lib/assets/wachaIntoPics/bars.jpeg": "06d9135f5d9b61a54aa8090a2aefbbc4",
"assets/lib/assets/wachaIntoPics/sports.jpg": "0c1729a897f68afc87423776cbfe9e08",
"assets/lib/assets/wachaIntoPics/board.jpg": "b4503045ea73721259aaa6160f0ac689",
"assets/lib/assets/wachaIntoPics/new.jpg": "ee8568801cc03ed24fd480313a1a4afc",
"assets/lib/assets/wachaIntoPics/outdoors.gif": "41c48a647753fd62a99c684985d67570",
"assets/lib/assets/wachaIntoPics/shows.jpg": "8b023da4c8517f43bdf5654079f7a2f9",
"assets/lib/assets/google.png": "52a05e731e61db85e7d96bf3f10d919c",
"assets/lib/assets/kilwins.jpg": "09680b53707a01285d1fe1c6bbaa4681",
"assets/lib/assets/bm1.png": "b127d6e1d66d0dc5d213ed6ae55e3940",
"assets/lib/assets/incognitoCircle.png": "21e37bebe2a54cfa7ff2702196473798",
"assets/lib/assets/badges/natty.png": "7120210475b1c72906cb28eaf6e87ea2",
"assets/lib/assets/badges/10friends.png": "4e4645701930ca2e122aaaefe43a846e",
"assets/lib/assets/badges/mountain.png": "f105e810449949c8ca27ad90e7b28157",
"assets/lib/assets/badges/clink.png": "dc1af79f5b08513455aa53cf499bb568",
"assets/lib/assets/badges/moovMaker.png": "022b6f0a036fefbf5a472fd72dbf94db",
"assets/lib/assets/show3.png": "8f620c8be6d228cc30152e2736839e58",
"assets/lib/assets/party2.png": "9a3d5c81c1006872caaea42d66f5a73e",
"assets/lib/assets/tip.jpeg": "10cc06cb68bd130420a9f710e9a07557",
"assets/lib/assets/nd.png": "9088e4411e5fe71a8754320f6eb89afb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
