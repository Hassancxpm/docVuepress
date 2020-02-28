(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{260:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install","aria-hidden":"true"}},[t._v("#")]),t._v(" 🚀 How to install")]),t._v(" "),s("h2",{attrs:{id:"script-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-loader","aria-hidden":"true"}},[t._v("#")]),t._v(" Script Loader")]),t._v(" "),s("p",[t._v("After jQuery loaded on your page, you will need to load the following script that comes in 2 environments depending on the progress of your project:")]),t._v(" "),s("h2",{attrs:{id:"pre-production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-production","aria-hidden":"true"}},[t._v("#")]),t._v(" Pre-production")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://connect.preprod.comexposium-webservices.com/js/loader.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#production","aria-hidden":"true"}},[t._v("#")]),t._v(" Production")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://connect.prod.comexposium-webservices.com/js/loader.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("h3",{attrs:{id:"jquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jquery","aria-hidden":"true"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),s("p",[t._v("In order to use the "),s("strong",[t._v("ComexposiumConnect widget")]),t._v(", You first need to load jQuery. We encourage third party applications to use at least jQuery 2.0, but we strongly recommend to use a more recent version (3.x).")]),t._v(" "),s("p",[t._v("As a security, if we don't detect jQuery or if the version is older than 2.0, we dynamically load jQuery 3.1.1 without taking hand on the dollar ($) Javascript var. It allows you to still use your version or your library. The new version is available in the var:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cxpm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jQuery\n")])])]),s("ul",[s("li",[t._v("If no $ var exists in the page, we create it with the loaded version.")]),t._v(" "),s("li",[t._v("If $ is ok with the version, we copy it to window.cxpm.jQuery.")])]),t._v(" "),s("p",[t._v("Once the loader.min.js script is loaded and authorized by the Comexposium Team, you can access to the global variables "),s("strong",[t._v("comexposiumCap")]),t._v(" and "),s("strong",[t._v("comexposiumConnect")]),t._v(".")]),t._v(" "),s("p",[t._v("You can also check which version of the loader and SDK you work with:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("cxpm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("useraccount\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {loaderBuild: "201X.X.X", sdkBuild: "201X.X.X"}')]),t._v("\n")])])]),s("p",[t._v("Now, you just have to include the "),s("router-link",{attrs:{to:"/guide/html-code.html"}},[t._v("HTML Code")]),t._v(" in your page to load the widget.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);