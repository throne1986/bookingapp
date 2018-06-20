(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: poppins,sans-serif;\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden;\n  background: url(\"/assets/bg-pattern.png\"), linear-gradient(to left, #7b4397, #dc2430); }\n\n.movie-navbar {\n  background: #4b8df9;\n  color: white;\n  border: none; }\n\n.movies-brand {\n  font-size: 16pt;\n  color: white !important; }\n\n.movies-brand:hover {\n  color: black !important; }\n\n* {\n  box-sizing: border-box; }\n\n.navbar-brand img {\n  height: 50px; }\n\n.navbar-dark .navbar-nav .nav-link:hover {\n  color: white !important; }\n\n.nav-base .logo-blue {\n  display: none; }\n\nnav.scroll {\n  background-color: red;\n  color: #eef; }\n\n.down {\n  background: white; }\n\n.down .logo-blue {\n  display: block; }\n\n.down .logo-white {\n  display: none; }\n\n@media (max-width: 767px) {\n  img {\n    width: 100%; } }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: black !important; }\n\n.topMenu > ul > li {\n  color: white !important;\n  padding: 0px 18px; }\n\n.main-header {\n  background: radial-gradient(#53a2ef 30%, #4680ff 70%);\n  background-size: cover;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: relative;\n  overflow: hidden;\n  position: relative;\n  margin-top: -100px;\n  -webkit-transform-origin: center;\n          transform-origin: center; }\n\n.main-header:after {\n  content: \"\";\n  position: absolute;\n  bottom: -200px;\n  height: 400px;\n  background-color: #fff;\n  width: 100%;\n  -webkit-transform: skewY(-10deg);\n          transform: skewY(-10deg); }\n\n.main-header .img-section {\n  position: relative;\n  margin-top: 100px; }\n\n.main-header .img-section .img-chat {\n  top: 150px;\n  left: 50px;\n  position: absolute;\n  z-index: 3;\n  box-shadow: 0 10px 38px 2px rgba(4, 26, 55, 0.25);\n  animation: floating1 8s infinite;\n  -webkit-animation: floating1 8s infinite;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.main-header .img-section .img-browser {\n  position: relative;\n  z-index: 2;\n  animation: floating1 10s infinite;\n  -webkit-animation: floating1 10s infinite;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.main-header .img-section .img-followers {\n  top: 80px;\n  position: absolute;\n  right: 20px;\n  z-index: 3;\n  box-shadow: 0 10px 38px 2px rgba(4, 26, 55, 0.25);\n  animation: floating2 7s infinite;\n  -webkit-animation: floating2 7s infinite;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.main-header {\n  position: relative;\n  overflow: visible; }\n\n.main-header h1 {\n  color: #fff;\n  margin-bottom: 10px;\n  font-weight: 700;\n  font-size: 45px;\n  text-shadow: 0 18px 20px rgba(102, 102, 102, 0.34); }\n\n.main-header .content-text h3 {\n  color: #fff;\n  margin-bottom: 50px; }\n\n.main-header .main-header-sub {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-top: 250px;\n  z-index: 9; }\n\n.main-header .content-text {\n  top: calc(50% - 150px);\n  width: 100%;\n  position: relative; }\n\n.main-header .content-text .circle-1 {\n  position: absolute;\n  left: -22%;\n  width: 150px;\n  height: 150px;\n  border: 8px solid #db85fb;\n  border-radius: 50%;\n  opacity: .3;\n  animation: floating 10s infinite;\n  -webkit-animation: floating 10s infinite; }\n\n.main-header .content-text .circle-2 {\n  position: absolute;\n  right: -20%;\n  bottom: 0;\n  width: 80px;\n  height: 80px;\n  border: 15px solid #00ffc9;\n  border-radius: 50%;\n  opacity: .4;\n  animation: floating 9s infinite;\n  -webkit-animation: floating 9s infinite; }\n\n.main-header .content-text .circle-3 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  border: 6px solid #b1af00;\n  border-radius: 50%;\n  opacity: .6;\n  animation: floating 8s infinite;\n  -webkit-animation: floating 8s infinite; }\n\n.main-header .content-text .circle-4 {\n  position: absolute;\n  top: -50px;\n  left: 0;\n  width: 100px;\n  height: 100px;\n  border: 15px solid #f95eaa;\n  border-radius: 50%;\n  opacity: .5;\n  z-index: -1;\n  animation: floating 7s infinite;\n  -webkit-animation: floating 7s infinite; }\n\n.round-header-circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  opacity: .5;\n  z-index: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.round-header-circle .round-1 .r-1, .round-header-circle .round-2 .r-1, .round-header-circle .round-3 .r-1 {\n  top: -5px;\n  margin-left: -5px; }\n\n.round-header-circle .round-animate {\n  width: 900px;\n  height: 900px;\n  position: relative;\n  display: inline-block; }\n\n.round-header-circle .round-animate .round-1 span, .round-header-circle .round-animate .round-2 span, .round-header-circle .round-animate .round-3 span {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  position: absolute;\n  left: 50%; }\n\n.round-header-circle .round-animate .round-1 span {\n  border: 2px solid #8c1bff; }\n\n.round-header-circle .round-animate .round-2 span {\n  border: 2px solid #00ffc9; }\n\n.round-header-circle .round-animate .round-3 span {\n  border: 2px solid #b1af00; }\n\n.round-header-circle .round-animate .round-1, .round-header-circle .round-animate .round-2, .round-header-circle .round-animate .round-3 {\n  border: 1px solid rgba(255, 255, 255, 0.48);\n  border-radius: 50%;\n  position: absolute; }\n\n.round-header-circle .round-animate .round-1 {\n  width: 900px;\n  height: 900px;\n  -webkit-transform: rotate(23deg);\n          transform: rotate(23deg);\n  -webkit-animation: round-1 100s linear infinite;\n          animation: round-1 100s linear infinite; }\n\n.round-header-circle .round-animate .round-1 span.r-2 {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #8c1bff; }\n\n.round-header-circle .round-animate .round-1 span.r-3 {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #8c1bff; }\n\n.round-header-circle .round-animate .round-2 {\n  width: 700px;\n  top: 100px;\n  height: 700px;\n  left: 100px;\n  -webkit-transform: rotate(-41deg);\n          transform: rotate(-41deg);\n  -webkit-animation: round-2 80s linear infinite;\n          animation: round-2 80s linear infinite; }\n\n.round-header-circle .round-animate .round-2 span.r-2 {\n  width: 30px;\n  height: 30px;\n  border: 5px solid #00ffc9; }\n\n.round-header-circle .round-animate .round-2 span.r-3 {\n  width: 30px;\n  height: 30px;\n  border: 8px solid #00ffc9; }\n\n.round-header-circle .round-animate .round-3 {\n  width: 500px;\n  top: 200px;\n  height: 500px;\n  left: 200px;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-animation: round-3 60s linear infinite;\n          animation: round-3 60s linear infinite; }\n\n.round-header-circle .round-animate .round-3 span.r-2 {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #adadad; }\n\n.round-header-circle .round-animate .round-3 span.r-3 {\n  width: 30px;\n  height: 30px;\n  border: 5px solid #adadad; }\n\n.round-header-circle .round-1 .r-2 {\n  margin-left: 343px;\n  top: 682px; }\n\n.round-header-circle .round-1 .r-3 {\n  margin-left: -424px;\n  top: 262px; }\n\n.round-header-circle .round-1 .r-4 {\n  margin-left: -338px;\n  top: 745px; }\n\n.round-header-circle .round-2 .r-2 {\n  margin-left: -354px;\n  top: 248px; }\n\n.round-header-circle .round-2 .r-3 {\n  margin-left: -198px;\n  top: 632px; }\n\n.round-header-circle .round-2 .r-4 {\n  margin-left: 192px;\n  top: 633px; }\n\n.round-header-circle .round-3 .r-2 {\n  margin-left: -254px;\n  top: 190px; }\n\n.round-header-circle .round-3 .r-3 {\n  margin-left: 2px;\n  top: 483px; }\n\n.round-header-circle .round-3 .r-4 {\n  margin-left: 244px;\n  top: 233px; }\n\n@-webkit-keyframes round-1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes round-1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes round-2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes round-2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes round-3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes round-3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes floating1 {\n  0% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); }\n  50% {\n    -webkit-transform: rotateX(0deg) translateY(-20px);\n    transform: rotateX(0deg) translateY(-20px); }\n  100% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); } }\n\n@-webkit-keyframes floating1 {\n  0% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); }\n  50% {\n    -webkit-transform: rotateX(0deg) translateY(-20px);\n    transform: rotateX(0deg) translateY(-20px); }\n  100% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); } }\n\n@keyframes floating2 {\n  0% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); }\n  50% {\n    -webkit-transform: rotateX(0deg) translateY(15px);\n    transform: rotateX(0deg) translateY(15px); }\n  100% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); } }\n\n@-webkit-keyframes floating2 {\n  0% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); }\n  50% {\n    -webkit-transform: rotateX(0deg) translateY(15px);\n    transform: rotateX(0deg) translateY(15px); }\n  100% {\n    -webkit-transform: rotateX(0deg) translateY(0px);\n    transform: rotateX(0deg) translateY(0px); } }\n\n@keyframes floating {\n  from {\n    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);\n    transform: rotate(0deg) translate(-10px) rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);\n    transform: rotate(360deg) translate(-10px) rotate(-360deg); } }\n\n@-webkit-keyframes floating {\n  from {\n    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);\n    transform: rotate(0deg) translate(-10px) rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);\n    transform: rotate(360deg) translate(-10px) rotate(-360deg); } }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bonge\Documents\Projects\movies_database\movies-client\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map