/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("////// https://api.rawg.io/docs  /////\r\n\r\nlet url = new URL(\"https://api.rawg.io/api/games\");\r\nconst root = document.getElementById(\"root\");\r\n\r\n//// init ////\r\naddElements(url);\r\n\r\n///////////////////   FUNCTIONS   ///////////////////////////\r\n\r\nfunction createElement(element, content, addclass, destination) {\r\n  let newElement = document.createElement(element);\r\n  newElement.innerHTML = content;\r\n  if (addclass) {\r\n    newElement.classList.add(addclass);\r\n  }\r\n  destination.appendChild(newElement);\r\n  return newElement;\r\n}\r\n\r\nfunction addElements(url) {\r\n  fetch(new Request(url))\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      //Hide buttons\r\n      if (!response.previous) {\r\n        previousButton.hidden = true;\r\n      } else {\r\n        previousButton.hidden = false;\r\n      }\r\n\r\n      if (!response.next) {\r\n        nextButton.hidden = true;\r\n      } else {\r\n        nextButton.hidden = false;\r\n      }\r\n\r\n      for (let i = 0; i < 20; i++) {\r\n        let card = createElement(\"div\", \"\", \"card\", root);\r\n        createElement(\"p\", response.results[i].name, \"\", card);\r\n        card.style.backgroundImage = `url(${response.results[i].background_image})`;\r\n      }\r\n    });\r\n}\r\n\r\nfunction clearDiv() {\r\n  while (root.firstChild) {\r\n    root.removeChild(root.firstChild);\r\n  }\r\n}\r\n\r\n///////////////////   BUTTONS   ///////////////////////////\r\nlet previousButton = document.getElementById(\"previous\");\r\nlet nextButton = document.getElementById(\"next\");\r\n\r\npreviousButton.addEventListener(\"click\", function () {\r\n  fetch(new Request(url))\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      if (response.previous) {\r\n        clearDiv();\r\n        url = new URL(response.previous);\r\n        addElements(url);\r\n      }\r\n    });\r\n});\r\n\r\nnextButton.addEventListener(\"click\", function () {\r\n  fetch(new Request(url))\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      if (response.next) {\r\n        clearDiv(root);\r\n        url = new URL(response.next);\r\n        addElements(url);\r\n      }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://videogame_database/./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ (() => {

eval("console.log(\"ciao\");\r\n\n\n//# sourceURL=webpack://videogame_database/./src/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/search.js"]();
/******/ 	
/******/ })()
;