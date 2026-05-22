<div align="center">

# frontend-study

작게 만들고, 막혔던 지점을 기록하고, 다시 꺼내보기 쉽게 정리한  
**프론트엔드 학습·실험 저장소**입니다.

HTML/CSS, JavaScript, Animation 예제는 이 저장소에서 관리하고,  
React/Svelte 프로젝트는 배포와 유지보수를 위해 별도 저장소로 분리해 관리합니다.

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=222)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=222)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat-square&logo=githubpages&logoColor=white)

<br />

<a href="#-빠른-보기">빠른 보기</a> ·
<a href="#-프로젝트-목록">프로젝트 목록</a> ·
<a href="#-폴더-구조">폴더 구조</a> ·
<a href="#-학습-정리-기준">학습 정리 기준</a> ·
<a href="#-실행-방법">실행 방법</a>

</div>

---

## ✨ 소개

이 저장소는 완성된 포트폴리오만 모아둔 공간이 아니라,  
프론트엔드를 배우면서 직접 만들어본 예제와 시행착오를 함께 정리한 학습 기록입니다.

처음 만든 코드는 부족할 수 있지만, 그 과정을 남겨두면 나중에 다시 봤을 때  
**무엇을 이해하려 했는지, 어디에서 막혔는지, 지금은 어떻게 개선할 수 있는지**를 확인할 수 있습니다.

---

## 🔎 빠른 보기

| 구분 | 내용 |
|---|---|
| 저장소 목적 | 프론트엔드 학습 예제, 실험 코드, 미니 프로젝트 정리 |
| 주요 주제 | HTML/CSS, JavaScript, Animation, React, Svelte |
| 배포 방식 | GitHub Pages |
| 관리 방식 | 작은 예제는 이 저장소, 완성형 프로젝트는 별도 저장소로 분리 |
| 관련 문서 | [`frontend-guide`](https://github.com/heodokyung/frontend-guide) |

---

## 📌 프로젝트 목록

### Animation

| 프로젝트 | 바로가기 | 주요 학습 내용 | 상태 |
|---|---|---|---|
| CSS Effect | [폴더](./animation/css-effect/) · [화면](https://heodokyung.github.io/frontend-study/animation/css-effect/) | 눈, 폭죽 등 CSS/JavaScript 기반 시각 효과 | 배포 |
| Animate | [폴더](./animation/animate/) · [화면](https://heodokyung.github.io/frontend-study/animation/animate/) | HTML 파일 중심의 모션 애니메이션 | 배포 |
| Animate.css | [폴더](./animation/animate-css/) | `animate.css` 라이브러리 구조와 사용 방식 참고 | 정리 |
| AOS | [폴더](./animation/aos/) | 스크롤 애니메이션 라이브러리 AOS 사용 방식 참고 | 정리 |

### JavaScript

| 프로젝트 | 바로가기 | 주요 학습 내용 | 상태 |
|---|---|---|---|
| AI Prompt | [폴더](./javascript/ai-prompt/) · [화면](https://heodokyung.github.io/frontend-study/javascript/ai-prompt/) | 입력값을 목적에 맞는 AI 프롬프트로 변환 | 배포 |
| Dice Game | [폴더](./javascript/dice-game/) · [화면](https://heodokyung.github.io/frontend-study/javascript/dice-game/) | DOM 조작, 이벤트 처리, 게임 상태 관리 | 배포 |
| Draw Paint JS | [폴더](./javascript/draw-paint-js/) · [화면](https://heodokyung.github.io/frontend-study/javascript/draw-paint-js/) | Canvas와 DOM을 활용한 그림판 구현 | 배포 |

### React

> React 프로젝트는 배포와 이슈 관리를 위해 개별 저장소로 분리했습니다.

| 프로젝트 | 저장소 | 화면 | 주요 학습 내용 |
|---|---|---|---|
| React Netflix | [GitHub](https://github.com/heodokyung/react-netflix) | [Demo](https://heodokyung.github.io/react-netflix/) | 클론 코딩, 라우팅, 애니메이션, API 데이터 렌더링 |
| React Coin List | [GitHub](https://github.com/heodokyung/react-coin-list) | [Demo](https://heodokyung.github.io/react-coin-list/) | 코인 시세 API, 목록/상세 화면, 차트, 테마 처리 |
| React Movie List | [GitHub](https://github.com/heodokyung/react-movie-list) | [Demo](https://heodokyung.github.io/react-movie-list/) | 영화 목록 UI, 데이터 렌더링, 상세 페이지 |
| React Animation | [GitHub](https://github.com/heodokyung/react-animation) | [Demo](https://heodokyung.github.io/react-animation/) | framer-motion 기반 애니메이션 예제 정리 |
| React Lottery | [GitHub](https://github.com/heodokyung/react-lottery) | [Demo](https://heodokyung.github.io/react-lottery/) | 로또 번호 생성, 회차 데이터 조회, 정적 배포 |

### Svelte

| 프로젝트 | 저장소 | 화면 | 주요 학습 내용 |
|---|---|---|---|
| Svelte Todo | [GitHub](https://github.com/heodokyung/svelte-todo/) | [Demo](https://heodokyung.github.io/svelte-todo/) | Svelte 기본 문법, 상태 처리, Todo UI |

---

## 🧭 추천 탐색 순서

처음 보는 경우 아래 순서로 보면 흐름을 이해하기 쉽습니다.

1. **JavaScript 예제**  
   DOM 조작, 이벤트 처리, Canvas 같은 기본기를 확인합니다.

2. **Animation 예제**  
   CSS 효과와 스크롤/모션 라이브러리 사용 방식을 확인합니다.

3. **React 프로젝트**  
   API 연동, 라우팅, 상태 관리, 배포 구조를 확인합니다.

4. **Svelte Todo**  
   React와 다른 방식의 컴포넌트/상태 처리 흐름을 비교합니다.

---

## 📁 폴더 구조

```txt
frontend-study/
├─ animation/
│  ├─ css-effect/
│  ├─ animate/
│  ├─ animate-css/
│  └─ aos/
│
└─ javascript/
   ├─ ai-prompt/
   ├─ dice-game/
   └─ draw-paint-js/
```

React와 Svelte 프로젝트는 아래처럼 별도 저장소에서 관리합니다.

```txt
react-netflix/
react-coin-list/
react-movie-list/
react-animation/
react-lottery/
svelte-todo/
```

---

## 📝 학습 정리 기준

각 예제는 가능하면 아래 기준으로 정리합니다.

```md
# 예제 이름

## 무엇을 연습했나

- 어떤 기능을 만들었는지
- 어떤 개념을 이해하려고 했는지
- 다시 볼 때 확인해야 할 포인트

## 실행 방법

~~~bash
npm install
npm run dev
~~~

## 메모

- 구현하면서 막혔던 부분
- 지금 다시 보면 고치고 싶은 부분
- 나중에 확장해보고 싶은 아이디어
```

---

## ✅ 정리 규칙

- 하나의 예제는 하나의 폴더로 관리합니다.
- 예제 이름은 기능이나 학습 주제가 보이게 작성합니다.
- `node_modules`, `dist`, `.env`, `.env.local` 같은 파일은 올리지 않습니다.
- 오래된 예제라도 학습 의미가 있으면 삭제하지 않고 현재 기준의 메모를 추가합니다.
- 완성도가 올라간 프로젝트는 별도 레포지토리로 분리할 수 있습니다.
- 배포가 필요한 React 프로젝트는 가능하면 GitHub Actions 기반으로 관리합니다.

---

## ▶️ 실행 방법

정적 HTML 예제는 별도 설치 없이 `.html` 파일을 브라우저에서 열어 확인할 수 있습니다.

Node 기반 예제는 각 폴더에서 아래 명령어를 확인합니다.

```bash
npm install
npm start
```

또는

```bash
npm install
npm run dev
```

일부 예제는 오래전에 만든 코드라 현재 Node 버전이나 패키지 버전에 따라 바로 실행되지 않을 수 있습니다.  
그럴 때는 먼저 각 폴더의 `README.md`, `package.json`, 실행 스크립트를 확인합니다.

---

## 🧩 관련 저장소

| 저장소 | 설명 |
|---|---|
| [`frontend-study`](https://github.com/heodokyung/frontend-study) | 공부한 예제와 실험 코드를 모아둔 공간 |
| [`frontend-guide`](https://github.com/heodokyung/frontend-guide) | 공부하고 작업하면서 정리한 기준, 문서, 컨벤션 모음 |

---

## 📌 메모

이 저장소는 완벽한 결과물만 모아둔 공간이 아닙니다.  
작게 만들고, 막히고, 다시 고치면서 프론트엔드를 익혀가는 과정을 남기는 공간입니다.
