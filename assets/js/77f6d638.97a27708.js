"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[9585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3691:(e,t,r)=>{r.d(t,{L:()=>o,W:()=>a});var n=r(7294);function o(e){let{children:t}=e;return n.createElement("span",{style:{backgroundColor:"#9747FF",borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}function a(e){let{children:t}=e;return n.createElement("span",{style:{backgroundColor:"#6A77D7",borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},8544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),a=r(3691);const i={sidebar_position:5},l="04. Model Deployment",p={unversionedId:"model-deployment",id:"model-deployment",title:"04. Model Deployment",description:"Request Driven - API Serving",source:"@site/docs/model-deployment.mdx",sourceDirName:".",slug:"/model-deployment",permalink:"/tutorial/docs/model-deployment",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/model-deployment.mdx",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1672112436,formattedLastUpdatedAt:"Dec 27, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3) Load Model from Registry",permalink:"/tutorial/docs/model-registry/load-model-from-registry"},next:{title:"05. FastAPI",permalink:"/tutorial/docs/category/05-fastapi"}},s={},d=[{value:"Request Driven - API Serving",id:"request-driven---api-serving",level:2},{value:"Event Driven - Stream Serving",id:"event-driven---stream-serving",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"04-model-deployment"},"04. Model Deployment"),(0,o.kt)("h2",{id:"request-driven---api-serving"},"Request Driven - API Serving"),(0,o.kt)("p",null,"\ud559\uc2b5\uc774 \uc644\ub8cc\ub41c \ubaa8\ub378\uc744 \ub2e4\ub978 \uc0ac\ub78c\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?\n\uc608\ub97c \ub4e4\uc5b4\uc11c \uac1c\uc640 \uace0\uc591\uc774\ub97c \ubd84\ub958\ud560 \uc218 \uc788\ub294 \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0, \ub204\uad70\uac00 \uc774 \ubaa8\ub378\uc744 \ud1b5\ud574 \uac1c\uc640 \uace0\uc591\uc774\ub97c \ubd84\ub958\ud558\uace0 \uc2f6\uc5b4\ud558\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4."),(0,o.kt)("p",null,"\ub2e8\uc21c\ud558\uac8c \uc0dd\uac01\ud588\uc744 \ub54c \uc800\uc7a5\ub41c \ubaa8\ub378\uacfc \ucd94\ub860\uc5d0 \uc0ac\uc6a9\ub41c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc804\ub2ec\ud558\uba74, \uc0ac\uc6a9\uc790\ub294 \uc804\ub2ec\ubc1b\uc740 \ubaa8\ub378\uacfc \ucf54\ub4dc\ub97c \uc774\uc6a9\ud574 \uac1c\uc640 \uace0\uc591\uc774\ub97c \ubd84\ub958\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4.\n\uadf8\ub7f0\ub370 \ub9cc\uc57d \ucd94\ub860\ud558\uace0\uc790 \ud558\ub294 \ub370\uc774\ud130\uac00 \ud578\ub4dc\ud3f0\uc5d0\uc11c \ucd2c\uc601\ud55c \uc0ac\uc9c4\uc774\uace0, \uc774\ub97c \ud578\ub4dc\ud3f0\uc5d0\uc11c \ubc14\ub85c \ubd84\ub958\ud558\uace0 \uc2f6\ub2e4\uba74 \uc804\ub2ec\ubc1b\uc740 \uac83\ub9cc\uc73c\ub85c\ub294 \uc0ac\uc6a9\ud558\uae30 \ud798\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc65c\ub0d0\ud558\uba74 \uc804\ub2ec\ubc1b\uc740 \ubaa8\ub378\uc774 \ub108\ubb34 \ucee4\uc11c \ud578\ub4dc\ud3f0\uc5d0\uc11c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc744 \uac00\ub2a5\uc131\uc774 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n\ub610\ud55c, \ud578\ub4dc\ud3f0\uc5d0 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ud328\ud0a4\uc9c0\uc758 \ubc84\uc804\uc774 \ub2ec\ub77c \ub2e4\ub974\uac8c \uc791\ub3d9\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ucc98\ub7fc \ub514\ubc14\uc774\uc2a4\uc758 \ud658\uacbd\uc5d0 \ub530\ub77c \ubaa8\ub378\uc758 \ud06c\uae30 \ubb38\uc81c, \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ud328\ud0a4\uc9c0 \ubc84\uc804 \ubb38\uc81c \ub4f1 \ub2e4\uc591\ud55c \ubb38\uc81c\uc5d0 \uc758\ud574 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uac01\uae30 \ub2e4\ub978 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \ubaa8\ub378\uc744 \uc9c1\uc811 \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub824\uc6b4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \ubc29\uc548\uc73c\ub85c\uc368 \ub370\uc774\ud130\ub9cc \uc804\ub2ec\ud574\uc8fc\uba74 \uc5b4\ub5a8\uae4c\uc694?\n\uc704\uc758 \uc608\uc2dc\uc5d0\uc11c\ub294 \uac1c \ub610\ub294 \uace0\uc591\uc774\ub97c \ucc0d\uc740 \uc0ac\uc9c4\uc744 \ubaa8\ub378\uc744 \ub3cc\ub9b4 \uc218 \uc788\ub294 \ud658\uacbd\uc73c\ub85c \uc804\uc1a1\ud558\uba74, \uadf8 \ud658\uacbd\uc5d0\uc11c \uc9c1\uc811 \ubaa8\ub378\uc744 \ub3cc\ub824\uc11c \ub098\uc628 \uacb0\uacfc\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc804\ub2ec\ud558\uac8c \ub429\ub2c8\ub2e4.\n\uc774\ub807\uac8c \ud558\uba74 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uc0ac\ub78c\uc740 \ubaa8\ub378\uc744 \uc9c1\uc811 \ub3cc\ub9ac\uc9c0 \uc54a\uace0\ub3c4 \uc6d0\ud558\ub294 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\uc640 \uac19\uc774 \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \ud574\ub2f9 \uc694\uccad\uc5d0 \ub300\ud55c \uc751\ub2f5\uc744 \ubc1b\uc544 \uacb0\uacfc\ub97c \uc5bb\ub294 \ubc29\uc2dd\uc740 \ube44\ub2e8 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\ubfd0\ub9cc \uc544\ub2c8\ub77c \ub9ce\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.\n\uc774\ub7ec\ud55c \ubc29\uc2dd\uc744 Request-Response \ubc29\uc2dd\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rest-api",src:r(4953).Z,width:"2159",height:"869"}),"\n","[\uadf8\ub9bc 5-1]"," Rest API (\ucd9c\ucc98: ",(0,o.kt)("a",{parentName:"p",href:"https://phpenthusiast.com/blog/what-is-rest-api"},"https://phpenthusiast.com/blog/what-is-rest-api"),")")),(0,o.kt)("p",null,"\ub514\ubc14\uc774\uc2a4\ub07c\ub9ac Request-Response \ub97c \ud558\uae30 \uc704\ud574\uc11c\ub294 \uc694\uccad\uacfc \uc751\ub2f5\uc744 \uc5b4\ub5bb\uac8c \ud560 \uac83\uc778\uc9c0\uc5d0 \ub300\ud574\uc11c \uc0ac\uc804\uc5d0 \uc815\uc758\ud558\ub294 \uc808\ucc28\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc774\ub7ec\ud55c \uac83 \uc911 \uac00\uc7a5 \ub300\ud45c\uc801\uc778 \ubc29\ubc95\uc774 \ubc14\ub85c REST API \uc785\ub2c8\ub2e4."),(0,o.kt)(a.L,{mdxType:"Part"},"05. FastAPI")," \ud30c\ud2b8\uc5d0\uc11c\ub294 REST API \ub97c \uad6c\ud604\ud558\ub294 \uc624\ud508 \uc18c\uc2a4 \uc911 \uac00\uc7a5 \ub300\uc911\uc801\uc778 FastAPI \ub97c \ud559\uc2b5\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,o.kt)(a.L,{mdxType:"Part"},"06. API Serving")," \ud30c\ud2b8\uc5d0\uc11c\ub294 REST API \ub97c \ud1b5\ud574 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uc5ec \uacb0\uacfc\ub97c \uc5bb\ub294 API Serving \uc5d0 \ub300\ud574\uc11c \ud559\uc2b5\ud569\ub2c8\ub2e4.",(0,o.kt)("h2",{id:"event-driven---stream-serving"},"Event Driven - Stream Serving"),(0,o.kt)("p",null,"\ub9cc\uc57d, \ub370\uc774\ud130\uac00 \uacc4\uc18d\ud574\uc11c \uc313\uc774\uace0 \uc788\ub294 \uc0c1\ud669\uc774\ub77c\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",(0,o.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uc5b4 \uacf5\uc7a5\uc5d0\uc11c \uc5b4\ub5a4 \uc13c\uc11c\uac00 \ubd80\ucc29\ub418\uc5b4 \uc788\uace0 \uc13c\uc11c\ub294 \uc815\ud574\uc9c4 \uc8fc\uae30\ub9c8\ub2e4 \uacc4\uc18d\ud574\uc11c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uc800\uc7a5\ud558\uace0 \uc788\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud574 \ubd05\uc2dc\ub2e4.\n\uc774\ub807\uac8c \uc9c0\uc18d\uc801\uc73c\ub85c \uc218\uc9d1\ub418\uace0 \uc788\ub294 \ub370\uc774\ud130\uc5d0 \ub300\ud574\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc774\uc0c1 \ud0d0\uc9c0\ub97c \ud560 \uc218 \uc788\ub294 \ubaa8\ub378\uc744 \uc11c\ube59\ud574\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud560 \uc218 \uc788\uc744\uae4c\uc694?"),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \uacbd\uc6b0, \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uc788\ub294 \uacf3\uc5d0\uc11c \ubaa8\ub378\uc5d0\uac8c \uacc4\uc18d\ud574\uc11c \uc694\uccad\uc744 \ubcf4\ub0b4 \uacb0\uacfc\ub97c \ubc1b\uc544\uc624\uba74 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774 \ubc29\ubc95\uc740 \uc5ec\ub7ec \ubb38\uc81c\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc218\uc9d1\ud558\ub294 \uc13c\uc11c\ub294 \ubcf4\ud1b5 \uc544\uc8fc \uc791\uc740 \ub2e8\uc704\uc758 \uc5c5\ubb34\ub9cc \ucc98\ub9ac\ud560 \uc218 \uc788\uae30\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc5c6\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc694\uccad\uc744 \ud1b5\ud574 \uacb0\uacfc\ub97c \ubc1b\ub294 \uc8fc\uccb4\uac00 \uc544\ub2cc \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4.\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub300\uc2e0 \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \uacb0\uacfc\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\ub294 \uc8fc\uccb4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. "),(0,o.kt)("p",null,"\uc704\uc758 \uc608\uc2dc\uc640 \uac19\uc774 \uc9c0\uc18d\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uc694\uccad\uc744 \ubcf4\ub0b4 \uacb0\uacfc\ub97c \uc218\uc9d1\ud558\ub294 \uc0c1\ud669\uc744 Stream \uc774\ub77c\uace0 \ud45c\ud604\ud569\ub2c8\ub2e4.\n\uc774\ub97c \uc704\ud574 ",(0,o.kt)(a.L,{mdxType:"Part"},"07. Kafka")," \ud30c\ud2b8\uc5d0\uc11c \uc778\ud504\ub77c\ub97c \uc8fc\ub85c \ub2e4\ub8e8\ub294 Kafka \ub97c \ud559\uc2b5\ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 ",(0,o.kt)(a.L,{mdxType:"Part"},"07. Stream")," \ud30c\ud2b8\uc5d0\uc11c \ubaa8\ub378\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc11c \uacb0\uacfc\ub97c \uc218\uc9d1\ud558\ub294 Stream Serving \uc744 \ud559\uc2b5\ud558\uace0, \uc774\ub97c Dashboard \ub85c \uc5f0\uacb0\ud558\uc5ec \uc2dc\uac01\ud654\ud558\ub294 Grafana \uc5d0 \ub300\ud574 \ud559\uc2b5\ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0},4953:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rest-api-0e5503cbd87f7d1425eacd251c2bbc2e.png"}}]);