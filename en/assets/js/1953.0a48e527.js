"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[1953],{2435:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(94);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).sort((function(e,t){return t[1].path.localeCompare(e[1].path)})).find((function(e){var n=e[1];return!!(0,r.matchPath)(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=(0,t.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,i,a=(0,t.getActiveVersion)(e,n),s=null==a?void 0:a.docs.find((function(e){return!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:s,alternateDocVersions:s?(o=s.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,n){var r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},7333:function(e,t,n){t.gA=t.zh=t._r=void 0;var r=n(8145),o=n(94),i=r.__importStar(n(336)),a=n(2435),s={};t._r=function(){var e;return null!=(e=(0,i.default)()["docusaurus-plugin-content-docs"])?e:s};t.zh=function(e){return(0,i.usePluginData)("docusaurus-plugin-content-docs",e)};t.gA=function(e){void 0===e&&(e={});var n=(0,t._r)(),r=(0,o.useLocation)().pathname;return(0,a.getActivePlugin)(n,r,e)}},1953:function(e,t,n){n.d(t,{d:function(){return w}});var r=n(5149);var o=n(6687),i=n(674),a=n(7515),s=n(3336);n(8190).Z.canUseDOM?o.useLayoutEffect:o.useEffect;Error,Symbol("EmptyContext");Symbol("EmptyContext");var u="localStorage";function c(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,l||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),l=!0),null}var t}var l=!1;var f={get:function(){return null},set:function(){},del:function(){}};function g(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=c(null==t?void 0:t.persistence);return null===n?f:{get:function(){try{return n.getItem(e)}catch(t){return console.error("Docusaurus storage error, can't get key="+e,t),null}},set:function(t){try{n.setItem(e,t)}catch(r){console.error("Docusaurus storage error, can't set "+e+"="+t,r)}},del:function(){try{n.removeItem(e)}catch(t){console.error("Docusaurus storage error, can't delete key="+e,t)}}}}n(6313);var d=n(7333);n(1828);d._r;var v=["zero","one","two","few","many","other"];function m(e){return v.filter((function(t){return e.includes(t)}))}m(["one","other"]);n(9190);g("docusaurus.announcement.dismiss"),g("docusaurus.announcement.id");n(513);var p=n(60),h=(n(7083),n(3110));function w(e){var t=e.title,n=e.description,i=e.keywords,a=e.image,s=e.children,u=function(e){var t=(0,r.Z)().siteConfig,n=t.title,o=t.titleDelimiter;return null!=e&&e.trim().length?e.trim()+" "+o+" "+n:n}(t),c=(0,h.C)().withBaseUrl,l=a?c(a,{absolute:!0}):void 0;return o.createElement(p.Z,null,t&&o.createElement("title",null,u),t&&o.createElement("meta",{property:"og:title",content:u}),n&&o.createElement("meta",{name:"description",content:n}),n&&o.createElement("meta",{property:"og:description",content:n}),i&&o.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),l&&o.createElement("meta",{property:"og:image",content:l}),l&&o.createElement("meta",{name:"twitter:image",content:l}),s)}var y="theme";g(y)}}]);