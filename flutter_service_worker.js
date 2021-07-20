'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7cdd9387b6c1571d5d6e245f3e7e6390",
"index.html": "275504ba301cb46c411595cb825ccc5c",
"/": "275504ba301cb46c411595cb825ccc5c",
"main.dart.js": "02e4de55025fa9370b850fa104909054",
"cors.json": "bee071e39edafe3b491f72ad8427064b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81055cc793a1481826cb4cce37b76b44",
"assets/AssetManifest.json": "1a8077949d9c80af20b9ae26498f8ad6",
"assets/NOTICES": "be132764e444488a70d2d95366e47a1b",
"assets/FontManifest.json": "7735189998bf436a6fe6d9cc012ffd63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"assets/packages/pay_platform_interface/pubspec.yaml": "5560a47d560610d5fda44a4b8d423776",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/pay_android/assets/sl/subscribe_with_light.svg": "09303fe49857acf4d66db45639ec576d",
"assets/packages/pay_android/assets/sl/view_in_dark.svg": "39e40accf94e4c38688e9c427a4cdaf5",
"assets/packages/pay_android/assets/sl/donate_with_light.svg": "7f0e43ba8a703f48e8195b68bd0d4e93",
"assets/packages/pay_android/assets/sl/pay_with_light.svg": "732fb265ab0ce78394e4dde950e7c85e",
"assets/packages/pay_android/assets/sl/pay_with_dark.svg": "c7cddaada386df58279b4fc6f20578af",
"assets/packages/pay_android/assets/sl/checkout_with_light.svg": "727b7651bc9c6d1aa30c2e82d7f6d208",
"assets/packages/pay_android/assets/sl/book_with_light.svg": "b11c72cd103a797250e921931b66a960",
"assets/packages/pay_android/assets/sl/checkout_with_dark.svg": "fc82e7f5279d78533147fb6016d743b7",
"assets/packages/pay_android/assets/sl/subscribe_with_dark.svg": "ad6c0766f3fb6a5e9470fb97c5c49059",
"assets/packages/pay_android/assets/sl/donate_with_dark.svg": "b909f0bec21bdec558fc4b84e6bb32b8",
"assets/packages/pay_android/assets/sl/book_with_dark.svg": "f6fcf61d346bb895374e49130d9f8cfe",
"assets/packages/pay_android/assets/sl/view_in_light.svg": "afc668b2c690df41f2215cfe9b708251",
"assets/packages/pay_android/assets/sl/order_with_light.svg": "cd2f02e812c60bc84c8525663f50ae83",
"assets/packages/pay_android/assets/sl/order_with_dark.svg": "134438a581c6ecb33cc4f8565767523c",
"assets/packages/pay_android/assets/sk/subscribe_with_light.svg": "9cdeed41ee05fedb2ccebea8afadeadd",
"assets/packages/pay_android/assets/sk/view_in_dark.svg": "398f0d2a650d4564c31ee0d0ab3edbf6",
"assets/packages/pay_android/assets/sk/donate_with_light.svg": "c6946e540c3322e5f872bd666a326857",
"assets/packages/pay_android/assets/sk/pay_with_light.svg": "7ee02b63389cfd25075b6f557b1387ac",
"assets/packages/pay_android/assets/sk/pay_with_dark.svg": "ab08bfd1946fc34152f401e0fb29332e",
"assets/packages/pay_android/assets/sk/checkout_with_light.svg": "856c3cfe1fa603ccb5d775a85b595218",
"assets/packages/pay_android/assets/sk/book_with_light.svg": "9a9d5a2a327968402ef791cc912509e0",
"assets/packages/pay_android/assets/sk/checkout_with_dark.svg": "433247f42e412cd15bde220f40abb4cf",
"assets/packages/pay_android/assets/sk/subscribe_with_dark.svg": "487831462f2594b22cf25869614408a2",
"assets/packages/pay_android/assets/sk/donate_with_dark.svg": "c0d4e265d9ec92a18ad089ddcc1ba94a",
"assets/packages/pay_android/assets/sk/book_with_dark.svg": "ae9095cb0df57c3d9b94e97202f7b281",
"assets/packages/pay_android/assets/sk/view_in_light.svg": "53a9cd0c42b2dd01ad3673a7fa0e1b1e",
"assets/packages/pay_android/assets/sk/order_with_light.svg": "ab6435e2af425d52111cfca3eaa5be67",
"assets/packages/pay_android/assets/sk/order_with_dark.svg": "6385eaade7a5ae9cd20aa9bc3a457074",
"assets/packages/pay_android/assets/pl/subscribe_with_light.svg": "ba4b97f739fc0dcb7109e509d0eb1733",
"assets/packages/pay_android/assets/pl/view_in_dark.svg": "a710404ae3ed808ca1e41be5fad3d852",
"assets/packages/pay_android/assets/pl/donate_with_light.svg": "d8eb932b73de9facb8a53abfaf85ff3c",
"assets/packages/pay_android/assets/pl/pay_with_light.svg": "6497e6962d2dc0a8136d9d0dc70a3489",
"assets/packages/pay_android/assets/pl/pay_with_dark.svg": "a885c3216a3d80953f8534a3aef81a5f",
"assets/packages/pay_android/assets/pl/checkout_with_light.svg": "1bf4bdef1b22e4d94e4ff63f921ee082",
"assets/packages/pay_android/assets/pl/book_with_light.svg": "e3d76d08ef81c528595566cb30f64f7b",
"assets/packages/pay_android/assets/pl/checkout_with_dark.svg": "dce3459c7b5218f7777bbfea5f757e8b",
"assets/packages/pay_android/assets/pl/subscribe_with_dark.svg": "b706868e61f92debf0bd8f97e40935ee",
"assets/packages/pay_android/assets/pl/donate_with_dark.svg": "18df87f9dc2ec56fc5452faf62b47b4f",
"assets/packages/pay_android/assets/pl/book_with_dark.svg": "2894d572f23b7b526ebd2199b5e42f50",
"assets/packages/pay_android/assets/pl/view_in_light.svg": "9a544ecb573f8e06bd2842316674f214",
"assets/packages/pay_android/assets/pl/order_with_light.svg": "7378c64733e2b08eabd489590ca83837",
"assets/packages/pay_android/assets/pl/order_with_dark.svg": "b6e356acb9e0496146c50f452359741a",
"assets/packages/pay_android/assets/sv/subscribe_with_light.svg": "4ca255bf385bd2b6eea1cecd5589a618",
"assets/packages/pay_android/assets/sv/view_in_dark.svg": "7debf85a17e8c54df666af5488f9e996",
"assets/packages/pay_android/assets/sv/donate_with_light.svg": "7cd44dc5432456e4c04342673c6da514",
"assets/packages/pay_android/assets/sv/pay_with_light.svg": "32b311a96183131da1a37e851e201b18",
"assets/packages/pay_android/assets/sv/pay_with_dark.svg": "b1ba4a6643bf9ed444f269d7c77aa491",
"assets/packages/pay_android/assets/sv/checkout_with_light.svg": "192388b1e3fc232335dea8954b9a50ed",
"assets/packages/pay_android/assets/sv/book_with_light.svg": "0bbb28c73696db48d3e65a73b0a1626e",
"assets/packages/pay_android/assets/sv/checkout_with_dark.svg": "53e7e3d0bbd7ead6597af15718bea234",
"assets/packages/pay_android/assets/sv/subscribe_with_dark.svg": "375e0494adbe84894c93b6c51aaee9f1",
"assets/packages/pay_android/assets/sv/donate_with_dark.svg": "5e7fe300de4a910f13387ca0efd3b414",
"assets/packages/pay_android/assets/sv/book_with_dark.svg": "ca6944f9ecb039760c2c1ec81869e8d7",
"assets/packages/pay_android/assets/sv/view_in_light.svg": "04cbc6e03dab2740e0ec16bd79d435aa",
"assets/packages/pay_android/assets/sv/order_with_light.svg": "b7c3fedf6dd06814f712c79e6086bc08",
"assets/packages/pay_android/assets/sv/order_with_dark.svg": "bc67e49d84712ffedf346b87456895bf",
"assets/packages/pay_android/assets/ms/subscribe_with_light.svg": "26c837aa6f1e9b73af3c59b70c522ce9",
"assets/packages/pay_android/assets/ms/view_in_dark.svg": "ae1b62eac8103f98794b5c1ead7f76fa",
"assets/packages/pay_android/assets/ms/donate_with_light.svg": "02d4a735bd0266a5a850b9b722546c4d",
"assets/packages/pay_android/assets/ms/pay_with_light.svg": "a711a5f81f09264b8574191c4a0f1c65",
"assets/packages/pay_android/assets/ms/pay_with_dark.svg": "e5c466b739ebce5c023f1e0f2e127665",
"assets/packages/pay_android/assets/ms/checkout_with_light.svg": "955abd9dd63ca87647d9f201de909843",
"assets/packages/pay_android/assets/ms/book_with_light.svg": "2c99482ccc06f81847db40afe645c258",
"assets/packages/pay_android/assets/ms/checkout_with_dark.svg": "73bde2cd28620c4953647d1ca0b37055",
"assets/packages/pay_android/assets/ms/subscribe_with_dark.svg": "8273f2049db37de19b0a2dfd0467acfe",
"assets/packages/pay_android/assets/ms/donate_with_dark.svg": "b5f8c39c7a9c6b0e0a17eb28b83e4b69",
"assets/packages/pay_android/assets/ms/book_with_dark.svg": "cdd2c3f23c2fc5562e113032e6b1a2ff",
"assets/packages/pay_android/assets/ms/view_in_light.svg": "f544baa62d7d158a5f5c4291819fbc0b",
"assets/packages/pay_android/assets/ms/order_with_light.svg": "390883ab8479a440ab485e0b3a9cf87f",
"assets/packages/pay_android/assets/ms/order_with_dark.svg": "93c23e107607984c4185e110610c7530",
"assets/packages/pay_android/assets/gpay_logo_light.svg": "abae2ee3616a428a70cc20584b3e00ce",
"assets/packages/pay_android/assets/da/subscribe_with_light.svg": "f44877fac9418ea929f5426e9be0d9eb",
"assets/packages/pay_android/assets/da/view_in_dark.svg": "74329d78ffe492c5acb835477e469fd8",
"assets/packages/pay_android/assets/da/donate_with_light.svg": "7d642fcc2933620913b45337e73ca443",
"assets/packages/pay_android/assets/da/pay_with_light.svg": "51b9665bd666d1ec12407f109d06fd36",
"assets/packages/pay_android/assets/da/pay_with_dark.svg": "bc2c1c88c24d2ce9d8defdedc85774e8",
"assets/packages/pay_android/assets/da/checkout_with_light.svg": "272fae07c93dd4da5d0029ab063d85c3",
"assets/packages/pay_android/assets/da/book_with_light.svg": "a64c327034f3c2a552c058c49300e93e",
"assets/packages/pay_android/assets/da/checkout_with_dark.svg": "243fc012801622e4e0dbb6acc23d03a5",
"assets/packages/pay_android/assets/da/subscribe_with_dark.svg": "af15276a9a74c1151c46af7cf9504cfa",
"assets/packages/pay_android/assets/da/donate_with_dark.svg": "7d760b31cee484652e73eb5b431cb010",
"assets/packages/pay_android/assets/da/book_with_dark.svg": "e276fab3e4c0bc6a45cb2ee802375bfa",
"assets/packages/pay_android/assets/da/view_in_light.svg": "4373ff343f6807b60cf170f537c68cd9",
"assets/packages/pay_android/assets/da/order_with_light.svg": "d34f39d4afb717c5ac98e3a82280bc33",
"assets/packages/pay_android/assets/da/order_with_dark.svg": "13fc0123303697ca2c26b24b35f86936",
"assets/packages/pay_android/assets/no/subscribe_with_light.svg": "4722370743326f202ebd42b813b287be",
"assets/packages/pay_android/assets/no/view_in_dark.svg": "54b88e42b79bd5532a986d43d46a9ed3",
"assets/packages/pay_android/assets/no/donate_with_light.svg": "4b950706fc06016953d2e571eda43450",
"assets/packages/pay_android/assets/no/pay_with_light.svg": "10f8bd7ac4425acdc3b7e41af16aa9e8",
"assets/packages/pay_android/assets/no/pay_with_dark.svg": "00ab8ea6e2774c406cbef108b1523bce",
"assets/packages/pay_android/assets/no/checkout_with_light.svg": "f90177be82434db2abe3affcbc64502f",
"assets/packages/pay_android/assets/no/book_with_light.svg": "0d56a2330a4417e4d6d15de43a4b2cbe",
"assets/packages/pay_android/assets/no/checkout_with_dark.svg": "ef19e69d08670fdff3801e3287d36db3",
"assets/packages/pay_android/assets/no/subscribe_with_dark.svg": "1d3a39143e44dfe656be5f1964d140a3",
"assets/packages/pay_android/assets/no/donate_with_dark.svg": "c0db134b295389640768a3be9497ef15",
"assets/packages/pay_android/assets/no/book_with_dark.svg": "8d54b48c81493554aff44e67232fb8dd",
"assets/packages/pay_android/assets/no/view_in_light.svg": "4f1e981b1ccb11020db6d71a84fd2fc9",
"assets/packages/pay_android/assets/no/order_with_light.svg": "cdd40573f93c9d916d2169fc9ce8dac2",
"assets/packages/pay_android/assets/no/order_with_dark.svg": "07016503c82510fe3f630d657d068c03",
"assets/packages/pay_android/assets/gpay_logo_dark.svg": "3564204149c26f43d43cb236d4ff97a3",
"assets/packages/pay_android/assets/ja/subscribe_with_light.svg": "d371ba2d7f01baeed5a93cda650c6509",
"assets/packages/pay_android/assets/ja/view_in_dark.svg": "89b0ff6d179f58a3ae2369f5255f2cd8",
"assets/packages/pay_android/assets/ja/donate_with_light.svg": "1d57e54e5d3cd9f174823c1eb243c3b6",
"assets/packages/pay_android/assets/ja/pay_with_light.svg": "5cd2c575e2264cdcc61cf078b0786840",
"assets/packages/pay_android/assets/ja/pay_with_dark.svg": "a9073a26efa3309851c47f519a931908",
"assets/packages/pay_android/assets/ja/checkout_with_light.svg": "404b091b3965477c43ba80ec96ff393e",
"assets/packages/pay_android/assets/ja/book_with_light.svg": "ed7ae11af46092e9d2633ca558539163",
"assets/packages/pay_android/assets/ja/checkout_with_dark.svg": "8057bfd122a70f5a3df410ca05b50209",
"assets/packages/pay_android/assets/ja/subscribe_with_dark.svg": "09211fdfc2bca221f139e65a47543cd0",
"assets/packages/pay_android/assets/ja/donate_with_dark.svg": "91ec71f36f83ba9f2b76f7ff7a71c93e",
"assets/packages/pay_android/assets/ja/book_with_dark.svg": "cba0a01e6c573aad842c98a6e95e5725",
"assets/packages/pay_android/assets/ja/view_in_light.svg": "4c641760e5d3284336cfa2bbb1ed9788",
"assets/packages/pay_android/assets/ja/order_with_light.svg": "1f7c4c35ee77871f2865f13307ed8230",
"assets/packages/pay_android/assets/ja/order_with_dark.svg": "3afc1df5d1b72dd77cf5f2badd4248f7",
"assets/packages/pay_android/assets/el/subscribe_with_light.svg": "311452c7d7c564d45afe873894540cc7",
"assets/packages/pay_android/assets/el/view_in_dark.svg": "ca90fbc2d4d42a1259006f1654ef520a",
"assets/packages/pay_android/assets/el/donate_with_light.svg": "3e32436da2f232c1f96fa85d8824da45",
"assets/packages/pay_android/assets/el/pay_with_light.svg": "10df947a6b70c7c1a4ceb9954fbc135b",
"assets/packages/pay_android/assets/el/pay_with_dark.svg": "dfdbabdb3ba4aad4d4412942cc47443b",
"assets/packages/pay_android/assets/el/checkout_with_light.svg": "aaa4947ec01e9934acc97a4f2cb48bf2",
"assets/packages/pay_android/assets/el/book_with_light.svg": "907fd7fd58571084134118d9d793c59f",
"assets/packages/pay_android/assets/el/checkout_with_dark.svg": "d63c0e5749cb8c2d04609244fc60cb3f",
"assets/packages/pay_android/assets/el/subscribe_with_dark.svg": "428d58b309eca984a72226eeea17f736",
"assets/packages/pay_android/assets/el/donate_with_dark.svg": "77d5c83ec9baa59ec6b826e6f1e121fc",
"assets/packages/pay_android/assets/el/book_with_dark.svg": "c598448b1e1b50a8ac2aeebb3e1a771c",
"assets/packages/pay_android/assets/el/view_in_light.svg": "8ffddf4b91caeaa2722aa0651c3db97d",
"assets/packages/pay_android/assets/el/order_with_light.svg": "0b829894d1cbeff5c85af0e10563ea00",
"assets/packages/pay_android/assets/el/order_with_dark.svg": "57196875b348a00cef51598f54d68473",
"assets/packages/pay_android/assets/it/subscribe_with_light.svg": "219d2dda210c630313f7a3bf99bf19ba",
"assets/packages/pay_android/assets/it/view_in_dark.svg": "b324d587c16862c9196579ad887f10fd",
"assets/packages/pay_android/assets/it/donate_with_light.svg": "5dbe1b539543ab46dd535ccc4382cefe",
"assets/packages/pay_android/assets/it/pay_with_light.svg": "e0020f5f762d5a727a0c31a56d0adfdd",
"assets/packages/pay_android/assets/it/pay_with_dark.svg": "cf57363cf13ce04aea239a2ee3084d6d",
"assets/packages/pay_android/assets/it/checkout_with_light.svg": "f3c9c34efd3e467ebfdf3729e5089546",
"assets/packages/pay_android/assets/it/book_with_light.svg": "ffeefa1aa815271c026df2245d78d419",
"assets/packages/pay_android/assets/it/checkout_with_dark.svg": "ac58c3079101439aa3fb98beef639f75",
"assets/packages/pay_android/assets/it/subscribe_with_dark.svg": "4b1dfe12f3b819213a092ab11a7205ab",
"assets/packages/pay_android/assets/it/donate_with_dark.svg": "bbd24e42ce157126aadae9c223d0f59b",
"assets/packages/pay_android/assets/it/book_with_dark.svg": "34da39827c60b5e723f4721c80f24b1b",
"assets/packages/pay_android/assets/it/view_in_light.svg": "f6edcfb69fabdfa1ff4ba5f4324ea87b",
"assets/packages/pay_android/assets/it/order_with_light.svg": "ae56e860a2ff9cc8a6b2ce1154401d58",
"assets/packages/pay_android/assets/it/order_with_dark.svg": "88fc2f5ec08ad5da7dbcb9901befd24d",
"assets/packages/pay_android/assets/ca/subscribe_with_light.svg": "827a524eec5fcc16d0843ac092837ce2",
"assets/packages/pay_android/assets/ca/view_in_dark.svg": "32fc70f856aa6587e0e679a730223656",
"assets/packages/pay_android/assets/ca/donate_with_light.svg": "b4905cd1f4fad1593a2e0de02a2fcaa4",
"assets/packages/pay_android/assets/ca/pay_with_light.svg": "a6df1e2757a7ff58758f29b1a4a37515",
"assets/packages/pay_android/assets/ca/pay_with_dark.svg": "e6bb2eb54c0a1034f092dc8ec43d656f",
"assets/packages/pay_android/assets/ca/checkout_with_light.svg": "c15d085327df5026940bd56e0735dd62",
"assets/packages/pay_android/assets/ca/book_with_light.svg": "41558ae62823f4fa3286235f20eb14cd",
"assets/packages/pay_android/assets/ca/checkout_with_dark.svg": "ae5edf1049f6b52afbff1a20817c4d2f",
"assets/packages/pay_android/assets/ca/subscribe_with_dark.svg": "bc641e5045ae810b689ce9d39a604e7f",
"assets/packages/pay_android/assets/ca/donate_with_dark.svg": "6fed09fb1a7c1ea53352f2a6eb4e7e19",
"assets/packages/pay_android/assets/ca/book_with_dark.svg": "956ba498f3cb855a602d04405530e760",
"assets/packages/pay_android/assets/ca/view_in_light.svg": "3795e740cff80088b4456c7624edb003",
"assets/packages/pay_android/assets/ca/order_with_light.svg": "0e459d03868c384447939418324e028e",
"assets/packages/pay_android/assets/ca/order_with_dark.svg": "da74d1942c211b2b6808e8e98344096a",
"assets/packages/pay_android/assets/cs/subscribe_with_light.svg": "43eb8356aac47915acc18ba1b0dbd467",
"assets/packages/pay_android/assets/cs/view_in_dark.svg": "4f5de2e82668cc8587c833b9ae709676",
"assets/packages/pay_android/assets/cs/donate_with_light.svg": "23ef00da027e38f79e3a84161f3b04e2",
"assets/packages/pay_android/assets/cs/pay_with_light.svg": "388b74784dade8e1dde08b3690b1b415",
"assets/packages/pay_android/assets/cs/pay_with_dark.svg": "16f15a63c84a715319e9b08f1fb2ba73",
"assets/packages/pay_android/assets/cs/checkout_with_light.svg": "09e7b3f30f1f4a7705460e8e4e3076a8",
"assets/packages/pay_android/assets/cs/book_with_light.svg": "efa4e1e2bf2eb7e01d8938cbfb340d72",
"assets/packages/pay_android/assets/cs/checkout_with_dark.svg": "e0ab8b71b0ca78fc5d1fc463fa213b77",
"assets/packages/pay_android/assets/cs/subscribe_with_dark.svg": "bedc56b2c0e95431c3c7b24f8c8e28b7",
"assets/packages/pay_android/assets/cs/donate_with_dark.svg": "496e27e92914ff6a28df48125be53387",
"assets/packages/pay_android/assets/cs/book_with_dark.svg": "de71f2de1051eb9931c5eb4d7a517c19",
"assets/packages/pay_android/assets/cs/view_in_light.svg": "1427e790e1ca90eb27ceacc159f363a5",
"assets/packages/pay_android/assets/cs/order_with_light.svg": "81386b4d990ba3a38f4584f64366d28a",
"assets/packages/pay_android/assets/cs/order_with_dark.svg": "1711ff90691b2d9fe8e4a60018e52c92",
"assets/packages/pay_android/assets/ru/subscribe_with_light.svg": "7716e853eb09f4810f0d3b19695be319",
"assets/packages/pay_android/assets/ru/view_in_dark.svg": "8261a43c9508904e8aefc7c5b4ee28aa",
"assets/packages/pay_android/assets/ru/donate_with_light.svg": "60b1e377b26574733a56aa7a86fe8de2",
"assets/packages/pay_android/assets/ru/pay_with_light.svg": "6bf8cfe1624907965303697c006715ae",
"assets/packages/pay_android/assets/ru/pay_with_dark.svg": "2f16ca6a9f6ee33807c20ac7c19f93bc",
"assets/packages/pay_android/assets/ru/checkout_with_light.svg": "cd50493ea386c3bfd602b83092093150",
"assets/packages/pay_android/assets/ru/book_with_light.svg": "3e870af1a9493238b4a56f3dc0de88e7",
"assets/packages/pay_android/assets/ru/checkout_with_dark.svg": "8d833dd4bf328e6da21367d279de0022",
"assets/packages/pay_android/assets/ru/subscribe_with_dark.svg": "13567975aa2404f0e20375f365202149",
"assets/packages/pay_android/assets/ru/donate_with_dark.svg": "5949ad6885c128b3b4cf3acff9510418",
"assets/packages/pay_android/assets/ru/book_with_dark.svg": "9ceb0f2603d23ac9f5a26a92fd802af0",
"assets/packages/pay_android/assets/ru/view_in_light.svg": "af43c5b4b3489f8e0a5eaeaeb8159c1b",
"assets/packages/pay_android/assets/ru/order_with_light.svg": "5d05f2cb8a82556fd5462e7c13910057",
"assets/packages/pay_android/assets/ru/order_with_dark.svg": "106ef0b66d0e3c1ffd95af4ccea9da44",
"assets/packages/pay_android/assets/pt/subscribe_with_light.svg": "5d5b2fc7bb60aaa1dd249e6851ac588f",
"assets/packages/pay_android/assets/pt/view_in_dark.svg": "c872e44c9a7ab798e4da3c0d3f6c24fa",
"assets/packages/pay_android/assets/pt/donate_with_light.svg": "8123e0d7a86efb4aec6573b75395dcdb",
"assets/packages/pay_android/assets/pt/pay_with_light.svg": "577e96b023de7dcae3c5dbb929ee2616",
"assets/packages/pay_android/assets/pt/pay_with_dark.svg": "d92f26b9c41cbe05e232a6c3c44564ca",
"assets/packages/pay_android/assets/pt/checkout_with_light.svg": "5857b1f6cd2c1327fe470b5aad56fa01",
"assets/packages/pay_android/assets/pt/book_with_light.svg": "cf76883a20b891e5044b5e21e8a973b3",
"assets/packages/pay_android/assets/pt/checkout_with_dark.svg": "f4bb4db1759cbd1077715a947006e653",
"assets/packages/pay_android/assets/pt/subscribe_with_dark.svg": "84f71b4a73948fed28f573d7601f77d4",
"assets/packages/pay_android/assets/pt/donate_with_dark.svg": "bb4227174b41da23abb0c6bdc08e20e2",
"assets/packages/pay_android/assets/pt/book_with_dark.svg": "419917c9fa350ed55848690a486b0e28",
"assets/packages/pay_android/assets/pt/view_in_light.svg": "2b9b83f5c3c2d707200f7a47af22ee30",
"assets/packages/pay_android/assets/pt/order_with_light.svg": "81775bbd7647e2f6b3bf849ab12a8374",
"assets/packages/pay_android/assets/pt/order_with_dark.svg": "96b0aae80ce9b94e58a3711d9a299fd3",
"assets/packages/pay_android/assets/zh/subscribe_with_light.svg": "4472b468be881c99405c756499bc8d1a",
"assets/packages/pay_android/assets/zh/view_in_dark.svg": "1559a49911c710f125b3b67a9e0232d4",
"assets/packages/pay_android/assets/zh/donate_with_light.svg": "1dfcd01ffde96aaacf88fab46caf22b7",
"assets/packages/pay_android/assets/zh/pay_with_light.svg": "8c29aec84758809203850633d8befe10",
"assets/packages/pay_android/assets/zh/pay_with_dark.svg": "e16fd57e0cb788199ca54da17f0dc7d4",
"assets/packages/pay_android/assets/zh/checkout_with_light.svg": "f5fc591043d158b9e3b5c805196fc8d4",
"assets/packages/pay_android/assets/zh/book_with_light.svg": "40381b9e13482f7581787e561074254c",
"assets/packages/pay_android/assets/zh/checkout_with_dark.svg": "599c3bc42471a1e1b2f63672c8930b5c",
"assets/packages/pay_android/assets/zh/subscribe_with_dark.svg": "b9ff8ab508baf753f311fd9c401a52c3",
"assets/packages/pay_android/assets/zh/donate_with_dark.svg": "c0931d4209639c2f62f496467cab92c6",
"assets/packages/pay_android/assets/zh/book_with_dark.svg": "620e07f721e1960af0920e4b005110e5",
"assets/packages/pay_android/assets/zh/view_in_light.svg": "c732b3c7395bf8951a1c9877c7c0ea33",
"assets/packages/pay_android/assets/zh/order_with_light.svg": "faf54afd9e3cc6e0513b9b513de44594",
"assets/packages/pay_android/assets/zh/order_with_dark.svg": "b5fd050d84d8bc8ee6c85047730d2a29",
"assets/packages/pay_android/assets/uk/subscribe_with_light.svg": "d668801feabd0c958acf31c4065410fd",
"assets/packages/pay_android/assets/uk/view_in_dark.svg": "48f1bd65000439f4f1783b460773036d",
"assets/packages/pay_android/assets/uk/donate_with_light.svg": "b79c9ab5d7a7968d28dc1c94905cef5e",
"assets/packages/pay_android/assets/uk/pay_with_light.svg": "3b1f9fb7f301699c61d36fd790c44ed5",
"assets/packages/pay_android/assets/uk/pay_with_dark.svg": "940cd40c9de84b46d9dc76880953ef46",
"assets/packages/pay_android/assets/uk/checkout_with_light.svg": "4de4d92ec951e83bb1a4e14098d40338",
"assets/packages/pay_android/assets/uk/book_with_light.svg": "d6c9b9fbb4e59ed7fa3537b4a09009c4",
"assets/packages/pay_android/assets/uk/checkout_with_dark.svg": "7652fe458ec5c733b3dc09e5efca742a",
"assets/packages/pay_android/assets/uk/subscribe_with_dark.svg": "783a6ebf8f084c50a4cb7782fe9862e0",
"assets/packages/pay_android/assets/uk/donate_with_dark.svg": "2b3f6c85039debe75b5e8747c1ba5668",
"assets/packages/pay_android/assets/uk/book_with_dark.svg": "35afc997a1a4a1bfac5add9c2838b501",
"assets/packages/pay_android/assets/uk/view_in_light.svg": "52cad508aa764b77421d0c4f6143f1d0",
"assets/packages/pay_android/assets/uk/order_with_light.svg": "446db75aae5da31ce7732b23b66c2396",
"assets/packages/pay_android/assets/uk/order_with_dark.svg": "4499a868f4289451281112d00f3748c5",
"assets/packages/pay_android/assets/sr/subscribe_with_light.svg": "96a1e71f495bca00a6d136f5bf059937",
"assets/packages/pay_android/assets/sr/view_in_dark.svg": "596d4e7412ff66efa33f5caa44c853e8",
"assets/packages/pay_android/assets/sr/donate_with_light.svg": "34ea6b81effa46b0df5d9f8c36f31d9c",
"assets/packages/pay_android/assets/sr/pay_with_light.svg": "60f85a9d9ee87aaccda46062d992d952",
"assets/packages/pay_android/assets/sr/pay_with_dark.svg": "653c92de32641a236519c309934fd192",
"assets/packages/pay_android/assets/sr/checkout_with_light.svg": "2a8de5dfd963b37c7a328639f19ee0b3",
"assets/packages/pay_android/assets/sr/book_with_light.svg": "bfdafdc1b94783ae10d636903261e20a",
"assets/packages/pay_android/assets/sr/checkout_with_dark.svg": "cdb38a7a68a8602d5341a5bc189e3279",
"assets/packages/pay_android/assets/sr/subscribe_with_dark.svg": "f25ef7180352ec4dd1e830b022165128",
"assets/packages/pay_android/assets/sr/donate_with_dark.svg": "1b0ac53447313c2497612f7d7347ab5e",
"assets/packages/pay_android/assets/sr/book_with_dark.svg": "f39f65c17a725cf786e96d63acf91936",
"assets/packages/pay_android/assets/sr/view_in_light.svg": "980a291dc18da03ac1a0170bc4148df2",
"assets/packages/pay_android/assets/sr/order_with_light.svg": "a85195b49b052b8f803fafc02695c275",
"assets/packages/pay_android/assets/sr/order_with_dark.svg": "5a9aea3ef368c74457c3409df7f72335",
"assets/packages/pay_android/assets/buy_with_dark.svg": "9b6873f8f06c33dbfbcf1b5cd5ab3c96",
"assets/packages/pay_android/assets/buy_with_light.svg": "f5528e7809ce78d679e30b7821053388",
"assets/packages/pay_android/assets/ar/subscribe_with_light.svg": "3cf8996c3405dbb4618e92c5a840a8eb",
"assets/packages/pay_android/assets/ar/view_in_dark.svg": "883c025db4e9cb2bd0bfab4f38ece266",
"assets/packages/pay_android/assets/ar/donate_with_light.svg": "0b68c5047af8dc71925d9375b6887493",
"assets/packages/pay_android/assets/ar/pay_with_light.svg": "4c52bc60766c09dfdd0dfd20c1861f5f",
"assets/packages/pay_android/assets/ar/pay_with_dark.svg": "285c0a00d2db2f29fa4d09841fa953e7",
"assets/packages/pay_android/assets/ar/checkout_with_light.svg": "de8067420c7c9be96f03df8c4812b1cb",
"assets/packages/pay_android/assets/ar/book_with_light.svg": "7bc9e07b6fbe813a929d242019cbd774",
"assets/packages/pay_android/assets/ar/checkout_with_dark.svg": "abc2f2d1a0c75079407a04ce2d4eab66",
"assets/packages/pay_android/assets/ar/subscribe_with_dark.svg": "93fb6868df029a058934c3d87b8b7d49",
"assets/packages/pay_android/assets/ar/donate_with_dark.svg": "9b3a4652d4a2287982649981807ba03e",
"assets/packages/pay_android/assets/ar/book_with_dark.svg": "3bd2e94aa0271599fe2577d711467049",
"assets/packages/pay_android/assets/ar/view_in_light.svg": "f1366a3335b92c149ca01542b3e31bc4",
"assets/packages/pay_android/assets/ar/order_with_light.svg": "de1169e4746d94650ff6f8187e56c94c",
"assets/packages/pay_android/assets/ar/order_with_dark.svg": "1dc8e92826a8deb4daade5d8286692ec",
"assets/packages/pay_android/assets/hr/subscribe_with_light.svg": "e3b7759ea76e200282e4df38b2544fce",
"assets/packages/pay_android/assets/hr/view_in_dark.svg": "86bee4859b3fc8360723cf808ff01327",
"assets/packages/pay_android/assets/hr/donate_with_light.svg": "e1d8fb6351d2113bc30ec04857c7368b",
"assets/packages/pay_android/assets/hr/pay_with_light.svg": "e50fbb4ebe0fbef2c0b96d4afd1c2391",
"assets/packages/pay_android/assets/hr/pay_with_dark.svg": "edb569f29de56847f8dee540fc5520a6",
"assets/packages/pay_android/assets/hr/checkout_with_light.svg": "547cc155b5812bb665b49fba0b252c40",
"assets/packages/pay_android/assets/hr/book_with_light.svg": "0931e6eaf07931e2b6142883d65b618f",
"assets/packages/pay_android/assets/hr/checkout_with_dark.svg": "3fda572f10d1bcbf148a66deb487d5d5",
"assets/packages/pay_android/assets/hr/subscribe_with_dark.svg": "c7ad4d78f73306da0e9e31f42f3b537a",
"assets/packages/pay_android/assets/hr/donate_with_dark.svg": "80e1a5a284b79274c7ce4f4467d66b98",
"assets/packages/pay_android/assets/hr/book_with_dark.svg": "f3b060ebcc414ccd27b628e8bfe06e5b",
"assets/packages/pay_android/assets/hr/view_in_light.svg": "d66e92aa057f4c6b703bc94ac21e70de",
"assets/packages/pay_android/assets/hr/order_with_light.svg": "87fd04239ce277bbe5a2034bede12ec7",
"assets/packages/pay_android/assets/hr/order_with_dark.svg": "c69cc70419a1bbac329bcd46e5ecbc5c",
"assets/packages/pay_android/assets/nl/subscribe_with_light.svg": "aaf9745d30c1ab69d304392c010f5e66",
"assets/packages/pay_android/assets/nl/view_in_dark.svg": "6d35e3b413a316e865e1272b84d3bb46",
"assets/packages/pay_android/assets/nl/donate_with_light.svg": "0ffd414a4152526193e0e833ec76312e",
"assets/packages/pay_android/assets/nl/pay_with_light.svg": "70b339a937fc55945fe9d98b7cf6a021",
"assets/packages/pay_android/assets/nl/pay_with_dark.svg": "c47d8cf8741601f6b88982abedf540fd",
"assets/packages/pay_android/assets/nl/checkout_with_light.svg": "bc3485cfb0d967633af1c4f993c05647",
"assets/packages/pay_android/assets/nl/book_with_light.svg": "5c4a496a1c04491d7787992af1426002",
"assets/packages/pay_android/assets/nl/checkout_with_dark.svg": "d1996a7eb48e83a69bd69eb6eb5ed955",
"assets/packages/pay_android/assets/nl/subscribe_with_dark.svg": "6834c0b7369ec6be2ead0183fbbf7fa5",
"assets/packages/pay_android/assets/nl/donate_with_dark.svg": "0941658c0423b8223186c176f087cb96",
"assets/packages/pay_android/assets/nl/book_with_dark.svg": "9cf10b5d875d46b56a7316dceaee1cf6",
"assets/packages/pay_android/assets/nl/view_in_light.svg": "8cb132f91f13a627b68350cb322618b8",
"assets/packages/pay_android/assets/nl/order_with_light.svg": "9389c7b886ee19003f27d1c8f19a9fdb",
"assets/packages/pay_android/assets/nl/order_with_dark.svg": "0e025f069f5b33d276f600d80bb7cfc5",
"assets/packages/pay_android/assets/bg/subscribe_with_light.svg": "fed1692a2f1e06b6abab03df2ed0c223",
"assets/packages/pay_android/assets/bg/view_in_dark.svg": "cbd6eb7937750a9415b3b5778d6f7f21",
"assets/packages/pay_android/assets/bg/donate_with_light.svg": "3cc4e112495819e0b4160de69b8d9770",
"assets/packages/pay_android/assets/bg/pay_with_light.svg": "b332973d8c89817d4bfa783f03122980",
"assets/packages/pay_android/assets/bg/pay_with_dark.svg": "0a08169f3d343ce0ce9b49e972ed051a",
"assets/packages/pay_android/assets/bg/checkout_with_light.svg": "a5baad3fa695c8162acbe7983e0fd40d",
"assets/packages/pay_android/assets/bg/book_with_light.svg": "daf3e92c39c65a94a67e9317af0b6b3e",
"assets/packages/pay_android/assets/bg/checkout_with_dark.svg": "cc90dfd7a304dc7d1f8641b703e276ae",
"assets/packages/pay_android/assets/bg/subscribe_with_dark.svg": "1d9a3abf9f08b08d90e02999a19caae8",
"assets/packages/pay_android/assets/bg/donate_with_dark.svg": "d6a91582db6f9b8f13224b09b83aeb49",
"assets/packages/pay_android/assets/bg/book_with_dark.svg": "6e4b1cde6eb8a50ff26377963aff9acf",
"assets/packages/pay_android/assets/bg/view_in_light.svg": "25eb576cc58c6ada99679f11f0fa6cb8",
"assets/packages/pay_android/assets/bg/order_with_light.svg": "fb8c50c9550ade4bba95bbe7db3aec11",
"assets/packages/pay_android/assets/bg/order_with_dark.svg": "33c068340d1762b3f0e6d16b28ca7a30",
"assets/packages/pay_android/assets/de/subscribe_with_light.svg": "d28666ad2b658f489256968cefd44541",
"assets/packages/pay_android/assets/de/view_in_dark.svg": "497a274044e847bbd327f09312156cbc",
"assets/packages/pay_android/assets/de/donate_with_light.svg": "e8c6ecf7386ebda379c5b9858d52c6bf",
"assets/packages/pay_android/assets/de/pay_with_light.svg": "76d6f887382a44db8839845d3478b508",
"assets/packages/pay_android/assets/de/pay_with_dark.svg": "a7732c7d077e937552d2df40ea1bf970",
"assets/packages/pay_android/assets/de/checkout_with_light.svg": "e6d584c494836b956667c677dd388a55",
"assets/packages/pay_android/assets/de/book_with_light.svg": "64a6e6d009a8dcd36a92f72e759ed9c2",
"assets/packages/pay_android/assets/de/checkout_with_dark.svg": "530cbe4078ca41a513cfba1508b744bd",
"assets/packages/pay_android/assets/de/subscribe_with_dark.svg": "b0e36fa1790d765b5c9e57755a3222e2",
"assets/packages/pay_android/assets/de/donate_with_dark.svg": "423d427f53d49c2509612ab055e1a293",
"assets/packages/pay_android/assets/de/book_with_dark.svg": "c0854c0082f1dae041f0fd3dbb126c7e",
"assets/packages/pay_android/assets/de/view_in_light.svg": "928817ecdae9859d891335fe27ef035d",
"assets/packages/pay_android/assets/de/order_with_light.svg": "f0bfd818ea9118bcca8b6763d413f0b7",
"assets/packages/pay_android/assets/de/order_with_dark.svg": "e098e4d5cd84b5d8c6b435e70d7e3bf9",
"assets/packages/pay_android/assets/ko/subscribe_with_light.svg": "13e6fd735bae73c03d8be6d71326f205",
"assets/packages/pay_android/assets/ko/view_in_dark.svg": "317602f50910d06d249774314ac0200a",
"assets/packages/pay_android/assets/ko/donate_with_light.svg": "f34aecf3f2e4987387702e19f11716c0",
"assets/packages/pay_android/assets/ko/pay_with_light.svg": "69da08b7d4b0e6657c333cb26defe4be",
"assets/packages/pay_android/assets/ko/pay_with_dark.svg": "9a30fd5d47a7257b9629c6d77a228dd8",
"assets/packages/pay_android/assets/ko/checkout_with_light.svg": "b87ee15292b4a7043e06264e0203c115",
"assets/packages/pay_android/assets/ko/book_with_light.svg": "e77e0bf5669b25d539ae243019ce5c03",
"assets/packages/pay_android/assets/ko/checkout_with_dark.svg": "5b870a830e4861024b46e0332359ad46",
"assets/packages/pay_android/assets/ko/subscribe_with_dark.svg": "e178865a001ba63ca911359dc1c5c6d1",
"assets/packages/pay_android/assets/ko/donate_with_dark.svg": "635136cbe42a69b9cc6fe4f882e97ba6",
"assets/packages/pay_android/assets/ko/book_with_dark.svg": "b81ebc94ed31dde1b8113ade46ac70cd",
"assets/packages/pay_android/assets/ko/view_in_light.svg": "2f8e8a1c0ec74976acdc4440012d76f5",
"assets/packages/pay_android/assets/ko/order_with_light.svg": "7ee7b361653946851b3940701979bf02",
"assets/packages/pay_android/assets/ko/order_with_dark.svg": "490138e6920b0d0a678ef351a808481b",
"assets/packages/pay_android/assets/fi/subscribe_with_light.svg": "00c4cc9a526cee2c54c3ae888456ad0b",
"assets/packages/pay_android/assets/fi/view_in_dark.svg": "79fae5d7bee83bd968d1a3e202cc5b48",
"assets/packages/pay_android/assets/fi/donate_with_light.svg": "49d05e93a59ba16838799411d6d49076",
"assets/packages/pay_android/assets/fi/pay_with_light.svg": "2c7535d87feeabeed0bb24e8959309d9",
"assets/packages/pay_android/assets/fi/pay_with_dark.svg": "777b5ae1c225ee454a465c79c94dd4ae",
"assets/packages/pay_android/assets/fi/checkout_with_light.svg": "b8c402e578ce18be0de23ffcba316066",
"assets/packages/pay_android/assets/fi/book_with_light.svg": "6676034a57cd00876042164a512adf2a",
"assets/packages/pay_android/assets/fi/checkout_with_dark.svg": "7f0cfd546dfc90079eff9ca36d3003ef",
"assets/packages/pay_android/assets/fi/subscribe_with_dark.svg": "0dec31a7f20fd2d4d6384598b4117aa8",
"assets/packages/pay_android/assets/fi/donate_with_dark.svg": "5c73ffa3951b94b3efe1863bbd9f72cb",
"assets/packages/pay_android/assets/fi/book_with_dark.svg": "4fe6f403e05b46b39d1cc2c868bc0388",
"assets/packages/pay_android/assets/fi/view_in_light.svg": "da297dafa59ae5ed44d647654378bb4e",
"assets/packages/pay_android/assets/fi/order_with_light.svg": "360d83bc8d2c5ab4aa36eb71599dc5f2",
"assets/packages/pay_android/assets/fi/order_with_dark.svg": "3dae001513a132fd49cc161b138c63a6",
"assets/packages/pay_android/assets/id/subscribe_with_light.svg": "d6991689f4a65d8b4e93846aa887905f",
"assets/packages/pay_android/assets/id/view_in_dark.svg": "7763fbc1da5feb36e533c32ecf2f9229",
"assets/packages/pay_android/assets/id/donate_with_light.svg": "35a29f1131d3c7ad1c1a3b28e1280cbc",
"assets/packages/pay_android/assets/id/pay_with_light.svg": "7968f48de113615104b9d37268cadf52",
"assets/packages/pay_android/assets/id/pay_with_dark.svg": "0c8a3131e9a385aae05aacae22dec09f",
"assets/packages/pay_android/assets/id/checkout_with_light.svg": "db0e8ad5e81d967cd5e0b1df8cdbc1d4",
"assets/packages/pay_android/assets/id/book_with_light.svg": "17066c9cdcbf7bb79b92f26dfb7fa376",
"assets/packages/pay_android/assets/id/checkout_with_dark.svg": "29eb46ee7ee00281f9403e1d550e197b",
"assets/packages/pay_android/assets/id/subscribe_with_dark.svg": "8809dddf5ccafd11b3aa8f885c9c2b07",
"assets/packages/pay_android/assets/id/donate_with_dark.svg": "5e2bbe61dca9fb1049905a86f0d92052",
"assets/packages/pay_android/assets/id/book_with_dark.svg": "e76f991d732a623ab43763900fba5dd7",
"assets/packages/pay_android/assets/id/view_in_light.svg": "988b12999f349977dc72099072acfdfe",
"assets/packages/pay_android/assets/id/order_with_light.svg": "69c10e719ecffe322e4cf2d05feaa458",
"assets/packages/pay_android/assets/id/order_with_dark.svg": "ea49860db2e489a935031644715d63e4",
"assets/packages/pay_android/assets/fr/subscribe_with_light.svg": "f8429ab5e91d871aa22d2c771b64a65a",
"assets/packages/pay_android/assets/fr/view_in_dark.svg": "6fa21e9ae2dc1b05c4cea20a7a88675f",
"assets/packages/pay_android/assets/fr/donate_with_light.svg": "29aea6080c5467544059c3824b5824e8",
"assets/packages/pay_android/assets/fr/pay_with_light.svg": "865098918611dde8a361f41413f702be",
"assets/packages/pay_android/assets/fr/pay_with_dark.svg": "26bba4a0b61c1bbaaa0d2595f1560453",
"assets/packages/pay_android/assets/fr/checkout_with_light.svg": "9226f73ff98dcff8e693f86d69aba1af",
"assets/packages/pay_android/assets/fr/book_with_light.svg": "bede0083f2efe996dadc32fdb586638c",
"assets/packages/pay_android/assets/fr/checkout_with_dark.svg": "0d067b44ff219328d3c1f1a0600e65e3",
"assets/packages/pay_android/assets/fr/subscribe_with_dark.svg": "f94b954086b1a13bb61dba874f55df3e",
"assets/packages/pay_android/assets/fr/donate_with_dark.svg": "7c5d3e9a6b478ebd47bd41d4407f3a9a",
"assets/packages/pay_android/assets/fr/book_with_dark.svg": "be18bfa2f1aaefc9ab209e83d4f3d83a",
"assets/packages/pay_android/assets/fr/view_in_light.svg": "db9d4c50e8d1ab10b387e34e0649e7ca",
"assets/packages/pay_android/assets/fr/order_with_light.svg": "5251c52188cfcf3435a32d2a5e2c0b04",
"assets/packages/pay_android/assets/fr/order_with_dark.svg": "5f4be7c8d8a698f07a3b30764f3d11dd",
"assets/packages/pay_android/assets/es/subscribe_with_light.svg": "50e048c6be675c5431ccc4b12568e539",
"assets/packages/pay_android/assets/es/view_in_dark.svg": "7c0c2bff9f59b7a1ebdc66ea810d9691",
"assets/packages/pay_android/assets/es/donate_with_light.svg": "4042f4e6a33371686087fa461c106531",
"assets/packages/pay_android/assets/es/pay_with_light.svg": "0742e4c96eeba1064a19826eaaf831ca",
"assets/packages/pay_android/assets/es/pay_with_dark.svg": "aa6a4f76d58ce84fc8d42ccbea5fe908",
"assets/packages/pay_android/assets/es/checkout_with_light.svg": "ad66a24be458e418c52efe67b9e66409",
"assets/packages/pay_android/assets/es/book_with_light.svg": "3aca2431604fbaf1b9a4b8e69ee1542d",
"assets/packages/pay_android/assets/es/checkout_with_dark.svg": "a34c481b9226edf17704c1727f0be30d",
"assets/packages/pay_android/assets/es/subscribe_with_dark.svg": "8a4ab2609c9e93e496a53d0830e73540",
"assets/packages/pay_android/assets/es/donate_with_dark.svg": "617795fe79db0c3129fa35ea77ea3cc7",
"assets/packages/pay_android/assets/es/book_with_dark.svg": "ec8fa43c794b51913fcc165365f22787",
"assets/packages/pay_android/assets/es/view_in_light.svg": "42317a2c82e5fa9b2f7355e070296689",
"assets/packages/pay_android/assets/es/order_with_light.svg": "bd060d59e3a22c856639941256d1d725",
"assets/packages/pay_android/assets/es/order_with_dark.svg": "59123cc1d769752cf8c23d632cd1b000",
"assets/packages/pay_android/assets/et/subscribe_with_light.svg": "959b019b50837f569daec6701831438c",
"assets/packages/pay_android/assets/et/view_in_dark.svg": "0d0e1d5b855d1efbd34b9bef6d07a186",
"assets/packages/pay_android/assets/et/donate_with_light.svg": "155d13f4608bb5b35b0e22b0c0d4442e",
"assets/packages/pay_android/assets/et/pay_with_light.svg": "22bd7a3a31e780e849859f476c0b4bb1",
"assets/packages/pay_android/assets/et/pay_with_dark.svg": "4d310f268e11baa752004c1eba215856",
"assets/packages/pay_android/assets/et/checkout_with_light.svg": "46f373bca8f43dee103de105d0b2e461",
"assets/packages/pay_android/assets/et/book_with_light.svg": "c743fb69306bb4692d5697d4318f9a93",
"assets/packages/pay_android/assets/et/checkout_with_dark.svg": "8bf6cfc9bf0ec60cd9361e89c3dab098",
"assets/packages/pay_android/assets/et/subscribe_with_dark.svg": "38b0b91aebd7b25365d552327123a5d4",
"assets/packages/pay_android/assets/et/donate_with_dark.svg": "ad4f8fcda9f17b13bc79a9dfbb01e09b",
"assets/packages/pay_android/assets/et/book_with_dark.svg": "d44941c7d2f1e9bd020cdcf7995c6aa2",
"assets/packages/pay_android/assets/et/view_in_light.svg": "0c8557cc6d71659b7da2b337bf1a7c31",
"assets/packages/pay_android/assets/et/order_with_light.svg": "c79470f730ed8d169c5fbe0b08627960",
"assets/packages/pay_android/assets/et/order_with_dark.svg": "6cf38ceae595c22993016f5db167057e",
"assets/packages/pay_android/assets/en/subscribe_with_light.svg": "ab45c2809a774e1184d6d2617e8ecfa9",
"assets/packages/pay_android/assets/en/view_in_dark.svg": "665cc6d38d18eefd3454e6ce0314eace",
"assets/packages/pay_android/assets/en/donate_with_light.svg": "f67e4d4cbda5333662a4593fa38f6ba2",
"assets/packages/pay_android/assets/en/pay_with_light.svg": "80b00ed93f04bf17b4c405377a72ef48",
"assets/packages/pay_android/assets/en/pay_with_dark.svg": "5499e643b7eb946d9d1993c1769ffc46",
"assets/packages/pay_android/assets/en/checkout_with_light.svg": "46e1e01e4072cffc9179799d79f303d0",
"assets/packages/pay_android/assets/en/book_with_light.svg": "333b989bb31d925e98f52a1bdc6949fc",
"assets/packages/pay_android/assets/en/checkout_with_dark.svg": "3959d54891a44154d1e0a97571d1ab50",
"assets/packages/pay_android/assets/en/subscribe_with_dark.svg": "e2eb024d9d8bacd395a398b3f8f2996f",
"assets/packages/pay_android/assets/en/donate_with_dark.svg": "771daaa5b9c023dde8ef71aba7dc83cd",
"assets/packages/pay_android/assets/en/book_with_dark.svg": "7a9cf8a2509e22162684e3a81a7a52e5",
"assets/packages/pay_android/assets/en/view_in_light.svg": "1ce1d3c4b5695655077410cf5611886a",
"assets/packages/pay_android/assets/en/order_with_light.svg": "002cb1bb139a54f8ee975d8b773fd7fe",
"assets/packages/pay_android/assets/en/order_with_dark.svg": "16a5a4e1d0c2c04e045a471764c766f3",
"assets/packages/pay_android/assets/th/subscribe_with_light.svg": "5f7d11baa49ff581e163d73c12230101",
"assets/packages/pay_android/assets/th/view_in_dark.svg": "80ef936ddc0281b978770fdf0640bb16",
"assets/packages/pay_android/assets/th/donate_with_light.svg": "af3a6500cb397f631cf50a99fab5a880",
"assets/packages/pay_android/assets/th/pay_with_light.svg": "cee02fd16f07ccd498abfb0c26e9cc50",
"assets/packages/pay_android/assets/th/pay_with_dark.svg": "64bd1fa89cbb15d89bd3d61775febdd5",
"assets/packages/pay_android/assets/th/checkout_with_light.svg": "b7397dfeff11c716a3f44642125335ec",
"assets/packages/pay_android/assets/th/book_with_light.svg": "d23370867f6836501a7cf4fb6af68666",
"assets/packages/pay_android/assets/th/checkout_with_dark.svg": "8774b54a2184a1299586e89cbe69101c",
"assets/packages/pay_android/assets/th/subscribe_with_dark.svg": "e77d73b1386a74635cb837610f746304",
"assets/packages/pay_android/assets/th/donate_with_dark.svg": "473f070c74c770ac40adbff7c352577e",
"assets/packages/pay_android/assets/th/book_with_dark.svg": "4269913a9912199551cdd4695e2501f2",
"assets/packages/pay_android/assets/th/view_in_light.svg": "6c2783a2cf13d0c8bd0a02fb2f0db6ec",
"assets/packages/pay_android/assets/th/order_with_light.svg": "a7645d900b78daae8d0a21b367713b93",
"assets/packages/pay_android/assets/th/order_with_dark.svg": "ccd992d0478caf4894844bf43d602574",
"assets/packages/pay_android/assets/tr/subscribe_with_light.svg": "fb098c04009487c915f9138304d8a376",
"assets/packages/pay_android/assets/tr/view_in_dark.svg": "32a1e10291779f7abf63c9a0e870c226",
"assets/packages/pay_android/assets/tr/donate_with_light.svg": "b5f8159e82372562c44d0cfe51277990",
"assets/packages/pay_android/assets/tr/pay_with_light.svg": "25c843bb039521e159d6daf1a8cb43a9",
"assets/packages/pay_android/assets/tr/pay_with_dark.svg": "2b2284bf0ca3f69cdaa08c80eb37d14b",
"assets/packages/pay_android/assets/tr/checkout_with_light.svg": "03864f3a896521b2b63aa7c474ec5fa2",
"assets/packages/pay_android/assets/tr/book_with_light.svg": "23123295edeba6c5b661939513143295",
"assets/packages/pay_android/assets/tr/checkout_with_dark.svg": "b8a4ec4456a9d47be542616332d3fc0b",
"assets/packages/pay_android/assets/tr/subscribe_with_dark.svg": "420916f9ba1896599fa8e52095384e47",
"assets/packages/pay_android/assets/tr/donate_with_dark.svg": "8c83a67e4eb76b7440d863885c7ec4ee",
"assets/packages/pay_android/assets/tr/book_with_dark.svg": "4d010d5c18943b2238e6349a41e3bf05",
"assets/packages/pay_android/assets/tr/view_in_light.svg": "a07d89d6a50f7cc8cda7ac1424fa9575",
"assets/packages/pay_android/assets/tr/order_with_light.svg": "f84aca1c7be65dc51cac5028627d589b",
"assets/packages/pay_android/assets/tr/order_with_dark.svg": "b20a2ae2607a5718d2e793f30a4f076d",
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
"assets/lib/assets/moovblue.png": "a30fa870bee5a7c93df71519bef6b9ef",
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
"assets/lib/assets/gif_icons/food.gif": "c235f975b206ac55dc0f76deafc07f6d",
"assets/lib/assets/gif_icons/rec.gif": "ff46d8441b3848ad44be7f895bdaeb77",
"assets/lib/assets/gif_icons/hangouts.gif": "2b93b29f89f875f8a9c52b4ccee3b40e",
"assets/lib/assets/gif_icons/shows.gif": "044d0423a248a760a1de4d3b146a0d06",
"assets/lib/assets/gif_icons/mass.gif": "9798a6b2d7bd5bef00ac1986b10aa343",
"assets/lib/assets/gif_icons/games.gif": "62d9f999018399bcab62f895c50c86ee",
"assets/lib/assets/gif_icons/service.gif": "0f5fe3941efe116fd248cfc1b4ba608d",
"assets/lib/assets/gif_icons/sports.gif": "0352016434c2298d38a24a6d31895cdb",
"assets/lib/assets/show3.png": "8f620c8be6d228cc30152e2736839e58",
"assets/lib/assets/party2.png": "9a3d5c81c1006872caaea42d66f5a73e",
"assets/lib/assets/tip.jpeg": "10cc06cb68bd130420a9f710e9a07557",
"assets/lib/assets/nd.png": "9088e4411e5fe71a8754320f6eb89afb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/google_pay_payment_profile.json": "2722f8a4f49bafec6f758e08834b9f0a"
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
