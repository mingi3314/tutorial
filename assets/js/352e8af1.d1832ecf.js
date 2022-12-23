"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[4],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(k,i(i({ref:t},f),{},{components:r})):n.createElement(k,i({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3691:(e,t,r)=>{r.d(t,{L:()=>a,W:()=>o});var n=r(7294);function a(e){let{children:t}=e;return n.createElement("span",{style:{backgroundColor:"#9747FF",borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}function o(e){let{children:t}=e;return n.createElement("span",{style:{backgroundColor:"#6A77D7",borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},3683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(7462),a=(r(7294),r(3905)),o=r(3691);const i={sidebar_position:0,description:"\ud83d\udccc Overview of Kafka Chapter"},l="0) Overview",c={unversionedId:"kafka/overview",id:"kafka/overview",title:"0) Overview",description:"\ud83d\udccc Overview of Kafka Chapter",source:"@site/docs/kafka/overview.mdx",sourceDirName:"kafka",slug:"/kafka/overview",permalink:"/tutorial/docs/kafka/overview",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/kafka/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Kim dong hyun, \uae40\ub3d9\ud604",lastUpdatedAt:1671770436,formattedLastUpdatedAt:"Dec 23, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"\ud83d\udccc Overview of Kafka Chapter"},sidebar:"tutorialSidebar",previous:{title:"07. Kafka",permalink:"/tutorial/docs/category/07-kafka"},next:{title:"1) Kafka Introduction",permalink:"/tutorial/docs/kafka/kafka-introduction"}},p={},f=[],s={toc:f};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0-overview"},"0) Overview"),(0,a.kt)(o.L,{mdxType:"Part"},"04. Model Deployment")," \ud30c\ud2b8\uc5d0\uc11c \uc124\uba85\ud55c Stream Serving \uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc6b0\uc120 \uc2e4\uc2dc\uac04\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\ucd95\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ubc88 \ud30c\ud2b8\uc5d0\uc11c\ub294 Kafka \ub97c \uc774\uc6a9\ud558\uc5ec \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\ucd95\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,a.kt)("p",null,"\uc774\ubc88 \ud30c\ud2b8\ub97c \ud1b5\ud574 \uc644\uc131\ub418\ub294 workflow \ub97c \uadf8\ub9bc\uc73c\ub85c \ub098\ud0c0\ub0b4\uba74 ","[\uadf8\ub9bc 7-1]","\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"FastAPI workflow",src:r(2807).Z,width:"1648",height:"936"}),"\n","[\uadf8\ub9bc 7-1]"," Kafka Workflow")),(0,a.kt)("p",null,"\uc2e4\uc2b5\uc5d0 \uc55e\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uac00\uc815\uc744 \ud569\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Source DB: \ub370\uc774\ud130\uac00 \uacc4\uc18d\ud574\uc11c \uc313\uc774\uace0 \uc788\ub294 \uc678\ubd80 DB"),(0,a.kt)("li",{parentName:"ol"},"Target DB: \uc678\ubd80\uc5d0\uc11c \uac00\uc838\uc628 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud55c \ub4a4 \uc313\uc774\ub294 \ub0b4\ubd80 DB")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c Source DB \ub85c \uc0ac\uc6a9\ud558\ub294 DB \uc11c\ubc84\ub294 ",(0,a.kt)(o.L,{mdxType:"Part"}," 01. Database")," \ud30c\ud2b8\uc5d0\uc11c \uc791\uc131\ud55c PostgreSQL DB \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc774\ubc88 \ud30c\ud2b8\uc5d0\uc11c\ub294 Kafka \ub97c \uc774\uc6a9\ud558\uc5ec Source DB \uc11c\ubc84\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c Target DB \ub85c \uc804\ub2ec\ud558\ub294 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}u.isMDXComponent=!0},2807:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kafka-1-14dfd8b0cf756e6505592ab84c9bc8de.png"}}]);