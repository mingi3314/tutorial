"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[1045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>_});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(n),_=l,u=c["".concat(p,".").concat(_)]||c[_]||s[_]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function _(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2232:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const l="codeDescription_fg9D",r="codeDescriptionBody_Gp1s";function i(e){let{children:t,minHeight:n}=e;return a.createElement("div",{className:l,style:{minHeight:n}},a.createElement("div",{className:r},t))}},9372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),r=n(2232);const i={sidebar_position:2,description:"\ud83d\udccc \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0 mlflow server \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."},o="2) Save Model to Registry",p={unversionedId:"model-registry/save-model-to-registry",id:"model-registry/save-model-to-registry",title:"2) Save Model to Registry",description:"\ud83d\udccc \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0 mlflow server \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4.",source:"@site/docs/model-registry/save-model-to-registry.mdx",sourceDirName:"model-registry",slug:"/model-registry/save-model-to-registry",permalink:"/tutorial/docs/model-registry/save-model-to-registry",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/model-registry/save-model-to-registry.mdx",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1670747180,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\ud83d\udccc \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0 mlflow server \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."},sidebar:"tutorialSidebar",previous:{title:"1) MLflow Setup",permalink:"/tutorial/docs/model-registry/mlflow-setup"},next:{title:"3) Load Model from Registry",permalink:"/tutorial/docs/model-registry/load-model-from-registry"}},m={},d=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc2a4\ud399 \uba85\uc138\uc11c",id:"\uc2a4\ud399-\uba85\uc138\uc11c",level:2},{value:"0. \ud328\ud0a4\uc9c0 \uc124\uce58",id:"0-\ud328\ud0a4\uc9c0-\uc124\uce58",level:2},{value:"1.  \ubaa8\ub378 \uc800\uc7a5\ud558\uae30",id:"1--\ubaa8\ub378-\uc800\uc7a5\ud558\uae30",level:2},{value:"1.1 \uae30\uc874 \ucf54\ub4dc \ud655\uc778 &amp; \ud658\uacbd \ubcc0\uc218 \uc124\uc815",id:"11-\uae30\uc874-\ucf54\ub4dc-\ud655\uc778--\ud658\uacbd-\ubcc0\uc218-\uc124\uc815",level:3},{value:"1.1.1 <code>db_train.py</code>",id:"111-db_trainpy",level:4},{value:"1.1.2 \ud658\uacbd \ubcc0\uc218 \ucd94\uac00",id:"112-\ud658\uacbd-\ubcc0\uc218-\ucd94\uac00",level:4},{value:"1.2 \ubaa8\ub378 \uc800\uc7a5\ud558\uae30",id:"12-\ubaa8\ub378-\uc800\uc7a5\ud558\uae30",level:3},{value:"2. \uc804\uccb4 \ucf54\ub4dc \uc644\uc131 \ubc0f \ubaa8\ub378 \ud655\uc778",id:"2-\uc804\uccb4-\ucf54\ub4dc-\uc644\uc131-\ubc0f-\ubaa8\ub378-\ud655\uc778",level:2},{value:"2.1 <code>save_model_to_registry.py</code>",id:"21-save_model_to_registrypy",level:3},{value:"2.2 \uc2e4\ud589",id:"22-\uc2e4\ud589",level:3},{value:"2.3 Mlflow\uc5d0\uc11c \uacb0\uacfc \ud655\uc778",id:"23-mlflow\uc5d0\uc11c-\uacb0\uacfc-\ud655\uc778",level:3}],s={toc:d};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-save-model-to-registry"},"2) Save Model to Registry"),(0,l.kt)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uace0 mlflow server \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"mlflow \uc758 \ubaa8\ub378 \uc800\uc7a5 \uad6c\uc870\ub97c \uc774\ud574\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\uc2a4\ud399-\uba85\uc138\uc11c"},"\uc2a4\ud399 \uba85\uc138\uc11c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"02. Model Development")," \ucc55\ud130 \uc5d0\uc11c \uc0ac\uc6a9\ud55c \ucf54\ub4dc\ub97c \uc774\uc6a9\ud574 \ubaa8\ub378\uc744 \ud559\uc2b5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud559\uc2b5\uc774 \ub05d\ub09c \ubaa8\ub378\uc744 mlflow \uc758 built-in method \ub97c \uc0ac\uc6a9\ud574 mlflow server \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Python\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"mlflow")," \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip install mlflow")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mlflow")," \ub97c \ud65c\uc6a9\ud574 \ubaa8\ub378\uc744 \uc55e \uc7a5\uc5d0\uc11c \ub744\uc6b4 mlflow server \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mlflow")," \ub97c \ud65c\uc6a9\ud574 \ubaa8\ub378\uc744 \uc800\uc7a5\ud558\ub294 \ubc29\ubc95\uc740 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"artifact \ucc98\ub7fc \ub2e4\ub8e8\uae30 [",(0,l.kt)("a",{parentName:"li",href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.log_artifact"},"MLFLow log_artifact"),"]"),(0,l.kt)("li",{parentName:"ul"},"built-in method \uc0ac\uc6a9\ud558\uae30",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.mlflow.org/docs/latest/models.html#built-in-model-flavors"},"MLFlow built-in Model Flavors")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html#mlflow.pyfunc.log_model"},"MLFLow pyfunc log_model")))))),(0,l.kt)("li",{parentName:"ul"},"\uc774\ubc88 \uc7a5\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"sklearn")," \ubaa8\ub378\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"mlflow.sklean")," built-in method \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},"\uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \uc791\ub3d9 \uc911\uc778 mlflow server \uc5d0\uc11c \ud655\uc778\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub378\uc774 \uc5b4\ub5bb\uac8c \uc800\uc7a5\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. [",(0,l.kt)("a",{parentName:"li",href:"https://www.mlflow.org/docs/latest/models.html#storage-format"},"MLFlow Storage Format"),"]")))),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Model Upload diagram",src:n(1963).Z,width:"1354",height:"688"}),"\n","[\uadf8\ub9bc 3-6]"," MLflow Model Save Diagram")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"0-\ud328\ud0a4\uc9c0-\uc124\uce58"},"0. \ud328\ud0a4\uc9c0 \uc124\uce58"),(0,l.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uad00\ub828 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# terminal-command\npip install boto3==1.26.8 mlflow==1.30.0 scikit-learn\n")),(0,l.kt)("h2",{id:"1--\ubaa8\ub378-\uc800\uc7a5\ud558\uae30"},"1.  \ubaa8\ub378 \uc800\uc7a5\ud558\uae30"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"02. Model Development")," \ucc55\ud130\uc5d0\uc11c \uc791\uc131\ud55c \ucf54\ub4dc\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"# 3. save model")," \ubd80\ubd84\uc744 \ubcc0\uacbd\ud558\uc5ec \ubaa8\ub378\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"11-\uae30\uc874-\ucf54\ub4dc-\ud655\uc778--\ud658\uacbd-\ubcc0\uc218-\uc124\uc815"},"1.1 \uae30\uc874 \ucf54\ub4dc \ud655\uc778 & \ud658\uacbd \ubcc0\uc218 \uc124\uc815"),(0,l.kt)("h4",{id:"111-db_trainpy"},"1.1.1 ",(0,l.kt)("inlineCode",{parentName:"h4"},"db_train.py")),(0,l.kt)("p",null,"\uc55e \ucc55\ud130\uc5d0\uc11c \ud559\uc2b5\ud588\ub358 ",(0,l.kt)("inlineCode",{parentName:"p"},"db_train.py")," \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="db_train.py"',title:'"db_train.py"'},'# db_train.py\n\nimport joblib\nimport pandas as pd\nimport psycopg2\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\n# 1. get data\ndb_connect = psycopg2.connect(\n    user="myuser",\n    password="mypassword",\n    host="localhost",\n    port=5432,\n    database="mydatabase",\n)\ndf = pd.read_sql("SELECT * FROM iris_data ORDER BY id DESC LIMIT 100", db_connect)\nX = df.drop(["id", "target"], axis="columns")\ny = df["target"]\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n\n# 2. model development and train\nmodel_pipeline = Pipeline([("scaler", StandardScaler()), ("svc", SVC())])\nmodel_pipeline.fit(X_train, y_train)\n\ntrain_pred = model_pipeline.predict(X_train)\nvalid_pred = model_pipeline.predict(X_valid)\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n\nprint("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n\n# 3. save model\njoblib.dump(model_pipeline, "db_pipeline.joblib")\n\n# 4. save data\ndf.to_csv("data.csv", index=False)\n')),(0,l.kt)("h4",{id:"112-\ud658\uacbd-\ubcc0\uc218-\ucd94\uac00"},"1.1.2 \ud658\uacbd \ubcc0\uc218 \ucd94\uac00"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mlflow")," \uc640 \ud1b5\uc2e0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba87 \uac00\uc9c0 \ud658\uacbd \ubcc0\uc218\uac00 \uc124\uc815 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"[\uadf8\ub9bc 3-6]","\uc744 \ubcf4\uba74 \uc720\uc800\uac00 \ud559\uc2b5\ud55c \ubaa8\ub378\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow-server")," \ub97c \ud1b5\ud574 Artifact-store \uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"MinIO")," \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c Artifact-store \uc758 \uc811\uadfc \uad8c\ud55c\uc774 \ud544\uc694 \ud558\uac8c \ub429\ub2c8\ub2e4.\n\uc774 \uc815\ubcf4\ub294 \uc55e \uc7a5\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," \uc5d0\uc11c \uc124\uc815\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow-server")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow-artifact-store")," \uc758 \uc815\ubcf4\uc640 \uac19\uc2b5\ub2c8\ub2e4. \uc811\uadfc\uc5d0 \uc0ac\uc6a9\ud560 ID, PW \ub294 \uc0ac\uc804\uc5d0 \uc815\uc758\ub41c \uc2dc\uc2a4\ud15c \ud658\uacbd \ubcc0\uc218\uc5d0 \ub9e4\ud551\ud558\uc5ec Artifact-store \uc5d0 \uc811\uadfc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc11c\ube44\uc2a4\uac00 \ub744\uc6cc\uc838\uc788\ub294 MLflow \uc11c\ubc84\uc640 S3(MinIO) \uc758 URI\ub3c4 \ud568\uaed8 \ub9e4\ud551\ud574 \uc90d\ub2c8\ub2e4."),(0,l.kt)(r.Z,{mdxType:"CodeDescription"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.environ["MLFLOW_S3_ENDPOINT_URL"] = "http://localhost:9000"\nos.environ["MLFLOW_TRACKING_URI"] = "http://localhost:5001"\nos.environ["AWS_ACCESS_KEY_ID"] = "minio"\nos.environ["AWS_SECRET_ACCESS_KEY"] = "miniostorage"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"os")," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc774\uc6a9\ud574 \uc2dc\uc2a4\ud15c\uc758 \ud658\uacbd\ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MLFLOW_S3_ENDPOINT_URL")," : \ubaa8\ub378\uc744 \uc800\uc7a5\ud560 storage \uc758 \uc8fc\uc18c\uc785\ub2c8\ub2e4. \uc55e \uc7a5\uc5d0\uc11c \ub744\uc6b4 ",(0,l.kt)("inlineCode",{parentName:"li"},"MinIO")," \uc11c\ubc84 \uc8fc\uc18c\uc640 \uac19\uc73c\uba70 ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:9000")," \uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MLFLOW_TRACKING_URI")," : \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574 \uc5f0\uacb0 \ud560 MLflow \uc11c\ubc84\uc758 \uc8fc\uc18c \uc785\ub2c8\ub2e4. \uc55e \uc7a5\uc758 MLflow \uc11c\ubc84 \uc8fc\uc18c\uc640 \uac19\uc73c\uba70 ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:5001")," \uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"MinIO")," \uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud55c ID \uc785\ub2c8\ub2e4. \uc55e \uc7a5\uc5d0\uc11c \uc124\uc815\ud55c ",(0,l.kt)("inlineCode",{parentName:"li"},"MINIO_ROOT_USER")," \uc778 ",(0,l.kt)("inlineCode",{parentName:"li"},"minio")," \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"MinIO")," \uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud55c PW \uc785\ub2c8\ub2e4. \uc55e \uc7a5\uc5d0\uc11c \uc124\uc815\ud55c ",(0,l.kt)("inlineCode",{parentName:"li"},"MINIO_ROOT_PASSWORD")," \uc778 ",(0,l.kt)("inlineCode",{parentName:"li"},"miniostorage")," \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),(0,l.kt)("h3",{id:"12-\ubaa8\ub378-\uc800\uc7a5\ud558\uae30"},"1.2 \ubaa8\ub378 \uc800\uc7a5\ud558\uae30"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mlflow")," \ub294 \uc815\ubcf4\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uc758 \uad6c\uc870\ub85c \uc800\uc7a5\ud558\uba70 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uc744 \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \ub54c, \uac01\uac01\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uc740 unique \ud55c \ud574\uc26c\uac12\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"run_id")," \ub97c \ubd80\uc5ec\ubc1b\uac8c \ub418\uba70 \uc774\ub97c \ud1b5\ud574\uc11c \ucd94\ud6c4 \uc6d0\ud558\ub294 \uc815\ubcf4\uc5d0 \uc811\uadfc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubaa8\ub378\uc758 \uacb0\uacfc \ub4f1\uc744 \uc800\uc7a5 \ud560 \uac00\uc7a5 \ud070 \uce74\ud14c\uace0\ub9ac\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \uc758 \uacbd\uc6b0 \uc774\ub984\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\uba74 \uae30\ubcf8 \uac12\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"Default")," \ub77c\ub294 \uc774\ub984\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc2e4\uc2b5\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"new-exp")," \ub77c\ub294 \uc774\ub984\uc744 \uac00\uc9c4 \uc0c8\ub85c\uc6b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \ub97c \uc0dd\uc131\ud558\uace0, \uc0dd\uc131\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"new-exp")," \uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uc744 \ub9cc\ub4dc\ub294 \ubc29\uc2dd\uc73c\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc5b4\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"02. Model Development")," \ucc55\ud130\uc758 ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub378"),"\uacfc ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub378\uc758 \uacb0\uacfc metric")," \uc778 \uc815\ud655\ub3c4\ub97c \uc800\uc7a5\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow")," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131 \ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ubaa8\ub378\uc758 \uc774\ub984\uc744 \uc124\uc815 \ud560 \uc218 \uc788\ub294 \uc678\ubd80 \ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. MLflow \uc5d0\uc11c\ub294 \ubaa8\ub378\uc744 \uc800\uc7a5 \ud560 \ub54c \uc774\ub984\uc744 \uc124\uc815\ud558\uc5ec \uad00\ub9ac \ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from argparser import ArgumentParser\n\nparser = ArgumentParser()\nparser.add_argument("--model-name", dest="model_name", type=str, default="sk_model")\nargs = parser.parse_args()\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \ub97c \uc124\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow.set_experiment")," \ud568\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \uc0c8\ub85c \uc0dd\uc131\ub418\uba70, \uc874\uc7ac\ud558\ub294 \uacbd\uc6b0 \ud574\ub2f9 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment")," \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'mlflow.set_experiment("new-exp")\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ubaa8\ub378\uc5d0 \uc785\ub825\uc73c\ub85c \uc8fc\uc5b4\uc9c0\ub294 \ub370\uc774\ud130\uc758 \uc815\ubcf4\ub4e4\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"signature = mlflow.models.signature.infer_signature(model_input=X_train, model_output=train_pred)\ninput_sample = X_train.iloc[:10]\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(signature)\n# inputs: \n#   ['sepal_length': double, 'sepal_width': double, 'petal_length': double, 'petal_width': double]\n# outputs: \n#   [Tensor('int64', (-1,))]\n\nprint(input_sample)\n# sepal_length  sepal_width  petal_length  petal_width\n# 86           5.7          2.9           4.2          1.3\n# 73           4.5          2.3           1.3          0.3\n# 4            6.9          3.1           4.9          1.5\n# 31           4.9          3.1           1.5          0.2\n# 10           4.6          3.2           1.4          0.2\n# 1            5.4          3.9           1.3          0.4\n# 51           5.6          2.8           4.9          2.0\n# 63           4.4          3.0           1.3          0.2\n# 7            7.4          2.8           6.1          1.9\n# 64           5.5          2.5           4.0          1.3\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uc744 \uc0dd\uc131\ud558\uace0 \uc815\ubcf4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)(r.Z,{mdxType:"CodeDescription"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'with mlflow.start_run():\n    mlflow.log_metrics({"train_acc": train_acc, "valid_acc": valid_acc})\n    mlflow.sklearn.log_model(\n        sk_model=model_pipeline,\n        artifact_path=args.model_name,\n        signature=signature,\n        input_example=input_sample,\n    )\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mlflow.log_metrics")," : \ubaa8\ub378\uc758 \uacb0\uacfc metrics \ub97c python \uc758 dict \ud615\ud0dc\ub85c \ubc1b\uc544 \uc0dd\uc131\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"run")," \uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sklearn")," \uc758 \ubaa8\ub378\uc740 ",(0,l.kt)("inlineCode",{parentName:"li"},"mlflow.sklearn")," \ub97c \uc0ac\uc6a9\ud558\uc5ec \uac04\ud3b8\ud558\uac8c \uc5c5\ub85c\ub4dc\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mlflow.sklearn.log_model")," : \ud559\uc2b5\ub41c \ubaa8\ub378 \uacb0\uacfc\ubb3c\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"sklearn")," \uac1d\uccb4\uc77c \uacbd\uc6b0 [",(0,l.kt)("a",{parentName:"li",href:"https://www.mlflow.org/docs/latest/models.html#storage-format"},"MLFlow Storage Format"),"]\uc758 \uad6c\uc870\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"run")," \uc5d0 \uc800\uc7a5 \ud569\ub2c8\ub2e4.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ubaa8\ub378\uc740 \ub2e4\uc74c\uacfc \uad6c\uc870\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# terminal-command\n# Directory written by mlflow.sklearn.save_model(model, "sk_model")\n\nsk_model/\n\u251c\u2500\u2500 MLmodel\n\u251c\u2500\u2500 model.pkl\n\u251c\u2500\u2500 conda.yaml\n\u251c\u2500\u2500 python_env.yaml\n\u2514\u2500\u2500 requirements.txt\n')))),(0,l.kt)("h2",{id:"2-\uc804\uccb4-\ucf54\ub4dc-\uc644\uc131-\ubc0f-\ubaa8\ub378-\ud655\uc778"},"2. \uc804\uccb4 \ucf54\ub4dc \uc644\uc131 \ubc0f \ubaa8\ub378 \ud655\uc778"),(0,l.kt)("p",null,"\ucd94\uac00 \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \uc804\uccb4 \ucf54\ub4dc\uc5d0 \uc801\uc6a9\ud558\uc5ec \uc644\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"21-save_model_to_registrypy"},"2.1 ",(0,l.kt)("inlineCode",{parentName:"h3"},"save_model_to_registry.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="save_model_to_registry.py"',title:'"save_model_to_registry.py"'},'import os\nfrom argparse import ArgumentParser\n\nimport mlflow\nimport pandas as pd\nimport psycopg2\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\n# 0. set mlflow environments\nos.environ["MLFLOW_S3_ENDPOINT_URL"] = "http://localhost:9000"\nos.environ["MLFLOW_TRACKING_URI"] = "http://localhost:5001"\nos.environ["AWS_ACCESS_KEY_ID"] = "minio"\nos.environ["AWS_SECRET_ACCESS_KEY"] = "miniostorage"\n\n# 1. get data\ndb_connect = psycopg2.connect(\n    user="myuser",\n    password="mypassword",\n    host="localhost",\n    port=5432,\n    database="mydatabase",\n)\ndf = pd.read_sql("SELECT * FROM iris_data ORDER BY id DESC LIMIT 100", db_connect)\n\nX = df.drop(["id", "target"], axis="columns")\ny = df["target"]\nX_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, random_state=2022)\n\n# 2. model development and train\nmodel_pipeline = Pipeline([("scaler", StandardScaler()), ("svc", SVC())])\nmodel_pipeline.fit(X_train, y_train)\n\ntrain_pred = model_pipeline.predict(X_train)\nvalid_pred = model_pipeline.predict(X_valid)\n\ntrain_acc = accuracy_score(y_true=y_train, y_pred=train_pred)\nvalid_acc = accuracy_score(y_true=y_valid, y_pred=valid_pred)\n\nprint("Train Accuracy :", train_acc)\nprint("Valid Accuracy :", valid_acc)\n\n# 3. save model\nparser = ArgumentParser()\nparser.add_argument("--model-name", dest="model_name", type=str, default="sk_model")\nargs = parser.parse_args()\n\nmlflow.set_experiment("new-exp")\n\nsignature = mlflow.models.signature.infer_signature(model_input=X_train, model_output=train_pred)\ninput_sample = X_train.iloc[:10]\n\nwith mlflow.start_run():\n    mlflow.log_metrics({"train_acc": train_acc, "valid_acc": valid_acc})\n    mlflow.sklearn.log_model(\n        sk_model=model_pipeline,\n        artifact_path=args.model_name,\n        signature=signature,\n        input_example=input_sample,\n    )\n\n# 4. save data\ndf.to_csv("data.csv", index=False)\n')),(0,l.kt)("h3",{id:"22-\uc2e4\ud589"},"2.2 \uc2e4\ud589"),(0,l.kt)("p",null,"\uc644\uc131\ub41c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# terminal-command\npython save_model_to_registry.py.py --model-name "sk_model"\n')),(0,l.kt)("h3",{id:"23-mlflow\uc5d0\uc11c-\uacb0\uacfc-\ud655\uc778"},"2.3 Mlflow\uc5d0\uc11c \uacb0\uacfc \ud655\uc778"),(0,l.kt)("p",null,"\ucf54\ub4dc \uc2e4\ud589\uc758 \uacb0\uacfc\ub97c ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:5001"},"localhost:5001"),"(mlflow server) \uc5d0\uc11c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MLflow ui-1",src:n(7178).Z,width:"3680",height:"2382"}),"\n","[\uadf8\ub9bc 3-7]"," \ubaa8\ub378 \uc800\uc7a5 \uacb0\uacfc")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MLflow ui-2",src:n(627).Z,width:"3680",height:"2382"}),"\n","[\uadf8\ub9bc 3-8]"," \ubaa8\ub378 \uc800\uc7a5 \uacb0\uacfc \uc0c1\uc138")))}c.isMDXComponent=!0},1963:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/model-registry-6-cad4a3afcbb5bcf1ef2502c232575c8c.png"},7178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/model-registry-7-27a3ef2fefd7c86034fe3560e431586f.png"},627:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/model-registry-8-9e95e6bad6e269739f49da95c4ddf12d.png"}}]);