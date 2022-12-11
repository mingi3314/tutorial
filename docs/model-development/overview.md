---
sidebar_position: 0
description: 📌 Overview of Model Development Chapter
---

# 0) Overview

:::caution

📌  해당 챕터는 `01. Database` 의 DB를 이용합니다.  
📌  DB를 띄우지 않은 경우 `01. Database` 을 완료하고 DB가 띄워진 상태에서 진행해주세요.

:::

이번 챕터에서 구현할 workflow는 다음과 같습니다.

<div style={{textAlign: 'center'}}>

![basic workflow](./img/model-development-1.png)
[그림 2-1] Basic Workflow
</div>

우선, scikit-learn 에 있는 데이터를 사용합니다. 데이터를 통해 모델을 학습 후 저장합니다. 저장된 모델을 불러와 정상적으로 동작하는 지 확인합니다.

<div style={{textAlign: 'center'}}>

![database workflow](./img/model-development-2.png)
[그림 2-2] Database Workflow
</div>

다음으로 [그림 2-2] 처럼 데이터를 불러오는 부분을 수정합니다. 이 때 사용하는 데이터베이스는 앞선 챕터에서 만든 데이터베이스를 사용합니다.