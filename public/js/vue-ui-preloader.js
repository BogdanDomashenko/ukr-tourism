(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["loader"]=e():t["loader"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),c=n("fc6a"),a=n("a04b"),u=n("5135"),s=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e),s)try{return l(t,e)}catch(n){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"107c":function(t,e,n){var r=n("d039"),o=n("da84"),i=o.RegExp;t.exports=r((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),o=n("44e7"),i=n("825a"),c=n("1d80"),a=n("4840"),u=n("8aa5"),s=n("50c4"),l=n("577e"),f=n("14c3"),d=n("9263"),p=n("9f7f"),b=n("d039"),v=p.UNSUPPORTED_Y,g=[].push,h=Math.min,y=4294967295,x=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=l(c(this)),i=void 0===n?y:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);var a,u,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,v=new RegExp(t.source,p+"g");while(a=d.call(v,r)){if(u=v.lastIndex,u>b&&(f.push(r.slice(b,a.index)),a.length>1&&a.index<r.length&&g.apply(f,a.slice(1)),s=a[0].length,b=u,f.length>=i))break;v.lastIndex===a.index&&v.lastIndex++}return b===r.length?!s&&v.test("")||f.push(""):f.push(r.slice(b)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(l(o),e,n)},function(t,o){var c=i(this),d=l(t),p=n(r,c,d,o,r!==e);if(p.done)return p.value;var b=a(c,RegExp),g=c.unicode,x=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"g":"y"),m=new b(v?"^(?:"+c.source+")":c,x),j=void 0===o?y:o>>>0;if(0===j)return[];if(0===d.length)return null===f(m,d)?[d]:[];var S=0,w=0,E=[];while(w<d.length){m.lastIndex=v?0:w;var O,_=f(m,v?d.slice(w):d);if(null===_||(O=h(s(m.lastIndex+(v?w:0)),d.length))===S)w=u(d,w,g);else{if(E.push(d.slice(S,w)),E.length===j)return E;for(var P=1;P<=_.length-1;P++)if(E.push(_[P]),E.length===j)return E;w=S=O}}return E.push(d.slice(S)),E}]}),!x,v)},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),a=n("ce4e"),u=n("e893"),s=n("94ca");t.exports=function(t,e){var n,l,f,d,p,b,v=t.target,g=t.global,h=t.stat;if(l=g?r:h?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(f in e){if(p=e[f],t.noTargetGet?(b=o(l,f),d=b&&b.value):d=l[f],n=s(g?f:v+(h?".":"#")+f,t.forced),!n&&void 0!==d){if(typeof p===typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),c(l,f,p,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"25e7":function(t,e,n){},"2c24":function(t,e,n){"use strict";n("97d9")},"2d00":function(t,e,n){var r,o,i=n("da84"),c=n("342f"),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,l=s&&s.v8;l?(r=l.split("."),o=r[0]<4?1:r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),c=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=c(e),a=r.length,u=0;while(a>u)o.f(t,n=r[u++],e[n]);return t}},4107:function(t,e,n){"use strict";n("51cf")},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==o(t))}},4840:function(t,e,n){var r=n("825a"),o=n("1c0b"),i=n("b622"),c=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[c])?e:o(n)}},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,o;if("string"===e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),o=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),l=i(c,s);if(t&&n!=n){while(s>l)if(a=u[l++],a!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},"51cf":function(t,e,n){},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),c=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6547:function(t,e,n){var r=n("a691"),o=n("577e"),i=n("1d80"),c=function(t){return function(e,n){var c,a,u=o(i(e)),s=r(n),l=u.length;return s<0||s>=l?t?"":void 0:(c=u.charCodeAt(s),c<55296||c>56319||s+1===l||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):c:t?u.slice(s,s+2):a-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"69f3":function(t,e,n){var r,o,i,c=n("7f9a"),a=n("da84"),u=n("861d"),s=n("9112"),l=n("5135"),f=n("c6cd"),d=n("f772"),p=n("d012"),b="Object already initialized",v=a.WeakMap,g=function(t){return i(t)?o(t):r(t,{})},h=function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c||f.state){var y=f.state||(f.state=new v),x=y.get,m=y.has,j=y.set;r=function(t,e){if(m.call(y,t))throw new TypeError(b);return e.facade=t,j.call(y,t,e),e},o=function(t){return x.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var S=d("state");p[S]=!0,r=function(t,e){if(l(t,S))throw new TypeError(b);return e.facade=t,s(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:g,getterFor:h}},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),i=n("5135"),c=n("ce4e"),a=n("8925"),u=n("69f3"),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var u,s=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),u=l(n),u.source||(u.source=f.join("string"==typeof e?e:""))),t!==r?(s?!p&&t[e]&&(d=!0):delete t[e],d?t[e]=n:o(t,e,n)):d?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"753f":function(t,e,n){"use strict";n("25e7")},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,o=n("825a"),i=n("37e8"),c=n("7839"),a=n("d012"),u=n("1be4"),s=n("cc12"),l=n("f772"),f=">",d="<",p="prototype",b="script",v=l("IE_PROTO"),g=function(){},h=function(t){return d+b+f+t+d+"/"+b+f},y=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},x=function(){var t,e=s("iframe"),n="java"+b+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},m=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}m="undefined"!=typeof document?document.domain&&r?y(r):x():y(r);var t=c.length;while(t--)delete m[p][c[t]];return m()};a[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[p]=o(t),n=new g,g[p]=null,n[v]=t):n=m(),void 0===e?n:i(n,e)}},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var r,o,i;(function(n,c){o=[],r=c,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var n,r,o,i=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,c=/@([^@]*):(\d+):(\d+)\s*$/gi,a=i.exec(p.stack)||c.exec(p.stack),u=a&&a[1]||!1,s=a&&a[2]||!1,l=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");u===l&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(s-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(r,"$1").trim());for(var d=0;d<f.length;d++){if("interactive"===f[d].readyState)return f[d];if(f[d].src===u)return f[d];if(u===l&&f[d].innerHTML&&f[d].innerHTML.trim()===o)return f[d]}return null}}return t}))},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("577e"),o=n("ad6d"),i=n("9f7f"),c=n("5692"),a=n("7c73"),u=n("69f3").get,s=n("fce3"),l=n("107c"),f=RegExp.prototype.exec,d=c("native-string-replace",String.prototype.replace),p=f,b=function(){var t=/a/,e=/b*/g;return f.call(t,"a"),f.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=i.UNSUPPORTED_Y||i.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],h=b||g||v||s||l;h&&(p=function(t){var e,n,i,c,s,l,h,y=this,x=u(y),m=r(t),j=x.raw;if(j)return j.lastIndex=y.lastIndex,e=p.call(j,m),y.lastIndex=j.lastIndex,e;var S=x.groups,w=v&&y.sticky,E=o.call(y),O=y.source,_=0,P=m;if(w&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),P=m.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==m.charAt(y.lastIndex-1))&&(O="(?: "+O+")",P=" "+P,_++),n=new RegExp("^(?:"+O+")",E)),g&&(n=new RegExp("^"+O+"$(?!\\s)",E)),b&&(i=y.lastIndex),c=f.call(w?n:y,P),w?c?(c.input=c.input.slice(_),c[0]=c[0].slice(_),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:b&&c&&(y.lastIndex=y.global?c.index+c[0].length:i),g&&c&&c.length>1&&d.call(c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&S)for(c.groups=l=a(null),s=0;s<S.length;s++)h=S[s],l[h[0]]=c[h[1]];return c}),t.exports=p},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"97d9":function(t,e,n){},9873:function(t,e,n){},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),c=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e),i(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9c0c":function(t,e,n){"use strict";n("ed0b")},"9f7f":function(t,e,n){var r=n("d039"),o=n("da84"),i=o.RegExp;e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a04b:function(t,e,n){var r=n("c04e"),o=n("d9b5");t.exports=function(t){var e=r(t,"string");return o(e)?e:String(e)}},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),i=n("fc6a"),c=n("a640"),a=[].join,u=o!=Object,s=c("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(t){return a.call(i(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b4da:function(t,e,n){"use strict";n("caad")},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("5135"),c=n("90e3"),a=n("4930"),u=n("fdbf"),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},c04e:function(t,e,n){var r=n("861d"),o=n("d9b5"),i=n("485a"),c=n("b622"),a=c("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,c=t[a];if(void 0!==c){if(void 0===e&&(e="default"),n=c.call(t,e),!r(n)||o(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,c=n("d012");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},caad:function(t,e,n){},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("9263"),i=n("d039"),c=n("b622"),a=n("9112"),u=c("species"),s=RegExp.prototype;t.exports=function(t,e,n,l){var f=c(t),d=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=d&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!d||!p||n){var b=/./[f],v=e(f,""[t],(function(t,e,n,r,i){var c=e.exec;return c===o||c===s.exec?d&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,v[0]),r(s,f,v[1])}l&&a(s[f],"sham",!0)}},d9b5:function(t,e,n){var r=n("d066"),o=n("fdbf");t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||a(t,l,u(e,l))}}},ed0b:function(t,e,n){},f5e5:function(t,e,n){"use strict";n("9873")},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(t.name,{tag:"component",attrs:{object:t.object,color1:t.color1,color2:t.color2,size:t.size,speed:t.speed,bg:t.bg,objectbg:t.objectbg,opacity:t.opacity,disableScrolling:t.disableScrolling}})],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"background-color":t.bgcolors},attrs:{id:"overlay-spinner"}},[n("div",{staticClass:"loader-spinner",style:{border:t.size+"px solid "+t.objectbg,"border-top":t.size+"px solid "+t.object}})])},s=[],l=(n("ac1f"),n("1276"),n("a15b"),{created:function(){this.disableScrolling&&document.body.classList.add("overflowHidden")},destroyed:function(){this.disableScrolling&&document.body.classList.remove("overflowHidden")}}),f={name:"static-loader",props:["object","color1","color2","size","speed","opacity","bg","objectbg","disableScrolling"],mixins:[l],data:function(){return{bgcolors:""}},created:function(){var t,e=document.documentElement;e.style.setProperty("--time-animation","spin "+this.speed+"s linear infinite"),/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg)&&(t=this.bg.substring(1).split(""),3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),this.bgcolors="rgba("+[t>>16&255,t>>8&255,255&t].join(",")+","+this.opacity/100+")"),console.log(this.speed)}},d=f;n("753f");function p(t,e,n,r,o,i,c,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}var b=p(d,u,s,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"background-color":t.bgcolors},attrs:{id:"overlay-dots"}},[n("div",{staticClass:"loader-dots",style:{color:t.object,"font-size":t.size+"px"}})])},h=[],y={name:"dots",props:["object","color1","color2","size","speed","opacity","bg","objectbg","disableScrolling"],mixins:[l],data:function(){return{bgcolors:""}},created:function(){var t,e=document.documentElement;e.style.setProperty("--time-animation","load7 "+this.speed+"s infinite ease-in-out"),/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg)&&(t=this.bg.substring(1).split(""),3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),this.bgcolors="rgba("+[t>>16&255,t>>8&255,255&t].join(",")+","+this.opacity/100+")")}},x=y,m=(n("9c0c"),p(x,g,h,!1,null,null,null)),j=m.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"background-color":t.bgcolors},attrs:{id:"overlay-circular"}},[n("div",{staticClass:"loader-circular"})])},w=[],E={name:"circular",props:["object","color1","color2","size","speed","opacity","bg","objectbg","disableScrolling"],mixins:[l],data:function(){return{bgcolors:""}},created:function(){var t,e=document.documentElement;e.style.setProperty("--color-animation1",this.object),e.style.setProperty("--color-animation2",this.color1),e.style.setProperty("--color-animation3",this.color2),e.style.setProperty("--border-size",this.size+"px solid transparent"),e.style.setProperty("--time-animation1","spin-circular "+(this.speed-.5)+"s linear infinite"),e.style.setProperty("--time-animation2","spin-circular "+this.speed+"s linear infinite"),e.style.setProperty("--time-animation3","spin-circular "+(this.speed+1)+"s linear infinite"),/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg)&&(t=this.bg.substring(1).split(""),3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),this.bgcolors="rgba("+[t>>16&255,t>>8&255,255&t].join(",")+","+this.opacity/100+")")}},O=E,_=(n("b4da"),p(O,S,w,!1,null,null,null)),P=_.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"background-color":t.bgcolors},attrs:{id:"overlay-bar"}},[n("div",{staticClass:"loader-bar",style:{color:t.object,"font-size":t.size+"px"}},[t._v("Loading..")])])},I=[],R={name:"toptombar",props:["object","color1","color2","size","speed","opacity","bg","objectbg","disableScrolling"],mixins:[l],data:function(){return{bgcolors:""}},created:function(){var t,e=document.documentElement;e.style.setProperty("--time-animation","load "+this.speed+"s infinite alternate ease-in-out"),e.style.setProperty("--color-bar",this.objectbg),/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg)&&(t=this.bg.substring(1).split(""),3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),this.bgcolors="rgba("+[t>>16&255,t>>8&255,255&t].join(",")+","+this.opacity/100+")")}},C=R,$=(n("4107"),p(C,T,I,!1,null,null,null)),z=$.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"background-color":t.bgcolors},attrs:{id:"overlay-box"}},[n("div",{staticClass:"load-box",style:{background:t.object,width:20*t.size+"px",height:20*t.size+"px"}})])},k=[],M={name:"box",props:["object","color1","color2","size","speed","opacity","bg","objectbg","disableScrolling"],mixins:[l],data:function(){return{bgcolors:""}},created:function(){var t,e=document.documentElement;e.style.setProperty("--time-animation","loading "+this.speed+"s linear infinite"),/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg)&&(t=this.bg.substring(1).split(""),3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),this.bgcolors="rgba("+[t>>16&255,t>>8&255,255&t].join(",")+","+this.opacity/100+")"),console.log(this.speed)}},F=M,N=(n("2c24"),p(F,A,k,!1,null,null,null)),L=N.exports,D={name:"loader",components:{spinning:v,dots:j,circular:P,loading:z,box:L},props:["object","color1","color2","size","speed","opacity","bg","objectbg","name","disableScrolling"]},U=D,H=(n("f5e5"),p(U,c,a,!1,null,null,null)),W=H.exports;e["default"]=W},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fce3:function(t,e,n){var r=n("d039"),o=n("da84"),i=o.RegExp;t.exports=r((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})["default"]}));
//# sourceMappingURL=loader.umd.min.js.map