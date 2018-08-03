/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b2cd510ff7559ac8cdb49092988a2f53"
  },
  {
    "url": "assets/css/0.styles.1a319290.css",
    "revision": "b4347bdc76c02279ee2e44b5fbeb35cf"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.b63f89d9.js",
    "revision": "aaee78e07060595fe68b81ba10ef5f4f"
  },
  {
    "url": "assets/js/11.ba999dfb.js",
    "revision": "a4ace6ec3c42eb36f1c691fca1ab722f"
  },
  {
    "url": "assets/js/12.82c598ab.js",
    "revision": "07fa0c7720633e812e3d35e8b1b60fe4"
  },
  {
    "url": "assets/js/13.6f6a645b.js",
    "revision": "a185d5aa231866e1329f3cbc0f3a62ad"
  },
  {
    "url": "assets/js/14.f5204355.js",
    "revision": "4e682f9c5916d5b4a79790010c727815"
  },
  {
    "url": "assets/js/15.3703a75a.js",
    "revision": "307222a7a48530c7946c71ad11019827"
  },
  {
    "url": "assets/js/2.2513a2b5.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.0fcd5649.js",
    "revision": "70fb2fb8cc71d94fa76b4e5b41481db7"
  },
  {
    "url": "assets/js/4.9d49cea2.js",
    "revision": "ee3bac0f880beed4525ed85b3b8eac09"
  },
  {
    "url": "assets/js/5.95f0ffb9.js",
    "revision": "86d06bd49c6e0f27bb796634ca927161"
  },
  {
    "url": "assets/js/6.434a08e4.js",
    "revision": "e152ed430e4330e482b5a8c78c81503c"
  },
  {
    "url": "assets/js/7.656a4bf9.js",
    "revision": "19899404655c269a9e33d7ac84d56886"
  },
  {
    "url": "assets/js/8.492f052c.js",
    "revision": "a33c3052a73469c03bb4c84dfa3a1f6d"
  },
  {
    "url": "assets/js/9.d74663aa.js",
    "revision": "2ed83317821dc648a24b1e51d1f0f94b"
  },
  {
    "url": "assets/js/app.ff8c3ba3.js",
    "revision": "0a989e1b09050f0130d5d60a4d1e0295"
  },
  {
    "url": "index.html",
    "revision": "90ab396d99e3fa9c41cb4a6b3aef8811"
  },
  {
    "url": "lorem/article.html",
    "revision": "66ba2ec38ce3ce117f812dfa41f0c8b6"
  },
  {
    "url": "lorem/code-blocks.html",
    "revision": "18cc676e4eebc5b09ee47d2c0cf90043"
  },
  {
    "url": "lorem/custom-containers.html",
    "revision": "80bd282affff2ac44d6985d41a321cbf"
  },
  {
    "url": "lorem/custom-layout.html",
    "revision": "45d5d4930eda021b88aa38912e117d23"
  },
  {
    "url": "lorem/emoji.html",
    "revision": "483994d909871c348f3823f3ab8fe75e"
  },
  {
    "url": "lorem/frontmatter.html",
    "revision": "d89df8b2aba967e304107aeac04cba77"
  },
  {
    "url": "lorem/index.html",
    "revision": "fe51dfd91f043ee9c3c38d6a13188e90"
  },
  {
    "url": "lorem/markdown-it.html",
    "revision": "b364e6bdc9e8bbe37f9c836f24e89964"
  },
  {
    "url": "lorem/markdown-vuepress.html",
    "revision": "6924acaac5b828b1183bfd20b68a1262"
  },
  {
    "url": "lorem/table.html",
    "revision": "1d577f5e34dd5be74ff1c7620cd3cc93"
  },
  {
    "url": "lorem2/index.html",
    "revision": "275899cbddc4a073d032e602125eb9f8"
  },
  {
    "url": "lorem2/test.html",
    "revision": "05b0c6dbd592c05669db9aa5cc855489"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
