(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{244:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"check-user-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-user-token","aria-hidden":"true"}},[s._v("#")]),s._v(" 🔦 Check user token")]),s._v(" "),e("p",[s._v("This route will compared the email to the JWT Token in the backend.\nAllowed fields to be modified")]),s._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("ENDPOINT")]),s._v(" "),e("th",[s._v("DESCRIPTION")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("METHOD")]),s._v(" "),e("th",[s._v("EXEMPLE")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[s._v("/_plugin/Comexposium/user/checkUserToken")])]),s._v(" "),e("td",[e("em",[s._v("Check if the JWT is based on the email given in parameter")])]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("POST")]),s._v(" "),e("td",[e("a",{attrs:{href:"https://api.preprod.comexposium-sso.com/_login",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://api.preprod.comexposium-sso.com/_login"),e("OutboundLink")],1)])])])]),s._v(" "),e("h2",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[s._v("#")]),s._v(" Body")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my@email.com"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h2",{attrs:{id:"call-exemple"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#call-exemple","aria-hidden":"true"}},[s._v("#")]),s._v(" Call Exemple")]),s._v(" "),e("div",{staticClass:"language-curl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('curl -X POST "https://api.preprod.comexposium-sso.com/_plugin/Comexposium/user/checkUserToken" -H "accept: application/json" -H "Authorization: Bearer myBearerToken" -H "content-type: application/json" -d "{ \\"email\\": \\"my@email.com\\"}"\n')])])]),e("h2",{attrs:{id:"details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[s._v("#")]),s._v(" Details")]),s._v(" "),e("h3",{attrs:{id:"responses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responses","aria-hidden":"true"}},[s._v("#")]),s._v(" Responses")]),s._v(" "),e("p",[s._v("You can only get a 200 or 401 status code by using this endpoint, you will find results in the statusCode attribute .")]),s._v(" "),e("h4",{attrs:{id:"success"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#success","aria-hidden":"true"}},[s._v("#")]),s._v(" Success")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("strong",[s._v("statusCode: 0, message: generic_success, data: { isValid: true / false")])])]),s._v(" "),e("p",[s._v("Exemple:")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"requestId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c4815bc2-5bbb-42e7-a190-def577acdfba"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Comexposium/userController"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checkUserToken"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"collection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"volatile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"statusCode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"generic_success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"isValid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h4",{attrs:{id:"errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#errors","aria-hidden":"true"}},[s._v("#")]),s._v(" Errors")]),s._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[e("strong",[s._v("statusCode: 201")]),s._v(": "),e("em",[s._v("Missing credentials")])]),s._v(" "),e("p",[e("strong",[s._v("statusCode: 202")]),s._v(": "),e("em",[s._v("Internal error")])]),s._v(" "),e("p",[e("strong",[s._v("status: 401")]),s._v(": "),e("em",[s._v("Json Web Token Error")])])]),s._v(" "),e("p",[s._v("Exemple:")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"requestId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"be89a1ac-e45a-416c-a01c-f79c138656db"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Json Web Token Error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"stack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UnauthorizedError: Json Web Token Error\\n    at UnauthorizedError (/opt/kuzzle/node_modules/kuzzle-common-objects/lib/errors/unauthorizedError.js:5:5)\\n    at TokenRepository.verifyToken (/opt/kuzzle/lib/api/core/models/repositories/tokenRepository.js:152:17)\\n    at FunnelController.checkRights (/opt/kuzzle/lib/api/controllers/funnelController.js:316:43)\\n    at FunnelController.execute (/opt/kuzzle/lib/api/controllers/funnelController.js:218:10)\\n    at kuzzle.pluginsManager.trigger.then.mutatedRequest (/opt/kuzzle/lib/api/controllers/routerController.js:146:28)\\n    at tryCatcher (/opt/kuzzle/node_modules/bluebird/js/release/util.js:16:23)\\n    at Promise._settlePromiseFromHandler (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:512:31)\\n    at Promise._settlePromise (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:569:18)\\n    at Promise._settlePromise0 (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:614:10)\\n    at Promise._settlePromises (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:693:18)\\n    at Async._drainQueue (/opt/kuzzle/node_modules/bluebird/js/release/async.js:133:16)\\n    at Async._drainQueues (/opt/kuzzle/node_modules/bluebird/js/release/async.js:143:10)\\n    at Immediate.Async.drainQueues (/opt/kuzzle/node_modules/bluebird/js/release/async.js:17:14)\\n    at runCallback (timers.js:637:20)\\n    at tryOnImmediate (timers.js:610:5)\\n    at processImmediate [as _immediateCallback] (timers.js:582:5)"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Comexposium/userController"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checkUserToken"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"collection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"volatile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);