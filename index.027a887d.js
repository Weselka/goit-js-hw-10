!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||f.default(e,t)||c.default()};var u=l(o("8slrw")),a=l(o("7AJDX")),c=l(o("ifqQW")),f=l(o("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,j=b||h||Function("return this")(),x=Object.prototype.toString,_=Math.max,O=Math.min,w=function(){return j.Date.now()};function M(t){var n=void 0===t?"undefined":e(d)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==x.call(t)}(t))return NaN;if(M(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=M(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var r=y.test(t);return r||g.test(t)?m(t.slice(2),r?2:8):v.test(t)?NaN:+t}s=function(e,t,n){var r,o,i,u,a,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function v(e){return f=e,a=setTimeout(g,t),l?p(e):u}function y(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-f>=i}function g(){var e=w();if(y(e))return m(e);a=setTimeout(g,function(e){var n=t-(e-c);return s?O(n,i-(e-f)):n}(e))}function m(e){return a=void 0,d&&r?p(e):(r=o=void 0,u)}function b(){var e=w(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return v(c);if(s)return a=setTimeout(g,t),p(c)}return void 0===a&&(a=setTimeout(g,t)),u}return t=T(t)||0,M(n)&&(l=!!n.leading,i=(s="maxWait"in n)?_(T(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},b.flush=function(){return void 0===a?u:m(w())},b};var L={countryList:document.querySelector(".country-list"),container:document.querySelector(".country-info"),searchBox:document.querySelector("#search-box")};function S(e){alert("Oops, there is no country with that name")}L.searchBox.addEventListener("input",e(s)((function(t){t.preventDefault();var n=t.target.value.trim().toLowerCase();if(console.log(n),0===n.length)return alert("Enter country");(r=n,o="".concat("https://restcountries.com/v3.1","/name/").concat(r,"?fields=name,capital,population,flags,languages"),fetch(o).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(t){L.container.innerHTML="",L.countryList.innerHTML="",1===t.length?function(t){var n=e(i)(t,1)[0],r=n.name,o=n.capital,u=n.population,a=n.flags,c=n.languages,f='<div>\n  <img src="'.concat(a.svg,'" alt="flags" width=100>\n      <h2>Country: ').concat(r.official,"</h2>\n      <p>Capital: ").concat(o,"</p>\n      <p>Population: ").concat(u,"</p>      \n      <p>Languages: ").concat(Object.values(c).join(", "),"</p></div>");L.container.innerHTML=f}(t):t.length>=2&&t.length<=10?function(e){console.log(e);var t=e.map((function(e){var t=e.name,n=e.flags;return"<li>\n      <h2>Country:".concat(t.common,'</h2>\n      <img src="').concat(n.svg,'" alt="flags" width=30>')})).join("");L.countryList.innerHTML=t}(t):alert("Too many countries")})).catch(S);var r,o}),300))}();
//# sourceMappingURL=index.027a887d.js.map
