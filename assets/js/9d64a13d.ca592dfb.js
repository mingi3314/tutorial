"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:0},i="0) Overview",a={unversionedId:"model-development/overview",id:"model-development/overview",title:"0) Overview",description:"\uc774\ubc88 \ucc55\ud130\uc5d0\uc11c \uad6c\ud604\ud560 workflow\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",source:"@site/docs/model-development/overview.md",sourceDirName:"model-development",slug:"/model-development/overview",permalink:"/tutorial/docs/model-development/overview",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/model-development/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"02. Model Development",permalink:"/tutorial/docs/category/02-model-development"},next:{title:"1) Base Model Development",permalink:"/tutorial/docs/model-development/base-model-development"}},c={},p=[],s={toc:p};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0-overview"},"0) Overview"),(0,o.kt)("p",null,"\uc774\ubc88 \ucc55\ud130\uc5d0\uc11c \uad6c\ud604\ud560 workflow\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"basic workflow",src:r(7314).Z,width:"1226",height:"360"}),"\n","[\uadf8\ub9bc 2-1]"," Basic Workflow")),(0,o.kt)("p",null,"\uc6b0\uc120, scikit-learn \uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub370\uc774\ud130\ub97c \ud1b5\ud574 \ubaa8\ub378\uc744 \ud559\uc2b5 \ud6c4 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \ubd88\ub7ec\uc640 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"database workflow",src:r(6283).Z,width:"1458",height:"360"}),"\n","[\uadf8\ub9bc 2-2]"," Database Workflow")),(0,o.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c ","[\uadf8\ub9bc 2-2]"," \ucc98\ub7fc \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \ubd80\ubd84\uc744 \uc218\uc815\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc0ac\uc6a9\ud558\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc55e\uc120 \ucc55\ud130\uc5d0\uc11c \ub9cc\ub4e0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0},7314:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/model-development-1-fc4bff414b78e995b5af2a923ef5a812.png"},6283:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/model-development-2-f92cc8d8751db9ace94560401ce703ee.png"}}]);