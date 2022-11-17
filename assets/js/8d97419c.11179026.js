"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>_});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=a.createContext({}),d=function(e){var n=a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(r),_=t,u=s["".concat(o,".").concat(_)]||s[_]||m[_]||l;return r?a.createElement(u,i(i({ref:n},c),{},{components:r})):a.createElement(u,i({ref:n},c))}));function _(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9845:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=r(7462),t=(r(7294),r(3905));const l={sidebar_position:2},i="2. Model Pipeline",p={unversionedId:"model-development/base-model-pipeline",id:"model-development/base-model-pipeline",title:"2. Model Pipeline",description:"\ubaa9\ud45c",source:"@site/docs/model-development/base-model-pipeline.md",sourceDirName:"model-development",slug:"/model-development/base-model-pipeline",permalink:"/tutorial/docs/model-development/base-model-pipeline",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-mle.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/model-development/base-model-pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Base Model Development",permalink:"/tutorial/docs/model-development/base-model-development"},next:{title:"3. Load Data from Database",permalink:"/tutorial/docs/model-development/load-data-from-database"}},o={},d=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc2a4\ud399 \uba85\uc138\uc11c",id:"\uc2a4\ud399-\uba85\uc138\uc11c",level:2},{value:"1.  \ubaa8\ub378\ub4e4\uc758 \ud30c\uc774\ud504\ub77c\uc778\ud654",id:"1--\ubaa8\ub378\ub4e4\uc758-\ud30c\uc774\ud504\ub77c\uc778\ud654",level:2},{value:"\ubaa8\ub378 \ud30c\uc774\ud504\ub77c\uc778",id:"\ubaa8\ub378-\ud30c\uc774\ud504\ub77c\uc778",level:3},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:3},{value:"\uc804\uccb4 \ucf54\ub4dc",id:"\uc804\uccb4-\ucf54\ub4dc",level:3},{value:"2. \uc800\uc7a5\ub41c \ud30c\uc774\ud504\ub77c\uc778 \uac80\uc99d",id:"2-\uc800\uc7a5\ub41c-\ud30c\uc774\ud504\ub77c\uc778-\uac80\uc99d",level:2}],c={toc:d};function m(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"2-model-pipeline"},"2. Model Pipeline"),(0,t.kt)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),(0,t.kt)("p",null,"\ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0 \uc800\uc7a5\ud558\ub294 \uae30\ubcf8\uc801\uc778 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,t.kt)("h2",{id:"\uc2a4\ud399-\uba85\uc138\uc11c"},"\uc2a4\ud399 \uba85\uc138\uc11c"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\ubaa8\ub378\ub4e4\uc758 \ud30c\uc774\ud504\ub77c\uc778\ud654",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Scikit-learn pipeline \uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4."))),(0,t.kt)("li",{parentName:"ol"},"\uc800\uc7a5\ub41c \ud30c\uc774\ud504\ub77c\uc778 \uac80\uc99d",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\uc800\uc7a5\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")))),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"1--\ubaa8\ub378\ub4e4\uc758-\ud30c\uc774\ud504\ub77c\uc778\ud654"},"1.  \ubaa8\ub378\ub4e4\uc758 \ud30c\uc774\ud504\ub77c\uc778\ud654"),(0,t.kt)("h3",{id:"\ubaa8\ub378-\ud30c\uc774\ud504\ub77c\uc778"},"\ubaa8\ub378 \ud30c\uc774\ud504\ub77c\uc778"),(0,t.kt)("p",null,"\uc774 \uc804 \uc7a5\uc5d0\uc11c \uc608\uce21\uc744 \uc704\ud574 \uc0ac\uc6a9\ud55c \ubaa8\ub378\uc740 scaler \uc640 SVC \ub450 \uac00\uc9c0\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc911 SVC\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc608\uce21\ud558\uae30 \uc704\ud574\uc11c\ub294 scaler\uac00 \ud544\uc694\ud558\ub2e4\ub294 \uac83\ub3c4 \uc54c\uc544 \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc989 \uc544\ub798\uc640 \uac19\uc740 \uc0ac\uc6a9\ubc95\uc774 \uac15\uc81c \ub429\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"scaled_X_train = scaler.transform(X_train)\ntrain_pred = classifier.predict(scaled_X_train)\n")),(0,t.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704 \ubc29\ubc95\uc740 scaler \ub97c \uae4c\uba39\uac70\ub098 \ub2e4\ub978 scaler\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc2e4\uc218\ub97c \ub9c9\uc744 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \ubaa8\ub378\ub4e4\uc744 \ud30c\uc774\ud504\ub77c\uc778\ud654 \uc2dc\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4. \ud30c\uc774\ud504\ub77c\uc778\ud654 \ub41c \ubaa8\ub378\uc740 \uc544\ub798 \ucc98\ub7fc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"model_pipeline.predict(X_train)\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"model_pipeline")," \uc548\uc5d0\ub294 \ud559\uc2b5\uc774 \uc644\ub8cc\ub41c scaler \uc640 SVC \uac00 \uac19\uc774 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uc704\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc2e4\uc218\ub97c \uc5c6\uc560\uc90d\ub2c8\ub2e4."),(0,t.kt)("p",null,"\ubb3c\ub860 \uc774 \ubc29\ubc95\uc5d0\ub3c4 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud55c\ubc88 \uad6c\ucd95\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc740 \uc218\uc815\ud558\uae30 \uc5b4\ub835\ub2e4\ub294 \uc810\uacfc scaler \ucc98\ub7fc \ud55c \ubaa8\ub378\uc5d0\uc11c\ub9cc \uc4f0\uc774\ub294\uac8c \uc544\ub2c8\ub77c \uc5ec\ub7ec \ubaa8\ub378\uc5d0\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac83\ub4e4\uc744 \uc911\ubcf5\uc801\uc73c\ub85c \ud559\uc2b5\ud574\uc57c \ud55c\ub2e4\ub294 \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("h3",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,t.kt)("p",null,"\uadf8\ub7fc \ud55c\ubc88 \uc9c1\uc811 \ubaa8\ub378\ub4e4\uc744 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \uc791\uc131\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sklearn.pipeline")," \uc758 ",(0,t.kt)("inlineCode",{parentName:"p"},"Pipeline")," \uc744 \ud1b5\ud574 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub54c \ud30c\uc774\ud504\ub77c\uc778 \uc548\uc5d0 \ub4e4\uc5b4\uac00\ub294 \uac12\uc740 \ub9ac\uc2a4\ud2b8\uc774\uba70 \ub9ac\uc2a4\ud2b8 \uc548\uc5d0\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"(\ubaa8\ub378 \uc774\ub984, \ubaa8\ub378 \uac1d\uccb4)")," \uac00 \uac12\uc73c\ub85c \ub4e4\uc5b4\uac11\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'from sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.svm import SVC\n\nmodel_pipeline = Pipeline([("scaler", StandardScaler()), ("svc", SVC())])\n')),(0,t.kt)("p",null,"\uc774\uc81c \uc0dd\uc131\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc744 \ud559\uc2b5\ud574 \ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud559\uc2b5 \ubc29\ubc95\uc740 \uc77c\ubc18\uc801\uc778 scikit-learn\uc758 \ubaa8\ub378\ucc98\ub7fc \uc9c4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"model_pipeline.fit(X_train, y_train)\n")),(0,t.kt)("p",null,"\ud559\uc2b5\uc774 \uc644\ub8cc\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubc14\ub85c \uc608\uce21\uc744 \ud558\uac70\ub098 \uac01 step\ubcc4\ub85c \uc9c4\ud589\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c scaler \ub9cc \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 \uc544\ub798\ucc98\ub7fc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"print(model_pipeline[0].transform(X_train[:1]))\n# [[-1.71687346 -0.1513372  -1.37527528 -1.29070478]]\n")),(0,t.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \uc608\uce21\uc744 \ud558\uace0 \uc815\ud655\ub3c4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'from sklearn.metrics import accuracy_score\n\ntrain_pred = model_pipeline.predict(X_train)\nvalid_pred = model_pipeline.predict(X_valid)\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n\nprint("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n# Train Accuracy : 0.9833333333333333\n# Valid Accuracy : 0.9666666666666667\n')),(0,t.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubaa8\ub378\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc774 \uc804 \uc7a5\ucc98\ub7fc \ub530\ub85c \ud560 \ud544\uc694 \uc5c6\uc774 \ud558\ub098\uc758 \ud30c\uc77c\ub85c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import joblib\n\njoblib.dump(model_pipeline, "model_pipeline.joblib")\n')),(0,t.kt)("h3",{id:"\uc804\uccb4-\ucf54\ub4dc"},"\uc804\uccb4 \ucf54\ub4dc"),(0,t.kt)("p",null,"\uc704\uc5d0\uc11c \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \ubaa8\uc544\uc11c ",(0,t.kt)("inlineCode",{parentName:"p"},"pipeline_train.py")," \ub85c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# pipeline_train.py\n\nimport joblib\nfrom sklearn.datasets import load_iris\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.svm import SVC\n\n# 1. get data\nX, y = load_iris(return_X_y=True, as_frame=True)\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n\n# 2. model development and train\nmodel_pipeline = Pipeline([("scaler", StandardScaler()), ("svc", SVC())])\nmodel_pipeline.fit(X_train, y_train)\n\ntrain_pred = model_pipeline.predict(X_train)\nvalid_pred = model_pipeline.predict(X_valid)\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n\nprint("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n\n# 3. save model\njoblib.dump(model_pipeline, "model_pipeline.joblib")\n')),(0,t.kt)("h2",{id:"2-\uc800\uc7a5\ub41c-\ud30c\uc774\ud504\ub77c\uc778-\uac80\uc99d"},"2. \uc800\uc7a5\ub41c \ud30c\uc774\ud504\ub77c\uc778 \uac80\uc99d"),(0,t.kt)("p",null,"\uc800\uc7a5\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \uc9c0 \uac80\uc99d\ud558\uae30 \uc704\ud574 \uc774 \uc804 \uc7a5\uc5d0\uc11c \uc791\uc131\ud55c ",(0,t.kt)("inlineCode",{parentName:"p"},"base_validate_save_model.py")," \uc758 \ucf54\ub4dc\ub97c \uc218\uc815\ud574 ",(0,t.kt)("inlineCode",{parentName:"p"},"pipeline_validate_save_model.py")," \ub85c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# pipeline_validate_save_model.py\n\nimport joblib\nfrom sklearn.datasets import load_iris\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import train_test_split\n\n# 1. reproduce data\nX, y = load_iris(return_X_y=True, as_frame=True)\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n\n# 2. load model\nmodel_pipeline_load = joblib.load("model_pipeline.joblib")\n\n# 3. validate\nload_train_pred = model_pipeline_load.predict(X_train)\nload_valid_pred = model_pipeline_load.predict(X_valid)\n\nload_train_acc = accuracy_score(y_true=y_train, y_pred=load_train_pred)\nload_valid_acc = accuracy_score(y_true=y_valid, y_pred=load_valid_pred)\n\nprint("Load Model Train Accuracy :", load_train_acc)\nprint("Load Model Valid Accuracy :", load_valid_acc)\n')))}m.isMDXComponent=!0}}]);