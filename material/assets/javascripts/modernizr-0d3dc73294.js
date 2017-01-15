!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var f in w)if(w.hasOwnProperty(f)){if(e=[],t=w[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?_[a[0]]=s:(!_[a[0]]||_[a[0]]instanceof Boolean||(_[a[0]]=new Boolean(_[a[0]])),_[a[0]][a[1]]=s),S.push((s?"":"no-")+a.join("-"))}}function o(e){var t=b.className,n=_._config.classPrefix||"";if(T&&(t=t.baseVal),_._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}_._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?b.className.baseVal=t:b.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)x(e,n)&&i(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),s=_[r[0]];if(2==r.length&&(s=s[r[1]]),"undefined"!=typeof s)return _;t="function"==typeof t?t():t,1==r.length?_[r[0]]=t:(!_[r[0]]||_[r[0]]instanceof Boolean||(_[r[0]]=new Boolean(_[r[0]])),_[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),_._trigger(e,t)}return _}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function f(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var o,i,l,u,p="modernizr",c=a("div"),d=f();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=s?s[r]:p+(r+1),c.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+p,(d.fake?d:c).appendChild(o),d.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),i=n(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=u,b.offsetHeight):c.parentNode.removeChild(c),!!i}function u(e,t){return!!~(""+e).indexOf(t)}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(t[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,s,o){function i(){l&&(delete N.style,delete N.modElem)}if(o=!r(o,"undefined")&&o,!r(s,"undefined")){var f=c(e,s);if(!r(f,"undefined"))return f}for(var l,p,h,m,g,v=["modernizr","tspan"];!N.style;)l=!0,N.modElem=a(v.shift()),N.style=N.modElem.style;for(h=e.length,p=0;p<h;p++)if(m=e[p],g=N.style[m],u(m,"-")&&(m=d(m)),N.style[m]!==n){if(o||r(s,"undefined"))return i(),"pfx"!=t||m;try{N.style[m]=s}catch(e){}if(N.style[m]!=g)return i(),"pfx"!=t||m}return i(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?m(s,n||t):s);return!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,s,o):(a=(e+" "+A.join(i+" ")+i).split(" "),g(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var w=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},_=function(){};_.prototype=C,_=new _;var x,S=[],b=t.documentElement,T="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;x=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),_.hasOwnProperty(e)&&setTimeout(function(){_._trigger(e,_[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},_._q.push(function(){C.addTest=i});var P=C.testStyles=l,E=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,s=t<533&&e.match(/android/gi);return n||s||r}();E?_.addTest("fontface",!1):P('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),s=r.sheet||r.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);_.addTest("fontface",i)});var z="Moz O ms Webkit",j=C._config.usePrefixes?z.split(" "):[];C._cssomPrefixes=j;var k={elem:a("modernizr")};_._q.push(function(){delete k.elem});var N={style:k.elem.style};_._q.unshift(function(){delete N.style});var A=C._config.usePrefixes?z.toLowerCase().split(" "):[];C._domPrefixes=A,C.testAllProps=v,C.testAllProps=y;var R="CSS"in e&&"supports"in e.CSS,q="supportsCSS"in e;_.addTest("supports",R||q),_.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=_._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var n,r="#modernizr{width:0;height:0}";_.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),s(),o(S),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<_._q.length;L++)_._q[L]();e.Modernizr=_}(window,document);