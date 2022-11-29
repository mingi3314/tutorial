"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[31],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=r.createContext({}),d=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=d(e.components);return r.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},_=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),_=d(n),m=t,u=_["".concat(o,".").concat(m)]||_[m]||s[m]||l;return n?r.createElement(u,i(i({ref:a},c),{},{components:n})):r.createElement(u,i({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=_;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},9135:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),t=(n(7294),n(3905));const l={sidebar_position:1},i="1) Base Model Development",p={unversionedId:"model-development/base-model-development",id:"model-development/base-model-development",title:"1) Base Model Development",description:"\ubaa9\ud45c",source:"@site/docs/model-development/base-model-development.md",sourceDirName:"model-development",slug:"/model-development/base-model-development",permalink:"/tutorial/docs/model-development/base-model-development",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/model-development/base-model-development.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"0) Overview",permalink:"/tutorial/docs/model-development/overview"},next:{title:"2) Model Pipeline",permalink:"/tutorial/docs/model-development/base-model-pipeline"}},o={},d=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc2a4\ud399 \uba85\uc138\uc11c",id:"\uc2a4\ud399-\uba85\uc138\uc11c",level:2},{value:"0. \ud328\ud0a4\uc9c0 \uc124\uce58",id:"0-\ud328\ud0a4\uc9c0-\uc124\uce58",level:2},{value:"1. \ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130 \uc120\uc815",id:"1-\ud559\uc2b5-\ubc0f-\ud3c9\uac00-\ub370\uc774\ud130-\uc120\uc815",level:2},{value:"2. \ubaa8\ub378 \uac1c\ubc1c \ubc0f \ud559\uc2b5",id:"2-\ubaa8\ub378-\uac1c\ubc1c-\ubc0f-\ud559\uc2b5",level:2},{value:"3. \ud559\uc2b5\ub41c \ubaa8\ub378 \uc800\uc7a5",id:"3-\ud559\uc2b5\ub41c-\ubaa8\ub378-\uc800\uc7a5",level:2},{value:"4. \uc800\uc7a5\ub41c \ubaa8\ub378 \ubd88\ub7ec\uc624\uae30",id:"4-\uc800\uc7a5\ub41c-\ubaa8\ub378-\ubd88\ub7ec\uc624\uae30",level:2},{value:"5. \uc804\uccb4 \ucf54\ub4dc",id:"5-\uc804\uccb4-\ucf54\ub4dc",level:2},{value:"5.1 <code>base_train.py</code>",id:"51-base_trainpy",level:3},{value:"5.2 <code>base_validate_save_model.py</code>",id:"52-base_validate_save_modelpy",level:3}],c={toc:d};function s(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"1-base-model-development"},"1) Base Model Development"),(0,t.kt)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),(0,t.kt)("p",null,"\ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0 \uc800\uc7a5\ud558\ub294 \uae30\ubcf8\uc801\uc778 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,t.kt)("h2",{id:"\uc2a4\ud399-\uba85\uc138\uc11c"},"\uc2a4\ud399 \uba85\uc138\uc11c"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130 \uc120\uc815",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"scikit-learn \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 iris \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc635\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},"\ubd88\ub7ec\uc628 \ub370\uc774\ud130\ub97c \ud559\uc2b5 \ub370\uc774\ud130\uc640 \ud3c9\uac00 \ub370\uc774\ud130\ub85c \ub098\ub215\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},"\uc774 \ub54c \ub098\ub258\uc5b4\uc9c4 \ub370\uc774\ud130\ub294 \ucd94\ud6c4\uc5d0 \uc7ac\ud604\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."))),(0,t.kt)("li",{parentName:"ol"},"\ubaa8\ub378 \uac1c\ubc1c \ubc0f \ud559\uc2b5",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"scikit-learn \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Standard Scaler \uc544 SVC\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"1. \ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130 \uc120\uc815")," \uc5d0\uc11c \ub098\ub208 \ud559\uc2b5 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 \ubaa8\ub378\uc744 \ud559\uc2b5\ud569\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},"\ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \uc774\uc6a9\ud574 \ud559\uc2b5 \ub370\uc774\ud130\uc640 \ud3c9\uac00 \ub370\uc774\ud130\uc758 \uc815\ud655\ub3c4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."))),(0,t.kt)("li",{parentName:"ol"},"\ud559\uc2b5\ub41c \ubaa8\ub378 \uc800\uc7a5",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\ud559\uc2b5\ub41c \ubaa8\ub378\uc744 ",(0,t.kt)("inlineCode",{parentName:"li"},"joblib")," , ",(0,t.kt)("inlineCode",{parentName:"li"},"pickle")," , ",(0,t.kt)("inlineCode",{parentName:"li"},"dill")," \ub4f1\uc758 \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud574 \uc800\uc7a5\ud569\ub2c8\ub2e4."))),(0,t.kt)("li",{parentName:"ol"},"\uc800\uc7a5\ub41c \ubaa8\ub378 \ubd88\ub7ec\uc624\uae30",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\ubaa8\ub378\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc800\uc7a5 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ubaa8\ub378\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},"\ubd88\ub7ec\uc628 \ubaa8\ub378\ub85c 2.3)\uc5d0\uc11c \ud559\uc2b5 \ub370\uc774\ud130\uc640 \ud3c9\uac00 \ub370\uc774\ud130\uc758 \uc815\ud655\ub3c4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"1. \ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130 \uc120\uc815")," \uc5d0\uc11c \ub098\ub208 Valid \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")))),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"0-\ud328\ud0a4\uc9c0-\uc124\uce58"},"0. \ud328\ud0a4\uc9c0 \uc124\uce58"),(0,t.kt)("p",null,"\uc774\ubc88 \uc7a5\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ud328\ud0a4\uc9c0\ub4e4\uc778 ",(0,t.kt)("inlineCode",{parentName:"p"},"pandas"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"scikit-learn"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"joblib")," \ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pandas scikit-learn joblib\n")),(0,t.kt)("h2",{id:"1-\ud559\uc2b5-\ubc0f-\ud3c9\uac00-\ub370\uc774\ud130-\uc120\uc815"},"1. \ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130 \uc120\uc815"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sklearn.datasets")," \uc5d0\uc11c ",(0,t.kt)("inlineCode",{parentName:"p"},"load_iris")," \ud568\uc218\ub97c \ud1b5\ud574\uc11c iris \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True, as_frame=True)\n")),(0,t.kt)("p",null,"\ubd88\ub7ec\uc628 \ub370\uc774\ud130\ub97c \uac01\uac01 ",(0,t.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"y")," \uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sklearn.model_selection")," \uc758 ",(0,t.kt)("inlineCode",{parentName:"p"},"train_test_split")," \ud568\uc218\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130\ub97c \ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130\ub85c \ub098\ub215\ub2c8\ub2e4. \ub610\ud55c \ucd94\ud6c4\uc5d0 \uc7ac\ud604\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,t.kt)("inlineCode",{parentName:"p"},"random_seed")," \ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.model_selection import train_test_split\n\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n")),(0,t.kt)("p",null,"\ubd84\ub9ac\ub41c \ub370\uc774\ud130\uc5d0\uc11c \ud559\uc2b5 \ub370\uc774\ud130\ub97c ",(0,t.kt)("inlineCode",{parentName:"p"},"X_train"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"y_train")," \uc5d0 \ud560\ub2f9\ud558\uace0, \ud3c9\uac00 \ub370\uc774\ud130\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"X_valid"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"y_valid")," \uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,t.kt)("h2",{id:"2-\ubaa8\ub378-\uac1c\ubc1c-\ubc0f-\ud559\uc2b5"},"2. \ubaa8\ub378 \uac1c\ubc1c \ubc0f \ud559\uc2b5"),(0,t.kt)("p",null,"\ub370\uc774\ud130 scaling \uc744 \uc704\ud55c ",(0,t.kt)("inlineCode",{parentName:"p"},"sklearn.preprocessing"),"\uc758 ",(0,t.kt)("inlineCode",{parentName:"p"},"StandardScaler")," \ub97c ",(0,t.kt)("inlineCode",{parentName:"p"},"scaler")," \uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"fit")," \uc744 \ud1b5\ud574 scaler\ub97c \ud559\uc2b5\ud55c \ud6c4 ",(0,t.kt)("inlineCode",{parentName:"p"},"transform"),"\uc744 \uc774\uc6a9\ud574 \ub370\uc774\ud130\ub97c scaling \ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"scaled_X_train = scaler.fit_transform(X_train)\nscaled_X_valid = scaler.transform(X_valid)\n")),(0,t.kt)("p",null,"scaling \uc804 \ub370\uc774\ud130\uc640 scaling \ud6c4 \ub370\uc774\ud130\ub97c \ube44\uad50\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"print(X_train.values[0])\nprint(scaled_X_train[0])\n# [4.4 3.  1.3 0.2]\n# [-1.71687346 -0.1513372  -1.37527528 -1.29070478]\n")),(0,t.kt)("p",null,"\uc774\uc81c \ubaa8\ub378\uc744 \ud559\uc2b5\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\ud560 \ubaa8\ub378\uc778 ",(0,t.kt)("inlineCode",{parentName:"p"},"sklearn.svm")," \uc758 ",(0,t.kt)("inlineCode",{parentName:"p"},"SVC")," \ub97c ",(0,t.kt)("inlineCode",{parentName:"p"},"classifier"),"\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.svm import SVC\n\nclassifier = SVC()\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"fit")," \ud568\uc218\ub97c \uc774\uc6a9\ud574 \ubaa8\ub378\uc744 \ud559\uc2b5\ud569\ub2c8\ub2e4. \uc774 \ub54c \ub370\uc774\ud130\ub294 scaling \ub41c \ub370\uc774\ud130\uc778 ",(0,t.kt)("inlineCode",{parentName:"p"},"scaled_X_train")," \uacfc ",(0,t.kt)("inlineCode",{parentName:"p"},"y_train"),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"classifier.fit(scaled_X_train, y_train)\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"predict")," \ud568\uc218\ub97c \ud1b5\ud574 \uc8fc\uc5b4\uc9c4 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uc608\uce21\uac12\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub54c SVC\ub97c scaling\uc774 \ub41c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud588\uae30 \ub54c\ubb38\uc5d0 ",(0,t.kt)("inlineCode",{parentName:"p"},"scaled_X_train")," \uacfc ",(0,t.kt)("inlineCode",{parentName:"p"},"scaled_X_valid")," \ub97c \ud1b5\ud574 \uc608\uce21\uc744 \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"train_pred = classifier.predict(scaled_X_train)\nvalid_pred = classifier.predict(scaled_X_valid)\n")),(0,t.kt)("p",null,"\ud559\uc2b5 \ub370\uc774\ud130\uc640 \ud3c9\uac00 \ub370\uc774\ud130\uc5d0 \ub300\ud574\uc11c \uc608\uce21\uc744 \uc9c4\ud589 \ud574 \uac01\uac01 ",(0,t.kt)("inlineCode",{parentName:"p"},"train_pred")," \uc640 ",(0,t.kt)("inlineCode",{parentName:"p"},"valid_pred")," \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,t.kt)("p",null,"\uc774\uc81c \uc815\ud655\ub3c4\ub97c \uacc4\uc0b0\ud574\uc57c \ud569\ub2c8\ub2e4. \uc815\ud655\ub3c4\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"sklearn.metrics")," \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"accuracy_score")," \ub97c \uc774\uc6a9\ud574 \uacc4\uc0b0\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.metrics import accuracy_score\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n")),(0,t.kt)("p",null,"\uacc4\uc0b0\ub41c \uc815\ud655\ub3c4\ub97c \ucd9c\ub825\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'print("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n# Train Accuracy : 0.9833333333333333\n# Valid Accuracy : 0.9666666666666667\n')),(0,t.kt)("p",null,"\ub9cc\uc57d scaling \ub418\uae30 \uc804\uc778 \uc6d0\ubcf8 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5b4\ub5bb\uac8c \ub098\uc62c\uae4c\uc694?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'train_pred = classifier.predict(X_train)\nvalid_pred = classifier.predict(X_valid)\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n\nprint("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n# Train Accuracy : 0.23333333333333334\n# Valid Accuracy : 0.23333333333333334\n')),(0,t.kt)("p",null,"\uc704\uc758 \uacb0\uacfc\ucc98\ub7fc \ubaa8\ub378\uc774 \uc81c\ub300\ub85c \uc608\uce21\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \uc774 \ub54c\ubb38\uc5d0 \ud559\uc2b5\ub41c \ubaa8\ub378\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc608\uce21\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub370\uc774\ud130\ub97c \ubcc0\ud658\ud560 \ub54c \uc0ac\uc6a9\ud55c scaler \ub3c4 \uac19\uc774 \uc800\uc7a5\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,t.kt)("h2",{id:"3-\ud559\uc2b5\ub41c-\ubaa8\ub378-\uc800\uc7a5"},"3. \ud559\uc2b5\ub41c \ubaa8\ub378 \uc800\uc7a5"),(0,t.kt)("p",null,"sickit-learn \uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \uad8c\uc7a5\ud558\ub294 \ubaa8\ub378 \uc800\uc7a5 \ubc29\ubc95\uc740 ",(0,t.kt)("inlineCode",{parentName:"p"},"joblib")," \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. [",(0,t.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/model_persistence.html"},"Scikit-Learn Model Presistence"),"]"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import joblib\n\njoblib.dump(scaler, "scaler.joblib")\njoblib.dump(classifier, "classifier.joblib")\n')),(0,t.kt)("p",null,"\ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 \uacbd\ub85c\uc5d0 ",(0,t.kt)("inlineCode",{parentName:"p"},"scaler.joblib")," \uc640 ",(0,t.kt)("inlineCode",{parentName:"p"},"classifier.joblib")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,t.kt)("h2",{id:"4-\uc800\uc7a5\ub41c-\ubaa8\ub378-\ubd88\ub7ec\uc624\uae30"},"4. \uc800\uc7a5\ub41c \ubaa8\ub378 \ubd88\ub7ec\uc624\uae30"),(0,t.kt)("p",null,"\ubaa8\ub378\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc800\uc7a5 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\n\uc6b0\uc120, 2.3) \uc5d0\uc11c \ub098\ub208 \ub370\uc774\ud130\ub97c \uc7ac\ud604 \ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\nX, y = load_iris(return_X_y=True, as_frame=True)\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n")),(0,t.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \uc800\uc7a5\ub41c \ubaa8\ub378\ub4e4\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import joblib\n\nscaler_load = joblib.load("scaler.joblib")\nclassifier_load = joblib.load("classifier.joblib")\n')),(0,t.kt)("p",null,"\uc774\uc81c \ubd88\ub7ec\uc628 \ubaa8\ub378\uc744 \ud1b5\ud574 \ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130\ub97c \uc608\uce21\uc744 \uc9c4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n\uc6b0\uc120 \ub370\uc774\ud130\ub97c scaler\ub97c \ud1b5\ud574 scaling\uc744 \ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"scaled_X_train = scaler_load.transform(X_train)\nscaled_X_valid = scaler_load.transform(X_valid)\n")),(0,t.kt)("p",null,"\uadf8\ub9ac\uace0 \ubaa8\ub378\uc744 \ud1b5\ud574 \uc608\uce21\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"load_train_pred = classifier_load.predict(scaled_X_train)\nload_valid_pred = classifier_load.predict(scaled_X_valid)\n")),(0,t.kt)("p",null,"\uc815\ud655\ub3c4\ub97c \uacc4\uc0b0\ud6c4 \ubd88\ub7ec\uc624\uae30 \uc804 \ubaa8\ub378\uacfc \uac19\uc740\uc9c0 \ube44\uad50\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.metrics import accuracy_score\n\nload_train_acc = accuracy_score(y_true=y_train, y_pred=load_train_pred)\nload_valid_acc = accuracy_score(y_true=y_valid, y_pred=load_valid_pred)\n")),(0,t.kt)("p",null,"\uacc4\uc0b0\ub41c \uc815\ud655\ub3c4\ub97c \ucd9c\ub825\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'print("Load Model Train Accuracy :", load_train_acc)\nprint("Load Model Valid Accuracy :", load_valid_acc)\n# Train Accuracy : 0.9833333333333333\n# Valid Accuracy : 0.9666666666666667\n')),(0,t.kt)("p",null,"\uc704\uc5d0\uc11c \uc2e4\ud589\ud55c \uacb0\uacfc\uc640 \uac19\uc740 \uacb0\uacfc\uac00 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("h2",{id:"5-\uc804\uccb4-\ucf54\ub4dc"},"5. \uc804\uccb4 \ucf54\ub4dc"),(0,t.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \ucf54\ub4dc\ub97c ",(0,t.kt)("inlineCode",{parentName:"p"},"base_train.py"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"base_validate_save_model.py"),"  \ub85c \ub098\ub220\uc11c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("h3",{id:"51-base_trainpy"},"5.1 ",(0,t.kt)("inlineCode",{parentName:"h3"},"base_train.py")),(0,t.kt)("p",null,"\uc6b0\uc120 \ud559\uc2b5 \ubc0f \ub370\uc774\ud130 \uc800\uc7a5\uc744 \uc704\ud55c \ucf54\ub4dc\ub4e4\uc744 \ubaa8\uc740 ",(0,t.kt)("inlineCode",{parentName:"p"},"base_train.py")," \uc785\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# base_train.py\n\nimport joblib\nfrom sklearn.datasets import load_iris\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\n# 1. get data\nX, y = load_iris(return_X_y=True, as_frame=True)\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n\n# 2. model development and train\nscaler = StandardScaler()\nclassifier = SVC()\n\nscaled_X_train = scaler.fit_transform(X_train)\nscaled_X_valid = scaler.transform(X_valid)\nclassifier.fit(scaled_X_train, y_train)\n\ntrain_pred = classifier.predict(scaled_X_train)\nvalid_pred = classifier.predict(scaled_X_valid)\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n\nprint("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n\n# 3. save model\njoblib.dump(scaler, "scaler.joblib")\njoblib.dump(classifier, "classifier.joblib")\n\n')),(0,t.kt)("h3",{id:"52-base_validate_save_modelpy"},"5.2 ",(0,t.kt)("inlineCode",{parentName:"h3"},"base_validate_save_model.py")),(0,t.kt)("p",null,"\ub2e4\uc74c\uc740 \uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \uac80\uc99d\ud558\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"base_validate_save_model.py")," \uc785\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# base_validate_save_model.py\n\nimport joblib\nfrom sklearn.datasets import load_iris\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import train_test_split\n\n# 1. reproduce data\nX, y = load_iris(return_X_y=True, as_frame=True)\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n\n# 2. load model\nscaler_load = joblib.load("scaler.joblib")\nclassifier_load = joblib.load("classifier.joblib")\n\n# 3. validate\nscaled_X_train = scaler_load.transform(X_train)\nscaled_X_valid = scaler_load.transform(X_valid)\n\nload_train_pred = classifier_load.predict(scaled_X_train)\nload_valid_pred = classifier_load.predict(scaled_X_valid)\n\nload_train_acc = accuracy_score(y_true=y_train, y_pred=load_train_pred)\nload_valid_acc = accuracy_score(y_true=y_valid, y_pred=load_valid_pred)\n\nprint("Load Model Train Accuracy :", load_train_acc)\nprint("Load Model Valid Accuracy :", load_valid_acc)\n')))}s.isMDXComponent=!0}}]);