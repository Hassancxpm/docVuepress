(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{222:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creation-avec-mot-de-passe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation-avec-mot-de-passe","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔧 Création avec mot de passe")]),t._v(" "),a("p",[t._v("Création d'un utilisateur avec un mot de passe. Cette route créer un compte avec le mot de passe que vous définissez dans le corps de la requête.")]),t._v(" "),a("p",[t._v("Vous pouvez autoriser ou interdire l'envoi du courrier électronique avec le dernier paramètre "),a("code",[t._v('"isSendingEmailAllowed"')]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ENDPOINT")]),t._v(" "),a("th",[t._v("DESCRIPTION")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("METHODE")]),t._v(" "),a("th",[t._v("EXEMPLE")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("/_plugin/Comexposium/user/create")])]),t._v(" "),a("td",[a("em",[t._v("Création d'un utilisateur avec un mot de passe. Cette route créer un compte avec le mot de passe que vous définissez dans le corps de la requête")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://api.preprod.comexposium-sso.com/_login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.preprod.comexposium-sso.com/_login"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my@email.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fromSalon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foire_de_paris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fromSessionSalon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foire_de_paris_2017"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fre-FR // Accepted languages are fre-FR and eng-GB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fromThirdParty"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f9c7c303bbc3531781fe52b6e4123d5e40ba8581"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyPasswordSecur3d!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSendingEmailAllowed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"exemple-d-appel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exemple-d-appel","aria-hidden":"true"}},[t._v("#")]),t._v(" Exemple d'appel")]),t._v(" "),a("div",{staticClass:"language-curl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl -X POST "https://api.preprod.comexposium-sso.com/_plugin/Comexposium/user/createWithPassword" -H "accept: application/json" -H "content-type: application/json" -d "{ \\"email\\": \\"my@email.com\\", \\"fromSalon\\": \\"foire_de_paris\\", \\"fromSessionSalon\\": \\"foire_de_paris_2017\\", \\"language\\": \\"fre-FR // Accepted languages are fre-FR and eng-GB\\", \\"fromThirdParty\\": \\"d7770a23e600e4ce6f8eae6211a24e92a937eb1e\\", \\"password\\": \\"MyPasswordSecur3d!\\", \\"isSendingEmailAllowed\\": true}"\n')])])]),a("h2",{attrs:{id:"details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[t._v("#")]),t._v(" Détails")]),t._v(" "),a("h3",{attrs:{id:"reponses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reponses","aria-hidden":"true"}},[t._v("#")]),t._v(" Réponses")]),t._v(" "),a("p",[t._v("Vous pouvez obtenir un code de statut 200 ou 401 en utilisant ce endpoint, vous trouverez l'information dans l'attribut statusCode.")]),t._v(" "),a("h4",{attrs:{id:"succes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#succes","aria-hidden":"true"}},[t._v("#")]),t._v(" Succès")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[a("strong",[t._v('statusCode": 0, "message": "create_user_success"')])])]),t._v(" "),a("p",[t._v("Exemple:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"43f0ff05-5986-490d-8cf3-3e6a7b97e9a1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"controller"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Comexposium/AuthController"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createUserWithPassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collection"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"volatile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"generic_success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"erreurs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erreurs","aria-hidden":"true"}},[t._v("#")]),t._v(" Erreurs")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",[a("strong",[t._v("statusCode: 1 || 132 || 133 || 134 || 135 || 161 || 170")]),t._v(": "),a("em",[t._v("Internal error")])]),t._v(" "),a("p",[a("strong",[t._v("statusCode: 124")]),t._v(": "),a("em",[t._v("Wrong configuration on url reference")])]),t._v(" "),a("p",[a("strong",[t._v("statusCode: 131")]),t._v(": "),a("em",[t._v("Missing credentials")])]),t._v(" "),a("p",[a("strong",[t._v("statusCode: 143")]),t._v(": "),a("em",[t._v("Email already exists")])]),t._v(" "),a("p",[a("strong",[t._v("statusCode: 187")]),t._v(": "),a("em",[t._v("There is no configured template")])])]),t._v(" "),a("p",[t._v("Exemple:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7316640e-a565-40c8-891e-56bbc1a395cf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"controller"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Comexposium/AuthController"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createUserWithPassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collection"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"volatile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("143")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create_user_already_exist"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);