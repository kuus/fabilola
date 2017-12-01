/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-csspointerevents-csspositionsticky-cssremunit-csstransforms-csstransforms3d-cssvwunit-flexbox-inlinesvg-svg-touchevents-mq-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){function r(e,t){return typeof e===t}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function i(e,n,r,i){var a,l,u,f,c="modernizr",d=s("div"),p=o();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=i?i[r]:c+(r+1),d.appendChild(u);return a=s("style"),a.type="text/css",a.id="s"+c,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):d.parentNode.removeChild(d),!!l}function a(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function f(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(l(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+l(t[s])+":"+r+")");return o=o.join(" or "),i("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return n}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t,o,i){function l(){d&&(delete E.style,delete E.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var u=f(e,o);if(!r(u,"undefined"))return u}for(var d,p,m,v,h,g=["modernizr","tspan","samp"];!E.style&&g.length;)d=!0,E.modElem=s(g.shift()),E.style=E.modElem.style;for(m=e.length,p=0;p<m;p++)if(v=e[p],h=E.style[v],a(v,"-")&&(v=c(v)),E.style[v]!==n){if(i||r(o,"undefined"))return l(),"pfx"!=t||v;try{E.style[v]=o}catch(e){}if(E.style[v]!=h)return l(),"pfx"!=t||v}return l(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var s;for(var o in e)if(e[o]in t)return!1===n?e[o]:(s=t[e[o]],r(s,"function")?p(s,n||t):s);return!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?d(a,t,s,o):(a=(e+" "+j.join(i+" ")+i).split(" "),m(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var g=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=y,w=new w;var S=[],C=t.documentElement,x="svg"===C.nodeName.toLowerCase(),T=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return i("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();y.mq=T,w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=b;var z=y.testStyles=i;w.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var _="Moz O ms Webkit",P=y._config.usePrefixes?_.split(" "):[];y._cssomPrefixes=P;var k={elem:s("modernizr")};w._q.push(function(){delete k.elem});var E={style:k.elem.style};w._q.unshift(function(){delete E.style});var j=y._config.usePrefixes?_.toLowerCase().split(" "):[];y._domPrefixes=j,y.testAllProps=v,y.testAllProps=h,w.addTest("flexbox",h("flexBasis","1px",!0)),w.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),w.addTest("csspositionsticky",function(){var e="position:",t=s("a"),n=t.style;return n.cssText=e+b.join("sticky;"+e).slice(0,-e.length),-1!==n.position.indexOf("sticky")}),w.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(e){}return/rem/.test(e.fontSize)}),w.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)});var N="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;w.addTest("supports",N||A),w.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=w._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var n;w.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z("#modernizr{width:0;height:0}"+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(u(t,null,"width"),10);w.addTest("cssvwunit",r==n)}),w.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),function(){var e,t,n,s,o,i,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],t=g[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?w[a[0]]=s:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=s),S.push((s?"":"no-")+a.join("-"))}}(),function(e){var t=C.className,n=w._config.classPrefix||"";if(x&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?C.className.baseVal=t:C.className=t)}(S),delete y.addTest,delete y.addAsyncTest;for(var q=0;q<w._q.length;q++)w._q[q]();e.Modernizr=w}(window,document);
/*! jQuery v3.1.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/animatedSelector,-effects/Tween,-deprecated | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/animatedSelector,-effects/Tween,-deprecated",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,
holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}}),r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var Ya,Za=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?Ya:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),Ya={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Za[b]||r.find.attr;Za[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=Za[g],Za[g]=e,e=null!=c(a,b,d)?g:null,Za[g]=f),e}});var $a=/^(?:input|select|textarea|button)$/i,_a=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):$a.test(a.nodeName)||_a.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function ab(a){var b=a.match(K)||[];return b.join(" ")}function bb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,bb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=bb(c),d=1===c.nodeType&&" "+ab(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=ab(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=bb(c),d=1===c.nodeType&&" "+ab(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=ab(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=bb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+ab(bb(c))+" ").indexOf(b)>-1)return!0;return!1}});var cb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(cb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:ab(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var db=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!db.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,db.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var eb=/\[\]$/,fb=/\r?\n/g,gb=/^(?:submit|button|image|reset|file)$/i,hb=/^(?:input|select|textarea|keygen)/i;function ib(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||eb.test(a)?d(a,e):ib(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d);
});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)ib(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)ib(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&hb.test(this.nodeName)&&!gb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(fb,"\r\n")}}):{name:b.name,value:c.replace(fb,"\r\n")}}).get()}}),r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))};function jb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=jb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=jb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var kb=a.jQuery,lb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=lb),b&&a.jQuery===r&&(a.jQuery=kb),r},b||(a.jQuery=a.$=r),r});
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs/jq-2.2.4/dt-1.10.15
 *
 * Included libraries:
 *   jQuery 2.2.4, DataTables 1.10.15
 */

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});


/*!
 DataTables 1.10.15
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
!0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),t=o[0],s=t.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
u&&(Q=u.clone().prependTo(o),P=u.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);u&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);u&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(t.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));
j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(t);h("[name]",
j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=s(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}s(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
[Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(Aa(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var t=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||t)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
"user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var u=o.oClasses;g.bJQueryUI?(h.extend(u,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,t,p,u,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=
/<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof
t))return new t(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,
m,p,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new t(l[g]);if("table"===b)f=c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],u.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new t(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,sa(this))},unshift:w.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new t(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};
p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];
b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},
1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<
g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});
this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:
k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=
k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",
function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,
b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);
return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,
j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===
k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",
function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()",
"column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();
g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===
a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Tb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,u,t,s,v;return bb("cell",d,function(a){var c=typeof a==="function";
if(a===null||a===k||c){m=[];p=0;for(u=g.length;p<u;p++){l=g[p];for(t=0;t<n;t++){s={row:l,column:t};if(c){v=f[l];a(s,B(b,l,t),v.anCells?v.anCells[t]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,
c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a=
"search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",
function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=
this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?
!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),
a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,
function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
function(a){pa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+
", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
"row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.15";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
{aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},build:"bs/jq-2.2.4/dt-1.10.15",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",
sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,
b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=
h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+
" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);
return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?
a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,
_fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,
_fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,_fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,
_fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,
_fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});


/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});



/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function( factory ){
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( ['jquery', 'datatables.net'], function ( $ ) {
      return factory( $, window, document );
    } );
  }
  else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = function (root, $) {
      if ( ! root ) {
        root = window;
      }

      if ( ! $ || ! $.fn.dataTable ) {
        // Require DataTables, which attaches to jQuery, including
        // jQuery if needed and have a $ property so we can access the
        // jQuery object that is used
        $ = require('datatables.net')(root, $).$;
      }

      return factory( $, root, root.document );
    };
  }
  else {
    // Browser
    factory( jQuery, window, document );
  }
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
  dom:
    "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    // "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
  sWrapper:      "dataTables_wrapper container-fluid dt-bootstrap4",
  sFilterInput:  "form-control form-control-sm",
  sLengthSelect: "form-control form-control-sm",
  sProcessing:   "dataTables_processing card",
  sPageButton:   "paginate_button page-item"
} );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
  var api     = new DataTable.Api( settings );
  var classes = settings.oClasses;
  var lang    = settings.oLanguage.oPaginate;
  var aria = settings.oLanguage.oAria.paginate || {};
  var btnDisplay, btnClass, counter=0;

  var attach = function( container, buttons ) {
    var i, ien, node, button;
    var clickHandler = function ( e ) {
      e.preventDefault();
      if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
        api.page( e.data.action ).draw( 'page' );
      }
    };

    for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
      button = buttons[i];

      if ( $.isArray( button ) ) {
        attach( container, button );
      }
      else {
        btnDisplay = '';
        btnClass = '';

        switch ( button ) {
          case 'ellipsis':
            btnDisplay = '&#x2026;';
            btnClass = 'disabled';
            break;

          case 'first':
            btnDisplay = lang.sFirst;
            btnClass = button + (page > 0 ?
              '' : ' disabled');
            break;

          case 'previous':
            // <a class="page-link" href="#" aria-label="Previous">
            //   <span aria-hidden="true">&#10094;</span>
            //   <span class="sr-only">Previous</span>
            // </a>
            btnDisplay = '&#10094;'; // @@custom
            // lang.sPrevious;
            btnClass = button + (page > 0 ?
              '' : ' disabled');
            break;

          case 'next':
            // <a class="page-link" href="/mijn-biedingen.html" aria-label="Next">
            //   <span aria-hidden="true">&#10095;</span>
            //   <span class="sr-only">Next</span>
            // </a>
            btnDisplay = '&#10095;'; // @@custom
            // btnDisplay = lang.sNext;
            btnClass = button + (page < pages-1 ?
              '' : ' disabled');
            break;

          case 'last':
            btnDisplay = lang.sLast;
            btnClass = button + (page < pages-1 ?
              '' : ' disabled');
            break;

          default:
            btnDisplay = button + 1;
            btnClass = page === button ?
              'active' : '';
            break;
        }

        if ( btnDisplay ) {
          node = $('<li>', {
              'class': classes.sPageButton+' '+btnClass,
              'id': idx === 0 && typeof button === 'string' ?
                settings.sTableId +'_'+ button :
                null
            } )
            .append( $('<a>', {
                'href': '#',
                'aria-controls': settings.sTableId,
                'aria-label': aria[ button ],
                'data-dt-idx': counter,
                'tabindex': settings.iTabIndex,
                'class': 'page-link'
              } )
              .html( btnDisplay )
            )
            .appendTo( container );

          settings.oApi._fnBindAction(
            node, {action: button}, clickHandler
          );

          counter++;
        }
      }
    }
  };

  // IE9 throws an 'unknown error' if document.activeElement is used
  // inside an iframe or frame.
  var activeEl;

  try {
    // Because this approach is destroying and recreating the paging
    // elements, focus is lost on the select button which is bad for
    // accessibility. So we want to restore focus once the draw has
    // completed
    activeEl = $(host).find(document.activeElement).data('dt-idx');
  }
  catch (e) {}

  attach(
    $(host).empty().html('<ul class="pagination"/>').children('ul'),
    buttons
  );

  if ( activeEl !== undefined ) {
    $(host).find( '[data-dt-idx='+activeEl+']' ).focus();
  }
};


return DataTable;
}));
/**
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = '0.7.2';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define( ["jquery"], factory );
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory( require( "jquery" ) );
  } else {
    factory( jQuery );
  }
}(function( $ ) {

$.extend( $.fn, {

  // http://jqueryvalidation.org/validate/
  validate: function( options ) {

    // If nothing is selected, return nothing; can't chain anyway
    if ( !this.length ) {
      if ( options && options.debug && window.console ) {
        console.warn( "Nothing selected, can't validate, returning nothing." );
      }
      return;
    }

    // Check if a validator for this form was already created
    var validator = $.data( this[ 0 ], "validator" );
    if ( validator ) {
      return validator;
    }

    // Add novalidate tag if HTML5.
    this.attr( "novalidate", "novalidate" );

    validator = new $.validator( options, this[ 0 ] );
    $.data( this[ 0 ], "validator", validator );

    if ( validator.settings.onsubmit ) {

      this.on( "click.validate", ":submit", function( event ) {
        if ( validator.settings.submitHandler ) {
          validator.submitButton = event.target;
        }

        // Allow suppressing validation by adding a cancel class to the submit button
        if ( $( this ).hasClass( "cancel" ) ) {
          validator.cancelSubmit = true;
        }

        // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
        if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
          validator.cancelSubmit = true;
        }
      } );

      // Validate the form on submit
      this.on( "submit.validate", function( event ) {
        if ( validator.settings.debug ) {

          // Prevent form submit to be able to see console output
          event.preventDefault();
        }
        function handle() {
          var hidden, result;
          if ( validator.settings.submitHandler ) {
            if ( validator.submitButton ) {

              // Insert a hidden input as a replacement for the missing submit button
              hidden = $( "<input type='hidden'/>" )
                .attr( "name", validator.submitButton.name )
                .val( $( validator.submitButton ).val() )
                .appendTo( validator.currentForm );
            }
            result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
            if ( validator.submitButton ) {

              // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
              hidden.remove();
            }
            if ( result !== undefined ) {
              return result;
            }
            return false;
          }
          return true;
        }

        // Prevent submit for invalid forms or custom submit handlers
        if ( validator.cancelSubmit ) {
          validator.cancelSubmit = false;
          return handle();
        }
        if ( validator.form() ) {
          if ( validator.pendingRequest ) {
            validator.formSubmitted = true;
            return false;
          }
          return handle();
        } else {
          validator.focusInvalid();
          return false;
        }
      } );
    }

    return validator;
  },

  // http://jqueryvalidation.org/valid/
  valid: function() {
    var valid, validator, errorList;

    if ( $( this[ 0 ] ).is( "form" ) ) {
      valid = this.validate().form();
    } else {
      errorList = [];
      valid = true;
      validator = $( this[ 0 ].form ).validate();
      this.each( function() {
        valid = validator.element( this ) && valid;
        if ( !valid ) {
          errorList = errorList.concat( validator.errorList );
        }
      } );
      validator.errorList = errorList;
    }
    return valid;
  },

  // http://jqueryvalidation.org/rules/
  rules: function( command, argument ) {
    var element = this[ 0 ],
      settings, staticRules, existingRules, data, param, filtered;

    // If nothing is selected, return empty object; can't chain anyway
    if ( element == null || element.form == null ) {
      return;
    }

    if ( command ) {
      settings = $.data( element.form, "validator" ).settings;
      staticRules = settings.rules;
      existingRules = $.validator.staticRules( element );
      switch ( command ) {
      case "add":
        $.extend( existingRules, $.validator.normalizeRule( argument ) );

        // Remove messages from rules, but allow them to be set separately
        delete existingRules.messages;
        staticRules[ element.name ] = existingRules;
        if ( argument.messages ) {
          settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
        }
        break;
      case "remove":
        if ( !argument ) {
          delete staticRules[ element.name ];
          return existingRules;
        }
        filtered = {};
        $.each( argument.split( /\s/ ), function( index, method ) {
          filtered[ method ] = existingRules[ method ];
          delete existingRules[ method ];
          if ( method === "required" ) {
            $( element ).removeAttr( "aria-required" );
          }
        } );
        return filtered;
      }
    }

    data = $.validator.normalizeRules(
    $.extend(
      {},
      $.validator.classRules( element ),
      $.validator.attributeRules( element ),
      $.validator.dataRules( element ),
      $.validator.staticRules( element )
    ), element );

    // Make sure required is at front
    if ( data.required ) {
      param = data.required;
      delete data.required;
      data = $.extend( { required: param }, data );
      $( element ).attr( "aria-required", "true" );
    }

    // Make sure remote is at back
    if ( data.remote ) {
      param = data.remote;
      delete data.remote;
      data = $.extend( data, { remote: param } );
    }

    return data;
  }
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {    // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

  // http://jqueryvalidation.org/blank-selector/
  blank: function( a ) {
    return !$.trim( "" + $( a ).val() );
  },

  // http://jqueryvalidation.org/filled-selector/
  filled: function( a ) {
    var val = $( a ).val();
    return val !== null && !!$.trim( "" + val );
  },

  // http://jqueryvalidation.org/unchecked-selector/
  unchecked: function( a ) {
    return !$( a ).prop( "checked" );
  }
} );

// Constructor for validator
$.validator = function( options, form ) {
  this.settings = $.extend( true, {}, $.validator.defaults, options );
  this.currentForm = form;
  this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
  if ( arguments.length === 1 ) {
    return function() {
      var args = $.makeArray( arguments );
      args.unshift( source );
      return $.validator.format.apply( this, args );
    };
  }
  if ( params === undefined ) {
    return source;
  }
  if ( arguments.length > 2 && params.constructor !== Array  ) {
    params = $.makeArray( arguments ).slice( 1 );
  }
  if ( params.constructor !== Array ) {
    params = [ params ];
  }
  $.each( params, function( i, n ) {
    source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
      return n;
    } );
  } );
  return source;
};

$.extend( $.validator, {

  defaults: {
    messages: {},
    groups: {},
    rules: {},
    errorClass: "error",
    pendingClass: "pending",
    validClass: "valid",
    errorElement: "label",
    focusCleanup: false,
    focusInvalid: true,
    errorContainer: $( [] ),
    errorLabelContainer: $( [] ),
    onsubmit: true,
    ignore: ":hidden",
    ignoreTitle: false,
    onfocusin: function( element ) {
      this.lastActive = element;

      // Hide error label and remove error class on focus if enabled
      if ( this.settings.focusCleanup ) {
        if ( this.settings.unhighlight ) {
          this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
        }
        this.hideThese( this.errorsFor( element ) );
      }
    },
    onfocusout: function( element ) {
      if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
        this.element( element );
      }
    },
    onkeyup: function( element, event ) {

      // Avoid revalidate the field when pressing one of the following keys
      // Shift       => 16
      // Ctrl        => 17
      // Alt         => 18
      // Caps lock   => 20
      // End         => 35
      // Home        => 36
      // Left arrow  => 37
      // Up arrow    => 38
      // Right arrow => 39
      // Down arrow  => 40
      // Insert      => 45
      // Num lock    => 144
      // AltGr key   => 225
      var excludedKeys = [
        16, 17, 18, 20, 35, 36, 37,
        38, 39, 40, 45, 144, 225
      ];

      if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
        return;
      } else if ( element.name in this.submitted || element.name in this.invalid ) {
        this.element( element );
      }
    },
    onclick: function( element ) {

      // Click on selects, radiobuttons and checkboxes
      if ( element.name in this.submitted ) {
        this.element( element );

      // Or option elements, check parent select in that case
      } else if ( element.parentNode.name in this.submitted ) {
        this.element( element.parentNode );
      }
    },
    highlight: function( element, errorClass, validClass ) {
      if ( element.type === "radio" ) {
        this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
      } else {
        $( element ).addClass( errorClass ).removeClass( validClass );
      }
    },
    unhighlight: function( element, errorClass, validClass ) {
      if ( element.type === "radio" ) {
        this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
      } else {
        $( element ).removeClass( errorClass ).addClass( validClass );
      }
    }
  },

  // http://jqueryvalidation.org/jQuery.validator.setDefaults/
  setDefaults: function( settings ) {
    $.extend( $.validator.defaults, settings );
  },

  messages: {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    equalTo: "Please enter the same value again.",
    maxlength: $.validator.format( "Please enter no more than {0} characters." ),
    minlength: $.validator.format( "Please enter at least {0} characters." ),
    rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
    range: $.validator.format( "Please enter a value between {0} and {1}." ),
    max: $.validator.format( "Please enter a value less than or equal to {0}." ),
    min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
    step: $.validator.format( "Please enter a multiple of {0}." )
  },

  autoCreateRanges: false,

  prototype: {

    init: function() {
      this.labelContainer = $( this.settings.errorLabelContainer );
      this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
      this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
      this.submitted = {};
      this.valueCache = {};
      this.pendingRequest = 0;
      this.pending = {};
      this.invalid = {};
      this.reset();

      var groups = ( this.groups = {} ),
        rules;
      $.each( this.settings.groups, function( key, value ) {
        if ( typeof value === "string" ) {
          value = value.split( /\s/ );
        }
        $.each( value, function( index, name ) {
          groups[ name ] = key;
        } );
      } );
      rules = this.settings.rules;
      $.each( rules, function( key, value ) {
        rules[ key ] = $.validator.normalizeRule( value );
      } );

      function delegate( event ) {

        // Set form expando on contenteditable
        if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
          this.form = $( this ).closest( "form" )[ 0 ];
        }

        var validator = $.data( this.form, "validator" ),
          eventType = "on" + event.type.replace( /^validate/, "" ),
          settings = validator.settings;
        if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
          settings[ eventType ].call( validator, this, event );
        }
      }

      $( this.currentForm )
        .on( "focusin.validate focusout.validate keyup.validate",
          ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
          "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
          "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
          "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

        // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

      if ( this.settings.invalidHandler ) {
        $( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
      }

      // Add aria-required to any Static/Data/Class required fields before first validation
      // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
      $( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
    },

    // http://jqueryvalidation.org/Validator.form/
    form: function() {
      this.checkForm();
      $.extend( this.submitted, this.errorMap );
      this.invalid = $.extend( {}, this.errorMap );
      if ( !this.valid() ) {
        $( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
      }
      this.showErrors();
      return this.valid();
    },

    checkForm: function() {
      this.prepareForm();
      for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
        this.check( elements[ i ] );
      }
      return this.valid();
    },

    // http://jqueryvalidation.org/Validator.element/
    element: function( element ) {
      var cleanElement = this.clean( element ),
        checkElement = this.validationTargetFor( cleanElement ),
        v = this,
        result = true,
        rs, group;

      if ( checkElement === undefined ) {
        delete this.invalid[ cleanElement.name ];
      } else {
        this.prepareElement( checkElement );
        this.currentElements = $( checkElement );

        // If this element is grouped, then validate all group elements already
        // containing a value
        group = this.groups[ checkElement.name ];
        if ( group ) {
          $.each( this.groups, function( name, testgroup ) {
            if ( testgroup === group && name !== checkElement.name ) {
              cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
              if ( cleanElement && cleanElement.name in v.invalid ) {
                v.currentElements.push( cleanElement );
                result = v.check( cleanElement ) && result;
              }
            }
          } );
        }

        rs = this.check( checkElement ) !== false;
        result = result && rs;
        if ( rs ) {
          this.invalid[ checkElement.name ] = false;
        } else {
          this.invalid[ checkElement.name ] = true;
        }

        if ( !this.numberOfInvalids() ) {

          // Hide error containers on last error
          this.toHide = this.toHide.add( this.containers );
        }
        this.showErrors();

        // Add aria-invalid status for screen readers
        $( element ).attr( "aria-invalid", !rs );
      }

      return result;
    },

    // http://jqueryvalidation.org/Validator.showErrors/
    showErrors: function( errors ) {
      if ( errors ) {
        var validator = this;

        // Add items to error list and map
        $.extend( this.errorMap, errors );
        this.errorList = $.map( this.errorMap, function( message, name ) {
          return {
            message: message,
            element: validator.findByName( name )[ 0 ]
          };
        } );

        // Remove items from success list
        this.successList = $.grep( this.successList, function( element ) {
          return !( element.name in errors );
        } );
      }
      if ( this.settings.showErrors ) {
        this.settings.showErrors.call( this, this.errorMap, this.errorList );
      } else {
        this.defaultShowErrors();
      }
    },

    // http://jqueryvalidation.org/Validator.resetForm/
    resetForm: function() {
      if ( $.fn.resetForm ) {
        $( this.currentForm ).resetForm();
      }
      this.invalid = {};
      this.submitted = {};
      this.prepareForm();
      this.hideErrors();
      var elements = this.elements()
        .removeData( "previousValue" )
        .removeAttr( "aria-invalid" );

      this.resetElements( elements );
    },

    resetElements: function( elements ) {
      var i;

      if ( this.settings.unhighlight ) {
        for ( i = 0; elements[ i ]; i++ ) {
          this.settings.unhighlight.call( this, elements[ i ],
            this.settings.errorClass, "" );
          this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
        }
      } else {
        elements
          .removeClass( this.settings.errorClass )
          .removeClass( this.settings.validClass );
      }
    },

    numberOfInvalids: function() {
      return this.objectLength( this.invalid );
    },

    objectLength: function( obj ) {
      /* jshint unused: false */
      var count = 0,
        i;
      for ( i in obj ) {
        if ( obj[ i ] ) {
          count++;
        }
      }
      return count;
    },

    hideErrors: function() {
      this.hideThese( this.toHide );
    },

    hideThese: function( errors ) {
      errors.not( this.containers ).text( "" );
      this.addWrapper( errors ).hide();
    },

    valid: function() {
      return this.size() === 0;
    },

    size: function() {
      return this.errorList.length;
    },

    focusInvalid: function() {
      if ( this.settings.focusInvalid ) {
        try {
          $( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
          .filter( ":visible" )
          .focus()

          // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
          .trigger( "focusin" );
        } catch ( e ) {

          // Ignore IE throwing errors when focusing hidden elements
        }
      }
    },

    findLastActive: function() {
      var lastActive = this.lastActive;
      return lastActive && $.grep( this.errorList, function( n ) {
        return n.element.name === lastActive.name;
      } ).length === 1 && lastActive;
    },

    elements: function() {
      var validator = this,
        rulesCache = {};

      // Select all valid inputs inside the form (no submit or reset buttons)
      return $( this.currentForm )
      .find( "input, select, textarea, [contenteditable]" )
      .not( ":submit, :reset, :image, :disabled" )
      .not( this.settings.ignore )
      .filter( function() {
        var name = this.name || $( this ).attr( "name" ); // For contenteditable
        if ( !name && validator.settings.debug && window.console ) {
          console.error( "%o has no name assigned", this );
        }

        // Set form expando on contenteditable
        if ( this.hasAttribute( "contenteditable" ) ) {
          this.form = $( this ).closest( "form" )[ 0 ];
        }

        // Select only the first element for each name, and only those with rules specified
        if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
          return false;
        }

        rulesCache[ name ] = true;
        return true;
      } );
    },

    clean: function( selector ) {
      return $( selector )[ 0 ];
    },

    errors: function() {
      var errorClass = this.settings.errorClass.split( " " ).join( "." );
      return $( this.settings.errorElement + "." + errorClass, this.errorContext );
    },

    resetInternals: function() {
      this.successList = [];
      this.errorList = [];
      this.errorMap = {};
      this.toShow = $( [] );
      this.toHide = $( [] );
    },

    reset: function() {
      this.resetInternals();
      this.currentElements = $( [] );
    },

    prepareForm: function() {
      this.reset();
      this.toHide = this.errors().add( this.containers );
    },

    prepareElement: function( element ) {
      this.reset();
      this.toHide = this.errorsFor( element );
    },

    elementValue: function( element ) {
      var $element = $( element ),
        type = element.type,
        val, idx;

      if ( type === "radio" || type === "checkbox" ) {
        return this.findByName( element.name ).filter( ":checked" ).val();
      } else if ( type === "number" && typeof element.validity !== "undefined" ) {
        return element.validity.badInput ? "NaN" : $element.val();
      }

      if ( element.hasAttribute( "contenteditable" ) ) {
        val = $element.text();
      } else {
        val = $element.val();
      }

      if ( type === "file" ) {

        // Modern browser (chrome & safari)
        if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
          return val.substr( 12 );
        }

        // Legacy browsers
        // Unix-based path
        idx = val.lastIndexOf( "/" );
        if ( idx >= 0 ) {
          return val.substr( idx + 1 );
        }

        // Windows-based path
        idx = val.lastIndexOf( "\\" );
        if ( idx >= 0 ) {
          return val.substr( idx + 1 );
        }

        // Just the file name
        return val;
      }

      if ( typeof val === "string" ) {
        return val.replace( /\r/g, "" );
      }
      return val;
    },

    check: function( element ) {
      element = this.validationTargetFor( this.clean( element ) );

      var rules = $( element ).rules(),
        rulesCount = $.map( rules, function( n, i ) {
          return i;
        } ).length,
        dependencyMismatch = false,
        val = this.elementValue( element ),
        result, method, rule;

      // If a normalizer is defined for this element, then
      // call it to retreive the changed value instead
      // of using the real one.
      // Note that `this` in the normalizer is `element`.
      if ( typeof rules.normalizer === "function" ) {
        val = rules.normalizer.call( element, val );

        if ( typeof val !== "string" ) {
          throw new TypeError( "The normalizer should return a string value." );
        }

        // Delete the normalizer from rules to avoid treating
        // it as a pre-defined method.
        delete rules.normalizer;
      }

      for ( method in rules ) {
        rule = { method: method, parameters: rules[ method ] };
        try {
          result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

          // If a method indicates that the field is optional and therefore valid,
          // don't mark it as valid when there are no other rules
          if ( result === "dependency-mismatch" && rulesCount === 1 ) {
            dependencyMismatch = true;
            continue;
          }
          dependencyMismatch = false;

          if ( result === "pending" ) {
            this.toHide = this.toHide.not( this.errorsFor( element ) );
            return;
          }

          if ( !result ) {
            this.formatAndAdd( element, rule );
            return false;
          }
        } catch ( e ) {
          if ( this.settings.debug && window.console ) {
            console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
          }
          if ( e instanceof TypeError ) {
            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
          }

          throw e;
        }
      }
      if ( dependencyMismatch ) {
        return;
      }
      if ( this.objectLength( rules ) ) {
        this.successList.push( element );
      }
      return true;
    },

    // Return the custom message for the given element and validation method
    // specified in the element's HTML5 data attribute
    // return the generic message if present and no method specific message is present
    customDataMessage: function( element, method ) {
      return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
        method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
    },

    // Return the custom message for the given element name and validation method
    customMessage: function( name, method ) {
      var m = this.settings.messages[ name ];
      return m && ( m.constructor === String ? m : m[ method ] );
    },

    // Return the first defined argument, allowing empty strings
    findDefined: function() {
      for ( var i = 0; i < arguments.length; i++ ) {
        if ( arguments[ i ] !== undefined ) {
          return arguments[ i ];
        }
      }
      return undefined;
    },

    // The second parameter 'rule' used to be a string, and extended to an object literal
    // of the following form:
    // rule = {
    //     method: "method name",
    //     parameters: "the given method parameters"
    // }
    //
    // The old behavior still supported, kept to maintain backward compatibility with
    // old code, and will be removed in the next major release.
    defaultMessage: function( element, rule ) {
      if ( typeof rule === "string" ) {
        rule = { method: rule };
      }

      var message = this.findDefined(
          this.customMessage( element.name, rule.method ),
          this.customDataMessage( element, rule.method ),

          // 'title' is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined,
          $.validator.messages[ rule.method ],
          "<strong>Warning: No message defined for " + element.name + "</strong>"
        ),
        theregex = /\$?\{(\d+)\}/g;
      if ( typeof message === "function" ) {
        message = message.call( this, rule.parameters, element );
      } else if ( theregex.test( message ) ) {
        message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
      }

      return message;
    },

    formatAndAdd: function( element, rule ) {
      var message = this.defaultMessage( element, rule );

      this.errorList.push( {
        message: message,
        element: element,
        method: rule.method
      } );

      this.errorMap[ element.name ] = message;
      this.submitted[ element.name ] = message;
    },

    addWrapper: function( toToggle ) {
      if ( this.settings.wrapper ) {
        toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
      }
      return toToggle;
    },

    defaultShowErrors: function() {
      var i, elements, error;
      for ( i = 0; this.errorList[ i ]; i++ ) {
        error = this.errorList[ i ];
        if ( this.settings.highlight ) {
          this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
        }
        this.showLabel( error.element, error.message );
      }
      if ( this.errorList.length ) {
        this.toShow = this.toShow.add( this.containers );
      }
      if ( this.settings.success ) {
        for ( i = 0; this.successList[ i ]; i++ ) {
          this.showLabel( this.successList[ i ] );
        }
      }
      if ( this.settings.unhighlight ) {
        for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
          this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
        }
      }
      this.toHide = this.toHide.not( this.toShow );
      this.hideErrors();
      this.addWrapper( this.toShow ).show();
    },

    validElements: function() {
      return this.currentElements.not( this.invalidElements() );
    },

    invalidElements: function() {
      return $( this.errorList ).map( function() {
        return this.element;
      } );
    },

    showLabel: function( element, message ) {
      var place, group, errorID, v,
        error = this.errorsFor( element ),
        elementID = this.idOrName( element ),
        describedBy = $( element ).attr( "aria-describedby" );

      if ( error.length ) {

        // Refresh error/success class
        error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

        // Replace message on existing label
        error.html( message );
      } else {

        // Create error element
        error = $( "<" + this.settings.errorElement + ">" )
          .attr( "id", elementID + "-error" )
          .addClass( this.settings.errorClass )
          .html( message || "" );

        // Maintain reference to the element to be placed into the DOM
        place = error;
        if ( this.settings.wrapper ) {

          // Make sure the element is visible, even in IE
          // actually showing the wrapped element is handled elsewhere
          place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
        }
        if ( this.labelContainer.length ) {
          this.labelContainer.append( place );
        } else if ( this.settings.errorPlacement ) {
          this.settings.errorPlacement.call( this, place, $( element ) );
        } else {
          place.insertAfter( element );
        }

        // Link error back to the element
        if ( error.is( "label" ) ) {

          // If the error is a label, then associate using 'for'
          error.attr( "for", elementID );

          // If the element is not a child of an associated label, then it's necessary
          // to explicitly apply aria-describedby
        } else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
          errorID = error.attr( "id" );

          // Respect existing non-error aria-describedby
          if ( !describedBy ) {
            describedBy = errorID;
          } else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

            // Add to end of list if not already present
            describedBy += " " + errorID;
          }
          $( element ).attr( "aria-describedby", describedBy );

          // If this element is grouped, then assign to all elements in the same group
          group = this.groups[ element.name ];
          if ( group ) {
            v = this;
            $.each( v.groups, function( name, testgroup ) {
              if ( testgroup === group ) {
                $( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
                  .attr( "aria-describedby", error.attr( "id" ) );
              }
            } );
          }
        }
      }
      if ( !message && this.settings.success ) {
        error.text( "" );
        if ( typeof this.settings.success === "string" ) {
          error.addClass( this.settings.success );
        } else {
          this.settings.success( error, element );
        }
      }
      this.toShow = this.toShow.add( error );
    },

    errorsFor: function( element ) {
      var name = this.escapeCssMeta( this.idOrName( element ) ),
        describer = $( element ).attr( "aria-describedby" ),
        selector = "label[for='" + name + "'], label[for='" + name + "'] *";

      // 'aria-describedby' should directly reference the error element
      if ( describer ) {
        selector = selector + ", #" + this.escapeCssMeta( describer )
          .replace( /\s+/g, ", #" );
      }

      return this
        .errors()
        .filter( selector );
    },

    // See https://api.jquery.com/category/selectors/, for CSS
    // meta-characters that should be escaped in order to be used with JQuery
    // as a literal part of a name/id or any selector.
    escapeCssMeta: function( string ) {
      return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
    },

    idOrName: function( element ) {
      return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
    },

    validationTargetFor: function( element ) {

      // If radio/checkbox, validate first element in group instead
      if ( this.checkable( element ) ) {
        element = this.findByName( element.name );
      }

      // Always apply ignore filter
      return $( element ).not( this.settings.ignore )[ 0 ];
    },

    checkable: function( element ) {
      return ( /radio|checkbox/i ).test( element.type );
    },

    findByName: function( name ) {
      return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
    },

    getLength: function( value, element ) {
      switch ( element.nodeName.toLowerCase() ) {
      case "select":
        return $( "option:selected", element ).length;
      case "input":
        if ( this.checkable( element ) ) {
          return this.findByName( element.name ).filter( ":checked" ).length;
        }
      }
      return value.length;
    },

    depend: function( param, element ) {
      return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
    },

    dependTypes: {
      "boolean": function( param ) {
        return param;
      },
      "string": function( param, element ) {
        return !!$( param, element.form ).length;
      },
      "function": function( param, element ) {
        return param( element );
      }
    },

    optional: function( element ) {
      var val = this.elementValue( element );
      return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
    },

    startRequest: function( element ) {
      if ( !this.pending[ element.name ] ) {
        this.pendingRequest++;
        $( element ).addClass( this.settings.pendingClass );
        this.pending[ element.name ] = true;
      }
    },

    stopRequest: function( element, valid ) {
      this.pendingRequest--;

      // Sometimes synchronization fails, make sure pendingRequest is never < 0
      if ( this.pendingRequest < 0 ) {
        this.pendingRequest = 0;
      }
      delete this.pending[ element.name ];
      $( element ).removeClass( this.settings.pendingClass );
      if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
        $( this.currentForm ).submit();
        this.formSubmitted = false;
      } else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
        $( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
        this.formSubmitted = false;
      }
    },

    previousValue: function( element, method ) {
      method = typeof method === "string" && method || "remote";

      return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
        old: null,
        valid: true,
        message: this.defaultMessage( element, { method: method } )
      } );
    },

    // Cleans up all forms and elements, removes validator-specific events
    destroy: function() {
      this.resetForm();

      $( this.currentForm )
        .off( ".validate" )
        .removeData( "validator" )
        .find( ".validate-equalTo-blur" )
          .off( ".validate-equalTo" )
          .removeClass( "validate-equalTo-blur" );
    }

  },

  classRuleSettings: {
    required: { required: true },
    email: { email: true },
    url: { url: true },
    date: { date: true },
    dateISO: { dateISO: true },
    number: { number: true },
    digits: { digits: true },
    creditcard: { creditcard: true }
  },

  addClassRules: function( className, rules ) {
    if ( className.constructor === String ) {
      this.classRuleSettings[ className ] = rules;
    } else {
      $.extend( this.classRuleSettings, className );
    }
  },

  classRules: function( element ) {
    var rules = {},
      classes = $( element ).attr( "class" );

    if ( classes ) {
      $.each( classes.split( " " ), function() {
        if ( this in $.validator.classRuleSettings ) {
          $.extend( rules, $.validator.classRuleSettings[ this ] );
        }
      } );
    }
    return rules;
  },

  normalizeAttributeRule: function( rules, type, method, value ) {

    // Convert the value to a number for number inputs, and for text for backwards compability
    // allows type="date" and others to be compared as strings
    if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
      value = Number( value );

      // Support Opera Mini, which returns NaN for undefined minlength
      if ( isNaN( value ) ) {
        value = undefined;
      }
    }

    if ( value || value === 0 ) {
      rules[ method ] = value;
    } else if ( type === method && type !== "range" ) {

      // Exception: the jquery validate 'range' method
      // does not test for the html5 'range' type
      rules[ method ] = true;
    }
  },

  attributeRules: function( element ) {
    var rules = {},
      $element = $( element ),
      type = element.getAttribute( "type" ),
      method, value;

    for ( method in $.validator.methods ) {

      // Support for <input required> in both html5 and older browsers
      if ( method === "required" ) {
        value = element.getAttribute( method );

        // Some browsers return an empty string for the required attribute
        // and non-HTML5 browsers might have required="" markup
        if ( value === "" ) {
          value = true;
        }

        // Force non-HTML5 browsers to return bool
        value = !!value;
      } else {
        value = $element.attr( method );
      }

      this.normalizeAttributeRule( rules, type, method, value );
    }

    // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
    if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
      delete rules.maxlength;
    }

    return rules;
  },

  dataRules: function( element ) {
    var rules = {},
      $element = $( element ),
      type = element.getAttribute( "type" ),
      method, value;

    for ( method in $.validator.methods ) {
      value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
      this.normalizeAttributeRule( rules, type, method, value );
    }
    return rules;
  },

  staticRules: function( element ) {
    var rules = {},
      validator = $.data( element.form, "validator" );

    if ( validator.settings.rules ) {
      rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
    }
    return rules;
  },

  normalizeRules: function( rules, element ) {

    // Handle dependency check
    $.each( rules, function( prop, val ) {

      // Ignore rule when param is explicitly false, eg. required:false
      if ( val === false ) {
        delete rules[ prop ];
        return;
      }
      if ( val.param || val.depends ) {
        var keepRule = true;
        switch ( typeof val.depends ) {
        case "string":
          keepRule = !!$( val.depends, element.form ).length;
          break;
        case "function":
          keepRule = val.depends.call( element, element );
          break;
        }
        if ( keepRule ) {
          rules[ prop ] = val.param !== undefined ? val.param : true;
        } else {
          $.data( element.form, "validator" ).resetElements( $( element ) );
          delete rules[ prop ];
        }
      }
    } );

    // Evaluate parameters
    $.each( rules, function( rule, parameter ) {
      rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
    } );

    // Clean number parameters
    $.each( [ "minlength", "maxlength" ], function() {
      if ( rules[ this ] ) {
        rules[ this ] = Number( rules[ this ] );
      }
    } );
    $.each( [ "rangelength", "range" ], function() {
      var parts;
      if ( rules[ this ] ) {
        if ( $.isArray( rules[ this ] ) ) {
          rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
        } else if ( typeof rules[ this ] === "string" ) {
          parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
          rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
        }
      }
    } );

    if ( $.validator.autoCreateRanges ) {

      // Auto-create ranges
      if ( rules.min != null && rules.max != null ) {
        rules.range = [ rules.min, rules.max ];
        delete rules.min;
        delete rules.max;
      }
      if ( rules.minlength != null && rules.maxlength != null ) {
        rules.rangelength = [ rules.minlength, rules.maxlength ];
        delete rules.minlength;
        delete rules.maxlength;
      }
    }

    return rules;
  },

  // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
  normalizeRule: function( data ) {
    if ( typeof data === "string" ) {
      var transformed = {};
      $.each( data.split( /\s/ ), function() {
        transformed[ this ] = true;
      } );
      data = transformed;
    }
    return data;
  },

  // http://jqueryvalidation.org/jQuery.validator.addMethod/
  addMethod: function( name, method, message ) {
    $.validator.methods[ name ] = method;
    $.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
    if ( method.length < 3 ) {
      $.validator.addClassRules( name, $.validator.normalizeRule( name ) );
    }
  },

  // http://jqueryvalidation.org/jQuery.validator.methods/
  methods: {

    // http://jqueryvalidation.org/required-method/
    required: function( value, element, param ) {

      // Check if dependency is met
      if ( !this.depend( param, element ) ) {
        return "dependency-mismatch";
      }
      if ( element.nodeName.toLowerCase() === "select" ) {

        // Could be an array for select-multiple or a string, both are fine this way
        var val = $( element ).val();
        return val && val.length > 0;
      }
      if ( this.checkable( element ) ) {
        return this.getLength( value, element ) > 0;
      }
      return value.length > 0;
    },

    // http://jqueryvalidation.org/email-method/
    email: function( value, element ) {

      // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
      // Retrieved 2014-01-14
      // If you have a problem with this implementation, report a bug against the above spec
      // Or use custom methods to implement your own email validation
      return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
    },

    // http://jqueryvalidation.org/url-method/
    url: function( value, element ) {

      // Copyright (c) 2010-2013 Diego Perini, MIT licensed
      // https://gist.github.com/dperini/729294
      // see also https://mathiasbynens.be/demo/url-regex
      // modified to allow protocol-relative URLs
      return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
    },

    // http://jqueryvalidation.org/date-method/
    date: function( value, element ) {
      return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
    },

    // http://jqueryvalidation.org/dateISO-method/
    dateISO: function( value, element ) {
      return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
    },

    // http://jqueryvalidation.org/number-method/
    number: function( value, element ) {
      return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
    },

    // http://jqueryvalidation.org/digits-method/
    digits: function( value, element ) {
      return this.optional( element ) || /^\d+$/.test( value );
    },

    // http://jqueryvalidation.org/minlength-method/
    minlength: function( value, element, param ) {
      var length = $.isArray( value ) ? value.length : this.getLength( value, element );
      return this.optional( element ) || length >= param;
    },

    // http://jqueryvalidation.org/maxlength-method/
    maxlength: function( value, element, param ) {
      var length = $.isArray( value ) ? value.length : this.getLength( value, element );
      return this.optional( element ) || length <= param;
    },

    // http://jqueryvalidation.org/rangelength-method/
    rangelength: function( value, element, param ) {
      var length = $.isArray( value ) ? value.length : this.getLength( value, element );
      return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
    },

    // http://jqueryvalidation.org/min-method/
    min: function( value, element, param ) {
      return this.optional( element ) || value >= param;
    },

    // http://jqueryvalidation.org/max-method/
    max: function( value, element, param ) {
      return this.optional( element ) || value <= param;
    },

    // http://jqueryvalidation.org/range-method/
    range: function( value, element, param ) {
      return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
    },

    // http://jqueryvalidation.org/step-method/
    step: function( value, element, param ) {
      var type = $( element ).attr( "type" ),
        errorMessage = "Step attribute on input type " + type + " is not supported.",
        supportedTypes = [ "text", "number", "range" ],
        re = new RegExp( "\\b" + type + "\\b" ),
        notSupported = type && !re.test( supportedTypes.join() ),
        decimalPlaces = function( num ) {
          var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
          if ( !match ) {
            return 0;
          }

          // Number of digits right of decimal point.
          return match[ 1 ] ? match[ 1 ].length : 0;
        },
        toInt = function( num ) {
          return Math.round( num * Math.pow( 10, decimals ) );
        },
        valid = true,
        decimals;

      // Works only for text, number and range input types
      // TODO find a way to support input types date, datetime, datetime-local, month, time and week
      if ( notSupported ) {
        throw new Error( errorMessage );
      }

      decimals = decimalPlaces( param );

      // Value can't have too many decimals
      if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
        valid = false;
      }

      return this.optional( element ) || valid;
    },

    // http://jqueryvalidation.org/equalTo-method/
    equalTo: function( value, element, param ) {

      // Bind to the blur event of the target in order to revalidate whenever the target field is updated
      var target = $( param );
      if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
        target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
          $( element ).valid();
        } );
      }
      return value === target.val();
    },

    // http://jqueryvalidation.org/remote-method/
    remote: function( value, element, param, method ) {
      if ( this.optional( element ) ) {
        return "dependency-mismatch";
      }

      method = typeof method === "string" && method || "remote";

      var previous = this.previousValue( element, method ),
        validator, data, optionDataString;

      if ( !this.settings.messages[ element.name ] ) {
        this.settings.messages[ element.name ] = {};
      }
      previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
      this.settings.messages[ element.name ][ method ] = previous.message;

      param = typeof param === "string" && { url: param } || param;
      optionDataString = $.param( $.extend( { data: value }, param.data ) );
      if ( previous.old === optionDataString ) {
        return previous.valid;
      }

      previous.old = optionDataString;
      validator = this;
      this.startRequest( element );
      data = {};
      data[ element.name ] = value;
      $.ajax( $.extend( true, {
        mode: "abort",
        port: "validate" + element.name,
        dataType: "json",
        data: data,
        context: validator.currentForm,
        success: function( response ) {
          var valid = response === true || response === "true",
            errors, message, submitted;

          validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
          if ( valid ) {
            submitted = validator.formSubmitted;
            validator.resetInternals();
            validator.toHide = validator.errorsFor( element );
            validator.formSubmitted = submitted;
            validator.successList.push( element );
            validator.invalid[ element.name ] = false;
            validator.showErrors();
          } else {
            errors = {};
            message = response || validator.defaultMessage( element, { method: method, parameters: value } );
            errors[ element.name ] = previous.message = message;
            validator.invalid[ element.name ] = true;
            validator.showErrors( errors );
          }
          previous.valid = valid;
          validator.stopRequest( element, valid );
        }
      }, param ) );
      return "pending";
    }
  }

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
  ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
  $.ajaxPrefilter( function( settings, _, xhr ) {
    var port = settings.port;
    if ( settings.mode === "abort" ) {
      if ( pendingRequests[ port ] ) {
        pendingRequests[ port ].abort();
      }
      pendingRequests[ port ] = xhr;
    }
  } );
} else {

  // Proxy ajax
  ajax = $.ajax;
  $.ajax = function( settings ) {
    var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
      port = ( "port" in settings ? settings : $.ajaxSettings ).port;
    if ( mode === "abort" ) {
      if ( pendingRequests[ port ] ) {
        pendingRequests[ port ].abort();
      }
      pendingRequests[ port ] = ajax.apply( this, arguments );
      return pendingRequests[ port ];
    }
    return ajax.apply( this, arguments );
  };
}
return $;
}));
/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number" );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number" );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code" );

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value ) {
	"use strict";

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;

	// Can be either
	} else {
		return control === control_digit || control === control_letter;
	}

	return false;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value ) {

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number" );

// http://jqueryvalidation.org/creditcard-method/
// based on http://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// http://developer.ean.com/general_info/Valid_Credit_Card_Types
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && /^(5[12345])/.test( value ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency" );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number" );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN" );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please" );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please" );

$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number" );

/*
 * The NIE (Número de Identificación de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards Número de Identificación Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificación Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value ) {
	"use strict";

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
}, "Please specify a valid phone number" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code" );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code" );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code" );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode" );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state" );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters" ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59" );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format" );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
	if ( v.length !== 17 ) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for ( i = 0; i < 17; i++ ) {
		f = FL[ i ];
		d = v.slice( i, i + 1 );
		if ( i === 8 ) {
			cdv = d;
		}
		if ( !isNaN( d ) ) {
			d *= f;
		} else {
			for ( n = 0; n < LL.length; n++ ) {
				if ( d.toUpperCase() === LL[ n ] ) {
					d = VL[ n ];
					d *= f;
					if ( isNaN( cdv ) && n === 8 ) {
						cdv = LL[ n ];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if ( cd === 10 ) {
		cd = "X";
	}
	if ( cd === cdv ) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid" );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx" );
return $;
}));
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});
//# sourceMappingURL=popper.min.js.map
/*! @preserve This js file is bundled through automated tasks, view the repo for the real source */
(function ($,Popper) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = (function () {


    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var transition = false;

    var MAX_UID = 1000000;

    var TransitionEndEvent = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    };

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
          }
          return undefined // eslint-disable-line no-undefined
        }
      }
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false
      }

      var el = document.createElement('bootstrap');

      for (var name in TransitionEndEvent) {
        if (typeof el.style[name] !== 'undefined') {
          return {
            end: TransitionEndEvent[name]
          }
        }
      }

      return false
    }

    function transitionEndEmulator(duration) {
      var this$1 = this;

      var called = false;

      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });

      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(this$1);
        }
      }, duration);

      return this
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();

      $.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }


    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {

      TRANSITION_END: 'bsTransitionEnd',

      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix))
        return prefix
      },

      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');
        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          var $selector = $(document).find(selector);
          return $selector.length > 0 ? selector : null
        } catch (error) {
          return null
        }
      },

      reflow: function reflow(element) {
        return element.offsetHeight
      },

      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },

      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition)
      },

      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType
      },

      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value         = config[property];
            var valueType     = value && Util.isElement(value) ?
                                  'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(
                (componentName.toUpperCase()) + ": " +
                "Option \"" + property + "\" provided type \"" + valueType + "\" " +
                "but expected type \"" + expectedTypes + "\".")
            }
          }
        }
      }
    };

    setTransitionEndSupport();

    return Util

  })($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = (function () {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'collapse';
    var VERSION             = '4.0.0-beta.2';
    var DATA_KEY            = 'bs.collapse';
    var EVENT_KEY           = "." + DATA_KEY;
    var DATA_API_KEY        = '.data-api';
    var JQUERY_NO_CONFLICT  = $.fn[NAME];
    var TRANSITION_DURATION = 600;

    var Default = {
      toggle : true,
      parent : ''
    };

    var DefaultType = {
      toggle : 'boolean',
      parent : '(string|element)'
    };

    var Event = {
      SHOW           : ("show" + EVENT_KEY),
      SHOWN          : ("shown" + EVENT_KEY),
      HIDE           : ("hide" + EVENT_KEY),
      HIDDEN         : ("hidden" + EVENT_KEY),
      CLICK_DATA_API : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      SHOW       : 'show',
      COLLAPSE   : 'collapse',
      COLLAPSING : 'collapsing',
      COLLAPSED  : 'collapsed'
    };

    var Dimension = {
      WIDTH  : 'width',
      HEIGHT : 'height'
    };

    var Selector = {
      ACTIVES     : '.show, .collapsing',
      DATA_TOGGLE : '[data-toggle="collapse"]'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = function Collapse(element, config) {
      var this$1 = this;

      this._isTransitioning = false;
      this._element       = element;
      this._config        = this._getConfig(config);
      this._triggerArray  = $.makeArray($(
        "[data-toggle=\"collapse\"][href=\"#" + (element.id) + "\"]," +
        "[data-toggle=\"collapse\"][data-target=\"#" + (element.id) + "\"]"
      ));
      var tabToggles = $(Selector.DATA_TOGGLE);
      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);
        if (selector !== null && $(selector).filter(element).length > 0) {
          this$1._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };


    // public

    Collapse.prototype.toggle = function toggle () {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show () {
        var this$1 = this;

      if (this._isTransitioning ||
        $(this._element).hasClass(ClassName.SHOW)) {
        return
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function () {
        $(this$1._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.SHOW);

        this$1._element.style[dimension] = '';

        this$1.setTransitioning(false);

        $(this$1._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize         = "scroll" + capitalizedDimension;

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = (this._element[scrollSize]) + "px";
    };

    Collapse.prototype.hide = function hide () {
        var this$1 = this;

      if (this._isTransitioning ||
        !$(this._element).hasClass(ClassName.SHOW)) {
        return
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }

      var dimension     = this._getDimension();

      this._element.style[dimension] = (this._element.getBoundingClientRect()[dimension]) + "px";

      Util.reflow(this._element);

      $(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this$1._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);
          if (selector !== null) {
            var $elem = $(selector);
            if (!$elem.hasClass(ClassName.SHOW)) {
              $(trigger).addClass(ClassName.COLLAPSED)
                   .attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function () {
        this$1.setTransitioning(false);
        $(this$1._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning (isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);

      this._config        = null;
      this._parent        = null;
      this._element       = null;
      this._triggerArray  = null;
      this._isTransitioning = null;
    };


    // private

    Collapse.prototype._getConfig = function _getConfig (config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config
    };

    Collapse.prototype._getDimension = function _getDimension () {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    };

    Collapse.prototype._getParent = function _getParent () {
        var this$1 = this;

      var parent = null;
      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent;

        // it's a jQuery object
        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = $(this._config.parent)[0];
      }

      var selector =
        "[data-toggle=\"collapse\"][data-parent=\"" + (this._config.parent) + "\"]";

      $(parent).find(selector).each(function (i, element) {
        this$1._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
        );
      });

      return parent
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass (element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen);
        }
      }
    };


    // static

    Collapse._getTargetFromElement = function _getTargetFromElement (element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null
    };

    Collapse._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var $this = $(this);
        var data    = $this.data(DATA_KEY);
        var _config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        );

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config]();
        }
      })
    };

    Object.defineProperties( Collapse, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $(this);
      var selector = Util.getSelectorFromElement(this);
      $(selector).each(function () {
        var $target = $(this);
        var data    = $target.data(DATA_KEY);
        var config  = data ? 'toggle' : $trigger.data();
        Collapse._jQueryInterface.call($target, config);
      });
    });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface
    };

    return Collapse

  })($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = (function () {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'alert';
    var VERSION             = '4.0.0-beta.2';
    var DATA_KEY            = 'bs.alert';
    var EVENT_KEY           = "." + DATA_KEY;
    var DATA_API_KEY        = '.data-api';
    var JQUERY_NO_CONFLICT  = $.fn[NAME];
    var TRANSITION_DURATION = 150;

    var Selector = {
      DISMISS : '[data-dismiss="alert"]'
    };

    var Event = {
      CLOSE          : ("close" + EVENT_KEY),
      CLOSED         : ("closed" + EVENT_KEY),
      CLICK_DATA_API : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      ALERT : 'alert',
      FADE  : 'fade',
      SHOW  : 'show'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = function Alert(element) {
      this._element = element;
    };

    var staticAccessors = { VERSION: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };


    // public

    Alert.prototype.close = function close (element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };


    // private

    Alert.prototype._getRootElement = function _getRootElement (element) {
      var selector = Util.getSelectorFromElement(element);
      var parent   = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest(("." + (ClassName.ALERT)))[0];
      }

      return parent
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent (element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent
    };

    Alert.prototype._removeElement = function _removeElement (element) {
        var this$1 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() ||
          !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return
      }

      $(element)
        .one(Util.TRANSITION_END, function (event) { return this$1._destroyElement(element, event); })
        .emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement (element) {
      $(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove();
    };


    // static

    Alert._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var $element = $(this);
        var data     = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      })
    };

    Alert._handleDismiss = function _handleDismiss (alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      }
    };

    Object.defineProperties( Alert, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(
      Event.CLICK_DATA_API,
      Selector.DISMISS,
      Alert._handleDismiss(new Alert())
    );


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Alert._jQueryInterface;
    $.fn[NAME].Constructor = Alert;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface
    };

    return Alert

  })($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = (function () {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                         = 'modal';
    var VERSION                      = '4.0.0-beta.2';
    var DATA_KEY                     = 'bs.modal';
    var EVENT_KEY                    = "." + DATA_KEY;
    var DATA_API_KEY                 = '.data-api';
    var JQUERY_NO_CONFLICT           = $.fn[NAME];
    var TRANSITION_DURATION          = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE               = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop : true,
      keyboard : true,
      focus    : true,
      show     : true
    };

    var DefaultType = {
      backdrop : '(boolean|string)',
      keyboard : 'boolean',
      focus    : 'boolean',
      show     : 'boolean'
    };

    var Event = {
      HIDE              : ("hide" + EVENT_KEY),
      HIDDEN            : ("hidden" + EVENT_KEY),
      SHOW              : ("show" + EVENT_KEY),
      SHOWN             : ("shown" + EVENT_KEY),
      FOCUSIN           : ("focusin" + EVENT_KEY),
      RESIZE            : ("resize" + EVENT_KEY),
      CLICK_DISMISS     : ("click.dismiss" + EVENT_KEY),
      KEYDOWN_DISMISS   : ("keydown.dismiss" + EVENT_KEY),
      MOUSEUP_DISMISS   : ("mouseup.dismiss" + EVENT_KEY),
      MOUSEDOWN_DISMISS : ("mousedown.dismiss" + EVENT_KEY),
      CLICK_DATA_API    : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
      BACKDROP           : 'modal-backdrop',
      OPEN               : 'modal-open',
      FADE               : 'fade',
      SHOW               : 'show'
    };

    var Selector = {
      DIALOG             : '.modal-dialog',
      DATA_TOGGLE        : '[data-toggle="modal"]',
      DATA_DISMISS       : '[data-dismiss="modal"]',
      FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT     : '.sticky-top',
      NAVBAR_TOGGLER     : '.navbar-toggler'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = function Modal(element, config) {
      this._config            = this._getConfig(config);
      this._element           = element;
      this._dialog            = $(element).find(Selector.DIALOG)[0];
      this._backdrop          = null;
      this._isShown           = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth    = 0;
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };


    // public

    Modal.prototype.toggle = function toggle (relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    };

    Modal.prototype.show = function show (relatedTarget) {
        var this$1 = this;

      if (this._isTransitioning || this._isShown) {
        return
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      this._adjustDialog();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        function (event) { return this$1.hide(event); }
      );

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(this$1._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(this$1._element)) {
            this$1._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () { return this$1._showElement(relatedTarget); });
    };

    Modal.prototype.hide = function hide (event) {
        var this$1 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return
      }

      var hideEvent = $.Event(Event.HIDE);

      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {

        $(this._element)
          .one(Util.TRANSITION_END, function (event) { return this$1._hideModal(event); })
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config            = null;
      this._element           = null;
      this._dialog            = null;
      this._backdrop          = null;
      this._isShown           = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth    = null;
    };

    Modal.prototype.handleUpdate = function handleUpdate () {
      this._adjustDialog();
    };

    // private

    Modal.prototype._getConfig = function _getConfig (config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config
    };

    Modal.prototype._showElement = function _showElement (relatedTarget) {
        var this$1 = this;

      var transition = Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode ||
         this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function () {
        if (this$1._config.focus) {
          this$1._element.focus();
        }
        this$1._isTransitioning = false;
        $(this$1._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus () {
        var this$1 = this;

      $(document)
        .off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target &&
              this$1._element !== event.target &&
              !$(this$1._element).has(event.target).length) {
            this$1._element.focus();
          }
        });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent () {
        var this$1 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();
            this$1.hide();
          }
        });

      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent () {
        var this$1 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) { return this$1.handleUpdate(event); });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal () {
        var this$1 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        this$1._resetAdjustments();
        this$1._resetScrollbar();
        $(this$1._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop () {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop (callback) {
        var this$1 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ?
        ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (this$1._ignoreBackdropClick) {
            this$1._ignoreBackdropClick = false;
            return
          }
          if (event.target !== event.currentTarget) {
            return
          }
          if (this$1._config.backdrop === 'static') {
            this$1._element.focus();
          } else {
            this$1.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return
        }

        if (!doAnimate) {
          callback();
          return
        }

        $(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);

      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function () {
          this$1._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() &&
           $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }

      } else if (callback) {
        callback();
      }
    };


    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._adjustDialog = function _adjustDialog () {
      var isModalOverflowing =
        this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = (this._scrollbarWidth) + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = (this._scrollbarWidth) + "px";
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments () {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar () {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar () {
        var this$1 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        // while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

        // Adjust fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $(element)[0].style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', ((parseFloat(calculatedPadding) + this$1._scrollbarWidth) + "px"));
        });

        // Adjust sticky content margin
        $(Selector.STICKY_CONTENT).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', ((parseFloat(calculatedMargin) - this$1._scrollbarWidth) + "px"));
        });

        // Adjust navbar-toggler margin
        $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', ((parseFloat(calculatedMargin) + this$1._scrollbarWidth) + "px"));
        });

        // Adjust body padding
        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $('body').css('padding-right');
        $('body').data('padding-right', actualPadding).css('padding-right', ((parseFloat(calculatedPadding) + this._scrollbarWidth) + "px"));
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar () {
      // Restore fixed content padding
      $(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $(element).data('padding-right');
        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right');
        }
      });

      // Restore sticky content and navbar-toggler margin
      $(((Selector.STICKY_CONTENT) + ", " + (Selector.NAVBAR_TOGGLER))).each(function (index, element) {
        var margin = $(element).data('margin-right');
        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      });

      // Restore body padding
      var padding = $('body').data('padding-right');
      if (typeof padding !== 'undefined') {
        $('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth () { // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth
    };


    // static

    Modal._jQueryInterface = function _jQueryInterface (config, relatedTarget) {
      return this.each(function () {
        var data    = $(this).data(DATA_KEY);
        var _config = $.extend(
          {},
          Modal.Default,
          $(this).data(),
          typeof config === 'object' && config
        );

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      })
    };

    Object.defineProperties( Modal, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var this$1 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $(selector)[0];
      }

      var config = $(target).data(DATA_KEY) ?
        'toggle' : $.extend({}, $(target).data(), $(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return
        }

        $target.one(Event.HIDDEN, function () {
          if ($(this$1).is(':visible')) {
            this$1.focus();
          }
        });
      });

      Modal._jQueryInterface.call($(target), config, this);
    });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface
    };

    return Modal

  })($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = (function () {

    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof Popper === 'undefined') {
      throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)')
    }


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'tooltip';
    var VERSION             = '4.0.0-beta.2';
    var DATA_KEY            = 'bs.tooltip';
    var EVENT_KEY           = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT  = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var CLASS_PREFIX        = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp(("(^|\\s)" + CLASS_PREFIX + "\\S+"), 'g');

    var DefaultType = {
      animation           : 'boolean',
      template            : 'string',
      title               : '(string|element|function)',
      trigger             : 'string',
      delay               : '(number|object)',
      html                : 'boolean',
      selector            : '(string|boolean)',
      placement           : '(string|function)',
      offset              : '(number|string)',
      container           : '(string|element|boolean)',
      fallbackPlacement   : '(string|array)'
    };

    var AttachmentMap = {
      AUTO   : 'auto',
      TOP    : 'top',
      RIGHT  : 'right',
      BOTTOM : 'bottom',
      LEFT   : 'left'
    };

    var Default = {
      animation           : true,
      template            : '<div class="tooltip" role="tooltip">'
                          + '<div class="arrow"></div>'
                          + '<div class="tooltip-inner"></div></div>',
      trigger             : 'hover focus',
      title               : '',
      delay               : 0,
      html                : false,
      selector            : false,
      placement           : 'top',
      offset              : 0,
      container           : false,
      fallbackPlacement   : 'flip'
    };

    var HoverState = {
      SHOW : 'show',
      OUT  : 'out'
    };

    var Event = {
      HIDE       : ("hide" + EVENT_KEY),
      HIDDEN     : ("hidden" + EVENT_KEY),
      SHOW       : ("show" + EVENT_KEY),
      SHOWN      : ("shown" + EVENT_KEY),
      INSERTED   : ("inserted" + EVENT_KEY),
      CLICK      : ("click" + EVENT_KEY),
      FOCUSIN    : ("focusin" + EVENT_KEY),
      FOCUSOUT   : ("focusout" + EVENT_KEY),
      MOUSEENTER : ("mouseenter" + EVENT_KEY),
      MOUSELEAVE : ("mouseleave" + EVENT_KEY)
    };

    var ClassName = {
      FADE : 'fade',
      SHOW : 'show'
    };

    var Selector = {
      TOOLTIP       : '.tooltip',
      TOOLTIP_INNER : '.tooltip-inner',
      ARROW         : '.arrow'
    };

    var Trigger = {
      HOVER  : 'hover',
      FOCUS  : 'focus',
      CLICK  : 'click',
      MANUAL : 'manual'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tooltip = function Tooltip(element, config) {

      // private
      this._isEnabled   = true;
      this._timeout     = 0;
      this._hoverState  = '';
      this._activeTrigger = {};
      this._popper      = null;

      // protected
      this.element = element;
      this.config= this._getConfig(config);
      this.tip   = null;

      this._setListeners();

    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true },NAME: { configurable: true },DATA_KEY: { configurable: true },Event: { configurable: true },EVENT_KEY: { configurable: true },DefaultType: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };

    staticAccessors.NAME.get = function () {
      return NAME
    };

    staticAccessors.DATA_KEY.get = function () {
      return DATA_KEY
    };

    staticAccessors.Event.get = function () {
      return Event
    };

    staticAccessors.EVENT_KEY.get = function () {
      return EVENT_KEY
    };

    staticAccessors.DefaultType.get = function () {
      return DefaultType
    };


    // public

    Tooltip.prototype.enable = function enable () {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable () {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled () {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle (event) {
      if (!this._isEnabled) {
        return
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(
            event.currentTarget,
            this._getDelegateConfig()
          );
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }

      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose () {
      clearTimeout(this._timeout);

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled   = null;
      this._timeout     = null;
      this._hoverState  = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config= null;
      this.tip   = null;
    };

    Tooltip.prototype.show = function show () {
        var this$1 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements')
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(
          this.element.ownerDocument.documentElement,
          this.element
        );

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement= typeof this.config.placement === 'function' ?
          this.config.placement.call(this, tip, this.element) :
          this.config.placement;

        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function (data) {
            if (data.originalPlacement !== data.placement) {
              this$1._handlePopperPlacementChange(data);
            }
          },
          onUpdate : function (data) {
            this$1._handlePopperPlacementChange(data);
          }
        });

        $(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
        }

        var complete = function () {
          if (this$1.config.animation) {
            this$1._fixTransition();
          }
          var prevHoverState = this$1._hoverState;
          this$1._hoverState   = null;

          $(this$1.element).trigger(this$1.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            this$1._leave(null, this$1);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip)
            .one(Util.TRANSITION_END, complete)
            .emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    Tooltip.prototype.hide = function hide (callback) {
        var this$1 = this;

      var tip     = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      var complete= function () {
        if (this$1._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        this$1._cleanTipClass();
        this$1.element.removeAttribute('aria-describedby');
        $(this$1.element).trigger(this$1.constructor.Event.HIDDEN);
        if (this$1._popper !== null) {
          this$1._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return
      }

      $(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() &&
          $(this.tip).hasClass(ClassName.FADE)) {

        $(tip)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION);

      } else {
        complete();
      }

      this._hoverState = '';

    };

    Tooltip.prototype.update = function update () {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent () {
      return Boolean(this.getTitle())
    };

    Tooltip.prototype.addAttachmentClass = function addAttachmentClass (attachment) {
      $(this.getTipElement()).addClass((CLASS_PREFIX + "-" + attachment));
    };

    Tooltip.prototype.getTipElement = function getTipElement () {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip
    };

    Tooltip.prototype.setContent = function setContent () {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(((ClassName.FADE) + " " + (ClassName.SHOW)));
    };

    Tooltip.prototype.setElementContent = function setElementContent ($element, content) {
      var html = this.config.html;
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle () {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ?
          this.config.title.call(this.element) :
          this.config.title;
      }

      return title
    };


    // private

    Tooltip.prototype._getAttachment = function _getAttachment (placement) {
      return AttachmentMap[placement.toUpperCase()]
    };

    Tooltip.prototype._setListeners = function _setListeners () {
        var this$1 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(this$1.element).on(
            this$1.constructor.Event.CLICK,
            this$1.config.selector,
            function (event) { return this$1.toggle(event); }
          );

        } else if (trigger !== Trigger.MANUAL) {
          var eventIn= trigger === Trigger.HOVER ?
            this$1.constructor.Event.MOUSEENTER :
            this$1.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ?
            this$1.constructor.Event.MOUSELEAVE :
            this$1.constructor.Event.FOCUSOUT;

          $(this$1.element)
            .on(
              eventIn,
              this$1.config.selector,
              function (event) { return this$1._enter(event); }
            )
            .on(
              eventOut,
              this$1.config.selector,
              function (event) { return this$1._leave(event); }
            );
        }

        $(this$1.element).closest('.modal').on(
          'hide.bs.modal',
          function () { return this$1.hide(); }
        );
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector : ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle () {
      var titleType = typeof this.element.getAttribute('data-original-title');
      if (this.element.getAttribute('title') ||
         titleType !== 'string') {
        this.element.setAttribute(
          'data-original-title',
          this.element.getAttribute('title') || ''
        );
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter (event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        );
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER
        ] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) ||
         context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave (event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        );
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER
        ] = false;
      }

      if (context._isWithActiveTrigger()) {
        return
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger () {
        var this$1 = this;

      for (var trigger in this$1._activeTrigger) {
        if (this$1._activeTrigger[trigger]) {
          return true
        }
      }

      return false
    };

    Tooltip.prototype._getConfig = function _getConfig (config) {
      config = $.extend(
        {},
        this.constructor.Default,
        $(this.element).data(),
        config
      );

      if (typeof config.delay === 'number') {
        config.delay = {
          show : config.delay,
          hide : config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(
        NAME,
        config,
        this.constructor.DefaultType
      );

      return config
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig () {
        var this$1 = this;

      var config = {};

      if (this.config) {
        for (var key in this$1.config) {
          if (this$1.constructor.Default[key] !== this$1.config[key]) {
            config[key] = this$1.config[key];
          }
        }
      }

      return config
    };

    Tooltip.prototype._cleanTipClass = function _cleanTipClass () {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange (data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    Tooltip.prototype._fixTransition = function _fixTransition () {
      var tip               = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return
      }
      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var data    = $(this).data(DATA_KEY);
        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config]();
        }
      })
    };

    Object.defineProperties( Tooltip, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Tooltip._jQueryInterface;
    $.fn[NAME].Constructor = Tooltip;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface
    };

    return Tooltip

  })($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = (function () {

    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof Popper === 'undefined') {
      throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)')
    }

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                     = 'dropdown';
    var VERSION                  = '4.0.0-beta.2';
    var DATA_KEY                 = 'bs.dropdown';
    var EVENT_KEY                = "." + DATA_KEY;
    var DATA_API_KEY             = '.data-api';
    var JQUERY_NO_CONFLICT       = $.fn[NAME];
    var ESCAPE_KEYCODE           = 27; // KeyboardEvent.which value for Escape (Esc) key
    var SPACE_KEYCODE            = 32; // KeyboardEvent.which value for space key
    var TAB_KEYCODE              = 9; // KeyboardEvent.which value for tab key
    var ARROW_UP_KEYCODE         = 38; // KeyboardEvent.which value for up arrow key
    var ARROW_DOWN_KEYCODE       = 40; // KeyboardEvent.which value for down arrow key
    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
    var REGEXP_KEYDOWN           = new RegExp((ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));

    var Event = {
      HIDE             : ("hide" + EVENT_KEY),
      HIDDEN           : ("hidden" + EVENT_KEY),
      SHOW             : ("show" + EVENT_KEY),
      SHOWN            : ("shown" + EVENT_KEY),
      CLICK            : ("click" + EVENT_KEY),
      CLICK_DATA_API   : ("click" + EVENT_KEY + DATA_API_KEY),
      KEYDOWN_DATA_API : ("keydown" + EVENT_KEY + DATA_API_KEY),
      KEYUP_DATA_API   : ("keyup" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      DISABLED  : 'disabled',
      SHOW      : 'show',
      DROPUP    : 'dropup',
      MENURIGHT : 'dropdown-menu-right',
      MENULEFT  : 'dropdown-menu-left'
    };

    var Selector = {
      DATA_TOGGLE   : '[data-toggle="dropdown"]',
      FORM_CHILD    : '.dropdown form',
      MENU          : '.dropdown-menu',
      NAVBAR_NAV    : '.navbar-nav',
      VISIBLE_ITEMS : '.dropdown-menu .dropdown-item:not(.disabled)'
    };

    var AttachmentMap = {
      TOP       : 'top-start',
      TOPEND    : 'top-end',
      BOTTOM    : 'bottom-start',
      BOTTOMEND : 'bottom-end'
    };

    var Default = {
      offset      : 0,
      flip        : true
    };

    var DefaultType = {
      offset      : '(number|string|function)',
      flip        : 'boolean'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = function Dropdown(element, config) {
      this._element= element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu   = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true },DefaultType: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };

    staticAccessors.DefaultType.get = function () {
      return DefaultType
    };

    // public

    Dropdown.prototype.toggle = function toggle () {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return
      }

      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return
      }

      var relatedTarget = {
        relatedTarget : this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return
      }

      var element = this._element;
      // for dropup with alignment we use the parent as popper container
      if ($(parent).hasClass(ClassName.DROPUP)) {
        if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }
      this._popper = new Popper(element, this._menu, this._getPopperConfig());

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement &&
         !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();
      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent)
        .toggleClass(ClassName.SHOW)
        .trigger($.Event(Event.SHOWN, relatedTarget));
    };

    Dropdown.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
    };

    Dropdown.prototype.update = function update () {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners () {
        var this$1 = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        this$1.toggle();
      });
    };

    Dropdown.prototype._getConfig = function _getConfig (config) {
      config = $.extend(
        {},
        this.constructor.Default,
        $(this._element).data(),
        config
      );

      Util.typeCheckConfig(
        NAME,
        config,
        this.constructor.DefaultType
      );

      return config
    };

    Dropdown.prototype._getMenuElement = function _getMenuElement () {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        this._menu = $(parent).find(Selector.MENU)[0];
      }
      return this._menu
    };

    Dropdown.prototype._getPlacement = function _getPlacement () {
      var $parentDropdown = $(this._element).parent();
      var placement = AttachmentMap.BOTTOM;

      // Handle dropup
      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;
        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement
    };

    Dropdown.prototype._detectNavbar = function _detectNavbar () {
      return $(this._element).closest('.navbar').length > 0
    };

    Dropdown.prototype._getPopperConfig = function _getPopperConfig () {
        var this$1 = this;

      var offsetConf = {};
      if (typeof this._config.offset === 'function') {
        offsetConf.fn = function (data) {
          data.offsets = $.extend({}, data.offsets, this$1._config.offset(data.offsets) || {});
          return data
        };
      } else {
        offsetConf.offset = this._config.offset;
      }
      var popperConfig = {
        placement : this._getPlacement(),
        modifiers : {
          offset : offsetConf,
          flip : {
            enabled : this._config.flip
          }
        }
      };

      // Disable Popper.js for Dropdown in Navbar
      if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }
      return popperConfig
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config]();
        }
      })
    };

    Dropdown._clearMenus = function _clearMenus (event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH ||
        event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));
      for (var i = 0; i < toggles.length; i++) {
        var parent      = Dropdown._getParentFromElement(toggles[i]);
        var context     = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget : toggles[i]
        };

        if (!context) {
          continue
        }

        var dropdownMenu = context._menu;
        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue
        }

        if (event && (event.type === 'click' &&
            /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE)
            && $.contains(parent, event.target)) {
          continue
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue
        }

        // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent)
          .removeClass(ClassName.SHOW)
          .trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement (element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler (event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE ||
         /input|textarea/i.test(event.target.tagName)) {
        return
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) ||
           isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) { // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) { // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    Object.defineProperties( Dropdown, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
      .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE,  Dropdown._dataApiKeydownHandler)
      .on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler)
      .on(((Event.CLICK_DATA_API) + " " + (Event.KEYUP_DATA_API)), Dropdown._clearMenus)
      .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
        event.preventDefault();
        event.stopPropagation();
        Dropdown._jQueryInterface.call($(this), 'toggle');
      })
      .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
        e.stopPropagation();
      });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface
    };

    return Dropdown

  })($, Popper);

  // allow this to be set from outside of this script, e.g. from the backend
  var api = window['fabilola'] || {
    'opts': {
      'demo': false
    }
  };

  var api$1 = window['fabilola'] = api;

  var ABtest = function ABtest () {
    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  ABtest.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');
    this.tests = {
      'Standoutregistration': {},
    };
  };

  /**
   * On document ready
   */
  ABtest.prototype.$onReady = function $onReady () {
    // this.ABtest01();
  };

  /**
   * Run test
   * @param{String} id
   */
  ABtest.prototype.run = function run (id) {
    if (this.tests[id]) {
      this['test' + id]();
    } else {
      console.error(("ABtest with id " + id + " does not exists"));
    }
  };

  /**
   * Test 01: ABtest--standoutregistration
   */
  ABtest.prototype.testStandoutregistration = function testStandoutregistration () {
    var $homepageCard = $('#homepageRegisterCard');
    var $body = $('body');
    if (!$homepageCard.length) {
      return;
    }
    $body.addClass('ABtest--standoutregistration');
    // on click anywhere remove the class
    document.body.addEventListener('click', function () {
      $body.removeClass('ABtest--standoutregistration');
    }, true);
  };

  // export to public API
  api$1['ABtest'] = new ABtest();

  var CookieAnnouncement = function CookieAnnouncement () {
    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  CookieAnnouncement.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');
  };

  /**
   * On document ready
   */
  CookieAnnouncement.prototype.$onReady = function $onReady () {
      var this$1 = this;

    var $container = $('#js-cookieannouncement');
    var $dismissTriggers = $('.js-cookieannouncement-dismiss');

    if (!$container.length) {
      return;
    }

    var cookieValue = this._readCookie('cookieannouncement');

    if (cookieValue !== 'shown') {
      setTimeout(function () {
        $container.addClass('in');
      }, 500);

      $dismissTriggers.on('click', function () {
        $container.removeClass('in');
        this$1._createCookie('cookieannouncement', 'shown', 365);
      });
    }
  };

  /**
   * Create cookie
   * @see https://stackoverflow.com/a/24103596/1938970
   *
   * @param{String} name
   * @param{Mixed}value
   * @param{Number} days
   */
  CookieAnnouncement.prototype._createCookie = function _createCookie (name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  /**
   * Read cookie
   * @see https://stackoverflow.com/a/24103596/1938970
   *
   * @param{String} name
   * @return {?String}
   */
  CookieAnnouncement.prototype._readCookie = function _readCookie (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') { c = c.substring(1,c.length); }
        if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length,c.length); }
    }
    return null;
  };

  CookieAnnouncement.prototype._eraseCookie = function _eraseCookie (name) {
    this._createCookie(name,"",-1);
  };

  new CookieAnnouncement();

  /**
   * Get lang code from url
   *
   * @return {String}
   */
  function getLangFromUrl () {
    var urlParts = location.href.split('/');
    var langMap = window.i18n;

    for (var i = 0; i < urlParts.length; i++) {
      var urlPart = urlParts[i];
      if (langMap[urlPart] && urlPart !== 'current') {
        return urlPart;
      }
    }
    return 'en'; // default language
  }

  /**
   * Get i18n string by its id
   *
   * @param  {String}  id
   * @param  {?String} givenLang
   * @param  {?String} fallback
   * @return {String}
   */
  function getI18n (id, givenLang, fallback) {
    var i18n = window.i18n;
    var lang = givenLang || i18n['current'] || getLangFromUrl();
    var langStrings = i18n[lang];
    return langStrings[id] || fallback || '';
  }

  api$1['getI18n'] = getI18n;

  /**
   * Anatomy of a state object
   *
   * (values preceded by a question mark are optional)
  ```
  {
    id: {string},            // All lowercase, no whitespaces. This is used in the css as well. e.g. ''eenmaal'',
    idx: {Number},           // The index of the state in the states succession. e.g. `1`
    text: {string},          // The displayed text for the state. E.g. `'Eenmaal...'`,
    duration: {?Number},     // Dynamically set by the Item class, it can have a default value though
    isLast: {?boolean},      // Set it to true if you want to indicate that this state is the last. Otherwise
                             // the last is always considered `'verkocht'`
    expirations: {Array<
        Object<
          percent: {Number}, // Number that indicates at which point in time
                             // (expressed in percentage) this expiration breakpoint is triggered
          name: {string}     // All lowercase, no whitespaces. This is used in the css as well. e.g. `'blink'`,
          >
      >}
    [{
      percent: 70,
      name: 'blink'
    }]
  }
  ```
  */

  /**
   * The `text` is displayed in the status bar.
   *
   * The `duration` is set dynamically, it's here just for reference.
   *
   * The `expirations` values available are for now:
   * 'blink, close, hurry, final'; to each of them correspond
   * some variations and animation applied through css. Each expiration must
   * declare a `percent` property that indicates the percentage at which point
   * in time trigger the expiration animation (or whatever),
   * e.g. a `percent` value of `50` would trigger at the 14th second for a
   * state that lasts 28s
   */
  var defaultStates = [
    {
      id: 'eenmaal',
      idx: 0,
      text: getI18n('eenmaal'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'andermaal',
      idx: 1,
      text: getI18n('andermaal'),
      duration: null,
      expirations: [{
        percent: 50,
        name: 'hurry'
      }, {
        percent: 70,
        name: 'blink'
      }, {
        percent: 90,
        name: 'final'
      }]
    }, {
      id: 'geboden',
      idx: 2,
      text: getI18n('geboden'),
      duration: null,
      expirations: [{
        percent: 50,
        name: 'hurry'
      }, {
        percent: 70,
        name: 'blink'
      }, {
        percent: 90,
        name: 'final'
      }]
    }, {
      id: 'geboden-timeless',
      idx: 3,
      text: getI18n('geboden-timeless'),
      duration: null
    }, {
      id: 'verkocht',
      idx: 4,
      text: getI18n('verkocht'),
      duration: null
    }, {
      id: 'bieden',
      idx: 5,
      text: getI18n('bieden'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'winnen',
      idx: 6,
      text: getI18n('winnen'),
      duration: null,
      expirations: [{
        percent: 50,
        name: 'hurry'
      }, {
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'geladen',
      idx: 7,
      text: getI18n('geladen'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'gesloten',
      idx: 8,
      text: getI18n('gesloten'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'controleren',
      idx: 9,
      text: getI18n('controleren'),
      duration: null
    }, {
      id: 'uitverkocht',
      idx: 10,
      text: getI18n('uitverkocht'),
      duration: null
    } ];

  // export to public API
  api$1['defaultStates'] = defaultStates;

  var defaultColors = {
    'eenmaal': ['#FFCAB3'],
    'andermaal': ['#99D8DE'],
    'geboden': ['#FFBBBA'],
    'geboden-timeless': ['#6b4482'],
    'verkocht': ['#B2B2B2'],
    'bieden': ['#0B72BA'],
    'winnen': ['#ad005d'],
    'geladen': ['#a38d8d'],
    'gesloten': ['#9d8f8f'],
    'controleren': ['#979090'],
  };

  // export to public API
  api$1['defaultColors'] = defaultColors;

  /*!
   * Heavily inspired by
   *
   * SVG Pie Timer 0.9.1 | Anders Grimsrud, grint.no | MIT License | github.com/agrimsrud/svgPieTimer.js
   */
  var SvgPieTimer$1 = function SvgPieTimer (props) {
    var self = this;
    this._element = props.element;
    this._size = 40;
    this._startFrom = props.startFrom ? props.startFrom * 1000: 0; // startFrom is given in seconds
    this._duration = props.duration ? props.duration * 1000 : 1000; // duration is given in seconds
    this._actualDuration = this._duration - this._startFrom;
    var n = props.loops;

    if (this.req) {
      this.stop();
    }

    // This part might be confusing:
    // If n==0, do infinite loops
    // In other cases where n is set, do n loops
    // If n is not set, do 1 loop
    // Do it this way to prevent mixing n==0 and !n
    n = (n === 0) ? 0 : n ? n : 1;

    var end = Date.now() + this._actualDuration * n;
    var totaldur = this._actualDuration * n;

    // Date.now fix by Ari Fuchs, afuchs.tumblr.com/post/23550124774/date-now-in-ie8
    Date.now = Date.now || function() { return +new Date(); };

    // Animate frame by frame
    (function frame() {
      var remaining = end - Date.now();

      // Now set rotation rate
      // E.g. 50% of first loop returns 1.5
      // E.g. 75% of sixth loop returns 6.75
      // Has to return >0 for SVG to be drawn correctly
      // If you need the current loop, use Math.floor(rate)
      var rate = n + 1 - remaining / self._duration;
      // total rate for a full cycle is 0 to 2
      rate = rate;// + ((self._startFrom * 2) / self._duration);

      // As requestAnimationFrame will draw whenever capable,
      // the animation might end before it reaches 100%.
      // Let's simulate completeness on the last visual
      // frame of the loop, regardless of actual progress
      // console.log(current)
      if (remaining < 60) {
        // 1.0 might break, set to slightly lower than 1
        // Update: Set to slightly lower than n instead
        self._draw(n - 0.0001);
        // Stop animating when we reach n loops (if n is set)
        if(remaining < totaldur && n) {
          return;
        }
      }
      // To reverse, uncomment this line
      // rate = 360 - rate;

      // draw
      self._draw(rate);
      // request next frame
      self.req = requestAnimationFrame(frame);
    }());
  };

  /**
   * Draw SVG
   * @param{Number} rate
   */
  SvgPieTimer$1.prototype._draw = function _draw (rate) {
    this._element.style.width = 100 - ((rate * 100) - 100) + '%';
  };

  /**
   * Stop the animation cancel the request animation frame
   */
  SvgPieTimer$1.prototype.stop = function stop () {
    window.cancelAnimationFrame(this._req);
  };

  /**
   * Destroy the animation
   * @return {[type]} [description]
   */
  SvgPieTimer$1.prototype.destroy = function destroy () {
    this.stop();
  };

  // Example use of the API
  // (function (window, document, $, api) {
  //   var myDOMorJquery = $('.appItem')[0];

  //   var myItem = new api.Item({
  //     id: 10,
  //     elem: myDOMorJquery,
  //     // state: 3,
  //     onState: function (item) {
  //       console.log('onState ' + item.state.id, item);
  //     },
  //     onEnd: function (item) {
  //       console.log('Auction ends! onEnd', item);
  //     },
  //     onBid: function (item) {
  //       console.log('Bid! on item', item);
  //     }
  //   });
  //   myItem.setState(0, 15);
  //   // myItem.destroy();
  // })(window, document, jQuery, window.hellospecial);

  // (function(window, document, $, api) {
  //   // calling the contructor or the setState method return the item instance
  //   var myItem = new hellospecial.Item({
  //     id: 12,
  //     elem: $('.appItem')[0] // the item element in the category page
  //   }).setState('geboden', 11);
  //   // grab the state in a variable to use closure
  //   var myState = myItem.state;

  //   // fake async loading of ajax content
  //   setTimeout(function () {
  //     var myItemPopup = new hellospecial.Item({
  //       id: 12,
  //       elem: $('.appItem')[1] // the item element in the popup
  //     });
  //     myItemPopup.resumeState(myState);
  //   }, 3000);

  //   // fake async something elese
  //   setTimeout(function () {
  //     var myAsyncItem = new hellospecial.Item({
  //       id: 12,
  //       elem: $('.appItem')[2] // another item element
  //     });
  //     myAsyncItem.resumeState(myState);
  //   }, 5000);
  // })(window, document, jQuery, window['hellospecial']);

  /**
   * The Item class default options
   * @type {Object}
   */
  var defaultOpts = {
    /** @type {Array} Default states */
    states: defaultStates,
    /** @type {string} attribute name */
    attrState: 'data-state',
    /** @type {string} attribute name */
    attrExpiration: 'data-expiration',
    /** @type {function(Item)} Callback at the end of each state */
    onState: function () {},
    /** @type {function(Item, Number)} Callback each second of a state progression */
    // onSecond: function () {},
    /** @type {function(Item)} Callback at the end of the last state */
    onEnd: function () {},
    /** @type {function(Item)} Callback at bid click */
    onBid: function () {},
  };

  /**
   * The Item class needs to be initialized on document ready with an id and a
   * container element
   */
  var Item = function Item (opts) {
    if (typeof opts.id === undefined) {
      throw new Error('`elem` property is required when instantiate a new Item');
      return;
    }
    if (typeof opts.id === undefined) {
      throw new Error('`id` property is required when instantiate a new Item');
      return;
    }

    /** @type {Object} Item given opts */
    this.opts = $.extend({}, defaultOpts, opts);

    /** @type {HTMLelement} Basic DOM container for the item */
    this.container = opts.elem.jquery ? opts.elem[0] : opts.elem;

    /** @type {jQuery} Basic DOM container for the item (jQuery wrap) */
    this.$container = opts.elem.jquery ? opts.elem : $(opts.elem);

    /** @type {string} Item id */
    this.id = opts.id || this.container.id;

    /** @type {Array} Contains the possible states for the item, as an array */
    this.states = this.opts.states;

    /** @type {Object} Contains the possible states for the item, as an object (indexed by id) */
    this.statesMap = this._getObjFromArray(this.opts.states, 'id');

    /** @type {function()} Holds the intervalled reference for one cycle */
    this._cycle = null;

    /** @type {Number} ID of one of the four states */
    this._initialStateId = opts.state || this.container.getAttribute(this.opts.attrState);

    // set DOM related stuff
    this._bindUI();

    // if (this._initialStateId) {
    // this.setState(this._initialStateId);
    // }

    // console.log('Item->constructor()', this);

    return this;
  };

  /**
   * Init
   */
  Item.prototype._bindUI = function _bindUI () {

    /** @type {jQuery} The 'Bied' buttons */
    this.__$bid = this.$container.find('[data-bid]');

    /** @type {jQuery} */
    this.__$price = this.$container.find('[data-price]');

    /** @type {jQuery} */
    this.__$bidder = this.$container.find('[data-bidder]');

    /** @type {jQuery} */
    this.__$stateMsg = this.$container.find('[data-state-msg]');

    /** @type {HTMLelement} */
    this.__bar = this.$container.find('.appItem__state-bar')[0];

    // bind click button
    this.__$bid.on('click', this.onBid.bind(this));
  };

  /**
   * Add new state
   * @param {State} stateObject
   */
  Item.prototype.addState = function addState (stateObject) {
    var stateId = stateObject.id;
    this.statesMap[stateId] = stateObject;

    // here we could or should or push the new state
    // at the specified index in the array but I don't really
    // see the point of this at this stage. We use state ids
    // now anyway to change the item style through css
    this.states.push(stateObject);

    return stateObject;
  };

  /**
   * Set state updating UI and running the animation
   *
   * It just updates the state animation/color and text msg,
   * e.g. 'bidding, going once, going twice, sold', it also adds an attr
   * on the item container so that we can tweak the style of item
   * differently for each state.
   *
   * @param {?Number|String|State} givenState The state index `0,1,2,3`,
   *                                        or id (e.g. 'verkocht') or
   *                                        new custom object (see the
   *                                        state.defaults.js to see the
   *                                        anatomy of a state object)
   * @param {?Number}             durationThe duration in seconds
   * @param {?Number}             startFrom The resuming point in seconds
   * @return {Item}                         The item instance
   */
  Item.prototype.setState = function setState (givenState, duration, startFrom) {
    // set current state
    if ($.isPlainObject(givenState)) {
      // if we are resuming just assign the given state
      if ((givenState.second && givenState.second > 0) || startFrom) {
        this.state = givenState;
      } else {
        // either by using the given object
        this.state = this.addState(givenState);
      }
    }
    else if (this.states[givenState]) {
      // or by grabbing the state with its idx value
      this.state = this.states[givenState];
    }
    else if (this.statesMap[givenState]) {
      // or by grabbing the state with its idx value
      this.state = this.statesMap[givenState];
    }
    else {
      // or by grabbing the state with its idx value
      this.state = this.statesMap[this._initialStateId];
    }
    if (!this.state) {
      return;
    }
    // set curretn state second
    this.state.second = startFrom || 0;

    // set current state duration
    if (duration) {
      this.state.duration = duration;
    }
    // set cycle duration
    this._cycleDuration = this.state.duration - this.state.second;

    // display state message
    this.__$stateMsg.text(this.state.text);
    // display state style through css
    this.container.setAttribute(this.opts.attrState, this.state.id);

    var palette = defaultColors[this.state.id];
    if (palette) {
      this.__bar.style.backgroundColor = palette[0];
    }

    // ... and fires the animation
    this._runAnimation();
    // start the timer...
    this._startCycle();

    // callback
    this.opts.onState(this);
    // callback on last state ('verkocht')
    if (this.state.id === 'verkocht' || this.state.isLast) {
      this.opts.onEnd(this);
    }

    return this;
  };

  /**
   * Resume state
   * @param{State} state The state object
   * @return {Item}      The item instance
   */
  Item.prototype.resumeState = function resumeState (state) {
    // create a new state object to don't interfere with other items
    // states
    var newState = $.extend({}, state);
    this.setState(newState, null, state.second);
    return this;
  };

  /**
   * Set data
   *
   * @param{Object} data Data from server that need to update the UI
   */
  Item.prototype.setData = function setData (data) {
    if (data['current_price']) {
      this.__$price.text(data['current_price']);
    }
    if (data['highest_bidder']) {
      this.__$bidder.text(data['highest_bidder']);
    }
  };

  /**
   * User has clicked bid
   */
  Item.prototype.onBid = function onBid () {
    this.opts.onBid(this.item);
    // console.log('bid! newSeconds:', newSeconds);
  };

  /**
   * Destroy item instance
   */
  Item.prototype.destroy = function destroy () {
    if (this._animation) {
      this._animation.destroy();
    }
    this._clearCycle();
  };

  /**
   * Start single cycle timer
   */
  Item.prototype._clearCycle = function _clearCycle () {
    if (this._cycle) {
      window.clearInterval(this._cycle);
      this._cycle = null;
    }
  };

  /**
   * Start single cycle timer
   */
  Item.prototype._startCycle = function _startCycle () {
    this._clearCycle();
    this._cycle = window.setInterval(this._onCycleTick.bind(this), 1000);
  };

  /**
   * On second tick, it runs every second using `setInterval`, it
   * coordinates the animation states.
   */
  Item.prototype._onCycleTick = function _onCycleTick () {
    // maybe trigger expiration behaviour
    this._maybeTriggerExpiration();

    // increment second
    this.state.second++;

    // api callback
    // this.opts.onSecond(this.state.second, this.state, this);

    if (this.state.second >= this.state.duration) {
      this._clearCycle();
    }
  };

  /**
   * Set expiration attribute to trigger further animations through css
   *
   * @param {string} The expiration name to set on the attribute
   */
  Item.prototype._updateUiExpiration = function _updateUiExpiration (name) {
    this.container.setAttribute(this.opts.attrExpiration, name);
  };

  /**
   * Loop through the expiration breakpoints of the given state
   * and check if the current second has past the expiration breakpoint
   * (which is defined in percentage because the state duration is dynamic,
   * so we need to calculate the breakpoint in seconds).
   */
  Item.prototype._maybeTriggerExpiration = function _maybeTriggerExpiration () {
      var this$1 = this;

    var expirations = this.state.expirations;
    if (!expirations) {
      return;
    }

    // expirations array must be set in order from lower to higher percentage
    for (var i = expirations.length; i--;) {
      var expiration = expirations[i];
      var secondBreakpoint = (this$1.state.duration / 100) * expiration.percent;

      if (this$1.state.second > secondBreakpoint) {
        this$1._updateUiExpiration(expiration.name);
        return;
      }
    }
    // otherwise reset the expiration attribute
    this._updateUiExpiration('');
  };

  /**
   * It makes one full loop with the given duration or by reading the current
   * state duration
   */
  Item.prototype._runAnimation = function _runAnimation () {
    if (this._animation) {
      this._animation.destroy();
    }
    // init animation
    this._animation = new SvgPieTimer$1({
      element: this.__bar,
      duration: this.state.duration, // seconds
      startFrom: this.state.second // seconds
    });
  };

  /**
   * Get object from array
   *
   * @param{Array} array
   * @param{string} value
   * @return {Object}     The lookup object
   */
  Item.prototype._getObjFromArray = function _getObjFromArray (array, value) {
    var lookupObject = {};
    for (var i = 0, l = array.length; i < l; i++) {
      lookupObject[array[i][value]] = array[i];
    }
    return lookupObject;
  };

  // export to public API
  api$1['Item'] = Item;

  // import 'slick-carousel/slick/slick.js';

  var ItemDetail = function ItemDetail () {
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  ItemDetail.prototype.$onInit = function $onInit () {
  };

  /**
   * On document ready
   */
  ItemDetail.prototype.$onReady = function $onReady () {
      var this$1 = this;

    this.__$thumbs = $('#appItemDetail__thumbs');
    this.__$slider = $('#appItemDetail__slider');

    if (!this.__$thumbs.length || !this.__$slider.length) {
      return;
    }

    // no slider if there is only one image
    if (this.__$slider.find('img').length === 1) {
      return;
    }

    this.__$slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      asNavFor: this.__$thumbs
    });

    this.__$thumbs.slick({
      vertical: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: this.__$slider,
      focusOnSelect: true,
      arrows: false,
      // verticalSwiping: true,
    });

    // remove active class from all thumbnail slides
    this.__$thumbs.find('.slick-slide').removeClass('slick-active');

    // set active class to first thumbnail slides
    this.__$thumbs.find('.slick-slide').eq(0).addClass('slick-active');

    // on before slide change match active thumbnail to current slide
    this.__$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      this$1.__$thumbs.find('.slick-slide').removeClass('slick-active');
      this$1.__$thumbs.find('.slick-slide').eq(mySlideNumber).addClass('slick-active');
    });
  };

  var itemDetail = new ItemDetail();

  var Demo = function Demo () {
    if (api$1.opts['demo']) {
      this.init();
    }
  };

  /**
   * Init
   */
  Demo.prototype.init = function init () {
    /** @type {Number} @@demoonly Max seconds for total loop of four state */
    this._loopMaxSeconds = 20;

    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * On document ready
   */
  Demo.prototype.$onReady = function $onReady () {
    this._initModals();
    this._initItems();
  };

  /**
   * Initialize items
   */
  Demo.prototype._initItems = function _initItems () {
      var this$1 = this;

    $('.appItem').each(function (index, element) {
      var item = new Item({
        id: index,
        elem: element,
        // state: 3,
        onState: this$1._setNextState.bind(this$1),
        // onEnd: this._onEnd.bind(this),
      });
      item.setState(undefined, this$1._getAverageStateDuration(item));
    });
  };

  /**
   * Get average state duration
   *
   * Durations are calculated dynamically dividing equally the max time by the
   * number of states
   *
   * @param{Item} item
   * @return {Number} Duration in seconds
   */
  Demo.prototype._getAverageStateDuration = function _getAverageStateDuration (item) {
    return this._loopMaxSeconds / item.states.length;
  };

  /**
   * Set next state
   *
   * @param{Item} item
   */
  Demo.prototype._setNextState = function _setNextState (item) {
      var this$1 = this;

    setTimeout(function () {
      // console.log('item.id', item.state.id, 'idx', item.state.idx)
      if (item.state.idx === item.states.length - 1) {
        item.setState(0, this$1._getAverageStateDuration(item));
      } else {
        item.setState(item.state.idx + 1, this$1._getAverageStateDuration(item));
      }
    }, this._getAverageStateDuration(item) * 1000);
  };

  /**
   * Initialize various modals, e.g. winning bet modal
   */
  Demo.prototype._initModals = function _initModals () {
    $('#appWinModal').modal('show');
  };

  var demo = new Demo();

  // export to public API
  api$1['demo'] = demo;

  var Nask = function Nask () {
    this.$onInit();

    // bootstrap
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Nask.prototype.$onInit = function $onInit () {
    // try to immediately hide the container to don't cause a flash of "unstyled" content
    try {
      var containers = document.getElementsByClassName('nask');
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.opacity = 0;
      }
    } catch(e) {}

    this._browser = this._getBrowser();
    this._mobileOS = this._getMobileOS();
    this._permission = this._getPermission();

    // console.log(`Nask->$onInit: mobile os is ${this._mobileOS} browser detected is ${this._browser}, permission is ${this._permission}`);
  };

  /**
   * On document ready
   */
  Nask.prototype.$onReady = function $onReady () {
    var $container = $('.nask');

    if (!$container.length) {
      return;
    }

    this.__$container = $container;

    var view = this._getViewName();
    this.setView(view);

    if (view === 'request' || view === 'request-mobile') {
      this.ask();
    }

    this.setEnv(this._getEnvName());

    this.__$container.addClass('nask--ready').css('opacity', 1);

    // @@disabled for now, because it wouldn't work anyway...
    // @see https://stackoverflow.com/a/31868708/1938970
    // $container.find('.nask__askbutton').click(() => {
    // this.ask()
    // });
  };

  /**
   * Get browser
   *
   * based on @link https://stackoverflow.com/a/9851769/1938970
   *
   * @return {String}
   */
  Nask.prototype._getBrowser = function _getBrowser () {
    // Opera 8.0+
    if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
      return 'opera';
    }

    // Firefox 1.0+
    if (typeof InstallTrigger !== 'undefined') {
      return 'firefox';
    }

    // Safari 3.0+ "[object HTMLElementConstructor]"
    if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
      return 'safari';
    }

    // Internet Explorer 6-11
    if (/*@cc_on!@*/false || !!document.documentMode) {
      return 'ie';
    }

    // Edge 20+
    if (!!window.StyleMedia) {
      return 'edge';
    }

    // Chrome 1+
    if (!!window.chrome && !!window.chrome.webstore) {
      return 'chrome';
    }
  };

  /**
   * Determine the mobile operating system.
   * This function returns one of 'ios', 'Android', 'Windows Phone', or false.
   *
   * @link https://stackoverflow.com/a/21742107/1938970
   *
   * @returns {String|boolean} 'windows|android|ios|false'
   */
  Nask.prototype._getMobileOS = function _getMobileOS () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return 'windows';
    }

    if (/android/i.test(userAgent)) {
      return 'android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'ios';
    }

    return false;
  };

  /**
   * Get notifications permissions
   *
   * @return {String} 'denied|granted|default|unsupported'
   */
  Nask.prototype._getPermission = function _getPermission () {
    if (Notification && Notification.permission) {
      return Notification.permission;
    }
    return 'unsupported';
  };

  /**
   * Get view name
   *
   * Views:
   * 'granted': Notification are granted already, we don't ask anything
   * 'request': On Android notifications are denied by the user, we ask to enable them
   * 'request-mobile': On Android notifications are denied by the user, we ask to enable them
   * 'allowing': On desktop notifications are denied by the user, the allow box is opened
   * 'allowing-mobile': On Android notifications are denied by the user, the allow box is opened
   * 'thanks': On desktop notification permission has just been granted by the user
   * 'thanks-mobile': On Android notification permission has just been granted by the user
   * 'other': Desktop browser other than Chrome. Firefox, Opera, no notifications system
   * 'other-mobile': Mobile browser other than Android, no notifications system
   *
   * @param{?String} viewFamily
   * @return {String}
   */
   Nask.prototype._getViewName = function _getViewName (viewFamily) {
    if (viewFamily === 'allowing') {
      return this._mobileOS ? 'allowing-mobile' : 'allowing';
    }
    else if (viewFamily === 'thanks') {
      return this._mobileOS ? 'thanks-mobile' : 'thanks';
    }

    // if (['chrome', 'firefox', 'opera'].indexOf(this._browser) === -1) {
    // }

    if (this._permission === 'unsupported') {
      return this._mobileOS ? 'other-mobile' : 'other';
    }
    else if (this._permission === 'default') {
      return this._mobileOS ? 'request-mobile' : 'request';
    }
    else if (this._permission === 'denied') {
      return this._mobileOS ? 'request-mobile' : 'request';
    }
    else if (this._permission === 'granted') {
      return 'granted';
    }

    return 'none';
  };

  /**
   * Get env name
   *
   * @return {String}
   */
  Nask.prototype._getEnvName = function _getEnvName () {
    return this._mobileOS === 'android' ? 'android' : this._browser;
  };

  /**
   * Set view on the UI
   *
   * @public
   * @param {String} view
   */
  Nask.prototype.setView = function setView (view) {
    this.__$container.attr('data-nask-view-is', view);
    console.log(("Nask: set view name to \"" + view + "\""));
    return this;
  };

  /**
   * Set environment on the UI
   *
   * @public
   * @param {String} env
   */
  Nask.prototype.setEnv = function setEnv (env) {
    this.__$container.attr('data-nask-env-is', env);
    console.log(("Nask: set env to \"" + env + "\""));
    return this;
  };

  /**
   * Ask for permission
   *
   * @param {?Function} callback
   * @public
   *
   * @return {this}
   */
  Nask.prototype.ask = function ask (callback) {
      var this$1 = this;

    if (this._permission === 'unsupported') {
      console.log("Nask: Notification are not supported");
      return;
    }
    console.log("Nask: asking for permission");

    this.setView(this._getViewName('allowing'));

    Notification.requestPermission(function (permission) {
      if (callback) {
        callback(permission);
      }

      if (permission === 'granted') {
        // const notification = new Notification('Thanks');
        this$1.setView(this$1._getViewName('thanks'));
      }
      else if (permission === 'denied') {
        this$1.setView(this$1._getViewName('request'));
      }
    });

    return this;
  };

  // export to public API
  api$1['nask'] = new Nask();

  var p = navigator.platform;

  var browsers = {
    'safari': Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
    // 'chrome': !!window.chrome && !opera,
    'ie': /*@cc_on!@*/false || !!document.documentMode,
    // 'mac': p.toUpperCase().indexOf('MAC') >= 0,
    // 'macLike': p.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false,
    'ios': p.match(/(iPhone|iPod|iPad)/i) ? true : false,
    // 'windows': p.toUpperCase().indexOf('WIN')!==-1,
    // 'linux': p.toUpperCase().indexOf('LINUX')!==-1,
    // 'android': /Android/i.test(a),
    // 'blackBerry': /BlackBerry/i.test(a),
    // 'ios': /iPhone|iPad|iPod/i.test(a),
  };

  var $$1 = window.jQuery;

  $$1(document).ready(function () {
    var $html = $$1('html');
    for (name in browsers) {
      var isIt = !!browsers[name];
      // browsers[browser];
      $html.toggleClass(name, isIt);
    }
  });

  var Checkout = function Checkout () {
    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Checkout.prototype.$onInit = function $onInit () {
    this._breakpointMobile = 600;
  };

  /**
   * On document ready
   */
  Checkout.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$wrapper = $('#appCheckout');

    // bail if we are not on the checkout page
    if (!this.__$wrapper.length) {
      return;
    }

    this.__$form = $('#appCheckout__form');
    this.__$wrapperLeft = $('.appCheckout__main-left');
    this.__$breadcrumbs = $('.appCheckout__breadcrumb');

    this.__$couponArea = $('.appCheckout__coupon-area');
    this.__$couponTrigger = $('.appCheckout__coupon-trigger');
    this.__$couponInput = $('.appCheckout__coupon-input');
    this.__$couponSubmit = $('.appCheckout__coupon-submit');
    this.__$couponFeedback = $('.appCheckout__coupon-feedback');

    this.__$addressPrefilled = $('#appAddress__prefilled');
    this.__$inputVoornam = $('#voornaam');
    this.__$inputAchternaam = $('#achternaam');
    this.__$inputStraat = $('#straat');
    this.__$inputHuisnummer = $('#huisnummer');
    this.__$inputPostcode = $('#postcode');
    this.__$inputWoonplaats = $('#woonplaats');
    this.__$inputLand = $('#land');
    this.__$addressDisplay = $('#appAddress__display');

    this.__$costWinbedrag = $('.appCheckout__cost-winbedrag');
    this.__$costWinbedragDel = $('.appCheckout__cost-winbedrag--del');
    this.__$costVerzendkosten = $('.appCheckout__cost-verzendkosten');
    this.__$costVeilingkosten = $('.appCheckout__cost-veilingkosten');
    this.__$costTotaal = $('.appCheckout__cost-totaal');

    this.__$expander = $('.appCheckout__expander');
    this.__$step0 = $('#appCheckout__step-0');
    this.__$step1 = $('#appCheckout__step-1');
    this.__$btnToStep1 = $('.appCheckout__tostep1');
    this.__$btnToStep2 = $('.appCheckout__tostep2');
    this.__$summary = $('.appCheckout__main-summary');

    this.__$paymentMethods = $('input[name="pay-method"]');
    this.__$paymentBanks = $('input[name="pay-bank"]');
    this.__$methodIdeal = $('.appCheckout__method--ideal');
    this.__$bankSelector = $('.appCheckout__banks');
    this.__$btnSubmit = $('.appCheckout__submit');

    this.__$details = $('.appCheckout__details');

    // animate steps @@disabled
    // const minHeight = this.__$step0.outerHeight() * 1.5;
    // this.__$wrapper.css('min-height', minHeight);
    // this.__$wrapperLeft.css('min-height', minHeight);

    this.manageValidation();

    this._bindUI();

    // start by step 0 on load
    this.goToStep(0);
  };

  /**
   * Manage form validation
   *
   * @see options here https://jqueryvalidation.org/validate/
   * @@todo perhaps use this to style the validator on the all
   * website: `$.validator.setDefaults({})`
   */
  Checkout.prototype.manageValidation = function manageValidation () {
    this._validation = this.__$form.validate({
      // submitHandler: () => {
      // this.goToStep(1);
      // },
      errorClass: 'has-danger',
      validClass: 'has-success',
      // errorElement: '<div class="form-control-feedback">',
      // highlight: function(element, errorClass, validClass) {
      // $(element).parent().addClass(errorClass).removeClass(validClass);
      // },
      // unhighlight: function(element, errorClass, validClass) {
      // $(element).parent().removeClass(errorClass).addClass(validClass);
      // }
    });
    console.log(this._validation);
  };

  /**
   * Bind UI
   */
  Checkout.prototype._bindUI = function _bindUI () {
    var self = this;

    // breaadcrumbs
    self.__$breadcrumbs.on('click', function (e) {
      var el = e.target.parentNode;
      if (el) {
        var step = $(el).index();
        if (step === 1) {
          if (self.__$form.valid()) {
            self.goToStep(step);
          }
        } else {
          self.goToStep(step);
        }
        e.stopPropagation();
        return false;
      }
    });

    // coupon area
    self.__$couponArea.hide();
    self.__$couponFeedback.hide();
    self.__$couponSubmit.attr('disabled', true);
    self.__$couponTrigger.on('click', function (e) {
      if (e) {
        e.preventDefault();
      }
      self.__$couponTrigger.slideUp(100, function () {
        self.__$couponArea.slideDown();
      });
    });
    self.__$couponInput.on('input', function () {
      if (this.value) {
        self.__$couponSubmit.attr('disabled', false);
      } else {
        self.__$couponSubmit.attr('disabled', true);
      }
    });
    self.__$couponSubmit.on('click', function () {
      self.__$couponFeedback.slideDown();
      self.applyCoupon(self.__$couponFeedback.data('discount'));
      self.__$couponSubmit.attr('disabled', true);
      self.__$couponInput.off('input');
    });

    // mobile expander
    if (window.innerWidth < self._breakpointMobile) {
      self.__$summary.hide();
      self.__$expander.removeClass('expanded').show();
    }
    self.__$expander.on('click', function () {
      self.__$summary.slideToggle();
      self.__$expander.toggleClass('expanded');
    });

    // address choice
    self.__$details.hide();
    if (!!$('input[name="addresschoice"]:checked').val()) {
      self.__$details.slideDown();
    }
    $('input[name="addresschoice"]').on('change', function () {
      self.__$details.slideToggle(!!this.value);
    });

    // to step1
    self.__$btnToStep1.on('click', function (e) {
      e.preventDefault();
      self.goToStep(0);
    });

    // to step2
    self.__$btnToStep2.on('click', function (e) {
      e.preventDefault();
      if (self.__$form.valid()) {
        self.goToStep(1);
      }
    });

    // payment method
    self.__$bankSelector.hide();
    self.__$btnSubmit.hide();
    self.__$paymentMethods.on('change', function () {
      if (this.value === 'ideal') {
        self._maybeShowSubmitBtn(self._isBankSelected);
        self.__$bankSelector.slideDown();
      } else {
        self.__$btnSubmit.slideDown();
        self.__$bankSelector.slideUp();
      }
    });

    // bank selection
    self.__$paymentBanks.on('change', function () {
      self._isBankSelected = !!this.value; // make it a boolean
      self._maybeShowSubmitBtn(!!this.value);
    });
  };

  /**
   * Maybe show the submit button
   * @param{boolean} showIt
   */
  Checkout.prototype._maybeShowSubmitBtn = function _maybeShowSubmitBtn (showIt) {
    if (showIt) {
      this.__$btnSubmit.slideDown();
    } else {
      this.__$btnSubmit.slideUp();
    }
  };

  /**
   * Go to step
   *
   * @param{Number} step e.g. 0, 1, 2, etc.
   */
  Checkout.prototype.goToStep = function goToStep (step) {
      var this$1 = this;

    // first remove class from all breadcrumbs
    this.__$breadcrumbs.removeClass('active');

    // add the active class
    this.__$breadcrumbs.filter(function (index, elem) {
      if (index === step) {
        // highlight current breadcrumb
        $(elem).addClass('active');

        // useful for global styling and hiding/showing based on current step
        this$1.__$wrapper.attr('data-step', step);
      }
    });

    if (step === 1) {
      this.manageAddress();
    }
  };

  /**
   * Apply coupon
   * @param{Number} discount The amount of discount in cash
   */
  Checkout.prototype.applyCoupon = function applyCoupon (discount) {
    var currentPrice = this.__$costWinbedrag.data('val');
    var newPrice = parseFloat(currentPrice) - parseFloat(discount);

    // fill deleted price
    this.__$costWinbedragDel.html(this.formatPrice(currentPrice));

    // update winbedrag price (also it's data raw number value)
    this.__$costWinbedrag.html(this.formatPrice(newPrice)).data('val', newPrice);

    // update totaal price
    this.__$costTotaal.html(this.formatPrice(this.getTotalPrice()));
  };

  /**
   * Get total price by summing values on the DOM
   * @return {Number}
   */
  Checkout.prototype.getTotalPrice = function getTotalPrice () {
    var a = this.getPriceFrom(this.__$costWinbedrag);
    var b = this.getPriceFrom(this.__$costVerzendkosten);
    var c = this.getPriceFrom(this.__$costVeilingkosten);
    return a + b + c;
  };

  /**
   * Get price from jQuery DOM element
   * @param{jQuery} $elem
   * @return {Number}
   */
  Checkout.prototype.getPriceFrom = function getPriceFrom ($elem) {
    var asString;
    var val = $elem.data('val').toString();

    if (val) {
      asString = val.replace(',', '.');
    } else {
      asString = '0';
    }
    return parseFloat(asString);
  };

  /**
   * Add zeroes
   * @see http://stackoverflow.com/a/24039448/1938970
   * @param {Number} value
   * @return {String}
   */
  Checkout.prototype.formatPrice = function formatPrice (value) {
    var asNumber = parseFloat(value);
    // replace dot with comma as in design
    var price = asNumber.toFixed(2).replace('.', ',');
    return this.getCurrency() + ' ' + price;
  };

  /**
   * Get currency
   * @return {String}
   */
  Checkout.prototype.getCurrency = function getCurrency () {
    return '€';
  };

  /**
   * Manage address
   */
  Checkout.prototype.manageAddress = function manageAddress () {
    var prefilledAddress;

    if (!$('input[name=addresschoice]:checked').val() && this.__$addressPrefilled.html()) {
      prefilledAddress = this.__$addressPrefilled.html();
    }
    else {
      var voornam = this.__$inputVoornam.val();
      var achternaam = this.__$inputAchternaam.val();
      var straat = this.__$inputStraat.val();
      var huisnummer = this.__$inputHuisnummer.val();
      var postcode = this.__$inputPostcode.val();
      var woonplaats = this.__$inputWoonplaats.val();
      var land = this.__$inputLand.find(':selected').text();

      prefilledAddress = voornam + " " + achternaam + ", " + straat + " " + huisnummer + ",\n        <br>" + postcode + ", " + woonplaats + ", " + land;
    }

    this.__$addressDisplay.html(prefilledAddress);
  };

  // export to public API
  api$1['checkout'] = new Checkout();

  var Account = function Account () {
    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Account.prototype.$onInit = function $onInit () {
    this._breakpointMobile = 600;
  };

  /**
   * On document ready
   */
  Account.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$wrapper = $('.appAccount');

    // bail if we are not on the account page
    if (!this.__$wrapper.length) {
      return;
    }

    this._ttModal();
    this._gegevens();
  };

  /**
   * Track and trace modal
   */
  Account.prototype._ttModal = function _ttModal () {
    var $ttModal = $('#appTtModal');
    if (!$ttModal.length) {
      return;
    }
    $(document).on('click', '.appAccount__table-tt', function (e) {
      e.preventDefault();
      $ttModal.modal();
      $ttModal.find('.tt__verzendpartij').text(this.getAttribute('data-verzendpartij'));
      $ttModal.find('.tt__code').text(this.getAttribute('data-code'));
      // $ttModal.on('show.bs.modal', function (e) {
      // // do something...
      // })
    });
  };

  /**
   * Gegevens views switch
   */
  Account.prototype._gegevens = function _gegevens () {
      var this$1 = this;

    var $btnToEdit = $('#gegevens_switchedit');
    var $viewShow = $('#gegevens_show');
    var $viewEdit = $('#gegevens_edit');

    if (!$btnToEdit.length) {
      return;
    }

    var _switchView = function (event, name) {
      var newView = name;
      var currentView = this$1._currentView;
      if (event) {
        event.preventDefault();
      }
      if (!newView) {
        newView = location.hash.replace('#', '');
      }
      if (!newView) {
        return;
      }
      if (newView === 'show' && currentView !== 'show') {
        $viewEdit.slideUp();
        $viewShow.slideDown();
        location.hash = this$1._currentView = 'show';
      } else if (newView === 'edit' && currentView !== 'edit') {
        $viewShow.slideUp();
        $viewEdit.slideDown();
        location.hash = this$1._currentView = 'edit';
      }
    };

    window.addEventListener('hashchange', _switchView, false);

    _switchView(null, 'show');

    $btnToEdit.click(function (e) { _switchView(e, 'edit' );});
  };

  // export to public API
  api$1['account'] = new Account();

  // import popper from 'popper';
  // import 'jquery-match-height/dist/jquery.matchHeight';
  // import 'datatables.net';
  // import 'slick-carousel/slick/slick.js';

  var App = function App () {

    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  App.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');
    this._updateCopyrightYear();
    this._accountMenu();
  };

  /**
   * On document ready
   */
  App.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$itemCols = $('.appItem__col');

    this._$win = $(window);

    this._initModals();
    this._initAuthModal();
    this._initSliders();
    this._initForms();
    this._initTables();
    this._matchColsHeight();
    this._$win.resize(this._matchColsHeight.bind(this));

    // dropdown
    $('#appLang__header')
      .on('show.bs.dropdown', function () {
        $('#appHeader').addClass('last-dropdown-open');
      })
      .on('hide.bs.dropdown', function () {
        $('#appHeader').removeClass('last-dropdown-open');
      });

    // $('.navselector') // 991 change to <option>
    $('.JSnavsel__select').on('change', function () {
      window.location.href = this.value;
      // getAttribute('data-href');
    });
  };

  /**
   * Match the height of the item cards' columns
   */
  App.prototype._matchColsHeight = function _matchColsHeight () {
    if (this.__$itemCols.length) {
      if ($(window).width() >= 992) {
        this.__$itemCols.matchHeight({});
      } else {
        this.__$itemCols.matchHeight({ remove: true });
      }
    }
  };

  /**
   * Init sliders (with slick-slider)
   * @see options at https://github.com/kenwheeler/slick/
   */
  App.prototype._initSliders = function _initSliders () {
    $('.slider--insta').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true
    });
  };

  /**
   * Init tooltips
   *
   */
  App.prototype._initTooltips = function _initTooltips () {
    // bootstrap tooltips
    $('.js-tooltip').tooltip({});

    // shippintimes tooltips
    $('.shippingtime-tooltip').tooltip({
      animation: false,
      offset: '-10px 0',
      // delay: { hide: 1000000 }, // for debugging
      template: "\n        <div class=\"tooltip tooltip-top tooltip--light shippingtime__tooltip\" role=\"tooltip\">\n          <div class=\"tooltip-arrow\"></div>\n          <div class=\"tooltip-inner\"></div>\n        </div>"
    });
  };

  /**
   * Init modals
   */
  App.prototype._initModals = function _initModals () {
  };

  /**
   * Init forms (validation)
   */
  App.prototype._initForms = function _initForms () {
    $('.form-validate').validate({
      errorClass: 'has-danger',
      validClass: 'has-success',
    });
  };

  /**
   * Init tables
   */
  App.prototype._initTables = function _initTables () {
    // datable on 'my account' pages
    $('.datatable').DataTable({
      searching: false,
      ordering: false,
      info: false,
      pagingType: 'numbers',
      drawCallback: this._initTooltips.bind(this)
    });
  };

  /**
   * Update copyright year
   */
  App.prototype._updateCopyrightYear = function _updateCopyrightYear () {
    var el = document.getElementById('js-copyyear');
    if (el) {
      el.innerHTML = new Date().getFullYear();
    }
  };

  /**
   * Account menu
   */
  App.prototype._accountMenu = function _accountMenu () {
    var el = document.getElementById('js-myaccount_btn');
    if (el) {
      el.onclick = function () {
        document.body.classList.add('appAccount--menu-open');
      };
    }
  };

  /**
   * Init authentication modals
   */
  App.prototype._initAuthModal = function _initAuthModal () {
    var $authModal = $('#appAuthModal');
    this.__$authModal = $authModal;
    if (!$authModal.length) {
      return;
    }

    $(document).on('click', '[data-authmodal]', function (e) {
      e.preventDefault();
      var $btn = $(this);
      var view = this.getAttribute('data-authmodal');
      if (!view) {
        throw new Error('`data-authmodal` must have a value (e.g. `login` or `register`)');
        return;
      }
      $authModal
        .attr('data-view', view)
        .modal('show')
        .on('show.bs.modal', function (e) {
          // do something...
        });
    });
  };

  /**
   * Prompt login modal
   */
  App.prototype.promptLogin = function promptLogin () {
    if (this.__$authModal) {
      this.__$authModal.attr('data-view', 'login');
      this.__$authModal.modal();
    }
  };

  /**
   * Prompt register modal
   */
  App.prototype.promptRegister = function promptRegister () {
    if (this.__$authModal) {
      this.__$authModal.attr('data-view', 'register');
      this.__$authModal.modal();
    }
  };

  // export to public API
  api$1['app'] = new App();

}(jQuery,Popper));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy91dGlsLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2NvbGxhcHNlLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL21vZGFsLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3Rvb2x0aXAuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvZmFiaWxvbGEvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24uanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvZmFiaWxvbGEvc3JjL2FwcC9zY3JpcHRzL2FwaS5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvYWJ0ZXN0aW5nLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL3NyYy9hcHAvc2NyaXB0cy9jb29raWVhbm5vdW5jZW1lbnQuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvZmFiaWxvbGEvc3JjL2FwcC9zY3JpcHRzL2kxOG4uanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvZmFiaWxvbGEvc3JjL2FwcC9zY3JpcHRzL3N0YXRlcy5kZWZhdWx0cy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvY29sb3JzLmRlZmF1bHRzLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL3NyYy9hcHAvc2NyaXB0cy9zdmdCYXJUaW1lci5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvaXRlbS5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvaXRlbURldGFpbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvZGVtby5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvbmFzay5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mYWJpbG9sYS9zcmMvYXBwL3NjcmlwdHMvYnJvd3NlcnMuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvZmFiaWxvbGEvc3JjL2FwcC9zY3JpcHRzL2NoZWNrb3V0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL3NyYy9hcHAvc2NyaXB0cy9hY2NvdW50LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2ZhYmlsb2xhL3NyYy9hcHAvc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhLjIpOiB1dGlsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBVdGlsID0gKCgpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGxldCB0cmFuc2l0aW9uID0gZmFsc2VcblxuICBjb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuXG4gIGNvbnN0IFRyYW5zaXRpb25FbmRFdmVudCA9IHtcbiAgICBXZWJraXRUcmFuc2l0aW9uIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb24gICAgOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgT1RyYW5zaXRpb24gICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgdHJhbnNpdGlvbiAgICAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICB9XG5cbiAgLy8gc2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuICBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kVHlwZTogdHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gVHJhbnNpdGlvbkVuZEV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGVsLnN0eWxlW25hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZDogVHJhbnNpdGlvbkVuZEV2ZW50W25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKVxuXG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuXG4gICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBVdGlsID0ge1xuXG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gICAgZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfSxcblxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcbiAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgICBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgJHNlbGVjdG9yID0gJChkb2N1bWVudCkuZmluZChzZWxlY3RvcilcbiAgICAgICAgcmV0dXJuICRzZWxlY3Rvci5sZW5ndGggPiAwID8gc2VsZWN0b3IgOiBudWxsXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfSxcblxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZClcbiAgICB9LFxuXG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbilcbiAgICB9LFxuXG4gICAgaXNFbGVtZW50KG9iaikge1xuICAgICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICAgIH0sXG5cbiAgICB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgICBjb25zdCB2YWx1ZVR5cGUgICAgID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbiAgcmV0dXJuIFV0aWxcblxufSkoJClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEuMik6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDb2xsYXBzZSA9ICgoKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdjb2xsYXBzZSdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjAuMC1iZXRhLjInXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuY29sbGFwc2UnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDYwMFxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgdG9nZ2xlIDogdHJ1ZSxcbiAgICBwYXJlbnQgOiAnJ1xuICB9XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgdG9nZ2xlIDogJ2Jvb2xlYW4nLFxuICAgIHBhcmVudCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgU0hPVyAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gICAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICAgIEhJREUgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICAgIEhJRERFTiAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgU0hPVyAgICAgICA6ICdzaG93JyxcbiAgICBDT0xMQVBTRSAgIDogJ2NvbGxhcHNlJyxcbiAgICBDT0xMQVBTSU5HIDogJ2NvbGxhcHNpbmcnLFxuICAgIENPTExBUFNFRCAgOiAnY29sbGFwc2VkJ1xuICB9XG5cbiAgY29uc3QgRGltZW5zaW9uID0ge1xuICAgIFdJRFRIICA6ICd3aWR0aCcsXG4gICAgSEVJR0hUIDogJ2hlaWdodCdcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIEFDVElWRVMgICAgIDogJy5zaG93LCAuY29sbGFwc2luZycsXG4gICAgREFUQV9UT0dHTEUgOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQ29sbGFwc2Uge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9ICQubWFrZUFycmF5KCQoXG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMke2VsZW1lbnQuaWR9XCJdYFxuICAgICAgKSlcbiAgICAgIGNvbnN0IHRhYlRvZ2dsZXMgPSAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJUb2dnbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0YWJUb2dnbGVzW2ldXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiAkKHNlbGVjdG9yKS5maWx0ZXIoZWxlbWVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBhY3RpdmVzXG4gICAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICBhY3RpdmVzID0gJC5tYWtlQXJyYXkoJCh0aGlzLl9wYXJlbnQpLmNoaWxkcmVuKCkuY2hpbGRyZW4oU2VsZWN0b3IuQUNUSVZFUykpXG4gICAgICAgIGlmICghYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKSwgJ2hpZGUnKVxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICAgIH1cblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICAgIGNvbnN0IHNjcm9sbFNpemUgICAgICAgICAgID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiAgICAgICA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcbiAgICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtID0gJChzZWxlY3RvcilcbiAgICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgfVxuXG4gICAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gY29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2dldERpbWVuc2lvbigpIHtcbiAgICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gICAgfVxuXG4gICAgX2dldFBhcmVudCgpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBudWxsXG4gICAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFxuXG4gICAgICAgIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSAkKHRoaXMuX2NvbmZpZy5wYXJlbnQpWzBdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdG9yID1cbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcblxuICAgICAgJChwYXJlbnQpLmZpbmQoc2VsZWN0b3IpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICAgIENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgICBbZWxlbWVudF1cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHBhcmVudFxuICAgIH1cblxuICAgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBpc09wZW4gPSAkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVybiBzZWxlY3RvciA/ICQoc2VsZWN0b3IpWzBdIDogbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgRGVmYXVsdCxcbiAgICAgICAgICAkdGhpcy5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBjb25zdCAkdHJpZ2dlciA9ICQodGhpcylcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRhcmdldCA9ICQodGhpcylcbiAgICAgIGNvbnN0IGRhdGEgICAgPSAkdGFyZ2V0LmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBjb25maWcgID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpXG4gICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKVxuICAgIH0pXG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29sbGFwc2VcblxufSkoJClcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhLjIpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQWxlcnQgPSAoKCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYWxlcnQnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAtYmV0YS4yJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmFsZXJ0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENMT1NFICAgICAgICAgIDogYGNsb3NlJHtFVkVOVF9LRVl9YCxcbiAgICBDTE9TRUQgICAgICAgICA6IGBjbG9zZWQke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEFMRVJUIDogJ2FsZXJ0JyxcbiAgICBGQURFICA6ICdmYWRlJyxcbiAgICBTSE9XICA6ICdzaG93J1xuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIEFsZXJ0IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBjbG9zZShlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudClcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgbGV0IHBhcmVudCAgICAgPSBmYWxzZVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcGFyZW50ID0gJChzZWxlY3RvcilbMF1cbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KGAuJHtDbGFzc05hbWUuQUxFUlR9YClbMF1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudFxuICAgIH1cblxuICAgIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgICBjb25zdCBjbG9zZUV2ZW50ID0gJC5FdmVudChFdmVudC5DTE9TRSlcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpXG4gICAgICByZXR1cm4gY2xvc2VFdmVudFxuICAgIH1cblxuICAgIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIGlmICghVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB8fFxuICAgICAgICAgICEkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCwgZXZlbnQpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICB9XG5cbiAgICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KVxuICAgICAgICAuZGV0YWNoKClcbiAgICAgICAgLnRyaWdnZXIoRXZlbnQuQ0xPU0VEKVxuICAgICAgICAucmVtb3ZlKClcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cblxuICAgICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKFxuICAgIEV2ZW50LkNMSUNLX0RBVEFfQVBJLFxuICAgIFNlbGVjdG9yLkRJU01JU1MsXG4gICAgQWxlcnQuX2hhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpXG4gIClcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWxlcnRcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBBbGVydFxuXG59KSgkKVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEuMik6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNb2RhbCA9ICgoKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICA9ICdtb2RhbCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgICAgICA9ICc0LjAuMC1iZXRhLjInXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgICAgICAgPSAnYnMubW9kYWwnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICAgICAgICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiAgICAgICAgICA9IDMwMFxuICBjb25zdCBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG4gIGNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBiYWNrZHJvcCA6IHRydWUsXG4gICAga2V5Ym9hcmQgOiB0cnVlLFxuICAgIGZvY3VzICAgIDogdHJ1ZSxcbiAgICBzaG93ICAgICA6IHRydWVcbiAgfVxuXG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGJhY2tkcm9wIDogJyhib29sZWFufHN0cmluZyknLFxuICAgIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICAgIGZvY3VzICAgIDogJ2Jvb2xlYW4nLFxuICAgIHNob3cgICAgIDogJ2Jvb2xlYW4nXG4gIH1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBISURFICAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIFNIT1cgICAgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgICAgICAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkUgICAgICAgICAgICA6IGByZXNpemUke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RJU01JU1MgICAgIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIEtFWURPV05fRElTTUlTUyAgIDogYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VVUF9ESVNNSVNTICAgOiBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRURPV05fRElTTUlTUyA6IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgU0NST0xMQkFSX01FQVNVUkVSIDogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgICBCQUNLRFJPUCAgICAgICAgICAgOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIE9QRU4gICAgICAgICAgICAgICA6ICdtb2RhbC1vcGVuJyxcbiAgICBGQURFICAgICAgICAgICAgICAgOiAnZmFkZScsXG4gICAgU0hPVyAgICAgICAgICAgICAgIDogJ3Nob3cnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBESUFMT0cgICAgICAgICAgICAgOiAnLm1vZGFsLWRpYWxvZycsXG4gICAgREFUQV9UT0dHTEUgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgICBEQVRBX0RJU01JU1MgICAgICAgOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgICBGSVhFRF9DT05URU5UICAgICAgOiAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcsXG4gICAgU1RJQ0tZX0NPTlRFTlQgICAgIDogJy5zdGlja3ktdG9wJyxcbiAgICBOQVZCQVJfVE9HR0xFUiAgICAgOiAnLm5hdmJhci10b2dnbGVyJ1xuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIE1vZGFsIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9ICQoZWxlbWVudCkuZmluZChTZWxlY3Rvci5ESUFMT0cpWzBdXG4gICAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IGZhbHNlXG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IDBcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSAwXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTilcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAgIChldmVudCkgPT4gdGhpcy5oaWRlKGV2ZW50KVxuICAgICAgKVxuXG4gICAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQuTU9VU0VVUF9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG5cbiAgICBoaWRlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICAgIGlmICghdGhpcy5faXNTaG93biB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uID0gVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuXG4gICAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgICAgJCh3aW5kb3csIGRvY3VtZW50LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9iYWNrZHJvcCkub2ZmKEVWRU5UX0tFWSlcblxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSBudWxsXG4gICAgfVxuXG4gICAgaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGNvbmZpZylcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG5cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICAkKGRvY3VtZW50KVxuICAgICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgICAub24oRXZlbnQuRk9DVVNJTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LktFWURPV05fRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgICQod2luZG93KS5vbihFdmVudC5SRVNJWkUsIChldmVudCkgPT4gdGhpcy5oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgICAgY29uc3QgYW5pbWF0ZSA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpID9cbiAgICAgICAgQ2xhc3NOYW1lLkZBREUgOiAnJ1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgY29uc3QgZG9BbmltYXRlID0gVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiBhbmltYXRlXG5cbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKGFuaW1hdGUpXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChkb0FuaW1hdGUpIHtcbiAgICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9BbmltYXRlKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgX2FkanVzdERpYWxvZygpIHtcbiAgICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgICB9XG5cbiAgICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSByZWN0LmxlZnQgKyByZWN0LnJpZ2h0IDwgd2luZG93LmlubmVyV2lkdGhcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgIH1cblxuICAgIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG5cbiAgICAgICAgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgICAkKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9ICQoZWxlbWVudClbMF0uc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuICAgICAgICAkKFNlbGVjdG9yLlNUSUNLWV9DT05URU5UKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdHVhbE1hcmdpbiA9ICQoZWxlbWVudClbMF0uc3R5bGUubWFyZ2luUmlnaHRcbiAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcpXG4gICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pLmNzcygnbWFyZ2luLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBBZGp1c3QgbmF2YmFyLXRvZ2dsZXIgbWFyZ2luXG4gICAgICAgICQoU2VsZWN0b3IuTkFWQkFSX1RPR0dMRVIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0dWFsTWFyZ2luID0gJChlbGVtZW50KVswXS5zdHlsZS5tYXJnaW5SaWdodFxuICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbikuY3NzKCdtYXJnaW4tcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEFkanVzdCBib2R5IHBhZGRpbmdcbiAgICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJCgnYm9keScpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAgICQoJ2JvZHknKS5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgICQoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9ICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICAgIGlmICh0eXBlb2YgcGFkZGluZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcsIHBhZGRpbmcpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50IGFuZCBuYXZiYXItdG9nZ2xlciBtYXJnaW5cbiAgICAgICQoYCR7U2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlR9LCAke1NlbGVjdG9yLk5BVkJBUl9UT0dHTEVSfWApLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9ICQoZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSAkKCdib2R5JykuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICBpZiAodHlwZW9mIHBhZGRpbmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBwYWRkaW5nKS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGNvbnN0IF9jb25maWcgPSAkLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBNb2RhbC5EZWZhdWx0LFxuICAgICAgICAgICQodGhpcykuZGF0YSgpLFxuICAgICAgICAgIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgICB9IGVsc2UgaWYgKF9jb25maWcuc2hvdykge1xuICAgICAgICAgIGRhdGEuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCB0YXJnZXRcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKSA/XG4gICAgICAndG9nZ2xlJyA6ICQuZXh0ZW5kKHt9LCAkKHRhcmdldCkuZGF0YSgpLCAkKHRoaXMpLmRhdGEoKSlcblxuICAgIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCkub25lKEV2ZW50LlNIT1csIChzaG93RXZlbnQpID0+IHtcbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJHRhcmdldC5vbmUoRXZlbnQuSElEREVOLCAoKSA9PiB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbiAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBNb2RhbFxuXG59KSgkKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYmV0YS4yKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVG9vbHRpcCA9ICgoKSA9PiB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICovXG4gIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAndG9vbHRpcCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjAuMC1iZXRhLjInXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMudG9vbHRpcCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcbiAgY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICA9ICdicy10b29sdGlwJ1xuICBjb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uICAgICAgICAgICA6ICdib29sZWFuJyxcbiAgICB0ZW1wbGF0ZSAgICAgICAgICAgIDogJ3N0cmluZycsXG4gICAgdGl0bGUgICAgICAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyICAgICAgICAgICAgIDogJ3N0cmluZycsXG4gICAgZGVsYXkgICAgICAgICAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWwgICAgICAgICAgICAgICAgOiAnYm9vbGVhbicsXG4gICAgc2VsZWN0b3IgICAgICAgICAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICBwbGFjZW1lbnQgICAgICAgICAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQgICAgICAgICAgICAgIDogJyhudW1iZXJ8c3RyaW5nKScsXG4gICAgY29udGFpbmVyICAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50ICAgOiAnKHN0cmluZ3xhcnJheSknXG4gIH1cblxuICBjb25zdCBBdHRhY2htZW50TWFwID0ge1xuICAgIEFVVE8gICA6ICdhdXRvJyxcbiAgICBUT1AgICAgOiAndG9wJyxcbiAgICBSSUdIVCAgOiAncmlnaHQnLFxuICAgIEJPVFRPTSA6ICdib3R0b20nLFxuICAgIExFRlQgICA6ICdsZWZ0J1xuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb24gICAgICAgICAgIDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSAgICAgICAgICAgIDogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nXG4gICAgICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlciAgICAgICAgICAgICA6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGUgICAgICAgICAgICAgICA6ICcnLFxuICAgIGRlbGF5ICAgICAgICAgICAgICAgOiAwLFxuICAgIGh0bWwgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICBzZWxlY3RvciAgICAgICAgICAgIDogZmFsc2UsXG4gICAgcGxhY2VtZW50ICAgICAgICAgICA6ICd0b3AnLFxuICAgIG9mZnNldCAgICAgICAgICAgICAgOiAwLFxuICAgIGNvbnRhaW5lciAgICAgICAgICAgOiBmYWxzZSxcbiAgICBmYWxsYmFja1BsYWNlbWVudCAgIDogJ2ZsaXAnXG4gIH1cblxuICBjb25zdCBIb3ZlclN0YXRlID0ge1xuICAgIFNIT1cgOiAnc2hvdycsXG4gICAgT1VUICA6ICdvdXQnXG4gIH1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICAgIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICAgIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gICAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgRkFERSA6ICdmYWRlJyxcbiAgICBTSE9XIDogJ3Nob3cnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBUT09MVElQICAgICAgIDogJy50b29sdGlwJyxcbiAgICBUT09MVElQX0lOTkVSIDogJy50b29sdGlwLWlubmVyJyxcbiAgICBBUlJPVyAgICAgICAgIDogJy5hcnJvdydcbiAgfVxuXG4gIGNvbnN0IFRyaWdnZXIgPSB7XG4gICAgSE9WRVIgIDogJ2hvdmVyJyxcbiAgICBGT0NVUyAgOiAnZm9jdXMnLFxuICAgIENMSUNLICA6ICdjbGljaycsXG4gICAgTUFOVUFMIDogJ21hbnVhbCdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBUb29sdGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuXG4gICAgICAvLyBwcml2YXRlXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gdHJ1ZVxuICAgICAgdGhpcy5fdGltZW91dCAgICAgICA9IDBcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSAnJ1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgICB0aGlzLl9wb3BwZXIgICAgICAgID0gbnVsbFxuXG4gICAgICAvLyBwcm90ZWN0ZWRcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICAgIHRoaXMuY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLnRpcCAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpXG5cbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgICByZXR1cm4gREFUQV9LRVlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgICAgcmV0dXJuIEV2ZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gRVZFTlRfS0VZXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgICAgbGV0IGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICAgIClcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcpXG5cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gbnVsbFxuICAgICAgdGhpcy5fdGltZW91dCAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSBudWxsXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbFxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICB0aGlzLmVsZW1lbnRcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgICAgY29uc3QgdGlwSWQgPSBVdGlsLmdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpXG5cbiAgICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsYWNlbWVudCAgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudCkgOlxuICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudFxuXG4gICAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6ICQodGhpcy5jb25maWcuY29udGFpbmVyKVxuXG4gICAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICAgICAgaWYgKCEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwge1xuICAgICAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMuY29uZmlnLm9mZnNldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogU2VsZWN0b3IuQVJST1dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ3JlYXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25VcGRhdGUgOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJCgnYm9keScpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpeFRyYW5zaXRpb24oKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcbiAgICAgICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcblxuICAgICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuX1RSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgICAgY29uc3QgY29tcGxldGUgID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcbiAgICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2VcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlXG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICAgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG5cbiAgICAgICAgJCh0aXApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcblxuICAgIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gICAgfVxuXG4gICAgYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gICAgfVxuXG4gICAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICAgIHJldHVybiB0aGlzLnRpcFxuICAgIH1cblxuICAgIHNldENvbnRlbnQoKSB7XG4gICAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5GQURFfSAke0NsYXNzTmFtZS5TSE9XfWApXG4gICAgfVxuXG4gICAgc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLmNvbmZpZy5odG1sXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudFtodG1sID8gJ2h0bWwnIDogJ3RleHQnXShjb250ZW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgbGV0IHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6XG4gICAgICAgICAgdGhpcy5jb25maWcudGl0bGVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICAgIH1cblxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgICApXG5cbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50SW4gID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID9cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRSA6XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgZXZlbnRJbixcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fZW50ZXIoZXZlbnQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub24oXG4gICAgICAgICAgICAgIGV2ZW50T3V0LFxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbihcbiAgICAgICAgICAnaGlkZS5icy5tb2RhbCcsXG4gICAgICAgICAgKCkgPT4gdGhpcy5oaWRlKClcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlciAgOiAnbWFudWFsJyxcbiAgICAgICAgICBzZWxlY3RvciA6ICcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2ZpeFRpdGxlKCkge1xuICAgICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHxcbiAgICAgICAgIHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJ1xuICAgICAgICApXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fFxuICAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gICAgfVxuXG4gICAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICAgIF0gPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgICB9XG5cbiAgICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5kYXRhKCksXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3cgOiBjb25maWcuZGVsYXksXG4gICAgICAgICAgaGlkZSA6IGNvbmZpZy5kZWxheVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICAgIE5BTUUsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgICAgY29uc3QgY29uZmlnID0ge31cblxuICAgICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9jbGVhblRpcENsYXNzKCkge1xuICAgICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG4gICAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSkge1xuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KGRhdGEucGxhY2VtZW50KSlcbiAgICB9XG5cbiAgICBfZml4VHJhbnNpdGlvbigpIHtcbiAgICAgIGNvbnN0IHRpcCAgICAgICAgICAgICAgICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgY29uc3QgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvblxuICAgICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZVxuICAgICAgdGhpcy5oaWRlKClcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uXG4gICAgfVxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgICAgID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBUb29sdGlwXG5cbn0pKCQsIFBvcHBlcilcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYmV0YS4yKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IERyb3Bkb3duID0gKCgpID0+IHtcblxuICAvKipcbiAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgKi9cbiAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXAgZHJvcGRvd24gcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgICA9ICdkcm9wZG93bidcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgID0gJzQuMC4wLWJldGEuMidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcbiAgY29uc3QgU1BBQ0VfS0VZQ09ERSAgICAgICAgICAgID0gMzIgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG4gIGNvbnN0IFRBQl9LRVlDT0RFICAgICAgICAgICAgICA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuICBjb25zdCBBUlJPV19VUF9LRVlDT0RFICAgICAgICAgPSAzOCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcbiAgY29uc3QgQVJST1dfRE9XTl9LRVlDT0RFICAgICAgID0gNDAgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcbiAgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcbiAgY29uc3QgUkVHRVhQX0tFWURPV04gICAgICAgICAgID0gbmV3IFJlZ0V4cChgJHtBUlJPV19VUF9LRVlDT0RFfXwke0FSUk9XX0RPV05fS0VZQ09ERX18JHtFU0NBUEVfS0VZQ09ERX1gKVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIEhJREUgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIFNIT1cgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gICAgU0hPV04gICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0sgICAgICAgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gICAgS0VZRE9XTl9EQVRBX0FQSSA6IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgICBLRVlVUF9EQVRBX0FQSSAgIDogYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIERJU0FCTEVEICA6ICdkaXNhYmxlZCcsXG4gICAgU0hPVyAgICAgIDogJ3Nob3cnLFxuICAgIERST1BVUCAgICA6ICdkcm9wdXAnLFxuICAgIE1FTlVSSUdIVCA6ICdkcm9wZG93bi1tZW51LXJpZ2h0JyxcbiAgICBNRU5VTEVGVCAgOiAnZHJvcGRvd24tbWVudS1sZWZ0J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gICAgTUVOVSAgICAgICAgICA6ICcuZHJvcGRvd24tbWVudScsXG4gICAgTkFWQkFSX05BViAgICA6ICcubmF2YmFyLW5hdicsXG4gICAgVklTSUJMRV9JVEVNUyA6ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKSdcbiAgfVxuXG4gIGNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgVE9QICAgICAgIDogJ3RvcC1zdGFydCcsXG4gICAgVE9QRU5EICAgIDogJ3RvcC1lbmQnLFxuICAgIEJPVFRPTSAgICA6ICdib3R0b20tc3RhcnQnLFxuICAgIEJPVFRPTUVORCA6ICdib3R0b20tZW5kJ1xuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBvZmZzZXQgICAgICA6IDAsXG4gICAgZmxpcCAgICAgICAgOiB0cnVlXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBvZmZzZXQgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGZsaXAgICAgICAgIDogJ2Jvb2xlYW4nXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgRHJvcGRvd24ge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ICA9IGVsZW1lbnRcbiAgICAgIHRoaXMuX3BvcHBlciAgID0gbnVsbFxuICAgICAgdGhpcy5fY29uZmlnICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgICAgdGhpcy5fbWVudSAgICAgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpXG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gICAgfVxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0IDogdGhpcy5fZWxlbWVudFxuICAgICAgfVxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuICAgICAgLy8gZm9yIGRyb3B1cCB3aXRoIGFsaWdubWVudCB3ZSB1c2UgdGhlIHBhcmVudCBhcyBwb3BwZXIgY29udGFpbmVyXG4gICAgICBpZiAoJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QVVApKSB7XG4gICAgICAgIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VTEVGVCkgfHwgJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgICAgIGVsZW1lbnQgPSBwYXJlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihlbGVtZW50LCB0aGlzLl9tZW51LCB0aGlzLl9nZXRQb3BwZXJDb25maWcoKSlcblxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICEkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnYm9keScpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAkKHBhcmVudClcbiAgICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuX21lbnUgPSBudWxsXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDSywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgICBjb25maWdcbiAgICAgIClcblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICAgIE5BTUUsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgICAgICB0aGlzLl9tZW51ID0gJChwYXJlbnQpLmZpbmQoU2VsZWN0b3IuTUVOVSlbMF1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9tZW51XG4gICAgfVxuXG4gICAgX2dldFBsYWNlbWVudCgpIHtcbiAgICAgIGNvbnN0ICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudCkucGFyZW50KClcbiAgICAgIGxldCBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTVxuXG4gICAgICAvLyBIYW5kbGUgZHJvcHVwXG4gICAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QVVApKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QXG4gICAgICAgIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BFTkRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NRU5EXG4gICAgICB9XG4gICAgICByZXR1cm4gcGxhY2VtZW50XG4gICAgfVxuXG4gICAgX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICAgIGNvbnN0IG9mZnNldENvbmYgPSB7fVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9mZnNldENvbmYuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICAgIGRhdGEub2Zmc2V0cyA9ICQuZXh0ZW5kKHt9LCBkYXRhLm9mZnNldHMsIHRoaXMuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzKSB8fCB7fSlcbiAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXRDb25mLm9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50IDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICAgIG1vZGlmaWVycyA6IHtcbiAgICAgICAgICBvZmZzZXQgOiBvZmZzZXRDb25mLFxuICAgICAgICAgIGZsaXAgOiB7XG4gICAgICAgICAgICBlbmFibGVkIDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGlzYWJsZSBQb3BwZXIuanMgZm9yIERyb3Bkb3duIGluIE5hdmJhclxuICAgICAgaWYgKHRoaXMuX2luTmF2YmFyKSB7XG4gICAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgICBlbmFibGVkOiAhdGhpcy5faW5OYXZiYXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBvcHBlckNvbmZpZ1xuICAgIH1cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQud2hpY2ggPT09IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCB8fFxuICAgICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZ2dsZXMgPSAkLm1ha2VBcnJheSgkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJlbnQgICAgICAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICAgIGNvbnN0IGNvbnRleHQgICAgICAgPSAkKHRvZ2dsZXNbaV0pLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldCA6IHRvZ2dsZXNbaV1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkcm9wZG93bk1lbnUgPSBjb250ZXh0Ll9tZW51XG4gICAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKVxuICAgICAgICAgICAgJiYgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICAgICQoZHJvcGRvd25NZW51KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICAgJChwYXJlbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICBpZiAoIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpIHx8IC9idXR0b24vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSAmJiBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fFxuICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IFNQQUNFX0tFWUNPREUpIHx8XG4gICAgICAgICAgIGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgIGNvbnN0IHRvZ2dsZSA9ICQocGFyZW50KS5maW5kKFNlbGVjdG9yLkRBVEFfVE9HR0xFKVswXVxuICAgICAgICAgICQodG9nZ2xlKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gJChwYXJlbnQpLmZpbmQoU2VsZWN0b3IuVklTSUJMRV9JVEVNUykuZ2V0KClcblxuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX1VQX0tFWUNPREUgJiYgaW5kZXggPiAwKSB7IC8vIHVwXG4gICAgICAgIGluZGV4LS1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIGRvd25cbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMFxuICAgICAgfVxuXG4gICAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLk1FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LktFWVVQX0RBVEFfQVBJfWAsIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgICB9KVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuRk9STV9DSElMRCwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIERyb3Bkb3duXG5cbn0pKCQsIFBvcHBlcilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8vIGFsbG93IHRoaXMgdG8gYmUgc2V0IGZyb20gb3V0c2lkZSBvZiB0aGlzIHNjcmlwdCwgZS5nLiBmcm9tIHRoZSBiYWNrZW5kXG5jb25zdCBhcGkgPSB3aW5kb3dbJ2ZhYmlsb2xhJ10gfHwge1xuICAnb3B0cyc6IHtcbiAgICAnZGVtbyc6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1snZmFiaWxvbGEnXSA9IGFwaTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY2xhc3MgQUJ0ZXN0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gYm9vdHN0cmFwXG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXBwLmpzIGluaXRpYWxpemVkJyk7XG4gICAgdGhpcy50ZXN0cyA9IHtcbiAgICAgICdTdGFuZG91dHJlZ2lzdHJhdGlvbic6IHt9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICAvLyB0aGlzLkFCdGVzdDAxKCk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRlc3RcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZFxuICAgKi9cbiAgcnVuIChpZCkge1xuICAgIGlmICh0aGlzLnRlc3RzW2lkXSkge1xuICAgICAgdGhpc1sndGVzdCcgKyBpZF0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgQUJ0ZXN0IHdpdGggaWQgJHtpZH0gZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgMDE6IEFCdGVzdC0tc3RhbmRvdXRyZWdpc3RyYXRpb25cbiAgICovXG4gIHRlc3RTdGFuZG91dHJlZ2lzdHJhdGlvbiAoKSB7XG4gICAgY29uc3QgJGhvbWVwYWdlQ2FyZCA9ICQoJyNob21lcGFnZVJlZ2lzdGVyQ2FyZCcpO1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGlmICghJGhvbWVwYWdlQ2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGJvZHkuYWRkQ2xhc3MoJ0FCdGVzdC0tc3RhbmRvdXRyZWdpc3RyYXRpb24nKTtcbiAgICAvLyBvbiBjbGljayBhbnl3aGVyZSByZW1vdmUgdGhlIGNsYXNzXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdBQnRlc3QtLXN0YW5kb3V0cmVnaXN0cmF0aW9uJyk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnQUJ0ZXN0J10gPSBuZXcgQUJ0ZXN0KCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIENvb2tpZUFubm91bmNlbWVudCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBpbml0aWFsaXplZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCAkY29udGFpbmVyID0gJCgnI2pzLWNvb2tpZWFubm91bmNlbWVudCcpO1xuICAgIGNvbnN0ICRkaXNtaXNzVHJpZ2dlcnMgPSAkKCcuanMtY29va2llYW5ub3VuY2VtZW50LWRpc21pc3MnKTtcblxuICAgIGlmICghJGNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IHRoaXMuX3JlYWRDb29raWUoJ2Nvb2tpZWFubm91bmNlbWVudCcpO1xuXG4gICAgaWYgKGNvb2tpZVZhbHVlICE9PSAnc2hvd24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgICRkaXNtaXNzVHJpZ2dlcnMub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICB0aGlzLl9jcmVhdGVDb29raWUoJ2Nvb2tpZWFubm91bmNlbWVudCcsICdzaG93bicsIDM2NSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb29raWVcbiAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQxMDM1OTYvMTkzODk3MFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7TWl4ZWR9ICB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGRheXNcbiAgICovXG4gIF9jcmVhdGVDb29raWUgKG5hbWUsIHZhbHVlLCBkYXlzKSB7XG4gICAgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGNvb2tpZVxuICAgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDEwMzU5Ni8xOTM4OTcwXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHs/U3RyaW5nfVxuICAgKi9cbiAgX3JlYWRDb29raWUgKG5hbWUpIHtcbiAgICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIHZhciBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2VyYXNlQ29va2llIChuYW1lKSB7XG4gICAgdGhpcy5fY3JlYXRlQ29va2llKG5hbWUsXCJcIiwtMSk7XG4gIH1cbn1cblxubmV3IENvb2tpZUFubm91bmNlbWVudCgpO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbi8qKlxuICogR2V0IGxhbmcgY29kZSBmcm9tIHVybFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TGFuZ0Zyb21VcmwgKCkge1xuICBjb25zdCB1cmxQYXJ0cyA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKTtcbiAgY29uc3QgbGFuZ01hcCA9IHdpbmRvdy5pMThuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdXJsUGFydCA9IHVybFBhcnRzW2ldO1xuICAgIGlmIChsYW5nTWFwW3VybFBhcnRdICYmIHVybFBhcnQgIT09ICdjdXJyZW50Jykge1xuICAgICAgcmV0dXJuIHVybFBhcnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiAnZW4nOyAvLyBkZWZhdWx0IGxhbmd1YWdlXG59XG5cbi8qKlxuICogR2V0IGkxOG4gc3RyaW5nIGJ5IGl0cyBpZFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gIGlkXG4gKiBAcGFyYW0gIHs/U3RyaW5nfSBnaXZlbkxhbmdcbiAqIEBwYXJhbSAgez9TdHJpbmd9IGZhbGxiYWNrXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJMThuIChpZCwgZ2l2ZW5MYW5nLCBmYWxsYmFjaykge1xuICBjb25zdCBpMThuID0gd2luZG93LmkxOG47XG4gIGNvbnN0IGxhbmcgPSBnaXZlbkxhbmcgfHwgaTE4blsnY3VycmVudCddIHx8IGdldExhbmdGcm9tVXJsKCk7XG4gIGNvbnN0IGxhbmdTdHJpbmdzID0gaTE4bltsYW5nXTtcbiAgcmV0dXJuIGxhbmdTdHJpbmdzW2lkXSB8fCBmYWxsYmFjayB8fCAnJztcbn1cblxuYXBpWydnZXRJMThuJ10gPSBnZXRJMThuO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBnZXRJMThuIH0gZnJvbSAnLi9pMThuJztcblxuLyoqXG4gKiBBbmF0b215IG9mIGEgc3RhdGUgb2JqZWN0XG4gKlxuICogKHZhbHVlcyBwcmVjZWRlZCBieSBhIHF1ZXN0aW9uIG1hcmsgYXJlIG9wdGlvbmFsKVxuYGBgXG57XG4gIGlkOiB7c3RyaW5nfSwgICAgICAgICAgICAvLyBBbGwgbG93ZXJjYXNlLCBubyB3aGl0ZXNwYWNlcy4gVGhpcyBpcyB1c2VkIGluIHRoZSBjc3MgYXMgd2VsbC4gZS5nLiAnJ2Vlbm1hYWwnJyxcbiAgaWR4OiB7TnVtYmVyfSwgICAgICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgc3RhdGUgaW4gdGhlIHN0YXRlcyBzdWNjZXNzaW9uLiBlLmcuIGAxYFxuICB0ZXh0OiB7c3RyaW5nfSwgICAgICAgICAgLy8gVGhlIGRpc3BsYXllZCB0ZXh0IGZvciB0aGUgc3RhdGUuIEUuZy4gYCdFZW5tYWFsLi4uJ2AsXG4gIGR1cmF0aW9uOiB7P051bWJlcn0sICAgICAvLyBEeW5hbWljYWxseSBzZXQgYnkgdGhlIEl0ZW0gY2xhc3MsIGl0IGNhbiBoYXZlIGEgZGVmYXVsdCB2YWx1ZSB0aG91Z2hcbiAgaXNMYXN0OiB7P2Jvb2xlYW59LCAgICAgIC8vIFNldCBpdCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGluZGljYXRlIHRoYXQgdGhpcyBzdGF0ZSBpcyB0aGUgbGFzdC4gT3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbGFzdCBpcyBhbHdheXMgY29uc2lkZXJlZCBgJ3ZlcmtvY2h0J2BcbiAgZXhwaXJhdGlvbnM6IHtBcnJheTxcbiAgICAgIE9iamVjdDxcbiAgICAgICAgcGVyY2VudDoge051bWJlcn0sIC8vIE51bWJlciB0aGF0IGluZGljYXRlcyBhdCB3aGljaCBwb2ludCBpbiB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAoZXhwcmVzc2VkIGluIHBlcmNlbnRhZ2UpIHRoaXMgZXhwaXJhdGlvbiBicmVha3BvaW50IGlzIHRyaWdnZXJlZFxuICAgICAgICBuYW1lOiB7c3RyaW5nfSAgICAgLy8gQWxsIGxvd2VyY2FzZSwgbm8gd2hpdGVzcGFjZXMuIFRoaXMgaXMgdXNlZCBpbiB0aGUgY3NzIGFzIHdlbGwuIGUuZy4gYCdibGluaydgLFxuICAgICAgICA+XG4gICAgPn1cbiAgW3tcbiAgICBwZXJjZW50OiA3MCxcbiAgICBuYW1lOiAnYmxpbmsnXG4gIH1dXG59XG5gYGBcbiovXG5cbi8qKlxuICogVGhlIGB0ZXh0YCBpcyBkaXNwbGF5ZWQgaW4gdGhlIHN0YXR1cyBiYXIuXG4gKlxuICogVGhlIGBkdXJhdGlvbmAgaXMgc2V0IGR5bmFtaWNhbGx5LCBpdCdzIGhlcmUganVzdCBmb3IgcmVmZXJlbmNlLlxuICpcbiAqIFRoZSBgZXhwaXJhdGlvbnNgIHZhbHVlcyBhdmFpbGFibGUgYXJlIGZvciBub3c6XG4gKiAnYmxpbmssIGNsb3NlLCBodXJyeSwgZmluYWwnOyB0byBlYWNoIG9mIHRoZW0gY29ycmVzcG9uZFxuICogc29tZSB2YXJpYXRpb25zIGFuZCBhbmltYXRpb24gYXBwbGllZCB0aHJvdWdoIGNzcy4gRWFjaCBleHBpcmF0aW9uIG11c3RcbiAqIGRlY2xhcmUgYSBgcGVyY2VudGAgcHJvcGVydHkgdGhhdCBpbmRpY2F0ZXMgdGhlIHBlcmNlbnRhZ2UgYXQgd2hpY2ggcG9pbnRcbiAqIGluIHRpbWUgdHJpZ2dlciB0aGUgZXhwaXJhdGlvbiBhbmltYXRpb24gKG9yIHdoYXRldmVyKSxcbiAqIGUuZy4gYSBgcGVyY2VudGAgdmFsdWUgb2YgYDUwYCB3b3VsZCB0cmlnZ2VyIGF0IHRoZSAxNHRoIHNlY29uZCBmb3IgYVxuICogc3RhdGUgdGhhdCBsYXN0cyAyOHNcbiAqL1xuY29uc3QgZGVmYXVsdFN0YXRlcyA9IFtcbiAge1xuICAgIGlkOiAnZWVubWFhbCcsXG4gICAgaWR4OiAwLFxuICAgIHRleHQ6IGdldEkxOG4oJ2Vlbm1hYWwnKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ2FuZGVybWFhbCcsXG4gICAgaWR4OiAxLFxuICAgIHRleHQ6IGdldEkxOG4oJ2FuZGVybWFhbCcpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNTAsXG4gICAgICBuYW1lOiAnaHVycnknXG4gICAgfSwge1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfSwge1xuICAgICAgcGVyY2VudDogOTAsXG4gICAgICBuYW1lOiAnZmluYWwnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnZ2Vib2RlbicsXG4gICAgaWR4OiAyLFxuICAgIHRleHQ6IGdldEkxOG4oJ2dlYm9kZW4nKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDUwLFxuICAgICAgbmFtZTogJ2h1cnJ5J1xuICAgIH0sIHtcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH0sIHtcbiAgICAgIHBlcmNlbnQ6IDkwLFxuICAgICAgbmFtZTogJ2ZpbmFsJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ2dlYm9kZW4tdGltZWxlc3MnLFxuICAgIGlkeDogMyxcbiAgICB0ZXh0OiBnZXRJMThuKCdnZWJvZGVuLXRpbWVsZXNzJyksXG4gICAgZHVyYXRpb246IG51bGxcbiAgfSwge1xuICAgIGlkOiAndmVya29jaHQnLFxuICAgIGlkeDogNCxcbiAgICB0ZXh0OiBnZXRJMThuKCd2ZXJrb2NodCcpLFxuICAgIGR1cmF0aW9uOiBudWxsXG4gIH0sIHtcbiAgICBpZDogJ2JpZWRlbicsXG4gICAgaWR4OiA1LFxuICAgIHRleHQ6IGdldEkxOG4oJ2JpZWRlbicpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnd2lubmVuJyxcbiAgICBpZHg6IDYsXG4gICAgdGV4dDogZ2V0STE4bignd2lubmVuJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA1MCxcbiAgICAgIG5hbWU6ICdodXJyeSdcbiAgICB9LCB7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdnZWxhZGVuJyxcbiAgICBpZHg6IDcsXG4gICAgdGV4dDogZ2V0STE4bignZ2VsYWRlbicpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnZ2VzbG90ZW4nLFxuICAgIGlkeDogOCxcbiAgICB0ZXh0OiBnZXRJMThuKCdnZXNsb3RlbicpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnY29udHJvbGVyZW4nLFxuICAgIGlkeDogOSxcbiAgICB0ZXh0OiBnZXRJMThuKCdjb250cm9sZXJlbicpLFxuICAgIGR1cmF0aW9uOiBudWxsXG4gIH0sIHtcbiAgICBpZDogJ3VpdHZlcmtvY2h0JyxcbiAgICBpZHg6IDEwLFxuICAgIHRleHQ6IGdldEkxOG4oJ3VpdHZlcmtvY2h0JyksXG4gICAgZHVyYXRpb246IG51bGxcbiAgfSxcbl07XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2RlZmF1bHRTdGF0ZXMnXSA9IGRlZmF1bHRTdGF0ZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTdGF0ZXM7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY29uc3QgZGVmYXVsdENvbG9ycyA9IHtcbiAgJ2Vlbm1hYWwnOiBbJyNGRkNBQjMnXSxcbiAgJ2FuZGVybWFhbCc6IFsnIzk5RDhERSddLFxuICAnZ2Vib2Rlbic6IFsnI0ZGQkJCQSddLFxuICAnZ2Vib2Rlbi10aW1lbGVzcyc6IFsnIzZiNDQ4MiddLFxuICAndmVya29jaHQnOiBbJyNCMkIyQjInXSxcbiAgJ2JpZWRlbic6IFsnIzBCNzJCQSddLFxuICAnd2lubmVuJzogWycjYWQwMDVkJ10sXG4gICdnZWxhZGVuJzogWycjYTM4ZDhkJ10sXG4gICdnZXNsb3Rlbic6IFsnIzlkOGY4ZiddLFxuICAnY29udHJvbGVyZW4nOiBbJyM5NzkwOTAnXSxcbn07XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2RlZmF1bHRDb2xvcnMnXSA9IGRlZmF1bHRDb2xvcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDb2xvcnM7XG4iLCIvKiFcbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnlcbiAqXG4gKiBTVkcgUGllIFRpbWVyIDAuOS4xIHwgQW5kZXJzIEdyaW1zcnVkLCBncmludC5ubyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9hZ3JpbXNydWQvc3ZnUGllVGltZXIuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ZnUGllVGltZXIge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBwcm9wcy5lbGVtZW50O1xuICAgIHRoaXMuX3NpemUgPSA0MDtcbiAgICB0aGlzLl9zdGFydEZyb20gPSBwcm9wcy5zdGFydEZyb20gPyBwcm9wcy5zdGFydEZyb20gKiAxMDAwOiAwOyAvLyBzdGFydEZyb20gaXMgZ2l2ZW4gaW4gc2Vjb25kc1xuICAgIHRoaXMuX2R1cmF0aW9uID0gcHJvcHMuZHVyYXRpb24gPyBwcm9wcy5kdXJhdGlvbiAqIDEwMDAgOiAxMDAwOyAvLyBkdXJhdGlvbiBpcyBnaXZlbiBpbiBzZWNvbmRzXG4gICAgdGhpcy5fYWN0dWFsRHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbiAtIHRoaXMuX3N0YXJ0RnJvbTtcbiAgICBsZXQgbiA9IHByb3BzLmxvb3BzO1xuXG4gICAgaWYgKHRoaXMucmVxKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHBhcnQgbWlnaHQgYmUgY29uZnVzaW5nOlxuICAgIC8vIElmIG49PTAsIGRvIGluZmluaXRlIGxvb3BzXG4gICAgLy8gSW4gb3RoZXIgY2FzZXMgd2hlcmUgbiBpcyBzZXQsIGRvIG4gbG9vcHNcbiAgICAvLyBJZiBuIGlzIG5vdCBzZXQsIGRvIDEgbG9vcFxuICAgIC8vIERvIGl0IHRoaXMgd2F5IHRvIHByZXZlbnQgbWl4aW5nIG49PTAgYW5kICFuXG4gICAgbiA9IChuID09PSAwKSA/IDAgOiBuID8gbiA6IDE7XG5cbiAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpICsgdGhpcy5fYWN0dWFsRHVyYXRpb24gKiBuO1xuICAgIGNvbnN0IHRvdGFsZHVyID0gdGhpcy5fYWN0dWFsRHVyYXRpb24gKiBuO1xuXG4gICAgLy8gRGF0ZS5ub3cgZml4IGJ5IEFyaSBGdWNocywgYWZ1Y2hzLnR1bWJsci5jb20vcG9zdC8yMzU1MDEyNDc3NC9kYXRlLW5vdy1pbi1pZThcbiAgICBEYXRlLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gK25ldyBEYXRlKCk7IH07XG5cbiAgICAvLyBBbmltYXRlIGZyYW1lIGJ5IGZyYW1lXG4gICAgKGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nID0gZW5kIC0gRGF0ZS5ub3coKTtcblxuICAgICAgLy8gTm93IHNldCByb3RhdGlvbiByYXRlXG4gICAgICAvLyBFLmcuIDUwJSBvZiBmaXJzdCBsb29wIHJldHVybnMgMS41XG4gICAgICAvLyBFLmcuIDc1JSBvZiBzaXh0aCBsb29wIHJldHVybnMgNi43NVxuICAgICAgLy8gSGFzIHRvIHJldHVybiA+MCBmb3IgU1ZHIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuICAgICAgLy8gSWYgeW91IG5lZWQgdGhlIGN1cnJlbnQgbG9vcCwgdXNlIE1hdGguZmxvb3IocmF0ZSlcbiAgICAgIGxldCByYXRlID0gbiArIDEgLSByZW1haW5pbmcgLyBzZWxmLl9kdXJhdGlvbjtcbiAgICAgIC8vIHRvdGFsIHJhdGUgZm9yIGEgZnVsbCBjeWNsZSBpcyAwIHRvIDJcbiAgICAgIHJhdGUgPSByYXRlOy8vICsgKChzZWxmLl9zdGFydEZyb20gKiAyKSAvIHNlbGYuX2R1cmF0aW9uKTtcblxuICAgICAgLy8gQXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdpbGwgZHJhdyB3aGVuZXZlciBjYXBhYmxlLFxuICAgICAgLy8gdGhlIGFuaW1hdGlvbiBtaWdodCBlbmQgYmVmb3JlIGl0IHJlYWNoZXMgMTAwJS5cbiAgICAgIC8vIExldCdzIHNpbXVsYXRlIGNvbXBsZXRlbmVzcyBvbiB0aGUgbGFzdCB2aXN1YWxcbiAgICAgIC8vIGZyYW1lIG9mIHRoZSBsb29wLCByZWdhcmRsZXNzIG9mIGFjdHVhbCBwcm9ncmVzc1xuICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudClcbiAgICAgIGlmIChyZW1haW5pbmcgPCA2MCkge1xuICAgICAgICAvLyAxLjAgbWlnaHQgYnJlYWssIHNldCB0byBzbGlnaHRseSBsb3dlciB0aGFuIDFcbiAgICAgICAgLy8gVXBkYXRlOiBTZXQgdG8gc2xpZ2h0bHkgbG93ZXIgdGhhbiBuIGluc3RlYWRcbiAgICAgICAgc2VsZi5fZHJhdyhuIC0gMC4wMDAxKTtcbiAgICAgICAgLy8gU3RvcCBhbmltYXRpbmcgd2hlbiB3ZSByZWFjaCBuIGxvb3BzIChpZiBuIGlzIHNldClcbiAgICAgICAgaWYocmVtYWluaW5nIDwgdG90YWxkdXIgJiYgbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gVG8gcmV2ZXJzZSwgdW5jb21tZW50IHRoaXMgbGluZVxuICAgICAgLy8gcmF0ZSA9IDM2MCAtIHJhdGU7XG5cbiAgICAgIC8vIGRyYXdcbiAgICAgIHNlbGYuX2RyYXcocmF0ZSk7XG4gICAgICAvLyByZXF1ZXN0IG5leHQgZnJhbWVcbiAgICAgIHNlbGYucmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICB9KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgU1ZHXG4gICAqIEBwYXJhbSAge051bWJlcn0gcmF0ZVxuICAgKi9cbiAgX2RyYXcgKHJhdGUpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLndpZHRoID0gMTAwIC0gKChyYXRlICogMTAwKSAtIDEwMCkgKyAnJSc7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB0aGUgYW5pbWF0aW9uIGNhbmNlbCB0aGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWVcbiAgICovXG4gIHN0b3AgKCkge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9yZXEpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZGVmYXVsdFN0YXRlcyBmcm9tICcuL3N0YXRlcy5kZWZhdWx0cyc7XG5pbXBvcnQgZGVmYXVsdENvbG9ycyBmcm9tICcuL2NvbG9ycy5kZWZhdWx0cyc7XG5pbXBvcnQgU3ZnQmFyVGltZXIgZnJvbSAnLi9zdmdCYXJUaW1lcic7XG5cbi8vIEV4YW1wbGUgdXNlIG9mIHRoZSBBUElcbi8vIChmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgJCwgYXBpKSB7XG4vLyAgIHZhciBteURPTW9ySnF1ZXJ5ID0gJCgnLmFwcEl0ZW0nKVswXTtcblxuLy8gICB2YXIgbXlJdGVtID0gbmV3IGFwaS5JdGVtKHtcbi8vICAgICBpZDogMTAsXG4vLyAgICAgZWxlbTogbXlET01vckpxdWVyeSxcbi8vICAgICAvLyBzdGF0ZTogMyxcbi8vICAgICBvblN0YXRlOiBmdW5jdGlvbiAoaXRlbSkge1xuLy8gICAgICAgY29uc29sZS5sb2coJ29uU3RhdGUgJyArIGl0ZW0uc3RhdGUuaWQsIGl0ZW0pO1xuLy8gICAgIH0sXG4vLyAgICAgb25FbmQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnQXVjdGlvbiBlbmRzISBvbkVuZCcsIGl0ZW0pO1xuLy8gICAgIH0sXG4vLyAgICAgb25CaWQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnQmlkISBvbiBpdGVtJywgaXRlbSk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vICAgbXlJdGVtLnNldFN0YXRlKDAsIDE1KTtcbi8vICAgLy8gbXlJdGVtLmRlc3Ryb3koKTtcbi8vIH0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd2luZG93LmhlbGxvc3BlY2lhbCk7XG5cbi8vIChmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCBhcGkpIHtcbi8vICAgLy8gY2FsbGluZyB0aGUgY29udHJ1Y3RvciBvciB0aGUgc2V0U3RhdGUgbWV0aG9kIHJldHVybiB0aGUgaXRlbSBpbnN0YW5jZVxuLy8gICB2YXIgbXlJdGVtID0gbmV3IGhlbGxvc3BlY2lhbC5JdGVtKHtcbi8vICAgICBpZDogMTIsXG4vLyAgICAgZWxlbTogJCgnLmFwcEl0ZW0nKVswXSAvLyB0aGUgaXRlbSBlbGVtZW50IGluIHRoZSBjYXRlZ29yeSBwYWdlXG4vLyAgIH0pLnNldFN0YXRlKCdnZWJvZGVuJywgMTEpO1xuLy8gICAvLyBncmFiIHRoZSBzdGF0ZSBpbiBhIHZhcmlhYmxlIHRvIHVzZSBjbG9zdXJlXG4vLyAgIHZhciBteVN0YXRlID0gbXlJdGVtLnN0YXRlO1xuXG4vLyAgIC8vIGZha2UgYXN5bmMgbG9hZGluZyBvZiBhamF4IGNvbnRlbnRcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIG15SXRlbVBvcHVwID0gbmV3IGhlbGxvc3BlY2lhbC5JdGVtKHtcbi8vICAgICAgIGlkOiAxMixcbi8vICAgICAgIGVsZW06ICQoJy5hcHBJdGVtJylbMV0gLy8gdGhlIGl0ZW0gZWxlbWVudCBpbiB0aGUgcG9wdXBcbi8vICAgICB9KTtcbi8vICAgICBteUl0ZW1Qb3B1cC5yZXN1bWVTdGF0ZShteVN0YXRlKTtcbi8vICAgfSwgMzAwMCk7XG5cbi8vICAgLy8gZmFrZSBhc3luYyBzb21ldGhpbmcgZWxlc2Vcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIG15QXN5bmNJdGVtID0gbmV3IGhlbGxvc3BlY2lhbC5JdGVtKHtcbi8vICAgICAgIGlkOiAxMixcbi8vICAgICAgIGVsZW06ICQoJy5hcHBJdGVtJylbMl0gLy8gYW5vdGhlciBpdGVtIGVsZW1lbnRcbi8vICAgICB9KTtcbi8vICAgICBteUFzeW5jSXRlbS5yZXN1bWVTdGF0ZShteVN0YXRlKTtcbi8vICAgfSwgNTAwMCk7XG4vLyB9KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdpbmRvd1snaGVsbG9zcGVjaWFsJ10pO1xuXG4vKipcbiAqIFRoZSBJdGVtIGNsYXNzIGRlZmF1bHQgb3B0aW9uc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gIC8qKiBAdHlwZSB7QXJyYXl9IERlZmF1bHQgc3RhdGVzICovXG4gIHN0YXRlczogZGVmYXVsdFN0YXRlcyxcbiAgLyoqIEB0eXBlIHtzdHJpbmd9IGF0dHJpYnV0ZSBuYW1lICovXG4gIGF0dHJTdGF0ZTogJ2RhdGEtc3RhdGUnLFxuICAvKiogQHR5cGUge3N0cmluZ30gYXR0cmlidXRlIG5hbWUgKi9cbiAgYXR0ckV4cGlyYXRpb246ICdkYXRhLWV4cGlyYXRpb24nLFxuICAvKiogQHR5cGUge2Z1bmN0aW9uKEl0ZW0pfSBDYWxsYmFjayBhdCB0aGUgZW5kIG9mIGVhY2ggc3RhdGUgKi9cbiAgb25TdGF0ZTogZnVuY3Rpb24gKCkge30sXG4gIC8qKiBAdHlwZSB7ZnVuY3Rpb24oSXRlbSwgTnVtYmVyKX0gQ2FsbGJhY2sgZWFjaCBzZWNvbmQgb2YgYSBzdGF0ZSBwcm9ncmVzc2lvbiAqL1xuICAvLyBvblNlY29uZDogZnVuY3Rpb24gKCkge30sXG4gIC8qKiBAdHlwZSB7ZnVuY3Rpb24oSXRlbSl9IENhbGxiYWNrIGF0IHRoZSBlbmQgb2YgdGhlIGxhc3Qgc3RhdGUgKi9cbiAgb25FbmQ6IGZ1bmN0aW9uICgpIHt9LFxuICAvKiogQHR5cGUge2Z1bmN0aW9uKEl0ZW0pfSBDYWxsYmFjayBhdCBiaWQgY2xpY2sgKi9cbiAgb25CaWQ6IGZ1bmN0aW9uICgpIHt9LFxufVxuXG4vKipcbiAqIFRoZSBJdGVtIGNsYXNzIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIG9uIGRvY3VtZW50IHJlYWR5IHdpdGggYW4gaWQgYW5kIGFcbiAqIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmNsYXNzIEl0ZW0ge1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdHMgQ29udGFpbnMgcHJvcGVydGllczpcbiAgICogICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHtzdHJpbmd9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW0nOiB7SFRNTGVsZW1lbnR9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogez9OdW1iZXJ9XG4gICAqIEByZXR1cm4ge0l0ZW19ICAgICAgICBUaGUgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZWxlbWAgcHJvcGVydHkgaXMgcmVxdWlyZWQgd2hlbiBpbnN0YW50aWF0ZSBhIG5ldyBJdGVtJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BpZGAgcHJvcGVydHkgaXMgcmVxdWlyZWQgd2hlbiBpbnN0YW50aWF0ZSBhIG5ldyBJdGVtJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtPYmplY3R9IEl0ZW0gZ2l2ZW4gb3B0cyAqL1xuICAgIHRoaXMub3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0cyk7XG5cbiAgICAvKiogQHR5cGUge0hUTUxlbGVtZW50fSBCYXNpYyBET00gY29udGFpbmVyIGZvciB0aGUgaXRlbSAqL1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0cy5lbGVtLmpxdWVyeSA/IG9wdHMuZWxlbVswXSA6IG9wdHMuZWxlbTtcblxuICAgIC8qKiBAdHlwZSB7alF1ZXJ5fSBCYXNpYyBET00gY29udGFpbmVyIGZvciB0aGUgaXRlbSAoalF1ZXJ5IHdyYXApICovXG4gICAgdGhpcy4kY29udGFpbmVyID0gb3B0cy5lbGVtLmpxdWVyeSA/IG9wdHMuZWxlbSA6ICQob3B0cy5lbGVtKTtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSBJdGVtIGlkICovXG4gICAgdGhpcy5pZCA9IG9wdHMuaWQgfHwgdGhpcy5jb250YWluZXIuaWQ7XG5cbiAgICAvKiogQHR5cGUge0FycmF5fSBDb250YWlucyB0aGUgcG9zc2libGUgc3RhdGVzIGZvciB0aGUgaXRlbSwgYXMgYW4gYXJyYXkgKi9cbiAgICB0aGlzLnN0YXRlcyA9IHRoaXMub3B0cy5zdGF0ZXM7XG5cbiAgICAvKiogQHR5cGUge09iamVjdH0gQ29udGFpbnMgdGhlIHBvc3NpYmxlIHN0YXRlcyBmb3IgdGhlIGl0ZW0sIGFzIGFuIG9iamVjdCAoaW5kZXhlZCBieSBpZCkgKi9cbiAgICB0aGlzLnN0YXRlc01hcCA9IHRoaXMuX2dldE9iakZyb21BcnJheSh0aGlzLm9wdHMuc3RhdGVzLCAnaWQnKTtcblxuICAgIC8qKiBAdHlwZSB7ZnVuY3Rpb24oKX0gSG9sZHMgdGhlIGludGVydmFsbGVkIHJlZmVyZW5jZSBmb3Igb25lIGN5Y2xlICovXG4gICAgdGhpcy5fY3ljbGUgPSBudWxsO1xuXG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9IElEIG9mIG9uZSBvZiB0aGUgZm91ciBzdGF0ZXMgKi9cbiAgICB0aGlzLl9pbml0aWFsU3RhdGVJZCA9IG9wdHMuc3RhdGUgfHwgdGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyU3RhdGUpO1xuXG4gICAgLy8gc2V0IERPTSByZWxhdGVkIHN0dWZmXG4gICAgdGhpcy5fYmluZFVJKCk7XG5cbiAgICAvLyBpZiAodGhpcy5faW5pdGlhbFN0YXRlSWQpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUodGhpcy5faW5pdGlhbFN0YXRlSWQpO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdJdGVtLT5jb25zdHJ1Y3RvcigpJywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICBfYmluZFVJICgpIHtcblxuICAgIC8qKiBAdHlwZSB7alF1ZXJ5fSBUaGUgJ0JpZWQnIGJ1dHRvbnMgKi9cbiAgICB0aGlzLl9fJGJpZCA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdbZGF0YS1iaWRdJyk7XG5cbiAgICAvKiogQHR5cGUge2pRdWVyeX0gKi9cbiAgICB0aGlzLl9fJHByaWNlID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ1tkYXRhLXByaWNlXScpO1xuXG4gICAgLyoqIEB0eXBlIHtqUXVlcnl9ICovXG4gICAgdGhpcy5fXyRiaWRkZXIgPSB0aGlzLiRjb250YWluZXIuZmluZCgnW2RhdGEtYmlkZGVyXScpO1xuXG4gICAgLyoqIEB0eXBlIHtqUXVlcnl9ICovXG4gICAgdGhpcy5fXyRzdGF0ZU1zZyA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdbZGF0YS1zdGF0ZS1tc2ddJyk7XG5cbiAgICAvKiogQHR5cGUge0hUTUxlbGVtZW50fSAqL1xuICAgIHRoaXMuX19iYXIgPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmFwcEl0ZW1fX3N0YXRlLWJhcicpWzBdO1xuXG4gICAgLy8gYmluZCBjbGljayBidXR0b25cbiAgICB0aGlzLl9fJGJpZC5vbignY2xpY2snLCB0aGlzLm9uQmlkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc3RhdGVcbiAgICogQHBhcmFtIHtTdGF0ZX0gc3RhdGVPYmplY3RcbiAgICovXG4gIGFkZFN0YXRlIChzdGF0ZU9iamVjdCkge1xuICAgIGxldCBzdGF0ZUlkID0gc3RhdGVPYmplY3QuaWQ7XG4gICAgdGhpcy5zdGF0ZXNNYXBbc3RhdGVJZF0gPSBzdGF0ZU9iamVjdDtcblxuICAgIC8vIGhlcmUgd2UgY291bGQgb3Igc2hvdWxkIG9yIHB1c2ggdGhlIG5ldyBzdGF0ZVxuICAgIC8vIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggaW4gdGhlIGFycmF5IGJ1dCBJIGRvbid0IHJlYWxseVxuICAgIC8vIHNlZSB0aGUgcG9pbnQgb2YgdGhpcyBhdCB0aGlzIHN0YWdlLiBXZSB1c2Ugc3RhdGUgaWRzXG4gICAgLy8gbm93IGFueXdheSB0byBjaGFuZ2UgdGhlIGl0ZW0gc3R5bGUgdGhyb3VnaCBjc3NcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlT2JqZWN0KTtcblxuICAgIHJldHVybiBzdGF0ZU9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3RhdGUgdXBkYXRpbmcgVUkgYW5kIHJ1bm5pbmcgdGhlIGFuaW1hdGlvblxuICAgKlxuICAgKiBJdCBqdXN0IHVwZGF0ZXMgdGhlIHN0YXRlIGFuaW1hdGlvbi9jb2xvciBhbmQgdGV4dCBtc2csXG4gICAqIGUuZy4gJ2JpZGRpbmcsIGdvaW5nIG9uY2UsIGdvaW5nIHR3aWNlLCBzb2xkJywgaXQgYWxzbyBhZGRzIGFuIGF0dHJcbiAgICogb24gdGhlIGl0ZW0gY29udGFpbmVyIHNvIHRoYXQgd2UgY2FuIHR3ZWFrIHRoZSBzdHlsZSBvZiBpdGVtXG4gICAqIGRpZmZlcmVudGx5IGZvciBlYWNoIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gez9OdW1iZXJ8U3RyaW5nfFN0YXRlfSBnaXZlblN0YXRlIFRoZSBzdGF0ZSBpbmRleCBgMCwxLDIsM2AsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgaWQgKGUuZy4gJ3ZlcmtvY2h0Jykgb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY3VzdG9tIG9iamVjdCAoc2VlIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRlZmF1bHRzLmpzIHRvIHNlZSB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmF0b215IG9mIGEgc3RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gez9OdW1iZXJ9ICAgICAgICAgICAgICAgZHVyYXRpb24gIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqIEBwYXJhbSB7P051bWJlcn0gICAgICAgICAgICAgICBzdGFydEZyb20gVGhlIHJlc3VtaW5nIHBvaW50IGluIHNlY29uZHNcbiAgICogQHJldHVybiB7SXRlbX0gICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgc2V0U3RhdGUgKGdpdmVuU3RhdGUsIGR1cmF0aW9uLCBzdGFydEZyb20pIHtcbiAgICAvLyBzZXQgY3VycmVudCBzdGF0ZVxuICAgIGlmICgkLmlzUGxhaW5PYmplY3QoZ2l2ZW5TdGF0ZSkpIHtcbiAgICAgIC8vIGlmIHdlIGFyZSByZXN1bWluZyBqdXN0IGFzc2lnbiB0aGUgZ2l2ZW4gc3RhdGVcbiAgICAgIGlmICgoZ2l2ZW5TdGF0ZS5zZWNvbmQgJiYgZ2l2ZW5TdGF0ZS5zZWNvbmQgPiAwKSB8fCBzdGFydEZyb20pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdpdmVuU3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlaXRoZXIgYnkgdXNpbmcgdGhlIGdpdmVuIG9iamVjdFxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5hZGRTdGF0ZShnaXZlblN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZXNbZ2l2ZW5TdGF0ZV0pIHtcbiAgICAgIC8vIG9yIGJ5IGdyYWJiaW5nIHRoZSBzdGF0ZSB3aXRoIGl0cyBpZHggdmFsdWVcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlc1tnaXZlblN0YXRlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZXNNYXBbZ2l2ZW5TdGF0ZV0pIHtcbiAgICAgIC8vIG9yIGJ5IGdyYWJiaW5nIHRoZSBzdGF0ZSB3aXRoIGl0cyBpZHggdmFsdWVcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlc01hcFtnaXZlblN0YXRlXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBvciBieSBncmFiYmluZyB0aGUgc3RhdGUgd2l0aCBpdHMgaWR4IHZhbHVlXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZXNNYXBbdGhpcy5faW5pdGlhbFN0YXRlSWRdO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gc2V0IGN1cnJldG4gc3RhdGUgc2Vjb25kXG4gICAgdGhpcy5zdGF0ZS5zZWNvbmQgPSBzdGFydEZyb20gfHwgMDtcblxuICAgIC8vIHNldCBjdXJyZW50IHN0YXRlIGR1cmF0aW9uXG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICB0aGlzLnN0YXRlLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuICAgIC8vIHNldCBjeWNsZSBkdXJhdGlvblxuICAgIHRoaXMuX2N5Y2xlRHVyYXRpb24gPSB0aGlzLnN0YXRlLmR1cmF0aW9uIC0gdGhpcy5zdGF0ZS5zZWNvbmQ7XG5cbiAgICAvLyBkaXNwbGF5IHN0YXRlIG1lc3NhZ2VcbiAgICB0aGlzLl9fJHN0YXRlTXNnLnRleHQodGhpcy5zdGF0ZS50ZXh0KTtcbiAgICAvLyBkaXNwbGF5IHN0YXRlIHN0eWxlIHRocm91Z2ggY3NzXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyU3RhdGUsIHRoaXMuc3RhdGUuaWQpO1xuXG4gICAgbGV0IHBhbGV0dGUgPSBkZWZhdWx0Q29sb3JzW3RoaXMuc3RhdGUuaWRdO1xuICAgIGlmIChwYWxldHRlKSB7XG4gICAgICB0aGlzLl9fYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhbGV0dGVbMF07XG4gICAgfVxuXG4gICAgLy8gLi4uIGFuZCBmaXJlcyB0aGUgYW5pbWF0aW9uXG4gICAgdGhpcy5fcnVuQW5pbWF0aW9uKCk7XG4gICAgLy8gc3RhcnQgdGhlIHRpbWVyLi4uXG4gICAgdGhpcy5fc3RhcnRDeWNsZSgpO1xuXG4gICAgLy8gY2FsbGJhY2tcbiAgICB0aGlzLm9wdHMub25TdGF0ZSh0aGlzKTtcbiAgICAvLyBjYWxsYmFjayBvbiBsYXN0IHN0YXRlICgndmVya29jaHQnKVxuICAgIGlmICh0aGlzLnN0YXRlLmlkID09PSAndmVya29jaHQnIHx8IHRoaXMuc3RhdGUuaXNMYXN0KSB7XG4gICAgICB0aGlzLm9wdHMub25FbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHN0YXRlXG4gICAqIEBwYXJhbSAge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgb2JqZWN0XG4gICAqIEByZXR1cm4ge0l0ZW19ICAgICAgICBUaGUgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgcmVzdW1lU3RhdGUgKHN0YXRlKSB7XG4gICAgLy8gY3JlYXRlIGEgbmV3IHN0YXRlIG9iamVjdCB0byBkb24ndCBpbnRlcmZlcmUgd2l0aCBvdGhlciBpdGVtc1xuICAgIC8vIHN0YXRlc1xuICAgIGxldCBuZXdTdGF0ZSA9ICQuZXh0ZW5kKHt9LCBzdGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSwgbnVsbCwgc3RhdGUuc2Vjb25kKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgRGF0YSBmcm9tIHNlcnZlciB0aGF0IG5lZWQgdG8gdXBkYXRlIHRoZSBVSVxuICAgKi9cbiAgc2V0RGF0YSAoZGF0YSkge1xuICAgIGlmIChkYXRhWydjdXJyZW50X3ByaWNlJ10pIHtcbiAgICAgIHRoaXMuX18kcHJpY2UudGV4dChkYXRhWydjdXJyZW50X3ByaWNlJ10pO1xuICAgIH1cbiAgICBpZiAoZGF0YVsnaGlnaGVzdF9iaWRkZXInXSkge1xuICAgICAgdGhpcy5fXyRiaWRkZXIudGV4dChkYXRhWydoaWdoZXN0X2JpZGRlciddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlciBoYXMgY2xpY2tlZCBiaWRcbiAgICovXG4gIG9uQmlkICgpIHtcbiAgICB0aGlzLm9wdHMub25CaWQodGhpcy5pdGVtKTtcbiAgICAvLyBjb25zb2xlLmxvZygnYmlkISBuZXdTZWNvbmRzOicsIG5ld1NlY29uZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJDeWNsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHNpbmdsZSBjeWNsZSB0aW1lclxuICAgKi9cbiAgX2NsZWFyQ3ljbGUgKCkge1xuICAgIGlmICh0aGlzLl9jeWNsZSkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY3ljbGUpO1xuICAgICAgdGhpcy5fY3ljbGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBzaW5nbGUgY3ljbGUgdGltZXJcbiAgICovXG4gIF9zdGFydEN5Y2xlICgpIHtcbiAgICB0aGlzLl9jbGVhckN5Y2xlKCk7XG4gICAgdGhpcy5fY3ljbGUgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fb25DeWNsZVRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2Vjb25kIHRpY2ssIGl0IHJ1bnMgZXZlcnkgc2Vjb25kIHVzaW5nIGBzZXRJbnRlcnZhbGAsIGl0XG4gICAqIGNvb3JkaW5hdGVzIHRoZSBhbmltYXRpb24gc3RhdGVzLlxuICAgKi9cbiAgX29uQ3ljbGVUaWNrICgpIHtcbiAgICAvLyBtYXliZSB0cmlnZ2VyIGV4cGlyYXRpb24gYmVoYXZpb3VyXG4gICAgdGhpcy5fbWF5YmVUcmlnZ2VyRXhwaXJhdGlvbigpO1xuXG4gICAgLy8gaW5jcmVtZW50IHNlY29uZFxuICAgIHRoaXMuc3RhdGUuc2Vjb25kKys7XG5cbiAgICAvLyBhcGkgY2FsbGJhY2tcbiAgICAvLyB0aGlzLm9wdHMub25TZWNvbmQodGhpcy5zdGF0ZS5zZWNvbmQsIHRoaXMuc3RhdGUsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2Vjb25kID49IHRoaXMuc3RhdGUuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuX2NsZWFyQ3ljbGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cGlyYXRpb24gYXR0cmlidXRlIHRvIHRyaWdnZXIgZnVydGhlciBhbmltYXRpb25zIHRocm91Z2ggY3NzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgZXhwaXJhdGlvbiBuYW1lIHRvIHNldCBvbiB0aGUgYXR0cmlidXRlXG4gICAqL1xuICBfdXBkYXRlVWlFeHBpcmF0aW9uIChuYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyRXhwaXJhdGlvbiwgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogTG9vcCB0aHJvdWdoIHRoZSBleHBpcmF0aW9uIGJyZWFrcG9pbnRzIG9mIHRoZSBnaXZlbiBzdGF0ZVxuICAgKiBhbmQgY2hlY2sgaWYgdGhlIGN1cnJlbnQgc2Vjb25kIGhhcyBwYXN0IHRoZSBleHBpcmF0aW9uIGJyZWFrcG9pbnRcbiAgICogKHdoaWNoIGlzIGRlZmluZWQgaW4gcGVyY2VudGFnZSBiZWNhdXNlIHRoZSBzdGF0ZSBkdXJhdGlvbiBpcyBkeW5hbWljLFxuICAgKiBzbyB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgYnJlYWtwb2ludCBpbiBzZWNvbmRzKS5cbiAgICovXG4gIF9tYXliZVRyaWdnZXJFeHBpcmF0aW9uICgpIHtcbiAgICBsZXQgZXhwaXJhdGlvbnMgPSB0aGlzLnN0YXRlLmV4cGlyYXRpb25zO1xuICAgIGlmICghZXhwaXJhdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBleHBpcmF0aW9ucyBhcnJheSBtdXN0IGJlIHNldCBpbiBvcmRlciBmcm9tIGxvd2VyIHRvIGhpZ2hlciBwZXJjZW50YWdlXG4gICAgZm9yIChsZXQgaSA9IGV4cGlyYXRpb25zLmxlbmd0aDsgaS0tOykge1xuICAgICAgbGV0IGV4cGlyYXRpb24gPSBleHBpcmF0aW9uc1tpXTtcbiAgICAgIGxldCBzZWNvbmRCcmVha3BvaW50ID0gKHRoaXMuc3RhdGUuZHVyYXRpb24gLyAxMDApICogZXhwaXJhdGlvbi5wZXJjZW50O1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWNvbmQgPiBzZWNvbmRCcmVha3BvaW50KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVVpRXhwaXJhdGlvbihleHBpcmF0aW9uLm5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG90aGVyd2lzZSByZXNldCB0aGUgZXhwaXJhdGlvbiBhdHRyaWJ1dGVcbiAgICB0aGlzLl91cGRhdGVVaUV4cGlyYXRpb24oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0IG1ha2VzIG9uZSBmdWxsIGxvb3Agd2l0aCB0aGUgZ2l2ZW4gZHVyYXRpb24gb3IgYnkgcmVhZGluZyB0aGUgY3VycmVudFxuICAgKiBzdGF0ZSBkdXJhdGlvblxuICAgKi9cbiAgX3J1bkFuaW1hdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gaW5pdCBhbmltYXRpb25cbiAgICB0aGlzLl9hbmltYXRpb24gPSBuZXcgU3ZnQmFyVGltZXIoe1xuICAgICAgZWxlbWVudDogdGhpcy5fX2JhcixcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnN0YXRlLmR1cmF0aW9uLCAvLyBzZWNvbmRzXG4gICAgICBzdGFydEZyb206IHRoaXMuc3RhdGUuc2Vjb25kIC8vIHNlY29uZHNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb2JqZWN0IGZyb20gYXJyYXlcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBUaGUgbG9va3VwIG9iamVjdFxuICAgKi9cbiAgX2dldE9iakZyb21BcnJheSAoYXJyYXksIHZhbHVlKSB7XG4gICAgbGV0IGxvb2t1cE9iamVjdCA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsb29rdXBPYmplY3RbYXJyYXlbaV1bdmFsdWVdXSA9IGFycmF5W2ldO1xuICAgIH1cbiAgICByZXR1cm4gbG9va3VwT2JqZWN0O1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ0l0ZW0nXSA9IEl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyc7XG5cbmNsYXNzIEl0ZW1EZXRhaWwge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgdGhpcy5fXyR0aHVtYnMgPSAkKCcjYXBwSXRlbURldGFpbF9fdGh1bWJzJyk7XG4gICAgdGhpcy5fXyRzbGlkZXIgPSAkKCcjYXBwSXRlbURldGFpbF9fc2xpZGVyJyk7XG5cbiAgICBpZiAoIXRoaXMuX18kdGh1bWJzLmxlbmd0aCB8fCAhdGhpcy5fXyRzbGlkZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbm8gc2xpZGVyIGlmIHRoZXJlIGlzIG9ubHkgb25lIGltYWdlXG4gICAgaWYgKHRoaXMuX18kc2xpZGVyLmZpbmQoJ2ltZycpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX18kc2xpZGVyLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBhc05hdkZvcjogdGhpcy5fXyR0aHVtYnNcbiAgICB9KTtcblxuICAgIHRoaXMuX18kdGh1bWJzLnNsaWNrKHtcbiAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhc05hdkZvcjogdGhpcy5fXyRzbGlkZXIsXG4gICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIC8vIHZlcnRpY2FsU3dpcGluZzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgdGh1bWJuYWlsIHNsaWRlc1xuICAgIHRoaXMuX18kdGh1bWJzLmZpbmQoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gZmlyc3QgdGh1bWJuYWlsIHNsaWRlc1xuICAgIHRoaXMuX18kdGh1bWJzLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKDApLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgIC8vIG9uIGJlZm9yZSBzbGlkZSBjaGFuZ2UgbWF0Y2ggYWN0aXZlIHRodW1ibmFpbCB0byBjdXJyZW50IHNsaWRlXG4gICAgdGhpcy5fXyRzbGlkZXIub24oJ2JlZm9yZUNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSA9PiB7XG4gICAgICBjb25zdCBteVNsaWRlTnVtYmVyID0gbmV4dFNsaWRlO1xuICAgICAgdGhpcy5fXyR0aHVtYnMuZmluZCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuICAgICAgdGhpcy5fXyR0aHVtYnMuZmluZCgnLnNsaWNrLXNsaWRlJykuZXEobXlTbGlkZU51bWJlcikuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59XG5cbmxldCBpdGVtRGV0YWlsID0gbmV3IEl0ZW1EZXRhaWwoKTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbURldGFpbDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5cbmNsYXNzIERlbW8ge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoYXBpLm9wdHNbJ2RlbW8nXSkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gIGluaXQgKCkge1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSBAQGRlbW9vbmx5IE1heCBzZWNvbmRzIGZvciB0b3RhbCBsb29wIG9mIGZvdXIgc3RhdGUgKi9cbiAgICB0aGlzLl9sb29wTWF4U2Vjb25kcyA9IDIwO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIHRoaXMuX2luaXRNb2RhbHMoKTtcbiAgICB0aGlzLl9pbml0SXRlbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGl0ZW1zXG4gICAqL1xuICBfaW5pdEl0ZW1zICgpIHtcbiAgICAkKCcuYXBwSXRlbScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKHtcbiAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICBlbGVtOiBlbGVtZW50LFxuICAgICAgICAvLyBzdGF0ZTogMyxcbiAgICAgICAgb25TdGF0ZTogdGhpcy5fc2V0TmV4dFN0YXRlLmJpbmQodGhpcyksXG4gICAgICAgIC8vIG9uRW5kOiB0aGlzLl9vbkVuZC5iaW5kKHRoaXMpLFxuICAgICAgfSk7XG4gICAgICBpdGVtLnNldFN0YXRlKHVuZGVmaW5lZCwgdGhpcy5fZ2V0QXZlcmFnZVN0YXRlRHVyYXRpb24oaXRlbSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhdmVyYWdlIHN0YXRlIGR1cmF0aW9uXG4gICAqXG4gICAqIER1cmF0aW9ucyBhcmUgY2FsY3VsYXRlZCBkeW5hbWljYWxseSBkaXZpZGluZyBlcXVhbGx5IHRoZSBtYXggdGltZSBieSB0aGVcbiAgICogbnVtYmVyIG9mIHN0YXRlc1xuICAgKlxuICAgKiBAcGFyYW0gIHtJdGVtfSAgIGl0ZW1cbiAgICogQHJldHVybiB7TnVtYmVyfSBEdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICBfZ2V0QXZlcmFnZVN0YXRlRHVyYXRpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fbG9vcE1heFNlY29uZHMgLyBpdGVtLnN0YXRlcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG5leHQgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtICB7SXRlbX0gICBpdGVtXG4gICAqL1xuICBfc2V0TmV4dFN0YXRlIChpdGVtKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXRlbS5pZCcsIGl0ZW0uc3RhdGUuaWQsICdpZHgnLCBpdGVtLnN0YXRlLmlkeClcbiAgICAgIGlmIChpdGVtLnN0YXRlLmlkeCA9PT0gaXRlbS5zdGF0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpdGVtLnNldFN0YXRlKDAsIHRoaXMuX2dldEF2ZXJhZ2VTdGF0ZUR1cmF0aW9uKGl0ZW0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uc2V0U3RhdGUoaXRlbS5zdGF0ZS5pZHggKyAxLCB0aGlzLl9nZXRBdmVyYWdlU3RhdGVEdXJhdGlvbihpdGVtKSk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5fZ2V0QXZlcmFnZVN0YXRlRHVyYXRpb24oaXRlbSkgKiAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHZhcmlvdXMgbW9kYWxzLCBlLmcuIHdpbm5pbmcgYmV0IG1vZGFsXG4gICAqL1xuICBfaW5pdE1vZGFscyAoKSB7XG4gICAgJCgnI2FwcFdpbk1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgfVxufVxuXG5sZXQgZGVtbyA9IG5ldyBEZW1vKCk7XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2RlbW8nXSA9IGRlbW87XG5cbmV4cG9ydCBkZWZhdWx0IGRlbW87XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIE5hc2sge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLiRvbkluaXQoKTtcblxuICAgIC8vIGJvb3RzdHJhcFxuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gdHJ5IHRvIGltbWVkaWF0ZWx5IGhpZGUgdGhlIGNvbnRhaW5lciB0byBkb24ndCBjYXVzZSBhIGZsYXNoIG9mIFwidW5zdHlsZWRcIiBjb250ZW50XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXNrJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udGFpbmVyc1tpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHt9XG5cbiAgICB0aGlzLl9icm93c2VyID0gdGhpcy5fZ2V0QnJvd3NlcigpO1xuICAgIHRoaXMuX21vYmlsZU9TID0gdGhpcy5fZ2V0TW9iaWxlT1MoKTtcbiAgICB0aGlzLl9wZXJtaXNzaW9uID0gdGhpcy5fZ2V0UGVybWlzc2lvbigpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYE5hc2stPiRvbkluaXQ6IG1vYmlsZSBvcyBpcyAke3RoaXMuX21vYmlsZU9TfSBicm93c2VyIGRldGVjdGVkIGlzICR7dGhpcy5fYnJvd3Nlcn0sIHBlcm1pc3Npb24gaXMgJHt0aGlzLl9wZXJtaXNzaW9ufWApO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgY29uc3QgJGNvbnRhaW5lciA9ICQoJy5uYXNrJyk7XG5cbiAgICBpZiAoISRjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fXyRjb250YWluZXIgPSAkY29udGFpbmVyO1xuXG4gICAgY29uc3QgdmlldyA9IHRoaXMuX2dldFZpZXdOYW1lKCk7XG4gICAgdGhpcy5zZXRWaWV3KHZpZXcpO1xuXG4gICAgaWYgKHZpZXcgPT09ICdyZXF1ZXN0JyB8fCB2aWV3ID09PSAncmVxdWVzdC1tb2JpbGUnKSB7XG4gICAgICB0aGlzLmFzaygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RW52KHRoaXMuX2dldEVudk5hbWUoKSk7XG5cbiAgICB0aGlzLl9fJGNvbnRhaW5lci5hZGRDbGFzcygnbmFzay0tcmVhZHknKS5jc3MoJ29wYWNpdHknLCAxKTtcblxuICAgIC8vIEBAZGlzYWJsZWQgZm9yIG5vdywgYmVjYXVzZSBpdCB3b3VsZG4ndCB3b3JrIGFueXdheS4uLlxuICAgIC8vIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxODY4NzA4LzE5Mzg5NzBcbiAgICAvLyAkY29udGFpbmVyLmZpbmQoJy5uYXNrX19hc2tidXR0b24nKS5jbGljaygoKSA9PiB7XG4gICAgLy8gICB0aGlzLmFzaygpXG4gICAgLy8gfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJyb3dzZXJcbiAgICpcbiAgICogYmFzZWQgb24gQGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzk4NTE3NjkvMTkzODk3MFxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBfZ2V0QnJvd3NlciAoKSB7XG4gICAgLy8gT3BlcmEgOC4wK1xuICAgIGlmICgoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApIHtcbiAgICAgIHJldHVybiAnb3BlcmEnO1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3ggMS4wK1xuICAgIGlmICh0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xuICAgIH1cblxuICAgIC8vIFNhZmFyaSAzLjArIFwiW29iamVjdCBIVE1MRWxlbWVudENvbnN0cnVjdG9yXVwiXG4gICAgaWYgKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjsgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgKHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSkpIHtcbiAgICAgIHJldHVybiAnc2FmYXJpJztcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXG4gICAgaWYgKC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG4gICAgICByZXR1cm4gJ2llJztcbiAgICB9XG5cbiAgICAvLyBFZGdlIDIwK1xuICAgIGlmICghIXdpbmRvdy5TdHlsZU1lZGlhKSB7XG4gICAgICByZXR1cm4gJ2VkZ2UnO1xuICAgIH1cblxuICAgIC8vIENocm9tZSAxK1xuICAgIGlmICghIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKSB7XG4gICAgICByZXR1cm4gJ2Nocm9tZSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgbW9iaWxlIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgJ2lvcycsICdBbmRyb2lkJywgJ1dpbmRvd3MgUGhvbmUnLCBvciBmYWxzZS5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxNzQyMTA3LzE5Mzg5NzBcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ3xib29sZWFufSAnd2luZG93c3xhbmRyb2lkfGlvc3xmYWxzZSdcbiAgICovXG4gIF9nZXRNb2JpbGVPUyAoKSB7XG4gICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG5cbiAgICAvLyBXaW5kb3dzIFBob25lIG11c3QgY29tZSBmaXJzdCBiZWNhdXNlIGl0cyBVQSBhbHNvIGNvbnRhaW5zIFwiQW5kcm9pZFwiXG4gICAgaWYgKC93aW5kb3dzIHBob25lL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICByZXR1cm4gJ3dpbmRvd3MnO1xuICAgIH1cblxuICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICB9XG5cbiAgICAvLyBpT1MgZGV0ZWN0aW9uIGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzkwMzk4ODUvMTc3NzEwXG4gICAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xuICAgICAgcmV0dXJuICdpb3MnO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpY2F0aW9ucyBwZXJtaXNzaW9uc1xuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICdkZW5pZWR8Z3JhbnRlZHxkZWZhdWx0fHVuc3VwcG9ydGVkJ1xuICAgKi9cbiAgX2dldFBlcm1pc3Npb24gKCkge1xuICAgIGlmIChOb3RpZmljYXRpb24gJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pIHtcbiAgICAgIHJldHVybiBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuICd1bnN1cHBvcnRlZCc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHZpZXcgbmFtZVxuICAgKlxuICAgKiBWaWV3czpcbiAgICogJ2dyYW50ZWQnOiBOb3RpZmljYXRpb24gYXJlIGdyYW50ZWQgYWxyZWFkeSwgd2UgZG9uJ3QgYXNrIGFueXRoaW5nXG4gICAqICdyZXF1ZXN0JzogT24gQW5kcm9pZCBub3RpZmljYXRpb25zIGFyZSBkZW5pZWQgYnkgdGhlIHVzZXIsIHdlIGFzayB0byBlbmFibGUgdGhlbVxuICAgKiAncmVxdWVzdC1tb2JpbGUnOiBPbiBBbmRyb2lkIG5vdGlmaWNhdGlvbnMgYXJlIGRlbmllZCBieSB0aGUgdXNlciwgd2UgYXNrIHRvIGVuYWJsZSB0aGVtXG4gICAqICdhbGxvd2luZyc6IE9uIGRlc2t0b3Agbm90aWZpY2F0aW9ucyBhcmUgZGVuaWVkIGJ5IHRoZSB1c2VyLCB0aGUgYWxsb3cgYm94IGlzIG9wZW5lZFxuICAgKiAnYWxsb3dpbmctbW9iaWxlJzogT24gQW5kcm9pZCBub3RpZmljYXRpb25zIGFyZSBkZW5pZWQgYnkgdGhlIHVzZXIsIHRoZSBhbGxvdyBib3ggaXMgb3BlbmVkXG4gICAqICd0aGFua3MnOiBPbiBkZXNrdG9wIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIGhhcyBqdXN0IGJlZW4gZ3JhbnRlZCBieSB0aGUgdXNlclxuICAgKiAndGhhbmtzLW1vYmlsZSc6IE9uIEFuZHJvaWQgbm90aWZpY2F0aW9uIHBlcm1pc3Npb24gaGFzIGp1c3QgYmVlbiBncmFudGVkIGJ5IHRoZSB1c2VyXG4gICAqICdvdGhlcic6IERlc2t0b3AgYnJvd3NlciBvdGhlciB0aGFuIENocm9tZS4gRmlyZWZveCwgT3BlcmEsIG5vIG5vdGlmaWNhdGlvbnMgc3lzdGVtXG4gICAqICdvdGhlci1tb2JpbGUnOiBNb2JpbGUgYnJvd3NlciBvdGhlciB0aGFuIEFuZHJvaWQsIG5vIG5vdGlmaWNhdGlvbnMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSAgez9TdHJpbmd9IHZpZXdGYW1pbHlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgIF9nZXRWaWV3TmFtZSAodmlld0ZhbWlseSkge1xuICAgIGlmICh2aWV3RmFtaWx5ID09PSAnYWxsb3dpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPyAnYWxsb3dpbmctbW9iaWxlJyA6ICdhbGxvd2luZyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZpZXdGYW1pbHkgPT09ICd0aGFua3MnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPyAndGhhbmtzLW1vYmlsZScgOiAndGhhbmtzJztcbiAgICB9XG5cbiAgICAvLyBpZiAoWydjaHJvbWUnLCAnZmlyZWZveCcsICdvcGVyYSddLmluZGV4T2YodGhpcy5fYnJvd3NlcikgPT09IC0xKSB7XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb24gPT09ICd1bnN1cHBvcnRlZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2JpbGVPUyA/ICdvdGhlci1tb2JpbGUnIDogJ290aGVyJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fcGVybWlzc2lvbiA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPyAncmVxdWVzdC1tb2JpbGUnIDogJ3JlcXVlc3QnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl9wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ3JlcXVlc3QtbW9iaWxlJyA6ICdyZXF1ZXN0JztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fcGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICByZXR1cm4gJ2dyYW50ZWQnO1xuICAgIH1cblxuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVudiBuYW1lXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIF9nZXRFbnZOYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPT09ICdhbmRyb2lkJyA/ICdhbmRyb2lkJyA6IHRoaXMuX2Jyb3dzZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZpZXcgb24gdGhlIFVJXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZpZXdcbiAgICovXG4gIHNldFZpZXcgKHZpZXcpIHtcbiAgICB0aGlzLl9fJGNvbnRhaW5lci5hdHRyKCdkYXRhLW5hc2stdmlldy1pcycsIHZpZXcpO1xuICAgIGNvbnNvbGUubG9nKGBOYXNrOiBzZXQgdmlldyBuYW1lIHRvIFwiJHt2aWV3fVwiYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGVudmlyb25tZW50IG9uIHRoZSBVSVxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnZcbiAgICovXG4gIHNldEVudiAoZW52KSB7XG4gICAgdGhpcy5fXyRjb250YWluZXIuYXR0cignZGF0YS1uYXNrLWVudi1pcycsIGVudik7XG4gICAgY29uc29sZS5sb2coYE5hc2s6IHNldCBlbnYgdG8gXCIke2Vudn1cImApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzayBmb3IgcGVybWlzc2lvblxuICAgKlxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgYXNrIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnKSB7XG4gICAgICBjb25zb2xlLmxvZyhgTmFzazogTm90aWZpY2F0aW9uIGFyZSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBOYXNrOiBhc2tpbmcgZm9yIHBlcm1pc3Npb25gKTtcblxuICAgIHRoaXMuc2V0Vmlldyh0aGlzLl9nZXRWaWV3TmFtZSgnYWxsb3dpbmcnKSk7XG5cbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKHBlcm1pc3Npb24pID0+IHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhwZXJtaXNzaW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgICAvLyBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdUaGFua3MnKTtcbiAgICAgICAgdGhpcy5zZXRWaWV3KHRoaXMuX2dldFZpZXdOYW1lKCd0aGFua3MnKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICB0aGlzLnNldFZpZXcodGhpcy5fZ2V0Vmlld05hbWUoJ3JlcXVlc3QnKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWyduYXNrJ10gPSBuZXcgTmFzaygpO1xuXG5leHBvcnQgZGVmYXVsdCBOYXNrO1xuIiwiY29uc3QgYSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5jb25zdCBwID0gbmF2aWdhdG9yLnBsYXRmb3JtO1xuXG5jb25zdCBicm93c2VycyA9IHtcbiAgJ3NhZmFyaSc6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cuSFRNTEVsZW1lbnQpLmluZGV4T2YoJ0NvbnN0cnVjdG9yJykgPiAwLFxuICAvLyAnY2hyb21lJzogISF3aW5kb3cuY2hyb21lICYmICFvcGVyYSxcbiAgJ2llJzogLypAY2Nfb24hQCovZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUsXG4gIC8vICdtYWMnOiBwLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMCxcbiAgLy8gJ21hY0xpa2UnOiBwLm1hdGNoKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICAnaW9zJzogcC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWQpL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICAvLyAnd2luZG93cyc6IHAudG9VcHBlckNhc2UoKS5pbmRleE9mKCdXSU4nKSE9PS0xLFxuICAvLyAnbGludXgnOiBwLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTElOVVgnKSE9PS0xLFxuICAvLyAnYW5kcm9pZCc6IC9BbmRyb2lkL2kudGVzdChhKSxcbiAgLy8gJ2JsYWNrQmVycnknOiAvQmxhY2tCZXJyeS9pLnRlc3QoYSksXG4gIC8vICdpb3MnOiAvaVBob25lfGlQYWR8aVBvZC9pLnRlc3QoYSksXG59O1xuXG5jb25zdCAkID0gd2luZG93LmpRdWVyeTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgJGh0bWwgPSAkKCdodG1sJyk7XG4gIGZvciAobmFtZSBpbiBicm93c2Vycykge1xuICAgIGxldCBpc0l0ID0gISFicm93c2Vyc1tuYW1lXTtcbiAgICAvLyBicm93c2Vyc1ticm93c2VyXTtcbiAgICAkaHRtbC50b2dnbGVDbGFzcyhuYW1lLCBpc0l0KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJzOyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY2xhc3MgQ2hlY2tvdXQge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBib290c3RyYXBcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICAgIHRoaXMuX2JyZWFrcG9pbnRNb2JpbGUgPSA2MDA7XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXBwLmpzIGRvY3VtZW50IGlzIHJlYWR5Jyk7XG4gICAgdGhpcy5fXyR3cmFwcGVyID0gJCgnI2FwcENoZWNrb3V0Jyk7XG5cbiAgICAvLyBiYWlsIGlmIHdlIGFyZSBub3Qgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgICBpZiAoIXRoaXMuX18kd3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fJGZvcm0gPSAkKCcjYXBwQ2hlY2tvdXRfX2Zvcm0nKTtcbiAgICB0aGlzLl9fJHdyYXBwZXJMZWZ0ID0gJCgnLmFwcENoZWNrb3V0X19tYWluLWxlZnQnKTtcbiAgICB0aGlzLl9fJGJyZWFkY3J1bWJzID0gJCgnLmFwcENoZWNrb3V0X19icmVhZGNydW1iJyk7XG5cbiAgICB0aGlzLl9fJGNvdXBvbkFyZWEgPSAkKCcuYXBwQ2hlY2tvdXRfX2NvdXBvbi1hcmVhJyk7XG4gICAgdGhpcy5fXyRjb3Vwb25UcmlnZ2VyID0gJCgnLmFwcENoZWNrb3V0X19jb3Vwb24tdHJpZ2dlcicpO1xuICAgIHRoaXMuX18kY291cG9uSW5wdXQgPSAkKCcuYXBwQ2hlY2tvdXRfX2NvdXBvbi1pbnB1dCcpO1xuICAgIHRoaXMuX18kY291cG9uU3VibWl0ID0gJCgnLmFwcENoZWNrb3V0X19jb3Vwb24tc3VibWl0Jyk7XG4gICAgdGhpcy5fXyRjb3Vwb25GZWVkYmFjayA9ICQoJy5hcHBDaGVja291dF9fY291cG9uLWZlZWRiYWNrJyk7XG5cbiAgICB0aGlzLl9fJGFkZHJlc3NQcmVmaWxsZWQgPSAkKCcjYXBwQWRkcmVzc19fcHJlZmlsbGVkJyk7XG4gICAgdGhpcy5fXyRpbnB1dFZvb3JuYW0gPSAkKCcjdm9vcm5hYW0nKTtcbiAgICB0aGlzLl9fJGlucHV0QWNodGVybmFhbSA9ICQoJyNhY2h0ZXJuYWFtJyk7XG4gICAgdGhpcy5fXyRpbnB1dFN0cmFhdCA9ICQoJyNzdHJhYXQnKTtcbiAgICB0aGlzLl9fJGlucHV0SHVpc251bW1lciA9ICQoJyNodWlzbnVtbWVyJyk7XG4gICAgdGhpcy5fXyRpbnB1dFBvc3Rjb2RlID0gJCgnI3Bvc3Rjb2RlJyk7XG4gICAgdGhpcy5fXyRpbnB1dFdvb25wbGFhdHMgPSAkKCcjd29vbnBsYWF0cycpO1xuICAgIHRoaXMuX18kaW5wdXRMYW5kID0gJCgnI2xhbmQnKTtcbiAgICB0aGlzLl9fJGFkZHJlc3NEaXNwbGF5ID0gJCgnI2FwcEFkZHJlc3NfX2Rpc3BsYXknKTtcblxuICAgIHRoaXMuX18kY29zdFdpbmJlZHJhZyA9ICQoJy5hcHBDaGVja291dF9fY29zdC13aW5iZWRyYWcnKTtcbiAgICB0aGlzLl9fJGNvc3RXaW5iZWRyYWdEZWwgPSAkKCcuYXBwQ2hlY2tvdXRfX2Nvc3Qtd2luYmVkcmFnLS1kZWwnKTtcbiAgICB0aGlzLl9fJGNvc3RWZXJ6ZW5ka29zdGVuID0gJCgnLmFwcENoZWNrb3V0X19jb3N0LXZlcnplbmRrb3N0ZW4nKTtcbiAgICB0aGlzLl9fJGNvc3RWZWlsaW5na29zdGVuID0gJCgnLmFwcENoZWNrb3V0X19jb3N0LXZlaWxpbmdrb3N0ZW4nKTtcbiAgICB0aGlzLl9fJGNvc3RUb3RhYWwgPSAkKCcuYXBwQ2hlY2tvdXRfX2Nvc3QtdG90YWFsJyk7XG5cbiAgICB0aGlzLl9fJGV4cGFuZGVyID0gJCgnLmFwcENoZWNrb3V0X19leHBhbmRlcicpO1xuICAgIHRoaXMuX18kc3RlcDAgPSAkKCcjYXBwQ2hlY2tvdXRfX3N0ZXAtMCcpO1xuICAgIHRoaXMuX18kc3RlcDEgPSAkKCcjYXBwQ2hlY2tvdXRfX3N0ZXAtMScpO1xuICAgIHRoaXMuX18kYnRuVG9TdGVwMSA9ICQoJy5hcHBDaGVja291dF9fdG9zdGVwMScpO1xuICAgIHRoaXMuX18kYnRuVG9TdGVwMiA9ICQoJy5hcHBDaGVja291dF9fdG9zdGVwMicpO1xuICAgIHRoaXMuX18kc3VtbWFyeSA9ICQoJy5hcHBDaGVja291dF9fbWFpbi1zdW1tYXJ5Jyk7XG5cbiAgICB0aGlzLl9fJHBheW1lbnRNZXRob2RzID0gJCgnaW5wdXRbbmFtZT1cInBheS1tZXRob2RcIl0nKTtcbiAgICB0aGlzLl9fJHBheW1lbnRCYW5rcyA9ICQoJ2lucHV0W25hbWU9XCJwYXktYmFua1wiXScpO1xuICAgIHRoaXMuX18kbWV0aG9kSWRlYWwgPSAkKCcuYXBwQ2hlY2tvdXRfX21ldGhvZC0taWRlYWwnKTtcbiAgICB0aGlzLl9fJGJhbmtTZWxlY3RvciA9ICQoJy5hcHBDaGVja291dF9fYmFua3MnKTtcbiAgICB0aGlzLl9fJGJ0blN1Ym1pdCA9ICQoJy5hcHBDaGVja291dF9fc3VibWl0Jyk7XG5cbiAgICB0aGlzLl9fJGRldGFpbHMgPSAkKCcuYXBwQ2hlY2tvdXRfX2RldGFpbHMnKTtcblxuICAgIC8vIGFuaW1hdGUgc3RlcHMgQEBkaXNhYmxlZFxuICAgIC8vIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuX18kc3RlcDAub3V0ZXJIZWlnaHQoKSAqIDEuNTtcbiAgICAvLyB0aGlzLl9fJHdyYXBwZXIuY3NzKCdtaW4taGVpZ2h0JywgbWluSGVpZ2h0KTtcbiAgICAvLyB0aGlzLl9fJHdyYXBwZXJMZWZ0LmNzcygnbWluLWhlaWdodCcsIG1pbkhlaWdodCk7XG5cbiAgICB0aGlzLm1hbmFnZVZhbGlkYXRpb24oKTtcblxuICAgIHRoaXMuX2JpbmRVSSgpO1xuXG4gICAgLy8gc3RhcnQgYnkgc3RlcCAwIG9uIGxvYWRcbiAgICB0aGlzLmdvVG9TdGVwKDApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSBmb3JtIHZhbGlkYXRpb25cbiAgICpcbiAgICogQHNlZSBvcHRpb25zIGhlcmUgaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy92YWxpZGF0ZS9cbiAgICogQEB0b2RvIHBlcmhhcHMgdXNlIHRoaXMgdG8gc3R5bGUgdGhlIHZhbGlkYXRvciBvbiB0aGUgYWxsXG4gICAqIHdlYnNpdGU6IGAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7fSlgXG4gICAqL1xuICBtYW5hZ2VWYWxpZGF0aW9uICgpIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uID0gdGhpcy5fXyRmb3JtLnZhbGlkYXRlKHtcbiAgICAgIC8vIHN1Ym1pdEhhbmRsZXI6ICgpID0+IHtcbiAgICAgIC8vICAgdGhpcy5nb1RvU3RlcCgxKTtcbiAgICAgIC8vIH0sXG4gICAgICBlcnJvckNsYXNzOiAnaGFzLWRhbmdlcicsXG4gICAgICB2YWxpZENsYXNzOiAnaGFzLXN1Y2Nlc3MnLFxuICAgICAgLy8gZXJyb3JFbGVtZW50OiAnPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1mZWVkYmFja1wiPicsXG4gICAgICAvLyBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MsIHZhbGlkQ2xhc3MpIHtcbiAgICAgIC8vICAgJChlbGVtZW50KS5wYXJlbnQoKS5hZGRDbGFzcyhlcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh2YWxpZENsYXNzKTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xuICAgICAgLy8gICAkKGVsZW1lbnQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpLmFkZENsYXNzKHZhbGlkQ2xhc3MpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX3ZhbGlkYXRpb24pXG4gIH1cblxuICAvKipcbiAgICogQmluZCBVSVxuICAgKi9cbiAgX2JpbmRVSSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBicmVhYWRjcnVtYnNcbiAgICBzZWxmLl9fJGJyZWFkY3J1bWJzLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9ICQoZWwpLmluZGV4KCk7XG4gICAgICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICAgICAgaWYgKHNlbGYuX18kZm9ybS52YWxpZCgpKSB7XG4gICAgICAgICAgICBzZWxmLmdvVG9TdGVwKHN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmdvVG9TdGVwKHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNvdXBvbiBhcmVhXG4gICAgc2VsZi5fXyRjb3Vwb25BcmVhLmhpZGUoKTtcbiAgICBzZWxmLl9fJGNvdXBvbkZlZWRiYWNrLmhpZGUoKTtcbiAgICBzZWxmLl9fJGNvdXBvblN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIHNlbGYuX18kY291cG9uVHJpZ2dlci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgc2VsZi5fXyRjb3Vwb25UcmlnZ2VyLnNsaWRlVXAoMTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX18kY291cG9uQXJlYS5zbGlkZURvd24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNlbGYuX18kY291cG9uSW5wdXQub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgc2VsZi5fXyRjb3Vwb25TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9fJGNvdXBvblN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYuX18kY291cG9uU3VibWl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX18kY291cG9uRmVlZGJhY2suc2xpZGVEb3duKCk7XG4gICAgICBzZWxmLmFwcGx5Q291cG9uKHNlbGYuX18kY291cG9uRmVlZGJhY2suZGF0YSgnZGlzY291bnQnKSk7XG4gICAgICBzZWxmLl9fJGNvdXBvblN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgc2VsZi5fXyRjb3Vwb25JbnB1dC5vZmYoJ2lucHV0Jyk7XG4gICAgfSk7XG5cbiAgICAvLyBtb2JpbGUgZXhwYW5kZXJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBzZWxmLl9icmVha3BvaW50TW9iaWxlKSB7XG4gICAgICBzZWxmLl9fJHN1bW1hcnkuaGlkZSgpO1xuICAgICAgc2VsZi5fXyRleHBhbmRlci5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKS5zaG93KCk7XG4gICAgfVxuICAgIHNlbGYuX18kZXhwYW5kZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fXyRzdW1tYXJ5LnNsaWRlVG9nZ2xlKCk7XG4gICAgICBzZWxmLl9fJGV4cGFuZGVyLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkcmVzcyBjaG9pY2VcbiAgICBzZWxmLl9fJGRldGFpbHMuaGlkZSgpO1xuICAgIGlmICghISQoJ2lucHV0W25hbWU9XCJhZGRyZXNzY2hvaWNlXCJdOmNoZWNrZWQnKS52YWwoKSkge1xuICAgICAgc2VsZi5fXyRkZXRhaWxzLnNsaWRlRG93bigpO1xuICAgIH1cbiAgICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc2Nob2ljZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9fJGRldGFpbHMuc2xpZGVUb2dnbGUoISF0aGlzLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIHRvIHN0ZXAxXG4gICAgc2VsZi5fXyRidG5Ub1N0ZXAxLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZWxmLmdvVG9TdGVwKDApO1xuICAgIH0pO1xuXG4gICAgLy8gdG8gc3RlcDJcbiAgICBzZWxmLl9fJGJ0blRvU3RlcDIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChzZWxmLl9fJGZvcm0udmFsaWQoKSkge1xuICAgICAgICBzZWxmLmdvVG9TdGVwKDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcGF5bWVudCBtZXRob2RcbiAgICBzZWxmLl9fJGJhbmtTZWxlY3Rvci5oaWRlKCk7XG4gICAgc2VsZi5fXyRidG5TdWJtaXQuaGlkZSgpO1xuICAgIHNlbGYuX18kcGF5bWVudE1ldGhvZHMub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnaWRlYWwnKSB7XG4gICAgICAgIHNlbGYuX21heWJlU2hvd1N1Ym1pdEJ0bihzZWxmLl9pc0JhbmtTZWxlY3RlZCk7XG4gICAgICAgIHNlbGYuX18kYmFua1NlbGVjdG9yLnNsaWRlRG93bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fXyRidG5TdWJtaXQuc2xpZGVEb3duKCk7XG4gICAgICAgIHNlbGYuX18kYmFua1NlbGVjdG9yLnNsaWRlVXAoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGJhbmsgc2VsZWN0aW9uXG4gICAgc2VsZi5fXyRwYXltZW50QmFua3Mub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2lzQmFua1NlbGVjdGVkID0gISF0aGlzLnZhbHVlOyAvLyBtYWtlIGl0IGEgYm9vbGVhblxuICAgICAgc2VsZi5fbWF5YmVTaG93U3VibWl0QnRuKCEhdGhpcy52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWF5YmUgc2hvdyB0aGUgc3VibWl0IGJ1dHRvblxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG93SXRcbiAgICovXG4gIF9tYXliZVNob3dTdWJtaXRCdG4gKHNob3dJdCkge1xuICAgIGlmIChzaG93SXQpIHtcbiAgICAgIHRoaXMuX18kYnRuU3VibWl0LnNsaWRlRG93bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fJGJ0blN1Ym1pdC5zbGlkZVVwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIHRvIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGVwIGUuZy4gMCwgMSwgMiwgZXRjLlxuICAgKi9cbiAgZ29Ub1N0ZXAgKHN0ZXApIHtcbiAgICAvLyBmaXJzdCByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYnJlYWRjcnVtYnNcbiAgICB0aGlzLl9fJGJyZWFkY3J1bWJzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIC8vIGFkZCB0aGUgYWN0aXZlIGNsYXNzXG4gICAgdGhpcy5fXyRicmVhZGNydW1icy5maWx0ZXIoKGluZGV4LCBlbGVtKSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IHN0ZXApIHtcbiAgICAgICAgLy8gaGlnaGxpZ2h0IGN1cnJlbnQgYnJlYWRjcnVtYlxuICAgICAgICAkKGVsZW0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAvLyB1c2VmdWwgZm9yIGdsb2JhbCBzdHlsaW5nIGFuZCBoaWRpbmcvc2hvd2luZyBiYXNlZCBvbiBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy5fXyR3cmFwcGVyLmF0dHIoJ2RhdGEtc3RlcCcsIHN0ZXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgIHRoaXMubWFuYWdlQWRkcmVzcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb3Vwb25cbiAgICogQHBhcmFtICB7TnVtYmVyfSBkaXNjb3VudCBUaGUgYW1vdW50IG9mIGRpc2NvdW50IGluIGNhc2hcbiAgICovXG4gIGFwcGx5Q291cG9uIChkaXNjb3VudCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IHRoaXMuX18kY29zdFdpbmJlZHJhZy5kYXRhKCd2YWwnKTtcbiAgICBjb25zdCBuZXdQcmljZSA9IHBhcnNlRmxvYXQoY3VycmVudFByaWNlKSAtIHBhcnNlRmxvYXQoZGlzY291bnQpO1xuXG4gICAgLy8gZmlsbCBkZWxldGVkIHByaWNlXG4gICAgdGhpcy5fXyRjb3N0V2luYmVkcmFnRGVsLmh0bWwodGhpcy5mb3JtYXRQcmljZShjdXJyZW50UHJpY2UpKTtcblxuICAgIC8vIHVwZGF0ZSB3aW5iZWRyYWcgcHJpY2UgKGFsc28gaXQncyBkYXRhIHJhdyBudW1iZXIgdmFsdWUpXG4gICAgdGhpcy5fXyRjb3N0V2luYmVkcmFnLmh0bWwodGhpcy5mb3JtYXRQcmljZShuZXdQcmljZSkpLmRhdGEoJ3ZhbCcsIG5ld1ByaWNlKTtcblxuICAgIC8vIHVwZGF0ZSB0b3RhYWwgcHJpY2VcbiAgICB0aGlzLl9fJGNvc3RUb3RhYWwuaHRtbCh0aGlzLmZvcm1hdFByaWNlKHRoaXMuZ2V0VG90YWxQcmljZSgpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvdGFsIHByaWNlIGJ5IHN1bW1pbmcgdmFsdWVzIG9uIHRoZSBET01cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgZ2V0VG90YWxQcmljZSAoKSB7XG4gICAgY29uc3QgYSA9IHRoaXMuZ2V0UHJpY2VGcm9tKHRoaXMuX18kY29zdFdpbmJlZHJhZyk7XG4gICAgY29uc3QgYiA9IHRoaXMuZ2V0UHJpY2VGcm9tKHRoaXMuX18kY29zdFZlcnplbmRrb3N0ZW4pO1xuICAgIGNvbnN0IGMgPSB0aGlzLmdldFByaWNlRnJvbSh0aGlzLl9fJGNvc3RWZWlsaW5na29zdGVuKTtcbiAgICByZXR1cm4gYSArIGIgKyBjO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwcmljZSBmcm9tIGpRdWVyeSBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtqUXVlcnl9ICRlbGVtXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGdldFByaWNlRnJvbSAoJGVsZW0pIHtcbiAgICBsZXQgYXNTdHJpbmc7XG4gICAgbGV0IHZhbCA9ICRlbGVtLmRhdGEoJ3ZhbCcpLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodmFsKSB7XG4gICAgICBhc1N0cmluZyA9IHZhbC5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNTdHJpbmcgPSAnMCc7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KGFzU3RyaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgemVyb2VzXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQwMzk0NDgvMTkzODk3MFxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZm9ybWF0UHJpY2UgKHZhbHVlKSB7XG4gICAgY29uc3QgYXNOdW1iZXIgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAvLyByZXBsYWNlIGRvdCB3aXRoIGNvbW1hIGFzIGluIGRlc2lnblxuICAgIGNvbnN0IHByaWNlID0gYXNOdW1iZXIudG9GaXhlZCgyKS5yZXBsYWNlKCcuJywgJywnKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW5jeSgpICsgJyAnICsgcHJpY2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbmN5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGdldEN1cnJlbmN5ICgpIHtcbiAgICByZXR1cm4gJ+KCrCc7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlIGFkZHJlc3NcbiAgICovXG4gIG1hbmFnZUFkZHJlc3MgKCkge1xuICAgIGxldCBwcmVmaWxsZWRBZGRyZXNzO1xuXG4gICAgaWYgKCEkKCdpbnB1dFtuYW1lPWFkZHJlc3NjaG9pY2VdOmNoZWNrZWQnKS52YWwoKSAmJiB0aGlzLl9fJGFkZHJlc3NQcmVmaWxsZWQuaHRtbCgpKSB7XG4gICAgICBwcmVmaWxsZWRBZGRyZXNzID0gdGhpcy5fXyRhZGRyZXNzUHJlZmlsbGVkLmh0bWwoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB2b29ybmFtID0gdGhpcy5fXyRpbnB1dFZvb3JuYW0udmFsKCk7XG4gICAgICBjb25zdCBhY2h0ZXJuYWFtID0gdGhpcy5fXyRpbnB1dEFjaHRlcm5hYW0udmFsKCk7XG4gICAgICBjb25zdCBzdHJhYXQgPSB0aGlzLl9fJGlucHV0U3RyYWF0LnZhbCgpO1xuICAgICAgY29uc3QgaHVpc251bW1lciA9IHRoaXMuX18kaW5wdXRIdWlzbnVtbWVyLnZhbCgpO1xuICAgICAgY29uc3QgcG9zdGNvZGUgPSB0aGlzLl9fJGlucHV0UG9zdGNvZGUudmFsKCk7XG4gICAgICBjb25zdCB3b29ucGxhYXRzID0gdGhpcy5fXyRpbnB1dFdvb25wbGFhdHMudmFsKCk7XG4gICAgICBjb25zdCBsYW5kID0gdGhpcy5fXyRpbnB1dExhbmQuZmluZCgnOnNlbGVjdGVkJykudGV4dCgpO1xuXG4gICAgICBwcmVmaWxsZWRBZGRyZXNzID0gYCR7dm9vcm5hbX0gJHthY2h0ZXJuYWFtfSwgJHtzdHJhYXR9ICR7aHVpc251bW1lcn0sXG4gICAgICAgIDxicj4ke3Bvc3Rjb2RlfSwgJHt3b29ucGxhYXRzfSwgJHtsYW5kfWA7XG4gICAgfVxuXG4gICAgdGhpcy5fXyRhZGRyZXNzRGlzcGxheS5odG1sKHByZWZpbGxlZEFkZHJlc3MpO1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2NoZWNrb3V0J10gPSBuZXcgQ2hlY2tvdXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIEFjY291bnQge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBib290c3RyYXBcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICAgIHRoaXMuX2JyZWFrcG9pbnRNb2JpbGUgPSA2MDA7XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXBwLmpzIGRvY3VtZW50IGlzIHJlYWR5Jyk7XG4gICAgdGhpcy5fXyR3cmFwcGVyID0gJCgnLmFwcEFjY291bnQnKTtcblxuICAgIC8vIGJhaWwgaWYgd2UgYXJlIG5vdCBvbiB0aGUgYWNjb3VudCBwYWdlXG4gICAgaWYgKCF0aGlzLl9fJHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdHRNb2RhbCgpO1xuICAgIHRoaXMuX2dlZ2V2ZW5zKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYW5kIHRyYWNlIG1vZGFsXG4gICAqL1xuICBfdHRNb2RhbCAoKSB7XG4gICAgbGV0ICR0dE1vZGFsID0gJCgnI2FwcFR0TW9kYWwnKTtcbiAgICBpZiAoISR0dE1vZGFsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFwcEFjY291bnRfX3RhYmxlLXR0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICR0dE1vZGFsLm1vZGFsKCk7XG4gICAgICAkdHRNb2RhbC5maW5kKCcudHRfX3ZlcnplbmRwYXJ0aWonKS50ZXh0KHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnplbmRwYXJ0aWonKSk7XG4gICAgICAkdHRNb2RhbC5maW5kKCcudHRfX2NvZGUnKS50ZXh0KHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNvZGUnKSk7XG4gICAgICAvLyAkdHRNb2RhbC5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyAgIC8vIGRvIHNvbWV0aGluZy4uLlxuICAgICAgLy8gfSlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZWdldmVucyB2aWV3cyBzd2l0Y2hcbiAgICovXG4gIF9nZWdldmVucyAoKSB7XG4gICAgY29uc3QgJGJ0blRvRWRpdCA9ICQoJyNnZWdldmVuc19zd2l0Y2hlZGl0Jyk7XG4gICAgY29uc3QgJHZpZXdTaG93ID0gJCgnI2dlZ2V2ZW5zX3Nob3cnKTtcbiAgICBjb25zdCAkdmlld0VkaXQgPSAkKCcjZ2VnZXZlbnNfZWRpdCcpO1xuXG4gICAgaWYgKCEkYnRuVG9FZGl0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9zd2l0Y2hWaWV3ID0gKGV2ZW50LCBuYW1lKSA9PiB7XG4gICAgICBsZXQgbmV3VmlldyA9IG5hbWU7XG4gICAgICBsZXQgY3VycmVudFZpZXcgPSB0aGlzLl9jdXJyZW50VmlldztcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXdWaWV3KSB7XG4gICAgICAgIG5ld1ZpZXcgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoIW5ld1ZpZXcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZpZXcgPT09ICdzaG93JyAmJiBjdXJyZW50VmlldyAhPT0gJ3Nob3cnKSB7XG4gICAgICAgICR2aWV3RWRpdC5zbGlkZVVwKCk7XG4gICAgICAgICR2aWV3U2hvdy5zbGlkZURvd24oKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHRoaXMuX2N1cnJlbnRWaWV3ID0gJ3Nob3cnO1xuICAgICAgfSBlbHNlIGlmIChuZXdWaWV3ID09PSAnZWRpdCcgJiYgY3VycmVudFZpZXcgIT09ICdlZGl0Jykge1xuICAgICAgICAkdmlld1Nob3cuc2xpZGVVcCgpO1xuICAgICAgICAkdmlld0VkaXQuc2xpZGVEb3duKCk7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSB0aGlzLl9jdXJyZW50VmlldyA9ICdlZGl0JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIF9zd2l0Y2hWaWV3LCBmYWxzZSk7XG5cbiAgICBfc3dpdGNoVmlldyhudWxsLCAnc2hvdycpO1xuXG4gICAgJGJ0blRvRWRpdC5jbGljaygoZSkgPT4geyBfc3dpdGNoVmlldyhlLCAnZWRpdCcgKX0pO1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2FjY291bnQnXSA9IG5ldyBBY2NvdW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IHBvcHBlciBmcm9tICdwb3BwZXInO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9hbGVydCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL3Rvb2x0aXAnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnanF1ZXJ5LW1hdGNoLWhlaWdodC9kaXN0L2pxdWVyeS5tYXRjaEhlaWdodCc7XG4vLyBpbXBvcnQgJ2RhdGF0YWJsZXMubmV0Jztcbi8vIGltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMnO1xuXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCAnLi9hYnRlc3RpbmcnO1xuaW1wb3J0ICcuL2Nvb2tpZWFubm91bmNlbWVudCc7XG5pbXBvcnQgJy4vaXRlbSc7XG5pbXBvcnQgJy4vaXRlbURldGFpbCc7XG5pbXBvcnQgJy4vc3RhdGVzLmRlZmF1bHRzJztcbmltcG9ydCAnLi9kZW1vJztcbmltcG9ydCAnLi9uYXNrJztcbmltcG9ydCAnLi9icm93c2Vycyc7XG5pbXBvcnQgJy4vY2hlY2tvdXQnO1xuaW1wb3J0ICcuL2FjY291bnQnO1xuXG5jbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBpbml0aWFsaXplZCcpO1xuICAgIHRoaXMuX3VwZGF0ZUNvcHlyaWdodFllYXIoKTtcbiAgICB0aGlzLl9hY2NvdW50TWVudSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBkb2N1bWVudCBpcyByZWFkeScpO1xuICAgIHRoaXMuX18kaXRlbUNvbHMgPSAkKCcuYXBwSXRlbV9fY29sJyk7XG5cbiAgICB0aGlzLl8kd2luID0gJCh3aW5kb3cpO1xuXG4gICAgdGhpcy5faW5pdE1vZGFscygpO1xuICAgIHRoaXMuX2luaXRBdXRoTW9kYWwoKTtcbiAgICB0aGlzLl9pbml0U2xpZGVycygpO1xuICAgIHRoaXMuX2luaXRGb3JtcygpO1xuICAgIHRoaXMuX2luaXRUYWJsZXMoKTtcbiAgICB0aGlzLl9tYXRjaENvbHNIZWlnaHQoKTtcbiAgICB0aGlzLl8kd2luLnJlc2l6ZSh0aGlzLl9tYXRjaENvbHNIZWlnaHQuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBkcm9wZG93blxuICAgICQoJyNhcHBMYW5nX19oZWFkZXInKVxuICAgICAgLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgKCkgPT4ge1xuICAgICAgICAkKCcjYXBwSGVhZGVyJykuYWRkQ2xhc3MoJ2xhc3QtZHJvcGRvd24tb3BlbicpO1xuICAgICAgfSlcbiAgICAgIC5vbignaGlkZS5icy5kcm9wZG93bicsICgpID0+IHtcbiAgICAgICAgJCgnI2FwcEhlYWRlcicpLnJlbW92ZUNsYXNzKCdsYXN0LWRyb3Bkb3duLW9wZW4nKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gJCgnLm5hdnNlbGVjdG9yJykgLy8gOTkxIGNoYW5nZSB0byA8b3B0aW9uPlxuICAgICQoJy5KU25hdnNlbF9fc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy52YWx1ZTtcbiAgICAgIC8vIGdldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWF0Y2ggdGhlIGhlaWdodCBvZiB0aGUgaXRlbSBjYXJkcycgY29sdW1uc1xuICAgKi9cbiAgX21hdGNoQ29sc0hlaWdodCAoKSB7XG4gICAgaWYgKHRoaXMuX18kaXRlbUNvbHMubGVuZ3RoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gOTkyKSB7XG4gICAgICAgIHRoaXMuX18kaXRlbUNvbHMubWF0Y2hIZWlnaHQoe30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fXyRpdGVtQ29scy5tYXRjaEhlaWdodCh7IHJlbW92ZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBzbGlkZXJzICh3aXRoIHNsaWNrLXNsaWRlcilcbiAgICogQHNlZSBvcHRpb25zIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL1xuICAgKi9cbiAgX2luaXRTbGlkZXJzICgpIHtcbiAgICAkKCcuc2xpZGVyLS1pbnN0YScpLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHRvb2x0aXBzXG4gICAqXG4gICAqL1xuICBfaW5pdFRvb2x0aXBzICgpIHtcbiAgICAvLyBib290c3RyYXAgdG9vbHRpcHNcbiAgICAkKCcuanMtdG9vbHRpcCcpLnRvb2x0aXAoe30pO1xuXG4gICAgLy8gc2hpcHBpbnRpbWVzIHRvb2x0aXBzXG4gICAgJCgnLnNoaXBwaW5ndGltZS10b29sdGlwJykudG9vbHRpcCh7XG4gICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgb2Zmc2V0OiAnLTEwcHggMCcsXG4gICAgICAvLyBkZWxheTogeyBoaWRlOiAxMDAwMDAwIH0sIC8vIGZvciBkZWJ1Z2dpbmdcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwIHRvb2x0aXAtdG9wIHRvb2x0aXAtLWxpZ2h0IHNoaXBwaW5ndGltZV9fdG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBtb2RhbHNcbiAgICovXG4gIF9pbml0TW9kYWxzICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IGZvcm1zICh2YWxpZGF0aW9uKVxuICAgKi9cbiAgX2luaXRGb3JtcyAoKSB7XG4gICAgJCgnLmZvcm0tdmFsaWRhdGUnKS52YWxpZGF0ZSh7XG4gICAgICBlcnJvckNsYXNzOiAnaGFzLWRhbmdlcicsXG4gICAgICB2YWxpZENsYXNzOiAnaGFzLXN1Y2Nlc3MnLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgdGFibGVzXG4gICAqL1xuICBfaW5pdFRhYmxlcyAoKSB7XG4gICAgLy8gZGF0YWJsZSBvbiAnbXkgYWNjb3VudCcgcGFnZXNcbiAgICAkKCcuZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcbiAgICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgICBvcmRlcmluZzogZmFsc2UsXG4gICAgICBpbmZvOiBmYWxzZSxcbiAgICAgIHBhZ2luZ1R5cGU6ICdudW1iZXJzJyxcbiAgICAgIGRyYXdDYWxsYmFjazogdGhpcy5faW5pdFRvb2x0aXBzLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29weXJpZ2h0IHllYXJcbiAgICovXG4gIF91cGRhdGVDb3B5cmlnaHRZZWFyKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1jb3B5eWVhcicpO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NvdW50IG1lbnVcbiAgICovXG4gIF9hY2NvdW50TWVudSAoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW15YWNjb3VudF9idG4nKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYXBwQWNjb3VudC0tbWVudS1vcGVuJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IGF1dGhlbnRpY2F0aW9uIG1vZGFsc1xuICAgKi9cbiAgX2luaXRBdXRoTW9kYWwgKCkge1xuICAgIGxldCAkYXV0aE1vZGFsID0gJCgnI2FwcEF1dGhNb2RhbCcpO1xuICAgIHRoaXMuX18kYXV0aE1vZGFsID0gJGF1dGhNb2RhbDtcbiAgICBpZiAoISRhdXRoTW9kYWwubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWF1dGhtb2RhbF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGJ0biA9IHRoaXM7XG4gICAgICBsZXQgJGJ0biA9ICQodGhpcyk7XG4gICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dGhtb2RhbCcpO1xuICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGRhdGEtYXV0aG1vZGFsYCBtdXN0IGhhdmUgYSB2YWx1ZSAoZS5nLiBgbG9naW5gIG9yIGByZWdpc3RlcmApJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICRhdXRoTW9kYWxcbiAgICAgICAgLmF0dHIoJ2RhdGEtdmlldycsIHZpZXcpXG4gICAgICAgIC5tb2RhbCgnc2hvdycpXG4gICAgICAgIC5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gZG8gc29tZXRoaW5nLi4uXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21wdCBsb2dpbiBtb2RhbFxuICAgKi9cbiAgcHJvbXB0TG9naW4gKCkge1xuICAgIGlmICh0aGlzLl9fJGF1dGhNb2RhbCkge1xuICAgICAgdGhpcy5fXyRhdXRoTW9kYWwuYXR0cignZGF0YS12aWV3JywgJ2xvZ2luJyk7XG4gICAgICB0aGlzLl9fJGF1dGhNb2RhbC5tb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tcHQgcmVnaXN0ZXIgbW9kYWxcbiAgICovXG4gIHByb21wdFJlZ2lzdGVyICgpIHtcbiAgICBpZiAodGhpcy5fXyRhdXRoTW9kYWwpIHtcbiAgICAgIHRoaXMuX18kYXV0aE1vZGFsLmF0dHIoJ2RhdGEtdmlldycsICdyZWdpc3RlcicpO1xuICAgICAgdGhpcy5fXyRhdXRoTW9kYWwubW9kYWwoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnYXBwJ10gPSBuZXcgQXBwKCk7XG4iXSwibmFtZXMiOlsiY29uc3QiLCJsZXQiLCJ0aGlzIiwiYXBpIiwiU3ZnUGllVGltZXIiLCJTdmdCYXJUaW1lciIsIiQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0FBLE1BQU0sSUFBSSxHQUFHLGFBQUk7Ozs7Ozs7OztJQVNmQyxJQUFJLFVBQVUsR0FBRyxNQUFLOztJQUV0QkQsSUFBTSxPQUFPLEdBQUcsUUFBTzs7SUFFdkJBLElBQU0sa0JBQWtCLEdBQUc7TUFDekIsZ0JBQWdCLEdBQUcscUJBQXFCO01BQ3hDLGFBQWEsTUFBTSxlQUFlO01BQ2xDLFdBQVcsUUFBUSwrQkFBK0I7TUFDbEQsVUFBVSxTQUFTLGVBQWU7TUFDbkM7OztJQUdELFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtNQUNuQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7S0FDckU7O0lBRUQsU0FBUyw0QkFBNEIsR0FBRztNQUN0QyxPQUFPO1FBQ0wsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHO1FBQ3hCLFlBQVksRUFBRSxVQUFVLENBQUMsR0FBRztRQUM1Qix1QkFBTSxDQUFDLEtBQUssRUFBRTtVQUNaLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztXQUN0RDtVQUNELE9BQU8sU0FBUztTQUNqQjtPQUNGO0tBQ0Y7O0lBRUQsU0FBUyxpQkFBaUIs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