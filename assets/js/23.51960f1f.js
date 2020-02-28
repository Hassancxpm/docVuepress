(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"recuperation-des-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recuperation-des-types","aria-hidden":"true"}},[t._v("#")]),t._v(" 📡 Récupération des types")]),t._v(" "),e("p",[t._v("Cette route récupère tous les types d'utilisateurs possibles et leur userField correspondant.")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("ENDPOINT")]),t._v(" "),e("th",[t._v("DESCRIPTION")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("METHODE")]),t._v(" "),e("th",[t._v("EXEMPLE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("/_plugin/Comexposium/user/getAllUserTypes")])]),t._v(" "),e("td",[e("em",[t._v("Cette route récupère tous les types d'utilisateurs possibles et leur userField correspondant.")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://api.preprod.comexposium-sso.com/_login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.preprod.comexposium-sso.com/_login"),e("OutboundLink")],1)])])])]),t._v(" "),e("h2",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[t._v("#")]),t._v(" Body")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my@email.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"exemple-d-appel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemple-d-appel","aria-hidden":"true"}},[t._v("#")]),t._v(" Exemple d'appel")]),t._v(" "),e("div",{staticClass:"language-curl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl -X GET "https://api.preprod.comexposium-sso.com/_plugin/Comexposium/user/getAllUserTypes" -H "accept: application/json" -H "Authorization: Bearer myBearerToken"\n')])])]),e("h2",{attrs:{id:"details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[t._v("#")]),t._v(" Détails")]),t._v(" "),e("h3",{attrs:{id:"reponses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reponses","aria-hidden":"true"}},[t._v("#")]),t._v(" Réponses")]),t._v(" "),e("p",[t._v("Vous pouvez obtenir un code de statut 200 ou 401 en utilisant ce endpoint, vous trouverez l'information dans l'attribut statusCode.")]),t._v(" "),e("h4",{attrs:{id:"succes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#succes","aria-hidden":"true"}},[t._v("#")]),t._v(" Succès")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("strong",[t._v('statusCode: 0, message: generic_success, data: userTypes: ["type1","type2"]')])])]),t._v(" "),e("p",[t._v("Exemple:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"973a7c52-b3b6-409a-9443-715fe7dc71fb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Comexposium/userController"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getAllUserTypes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"volatile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"generic_success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userTypes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exhibitor"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"speaker"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"erreurs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#erreurs","aria-hidden":"true"}},[t._v("#")]),t._v(" Erreurs")]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[e("strong",[t._v("statusCode: 228")]),t._v(": "),e("em",[t._v("Internal error")])]),t._v(" "),e("p",[e("strong",[t._v("status: 401")]),t._v(": "),e("em",[t._v("Json Web Token Error")])])]),t._v(" "),e("p",[t._v("Exemple:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b0bcb8ca-d121-4ff1-9f51-e17ccb7cb441"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Json Web Token Error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UnauthorizedError: Json Web Token Error\\n    at UnauthorizedError (/opt/kuzzle/node_modules/kuzzle-common-objects/lib/errors/unauthorizedError.js:5:5)\\n    at TokenRepository.verifyToken (/opt/kuzzle/lib/api/core/models/repositories/tokenRepository.js:152:17)\\n    at FunnelController.checkRights (/opt/kuzzle/lib/api/controllers/funnelController.js:316:43)\\n    at FunnelController.execute (/opt/kuzzle/lib/api/controllers/funnelController.js:218:10)\\n    at kuzzle.pluginsManager.trigger.then.mutatedRequest (/opt/kuzzle/lib/api/controllers/routerController.js:146:28)\\n    at tryCatcher (/opt/kuzzle/node_modules/bluebird/js/release/util.js:16:23)\\n    at Promise._settlePromiseFromHandler (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:512:31)\\n    at Promise._settlePromise (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:569:18)\\n    at Promise._settlePromise0 (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:614:10)\\n    at Promise._settlePromises (/opt/kuzzle/node_modules/bluebird/js/release/promise.js:693:18)\\n    at Async._drainQueue (/opt/kuzzle/node_modules/bluebird/js/release/async.js:133:16)\\n    at Async._drainQueues (/opt/kuzzle/node_modules/bluebird/js/release/async.js:143:10)\\n    at Immediate.Async.drainQueues (/opt/kuzzle/node_modules/bluebird/js/release/async.js:17:14)\\n    at runCallback (timers.js:637:20)\\n    at tryOnImmediate (timers.js:610:5)\\n    at processImmediate [as _immediateCallback] (timers.js:582:5)"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Comexposium/userController"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getAllUserTypes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"volatile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);