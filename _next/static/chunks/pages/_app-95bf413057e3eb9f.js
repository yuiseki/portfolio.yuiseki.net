(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3498)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(1003),c=n(880),l=n(9246);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function d(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var p=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,y=e.as,b=e.children,v=e.prefetch,h=e.passHref,m=e.replace,g=e.shallow,j=e.scroll,w=e.locale,O=e.onClick,E=e.onMouseEnter,k=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=b,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var x,S=!1!==v,I=c.useRouter(),C=i.default.useMemo((function(){var e=o(u.resolveHref(I,p,!0),2),t=e[0],n=e[1];return{href:t,as:y?u.resolveHref(I,y):n||t}}),[I,p,y]),_=C.href,M=C.as,L=i.default.useRef(_),P=i.default.useRef(M);a&&(x=i.default.Children.only(n));var A=a?x&&"object"===typeof x&&x.ref:t,R=o(l.useIntersection({rootMargin:"200px"}),3),N=R[0],T=R[1],U=R[2],D=i.default.useCallback((function(e){P.current===M&&L.current===_||(U(),P.current=M,L.current=_),N(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[M,A,_,U,N]);i.default.useEffect((function(){var e=T&&S&&u.isLocalURL(_),t="undefined"!==typeof w?w:I&&I.locale,n=s[_+"%"+M+(t?"%"+t:"")];e&&!n&&d(I,_,M,{locale:t})}),[M,_,T,w,S,I]);var H={ref:D,onClick:function(e){a||"function"!==typeof O||O(e),a&&x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,I,_,M,m,g,j,w)},onMouseEnter:function(e){a||"function"!==typeof E||E(e),a&&x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u.isLocalURL(_)&&d(I,_,M,{priority:!0})}};if(!a||h||"a"===x.type&&!("href"in x.props)){var z="undefined"!==typeof w?w:I&&I.locale,B=I&&I.isLocaleDomain&&u.getDomainLocale(M,z,I&&I.locales,I&&I.domainLocales);H.href=B||u.addBasePath(u.addLocale(M,z,I&&I.defaultLocale))}return a?i.default.cloneElement(x,H):i.default.createElement("a",Object.assign({},k,H),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(t?t.current:null),2),b=y[0],v=y[1],h=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:n}))}),[r,b,n,d]),m=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[h,d,m]};var a=n(7294),i=n(4686),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3498:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=(n(7107),n(1664)),a=n.n(o),i=n(7294),u=JSON.parse('{"L1":[{"id":"6292d8de7309170023cddec6","title":"index","image":null,"descriptions":["[*** About]","[yuiseki]\u306e\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3059","[*** Works]","2022","2021"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600950042,"views":6,"linked":0,"commitId":"6292decee56319001db273b2","created":1653790945,"updated":1653792462,"accessed":1653794771,"snapshotCreated":1653792411,"pageRank":0},{"id":"6292da82f5b7c500233db11e","title":"yuiseki","image":"https://gyazo.com/7d6d734ea6313f001a62ca97f6cbef4e/raw","descriptions":["[https://gyazo.com/7d6d734ea6313f001a62ca97f6cbef4e]","[*** Education]","[* 2004-2008]","Musashi Institute of Technology, Environmental and Information Studies, Department of Information Media","Bachelor degree of Environmental and Information Studies"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600948124,"views":2,"linked":1,"commitId":"6292e062e56319001db27e54","created":1653791362,"updated":1653792866,"accessed":1653792864,"snapshotCreated":1653792643,"pageRank":1},{"id":"6292d8b197c664001dc1d4f1","title":"Scrapbox\u306e\u4f7f\u3044\u65b9","image":"https://gyazo.com/5f93e65a3b979ae5333aca4f32600611/raw","descriptions":["Scrapbox\u3078\u3088\u3046\u3053\u305d\u3002\u3053\u306e\u30da\u30fc\u30b8\u306f\u81ea\u7531\u306b\u7de8\u96c6\u3057\u3066\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002","\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30e1\u30f3\u30d0\u30fc\u3092\u62db\u5f85\u3057\u307e\u3057\u3087\u3046","\u5de6\u4e0a\u306e\u30e1\u30cb\u30e5\u30fc\u306eProject Settings\u304b\u3089\u3001\u4ed6\u306e\u4eba\u3092\u62db\u5f85\u3067\u304d\u308b\u30ea\u30f3\u30af\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002","Scrapbox\u3067\u306f\u540c\u4e00\u30da\u30fc\u30b8\u3092\u8907\u6570\u4eba\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u5171\u540c\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002","\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u8a66\u3057\u3066\u307f\u3088\u3046"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":0,"views":0,"linked":0,"created":1653790897,"updated":1653790897,"accessed":1653790897,"snapshotCreated":null,"pageRank":0}]}');function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}var f=function(e){var t=e.Component,n=e.pageProps,o=(0,i.useState)([]),c=o[0],f=o[1];return(0,i.useEffect)((function(){var e=u.L1.filter((function(e){return 0<e.pin})).map((function(e){return e.title}));f(e)}),[]),(0,r.jsxs)("div",{className:"root",children:[(0,r.jsx)("h1",{children:"Portfolio | yuiseki"}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:c.map((function(e){return"index"===e?(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("a",{children:"Home"})})},e):(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/"+e,children:(0,r.jsx)("a",{children:e})})},e)}))})}),(0,r.jsx)(t,l({},n))]})}},7107:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);