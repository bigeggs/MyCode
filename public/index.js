webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var body = document.body;
var h1 = document.createElement("h1");
h1.innerHTML = 'hello world,this is moduleAPart';
body.appendChild(h1);
var js = document.scripts;
var p = document.createElement("p");
p.innerHTML = '<p>（此文件路径' + js[js.length - 1].src + ') < /p>';
body.appendChild(p);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var body = document.body;
var h1 = document.createElement("h1");
h1.innerHTML = 'moduleBPart';
body.appendChild(h1);
var js = document.scripts;
var p = document.createElement("p");
p.innerHTML = '<p>（此文件路径' + js[js.length - 1].src + ') < /p>';
body.appendChild(p);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var body = document.body;
var h1 = document.createElement("h1");
h1.innerHTML = 'this is partCCCCCC';
body.appendChild(h1);
var js = document.scripts;
var p = document.createElement("p");
p.innerHTML = '<p>（此文件路径' + js[js.length - 1].src + ') < /p>';
body.appendChild(p);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var mA = __webpack_require__(1); //alias path
var mB = __webpack_require__(2); //alias path
var mC = __webpack_require__(3); //relative path
var cssA = __webpack_require__(0); //relative pathnpm

/***/ })
],[4]);