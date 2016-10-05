!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=n(1),o=n(1),i=n(5);i["default"]&&(i=i["default"]),o.render(r.createElement(i,{sectionName:"how-to",pages:[{url:"how-to/author-libraries",title:"How to Author Libraries?",anchors:[]},{url:"how-to/cache",title:"How to Cache?",anchors:[{title:"The problem",id:"the-problem"},{title:"Generating unique hashes for each file",id:"generating-unique-hashes-for-each-file"},{title:"Get filenames from webpack compilation stats",id:"get-filenames-from-webpack-compilation-stats"},{title:"Deterministic hashes",id:"deterministic-hashes"},{title:"References",id:"references"}]},{url:"how-to/develop",title:"How to Develop?",anchors:[]},{url:"how-to/develop/using-docker",title:"How to Develop Using Docker?",anchors:[{title:"What is docker",id:"what-is-docker"}]},{url:"how-to/develop/using-third-party-tools",title:"How to Develop with Third Party Tools?",anchors:[]},{url:"how-to/develop/using-vagrant",title:"How to Develop Using Vagrant",anchors:[{title:"Configuring the Project",id:"configuring-the-project"},{title:"Running the Server",id:"running-the-server"},{title:"Advanced Usage with nginx",id:"advanced-usage-with-nginx"},{title:"Conclusion",id:"conclusion"}]},{url:"how-to/generate-production-build",title:"How to Generate a Production Build?",anchors:[{title:"Source Maps",id:"source-maps"},{title:"Node environment variable",id:"node-environment-variable"},{title:"Minification",id:"minification"}]},{url:"how-to/handle-compatibility",title:"How to Handle Compatibility?",anchors:[]},{url:"how-to/handle-dependencies",title:"How to Handle Dependencies?",anchors:[]},{url:"how-to/hot-module-reload",title:"How to Configure Hot Module Replacement?",anchors:[{title:"Babel Config",id:"babel-config"},{title:"Webpack config",id:"webpack-config"},{title:"Code",id:"code"},{title:"Package.json",id:"package-json"}]},{url:"how-to/improve-build-performance",title:"How to Improve Build Performance?",anchors:[]},{url:"how-to/install-webpack",title:"How to Install webpack?",anchors:[{title:"Pre-requisites",id:"pre-requisites"},{title:"Global Installation",id:"global-installation"},{title:"Local Installation",id:"local-installation"},{title:"Bleeding Edge",id:"bleeding-edge"}]},{url:"how-to/set-up-hmr-with-react",title:"How to Set Up Hot Module Replacement with React?",anchors:[{title:"Project Config",id:"project-config"},{title:"Babel Config",id:"babel-config"},{title:"Webpack config",id:"webpack-config"},{title:"Code",id:"code"},{title:"Package.json",id:"package-json"}]},{url:"how-to/shim",title:"How to Shim?",anchors:[]},{url:"how-to/split-code",title:"How to Split Code?",anchors:[]},{url:"how-to/upgrade-from-webpack-1",title:"How to Upgrade from Webpack 1?",anchors:[{title:"resolve.root, resolve.fallback, resolve.modulesDirectories",id:"resolve-root-resolve-fallback-resolve-modulesdirectories"},{title:"resolve.extensions",id:"resolve-extensions"},{title:"resolve.*",id:"resolve-"},{title:"debug",id:"debug"},{title:"UglifyJsPlugin sourceMap",id:"uglifyjsplugin-sourcemap"},{title:"UglifyJsPlugin minimize loaders",id:"uglifyjsplugin-minimize-loaders"},{title:"OccurrenceOrderPlugin is now on by default",id:"occurrenceorderplugin-is-now-on-by-default"},{title:"full dynamic requires now fail by default",id:"full-dynamic-requires-now-fail-by-default"},{title:"Using custom arguments in CLI and configuration",id:"using-custom-arguments-in-cli-and-configuration"},{title:"require.ensure and AMD require is async",id:"require-ensure-and-amd-require-is-async"},{title:"module.loaders is now module.rules",id:"module-loaders-is-now-module-rules"},{title:"module.preLoaders and module.postLoaders was removed",id:"module-preloaders-and-module-postloaders-was-removed"},{title:"LoaderOptionPlugin context",id:"loaderoptionplugin-context"}]}]}),document.getElementById("components/Sidebar.jsx"))},function(e,t,n){(function(t){!function(t,r){e.exports=r(n(3),n(4))}(this,function(e,n){function r(e,t,r){var o=t._preactCompatRendered;o&&o.parentNode!==t&&(o=null),o||(o=t.children[0]);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var a=n.render(e,t,o);return t._preactCompatRendered=a,"function"==typeof r&&r(),a&&a._component||a.base}function o(e,t,o,i){var a=n.h(q,{context:e.context},t),l=r(a,o);return i&&i(l),l}function i(e){var t=e._preactCompatRendered;return!(!t||t.parentNode!==e)&&(n.render(n.h(W),e,t),!0)}function a(e){return f.bind(null,e)}function l(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?l(r):r&&"object"==typeof r&&!h(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=f(r.type||r.nodeName,r.props||r.attributes,r.children))}}function u(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function c(e){return function(t,n){return j.call(e,t,n),e(t,n)}}function s(e){var t=e[J];return t?t===!0?e:t:(t=c(e),Object.defineProperty(t,J,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,J,{configurable:!0,value:t}),t)}function f(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return l(e,2),p(n.h.apply(void 0,e))}function p(e){y(e),u(e.nodeName)&&(e.nodeName=s(e.nodeName));var t=e.attributes&&e.attributes.ref,n=t&&typeof t;return!G||"string"!==n&&"number"!==n||(e.attributes.ref=m(t,G)),v(e),e}function d(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];var i=n.h(e.nodeName||e.type,e.attributes||e.props,e.children||e.props.children);return p(n.cloneElement.apply(void 0,[i,t].concat(r)))}function h(e){return e&&(e instanceof L||e.$$typeof===R)}function m(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function v(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.onchange){t=t.toLowerCase();var i="input"===t&&"checkbox"===String(n.type).toLowerCase()?"onclick":"oninput",a=r[i]||i;n[a]||(n[a]=k(n[r[i]],n[r.onchange]))}}}function y(e){var t=e.attributes;if(t){var n=t.className||t["class"];n&&(t.className=n)}}function b(e,t,n){for(var r in t)n!==!0&&null==t[r]||(e[r]=t[r]);return e}function g(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function w(){}function _(e){function t(t,r){b(this,e),n&&N(this,n),T.call(this,t,r,I),C(this),E.call(this,t,r)}var n=e.mixins&&x(e.mixins);return e.statics&&b(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),w.prototype=T.prototype,t.prototype=new w,t.prototype.constructor=t,t.displayName=e.displayName||"Component",t}function x(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function N(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=k.apply(void 0,t[n].concat(e[n]||n)))}function C(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||H.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function P(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function k(){var e=arguments;return function(){for(var t,n=arguments,r=this,o=0;o<e.length;o++){var i=P(r,e[o],n);void 0!==i&&(t=i)}return t}}function E(e,t){j.call(this,e,t),this.componentWillReceiveProps=k(j,this.componentWillReceiveProps||"componentWillReceiveProps"),this.render=k(j,O,this.render||"render",S)}function j(e,t){var n=this;if(e){var r=e.children;if(Array.isArray(r)&&1===r.length&&(e.children=r[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),M){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes;if(i)for(var a in i)if(i.hasOwnProperty(a)&&"function"==typeof i[a]){var l=n.displayName||o.name,u=i[a](e,a,l,"prop");u&&console.error(new Error(u.message||u))}}}}function O(e){G=this}function S(){G===this&&(G=null)}function T(e,t,r){n.Component.call(this,e,t),this.getInitialState&&(this.state=this.getInitialState()),this.refs={},this._refProxies={},r!==I&&E.call(this,e,t)}function A(e,t){T.call(this,e,t)}e="default"in e?e["default"]:e;var U="15.1.0",D="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),R="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,H={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},I={},M="undefined"!=typeof t&&t.env&&"production"!==t.env.NODE_ENV,W=function(){return null},L=n.h("").constructor;L.prototype.$$typeof=R,Object.defineProperty(L.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(L.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var B=n.options.vnode;n.options.vnode=function(e){var t=e.attributes,n=e.nodeName;if(t||(t=e.attributes={}),"function"==typeof n){var r=n[J]===!0,o=n;if(!r)do if(o instanceof T){r=!0;break}while((o=o.prototype)&&o!==Function&&o!==Object);if(r&&(p(e),n.defaultProps))for(var i in n.defaultProps)n.defaultProps.hasOwnProperty(i)&&null==t[i]&&(t[i]=n.defaultProps[i])}Object.isExtensible&&!Object.isExtensible(t)&&(t=b({},t,!0)),t.children=e.children,B&&B(e)};var q=function(){};q.prototype.getChildContext=function(){return this.props.context},q.prototype.render=function(e){return e.children[0]};for(var G,V=[],z={map:function(e,t,n){return e=z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t)},forEach:function(e,t,n){e=z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e=z.toArray(e),e.length},only:function(e){if(e=z.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:V.concat(e)}},$={},F=D.length;F--;)$[D[F]]=a(D[F]);var J="undefined"!=typeof Symbol?Symbol["for"]("__preactCompatWrapper"):"__preactCompatWrapper",K=function(e){return e&&e.base||e};T.prototype=new n.Component,b(T.prototype,{constructor:T,isReactComponent:{},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),A.prototype=new T({},{},I),A.prototype.shouldComponentUpdate=function(e,t){return g(this.props,e)||g(this.state,t)};var Q={version:U,DOM:$,PropTypes:e,Children:z,render:r,createClass:_,createFactory:a,createElement:f,cloneElement:d,isValidElement:h,findDOMNode:K,unmountComponentAtNode:i,Component:T,PureComponent:A,unstable_renderSubtreeIntoContainer:o};return Q})}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&l())}function l(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(x&&e[x]||e[N]);if("function"==typeof t)return t}function r(e){function t(t,n,r,o,i,a){if(o=o||C,a=a||r,null==n[r]){var l=w[i];return t?new Error("Required "+l+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var a=t[n],l=m(a);if(l!==e){var u=w[o],c=v(a);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(_.thatReturns(null))}function a(e){function t(t,n,r,o,i){var a=t[n];if(!Array.isArray(a)){var l=w[o],u=m(a);return new Error("Invalid "+l+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<a.length;c++){var s=e(a,c,r,o,i+"["+c+"]");if(s instanceof Error)return s}return null}return r(t)}function l(){function e(e,t,n,r,o){if(!g.isValidElement(e[t])){var i=w[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function u(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=w[o],l=e.name||C,u=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+l+"`."))}return null}return r(t)}function c(e){function t(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(a===e[l])return null;var u=w[o],c=JSON.stringify(e);return new Error("Invalid "+u+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function s(e){function t(t,n,r,o,i){var a=t[n],l=m(a);if("object"!==l){var u=w[o];return new Error("Invalid "+u+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an object."))}for(var c in a)if(a.hasOwnProperty(c)){var s=e(a,c,r,o,i+"."+c);if(s instanceof Error)return s}return null}return r(t)}function f(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var l=e[a];if(null==l(t,n,r,o,i))return null}var u=w[o];return new Error("Invalid "+u+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function p(){function e(e,t,n,r,o){if(!h(e[t])){var i=w[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function d(e){function t(t,n,r,o,i){var a=t[n],l=m(a);if("object"!==l){var u=w[o];return new Error("Invalid "+u+" `"+i+"` of type `"+l+"` "+("supplied to `"+r+"`, expected `object`."))}for(var c in e){var s=e[c];if(s){var f=s(a,c,r,o,i+"."+c);if(f)return f}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!h(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var b="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,g={};g.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b};var w={prop:"prop",context:"context",childContext:"child context"},_={thatReturns:function(e){return function(){return e}}},x="function"==typeof Symbol&&Symbol.iterator,N="@@iterator",C="<<anonymous>>",P={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:l(),instanceOf:u,node:p(),objectOf:s,oneOf:c,oneOfType:f,shape:d};t.exports=P})},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,a,l;for(l=arguments.length;l-- >2;)L.push(arguments[l]);for(n&&n.children&&(L.length||L.push(n.children),delete n.children);L.length;)if((i=L.pop())instanceof Array)for(l=i.length;l--;)L.push(i[l]);else null!=i&&i!==!1&&("number"!=typeof i&&i!==!0||(i=String(i)),a="string"==typeof i,a&&o?r[r.length-1]+=i:(r?r.push(i):r=[i],o=a));var u=new t(e,n||void 0,r);return W.vnode&&W.vnode(u),u}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e,t,n){var r=t.split("."),o=r[0];return function(t){var a,u,c=t&&t.currentTarget||this,s=e.state,f=s,p=l(n)?i(t,n):c.nodeName?(c.nodeName+c.type).match(/^input(che|rad)/i)?c.checked:c.value:t;if(r.length>1){for(u=0;u<r.length-1;u++)f=f[r[u]]||(f[r[u]]={});f[r[u]]=p,p=s[o]}e.setState((a={},a[o]=p,a))}}function f(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(W.debounceRendering||V)(p)}function p(){var e,t=K;for(K=[];e=t.pop();)e._dirty&&D(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(y(e),t||z)}function m(e,t){return l(t)?e instanceof Text:l(t.nodeName)?v(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||q(e.nodeName)===q(t)}function y(e){var t=e.nodeName.defaultProps,n=o(e.attributes);if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r]);return e.children&&(n.children=e.children),n}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,r,o){if(e[$][t]=n,"className"===t&&(t="class"),"class"===t&&n&&"object"==typeof n&&(n=u(n)),"key"===t||"children"===t||"innerHTML"===t);else if("class"!==t||o)if("style"===t){if((!n||l(n)||l(r))&&(e.style.cssText=n||""),n&&"object"==typeof n){if(!l(r))for(var i in r)i in n||(e.style[i]="");for(var i in n)e.style[i]="number"!=typeof n[i]||F[i]?n[i]:n[i]+"px"}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=q(t.substring(2)),n?c[t]||e.addEventListener(t,_,!!J[t]):c[t]&&e.removeEventListener(t,_,!!J[t]),c[t]=n}else if("list"!==t&&"type"!==t&&!o&&t in e)w(e,t,null==n?"":n),null!=n&&n!==!1||e.removeAttribute(t);else{var s=o&&t.match(/^xlink\:?(.+)/);null==n||n===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",q(s[1])):e.removeAttribute(t):"object"==typeof n||a(n)||(s?e.setAttributeNS("http://www.w3.org/1999/xlink",q(s[1]),n):e.setAttribute(t,n))}else e.className=n||""}function w(e,t,n){try{e[t]=n}catch(r){}}function _(e){return this._listeners[e.type](W.event&&W.event(e)||e)}function x(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||q(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function N(e,t){var n=q(e),r=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function C(){for(var e;e=X.pop();)e.componentDidMount&&e.componentDidMount()}function P(e,t,n,r,o,i){Y++||(Z=o instanceof SVGElement);var a=k(e,t,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--Y||i||C(),a}function k(e,t,n,r){for(var o=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),l(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue=t,e;O(e)}return document.createTextNode(t)}if(a(t.nodeName))return R(e,t,n,r);var i=e,u=t.nodeName,c=Z;if(l(u)||(u=String(u)),Z="svg"===u||"foreignObject"!==u&&Z,e){if(!v(e,u)){for(i=N(u,Z);e.firstChild;)i.appendChild(e.firstChild);O(e)}}else i=N(u,Z);t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue=t.children[0]:(t.children||i.firstChild)&&E(i,t.children,n,r);var s=i[$];if(!s){i[$]=s={};for(var f=i.attributes,p=f.length;p--;)s[f[p].name]=f[p].value}return S(i,t.attributes,s),o&&"function"==typeof o.ref&&(s.ref=o.ref)(i),Z=c,i}function E(e,t,n,r){var o,i,l,u,c=e.childNodes,s=[],f={},p=0,d=0,h=c.length,v=0,y=t&&t.length;if(h)for(var b=0;b<h;b++){var g=c[b],w=y?(i=g._component)?i.__key:(i=g[$])?i.key:null:null;w||0===w?(p++,f[w]=g):s[v++]=g}if(y)for(var b=0;b<y;b++){l=t[b],u=null;var w=l.key;if(null!=w)p&&w in f&&(u=f[w],f[w]=void 0,p--);else if(!u&&d<v){for(o=d;o<v;o++)if(i=s[o],i&&m(i,l)){u=i,s[o]=void 0,o===v-1&&v--,o===d&&d++;break}!u&&d<v&&a(l.nodeName)&&r&&(u=s[d],s[d++]=void 0)}u=k(u,l,n,r),u&&u!==e&&u!==c[b]&&e.insertBefore(u,c[b]||null)}if(p)for(var b in f)f[b]&&O(f[b]);d<v&&j(s)}function j(e,t){for(var n=e.length;n--;)e[n]&&O(e[n],t)}function O(e,t){var n=e._component;n?H(n,!t):(e[$]&&e[$].ref&&e[$].ref(null),t||x(e),e.childNodes&&e.childNodes.length&&j(e.childNodes,t))}function S(e,t,n){for(var r in n)t&&r in t||null==n[r]||g(e,r,null,n[r],Z);if(t)for(var o in t)o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||g(e,o,t[o],n[o],Z)}function T(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function A(e,t,n){var r=new e(t,n),o=ee[e.name];if(I.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function U(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&W.syncComponentUpdates===!1&&e.base?f(e):D(e,1,o)),e.__ref&&e.__ref(e))}function D(e,t,n,i){if(!e._disable){var l,u,c,s,f=e.props,p=e.state,m=e.context,v=e.prevProps||f,b=e.prevState||p,g=e.prevContext||m,w=e.base,_=e.nextBase,x=w||_,N=e._component;if(w&&(e.props=v,e.state=b,e.context=g,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,m)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,m),e.props=f,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(u=e.render(f,p,m)),e.getChildContext&&(m=r(o(m),e.getChildContext()));d(u);)u=h(u,m);var k,E,j=u&&u.nodeName;if(a(j)){c=N;var S=y(u);c&&c.constructor===j?U(c,S,1,m):(k=c,c=A(j,S,m),c.nextBase=c.nextBase||_,c._parentComponent=e,e._component=c,U(c,S,0,m),D(c,1,n,!0)),E=c.base}else s=x,k=N,k&&(s=e._component=null),(x||1===t)&&(s&&(s._component=null),E=P(s,u,m,n||!w,x&&x.parentNode,!0));if(x&&E!==x&&c!==N){var T=x.parentNode;T&&E!==T&&T.replaceChild(E,x),s||k||!e._parentComponent||(x._component=null,O(x))}if(k&&H(k,E!==x),e.base=E,E&&!i){for(var R=e,I=e;I=I._parentComponent;)R=I;E._component=R,E._componentConstructor=R.constructor}}!w||n?X.unshift(e):!l&&e.componentDidUpdate&&e.componentDidUpdate(v,b,g);var M,W=e._renderCallbacks;if(W)for(;M=W.pop();)M.call(e);Y||i||C()}}function R(e,t,n,r){for(var o=e&&e._component,i=e,a=o&&e._componentConstructor===t.nodeName,l=a,u=y(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(U(o,u,3,n,r),e=o.base):(o&&!a&&(H(o,!0),e=i=null),o=A(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e),U(o,u,1,n,r),e=o.base,i&&e!==i&&(i._component=null,O(i))),e}function H(e,t){var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?H(r,t):n&&(n[$]&&n[$].ref&&n[$].ref(null),e.nextBase=n,t&&(b(n),T(e)),j(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function I(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function M(e,t,n){return P(n,e,{},!1,t)}var W={},L=[],B={},q=function(e){return B[e]||(B[e]=e.toLowerCase())},G="undefined"!=typeof Promise&&Promise.resolve(),V=G?function(e){G.then(e)}:setTimeout,z={},$="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",F={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},K=[],Q={},X=[],Y=0,Z=!1,ee={};r(I.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=s(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){D(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=I,e.render=M,e.rerender=p,e.options=W})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(6),f=r(s),p=function(e){var t=e.sectionName,n=e.pages;return c["default"].createElement("nav",{className:"sidebar"},c["default"].createElement("div",{className:"sidebar__inner"},c["default"].createElement(d,{url:"/"+t,title:"Introduction"}),n.map(function(e,t){var n=e.url,r=e.title,o=e.anchors;return c["default"].createElement(d,{key:"sidebar-item-"+t,index:t,url:"/"+n,title:r,anchors:o})})))},d=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.index,n=e.url,r=e.title,o=e.anchors,i=void 0===o?[]:o,a=i.length?"":"sidebar-item--empty",l=this.state.open?"sidebar-item--open":"";return c["default"].createElement("div",{className:"sidebar-item "+a+" "+l},c["default"].createElement(f["default"],{className:"sidebar-item__title",to:n},r),c["default"].createElement("i",{className:"sidebar-item__toggle icon-chevron-down",onClick:this.toggle.bind(this)}),c["default"].createElement("ul",{className:"sidebar-item__anchors"},i.map(function(e,r){return c["default"].createElement("li",{className:"sidebar-item__anchor",key:"anchor-"+t+"-"+r},c["default"].createElement(f["default"],{to:n+"#"+e.id},e.title))})))}},{key:"toggle",value:function(e){this.setState({open:!this.state.open})}}]),t}(c["default"].Component);t["default"]=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),l=r(a),u=function(e){var t=e.to,n=o(e,["to"]);return l["default"].createElement("a",i({href:t},n))};t["default"]=u}]);