/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: 'Roboto Condensed', sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #1b252f;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 2rem;\\r\\n  padding: 1rem;\\r\\n  box-shadow: 0 0 5px 0 black;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\na {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.logo-nav {\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.comments li {\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  gap: 2rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.nav-links li:hover {\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.shows {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\\r\\n  grid-template-rows: auto;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.title-likes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.like-box {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\n.like-box img {\\r\\n  filter: invert();\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\narticle > img {\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\narticle a {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  border-top: 1px solid white;\\r\\n  border-bottom: 1px solid white;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 2rem;\\r\\n  bottom: 0;\\r\\n  box-shadow: 0 0 5px 0 black;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-background {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(193, 199, 208, 0.8);\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: white;\\r\\n  border-radius: 16px;\\r\\n  padding: 16px;\\r\\n  margin: 20px auto;\\r\\n  box-sizing: border-box;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 500px;\\r\\n  max-height: 90vh;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.iconx-modal {\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  align-self: flex-end;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.show-image {\\r\\n  width: 250px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  padding: 1rem 1rem;\\r\\n  columns: 2;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 1rem;\\r\\n  gap: 0.5rem;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.input-name,\\r\\n.input-insight {\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\\r\\n.input-name {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.input-insight {\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\n.form button {\\r\\n  width: fit-content;\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_tvlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tvlogo.png */ \"./src/images/tvlogo.png\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\n\nconst navLogoContainer = document.querySelector('.logo');\nconst imageLogo = document.createElement('img');\nimageLogo.classList.add('logo-nav');\nimageLogo.src = _images_tvlogo_png__WEBPACK_IMPORTED_MODULE_1__;\nnavLogoContainer.appendChild(imageLogo);\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = async (id, username, comment) => {\n  await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/comments',\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n        username,\n        comment,\n      }),\n    },\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/thumbsup.svg */ \"./src/images/thumbsup.svg\");\n/* harmony import */ var _images_comment_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/comment.svg */ \"./src/images/comment.svg\");\n/* harmony import */ var _displayModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayModal.js */ \"./src/modules/displayModal.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _showNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showNumber.js */ \"./src/modules/showNumber.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst displayScreen = async () => {\r\n  const showsArray = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const likesAr = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_4__.getNumberOfLikes)();\r\n  const list = document.querySelector('.shows');\r\n  showsArray.forEach((show) => {\r\n    const showCard = document.createElement('article');\r\n    const img = document.createElement('img');\r\n    img.src = show.image.medium;\r\n    const titleAndLikes = document.createElement('div');\r\n    titleAndLikes.className = 'title-likes';\r\n    const name = document.createElement('h3');\r\n    name.textContent = show.name;\r\n    const likeBox = document.createElement('div');\r\n    likeBox.className = 'like-box';\r\n    const likeNum = document.createElement('span');\r\n    likeNum.textContent = likesAr.find((e) => e.item_id === show.id).likes;\r\n    const like = document.createElement('img');\r\n    like.src = _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    const commentBox = document.createElement('a');\r\n    commentBox.innerHTML = 'Comments';\r\n    // const comment = document.createElement('img');\r\n    // comment.src = commentImg;\r\n    commentBox.addEventListener('click', () => {\r\n      (0,_displayModal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(show.id);\r\n    });\r\n    titleAndLikes.append(name, likeBox);\r\n    likeBox.append(likeNum, like);\r\n    // commentBox.appendChild(comment);\r\n    showCard.append(img, titleAndLikes, commentBox);\r\n    list.append(showCard);\r\n\r\n    like.addEventListener('click', () => {\r\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_4__.addNewLike)(show.id);\r\n      likeNum.textContent++;\r\n    });\r\n  });\r\n  const numberHTML = document.querySelector('.shows-number');\r\n  const showsNum = (0,_showNumber_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  numberHTML.textContent = showsNum;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScreen);\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/displayModal.js":
/*!*************************************!*\
  !*** ./src/modules/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_closeicon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/closeicon.svg */ \"./src/images/closeicon.svg\");\n/* harmony import */ var _getSingleShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSingleShow.js */ \"./src/modules/getSingleShow.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNumberOfComments.js */ \"./src/modules/getNumberOfComments.js\");\n\n\n\n\n\n\nconst displayModal = async (id) => {\n  const modal = id;\n  const {\n    name, language, status, premiered, ended, rating, image, summary,\n  } = await (0,_getSingleShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modal);\n\n  const body = document.querySelector('body');\n\n  const popupBackground = document.createElement('div');\n  popupBackground.className = 'popup-background';\n  body.appendChild(popupBackground);\n\n  const popup = document.createElement('div');\n  popup.className = 'popup';\n  popupBackground.appendChild(popup);\n\n  const iconxModal = document.createElement('img');\n  iconxModal.src = _images_closeicon_svg__WEBPACK_IMPORTED_MODULE_0__;\n  iconxModal.className = 'iconx-modal';\n  iconxModal.addEventListener('click', () => {\n    body.removeChild(popupBackground);\n  });\n  popup.appendChild(iconxModal);\n\n  const showImage = document.createElement('img');\n  showImage.src = image;\n  showImage.className = 'show-image';\n  popup.appendChild(showImage);\n\n  const modaltitle = document.createElement('h2');\n  modaltitle.innerText = name;\n  popup.appendChild(modaltitle);\n\n  const details = document.createElement('ul');\n  details.className = 'details';\n  const arr1 = [\n    '<b>Language: </b>',\n    '<b>Premiered: </b>',\n    '<b>Rating: </b>',\n    '<b>Status: </b>',\n    '<b>Ended: </b>',\n  ];\n  const arr2 = [language, premiered, rating, status, ended];\n  for (let i = 0; i < arr1.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerHTML = arr1[i] + arr2[i];\n    details.appendChild(li);\n  }\n  popup.appendChild(details);\n\n  const description = document.createElement('div');\n  description.innerHTML = summary;\n  description.className = 'description';\n  popup.appendChild(description);\n\n  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n\n  const divTitle = document.createElement('div');\n  divTitle.className = 'comment-title';\n  popup.append(divTitle);\n\n  const commentsTitle = document.createElement('h3');\n  commentsTitle.innerHTML = 'Comments';\n  divTitle.appendChild(commentsTitle);\n\n  const commentNumber = document.createElement('h3');\n  divTitle.appendChild(commentNumber);\n\n  const commentsList = document.createElement('ul');\n  commentsList.className = 'comments';\n\n  for (let i = 0; i < comments.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerText = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;\n    commentsList.appendChild(li);\n  }\n\n  popup.appendChild(commentsList);\n\n  let number = (0,_getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  commentNumber.innerHTML = `(${number})`;\n\n  const form = document.createElement('div');\n  form.className = 'form';\n  popup.append(form);\n\n  const addCommentTitle = document.createElement('h3');\n  addCommentTitle.innerHTML = 'Add a comment';\n  form.appendChild(addCommentTitle);\n\n  const inputName = document.createElement('input');\n  inputName.className = 'input-name';\n  inputName.placeholder = 'Your name';\n  form.appendChild(inputName);\n\n  const inputInsight = document.createElement('textarea');\n  inputInsight.className = 'input-insight';\n  inputInsight.rows = '5';\n  inputInsight.placeholder = 'Your insights';\n  form.appendChild(inputInsight);\n\n  const button = document.createElement('button');\n  button.innerHTML = 'Submit';\n  button.addEventListener('click', () => {\n    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id, inputName.value, inputInsight.value);\n    const date = new Date();\n    const formatDate = `${date.getFullYear()}-${(\n      date.getMonth() + 1\n    ).toLocaleString('en-US', { minimumIntegerDigits: 2 })}-${date\n      .getDate()\n      .toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;\n    const li = document.createElement('li');\n    li.innerText = `${formatDate} ${inputName.value}: ${inputInsight.value}`;\n    commentsList.appendChild(li);\n    inputName.value = '';\n    inputInsight.value = '';\n    number += 1;\n    commentNumber.innerHTML = `(${number})`;\n  });\n  form.appendChild(button);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/displayModal.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (id) => {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/comments?item_id=${id}`,\n  );\n  const jsonResponse = await response.json();\n  return jsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getNumberOfComments.js":
/*!********************************************!*\
  !*** ./src/modules/getNumberOfComments.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getNumberOfComments = () => {\n  const lis = document.querySelectorAll('.comments li');\n  return lis.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfComments);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getNumberOfComments.js?");

/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShows = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const JsonResponse = await response.json();\n  const mostRatedShows = JsonResponse.filter(\n    (show) => show.rating.average > 8.5,\n  );\n  return mostRatedShows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getShows.js?");

/***/ }),

/***/ "./src/modules/getSingleShow.js":
/*!**************************************!*\
  !*** ./src/modules/getSingleShow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getSingleShow = async (Id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);\n  const jsonResponse = await response.json();\n  return {\n    name: jsonResponse.name,\n    language: jsonResponse.language,\n    status: jsonResponse.status,\n    premiered: jsonResponse.premiered,\n    ended: jsonResponse.ended,\n    rating: jsonResponse.rating.average,\n    image: jsonResponse.image.medium,\n    summary: jsonResponse.summary,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSingleShow);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getSingleShow.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewLike\": () => (/* binding */ addNewLike),\n/* harmony export */   \"getNumberOfLikes\": () => (/* binding */ getNumberOfLikes)\n/* harmony export */ });\nconst likesPath = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/likes';\n\nconst getNumberOfLikes = async () => {\n  const response = await fetch(likesPath);\n  const data = await response.json();\n  return data;\n};\n\nconst addNewLike = async (id) => {\n  await fetch(likesPath,\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n      }),\n    });\n};\n\n\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/showNumber.js":
/*!***********************************!*\
  !*** ./src/modules/showNumber.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showNumbers = () => {\r\n  const showsNum = document.querySelectorAll('article');\r\n  return showsNum.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNumbers);\n\n//# sourceURL=webpack://capstone-project/./src/modules/showNumber.js?");

/***/ }),

/***/ "./src/images/closeicon.svg":
/*!**********************************!*\
  !*** ./src/images/closeicon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"closeicon.svg\";\n\n//# sourceURL=webpack://capstone-project/./src/images/closeicon.svg?");

/***/ }),

/***/ "./src/images/comment.svg":
/*!********************************!*\
  !*** ./src/images/comment.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"comment.svg\";\n\n//# sourceURL=webpack://capstone-project/./src/images/comment.svg?");

/***/ }),

/***/ "./src/images/thumbsup.svg":
/*!*********************************!*\
  !*** ./src/images/thumbsup.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"thumbsup.svg\";\n\n//# sourceURL=webpack://capstone-project/./src/images/thumbsup.svg?");

/***/ }),

/***/ "./src/images/tvlogo.png":
/*!*******************************!*\
  !*** ./src/images/tvlogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"tvlogo.png\";\n\n//# sourceURL=webpack://capstone-project/./src/images/tvlogo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;