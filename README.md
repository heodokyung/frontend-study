<div align="center">

# frontend-study

프론트엔드를 공부하며 만든 예제, 실험 코드, 작은 프로젝트를 주제별로 정리한 학습 저장소입니다.

HTML/CSS, JavaScript, TypeScript, Animation 예제는 이 저장소에서 관리하고,  
React와 Svelte처럼 별도 배포가 필요한 프로젝트는 독립 저장소로 분리해 관리합니다.

<br />

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=111)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white)

<br />

<a href="#quick-links">Quick Links</a> ·
<a href="#projects">Projects</a> ·
<a href="#folder-structure">Folder Structure</a> ·
<a href="#study-rules">Study Rules</a>

</div>

---

## Overview

처음 배울 때 만든 코드는 완성도가 높지 않을 수 있습니다.  
하지만 그 코드를 남겨두면, 나중에 다시 봤을 때 어떤 개념을 이해하려고 했고 어떤 부분에서 막혔는지 확인할 수 있습니다.

이 저장소는 단순히 결과물만 모아두는 공간이 아니라, 프론트엔드를 공부하며 쌓은 실험과 기록을 다시 꺼내보기 쉽게 정리하는 공간입니다.

---

## Quick Links

| Category | What it contains | Main status |
|---|---|---|
| Animation | CSS/JavaScript 기반 모션, 라이브러리 실습 | 일부 데모 제공 |
| JavaScript | DOM, Canvas, 인터랙션, 프롬프트 도구 | 데모 제공 |
| TypeScript | 타입 시스템, 컴파일, 콘솔 기반 실습 | 소스/콘솔 확인 |
| React | API 연동, 라우팅, 상태 관리, UI 프로젝트 | 별도 저장소 |
| Svelte | Svelte 기본 문법과 Todo 실습 | 별도 저장소 |

---

## Projects

### Animation

| Project | Source | Demo | Note |
|---|---|---|---|
| CSS Effect | [Folder](./animation/css-effect/) | [Demo](https://heodokyung.github.io/frontend-study/animation/css-effect/) | 눈, 폭죽 등 CSS/JavaScript 기반 시각 효과 |
| Animate | [Folder](./animation/animate/) | [Demo](https://heodokyung.github.io/frontend-study/animation/animate/) | HTML 파일 중심의 모션 애니메이션 |
| Animate.css | [Folder](./animation/animate-css/) | - | `animate.css` 라이브러리 구조와 사용 방식 참고 |
| AOS | [Folder](./animation/aos/) | - | 스크롤 애니메이션 라이브러리 AOS 사용 방식 참고 |

### JavaScript

| Project | Source | Demo | Note |
|---|---|---|---|
| AI Prompt | [Folder](./javascript/ai-prompt/) | [Demo](https://heodokyung.github.io/frontend-study/javascript/ai-prompt/) | 목적에 맞는 AI 프롬프트 변환 도구 |
| Dice Game | [Folder](./javascript/dice-game/) | [Demo](https://heodokyung.github.io/frontend-study/javascript/dice-game/) | DOM 조작과 이벤트를 활용한 주사위 게임 |
| Draw Paint JS | [Folder](./javascript/draw-paint-js/) | [Demo](https://heodokyung.github.io/frontend-study/javascript/draw-paint-js/) | Canvas와 DOM을 활용한 그림판 구현 |

### TypeScript

| Project | Source | Demo | Note |
|---|---|---|---|
| TypeScript Blockchain | [Folder](./typescript/typescript-blockchain/) | - | TypeScript 문법과 클래스를 활용한 콘솔 기반 블록체인 실습 |

> `typescript-blockchain`은 현재 브라우저 화면 데모가 아니라 Node.js 콘솔에서 블록 생성 결과를 확인하는 예제입니다.

### React

React 프로젝트는 배포와 저장소 관리를 위해 별도 레포지토리로 관리합니다.

| Project | Repository | Demo | Note |
|---|---|---|---|
| React Netflix | [Repo](https://github.com/heodokyung/react-netflix) | [Demo](https://heodokyung.github.io/react-netflix/) | React로 구현한 Netflix 클론 사이트 |
| React Coin List | [Repo](https://github.com/heodokyung/react-coin-list) | [Demo](https://heodokyung.github.io/react-coin-list/) | 코인 API, 리스트 렌더링, 차트, 상태 처리 실습 |
| React Movie List | [Repo](https://github.com/heodokyung/react-movie-list) | [Demo](https://heodokyung.github.io/react-movie-list/) | 영화 목록 UI와 상세 페이지 라우팅 실습 |
| React Animation | [Repo](https://github.com/heodokyung/react-animation) | [Demo](https://heodokyung.github.io/react-animation/) | React에서 애니메이션을 다루기 위한 실습과 정리 |
| React Lottery | [Repo](https://github.com/heodokyung/react-lottery) | [Demo](https://heodokyung.github.io/react-lottery/) | 로또 번호 생성과 회차 조회 기능을 구현한 토이 프로젝트 |

### Svelte

| Project | Repository | Demo | Note |
|---|---|---|---|
| Svelte Todo | [Repo](https://github.com/heodokyung/svelte-todo/) | [Demo](https://heodokyung.github.io/svelte-todo/) | Svelte 기본 문법과 상태 처리를 익히기 위한 Todo 예제 |

---

## Recommended Reading Order

처음 보는 경우 아래 순서로 확인하면 흐름을 잡기 쉽습니다.

1. `javascript/dice-game` — DOM 조작과 이벤트 처리
2. `javascript/draw-paint-js` — Canvas와 사용자 입력 처리
3. `javascript/ai-prompt` — 입력값 기반 UI와 프롬프트 생성 로직
4. `typescript/typescript-blockchain` — TypeScript 클래스와 타입 실습
5. React 별도 프로젝트 — API 연동, 라우팅, 상태 관리, 배포 흐름

---

## Folder Structure

```txt
frontend-study/
├─ animation/
│  ├─ css-effect/
│  ├─ animate/
│  ├─ animate-css/
│  └─ aos/
├─ javascript/
│  ├─ ai-prompt/
│  ├─ dice-game/
│  └─ draw-paint-js/
└─ typescript/
   └─ typescript-blockchain/
```

---

## Study Rules

예제를 정리할 때는 아래 기준을 따릅니다.

- 하나의 예제는 하나의 폴더로 관리합니다.
- 예제 이름은 가능하면 기능이나 학습 주제가 보이게 작성합니다.
- 실행 방법, 학습 포인트, 다시 볼 때 확인할 내용을 README에 남깁니다.
- `node_modules`, `dist`, `build`, `.env`, `.env.local`은 저장소에 올리지 않습니다.
- 오래된 예제라도 학습 의미가 있으면 삭제하지 않고 현재 기준의 메모를 추가합니다.
- 완성 프로젝트로 발전한 것은 별도 레포지토리로 분리할 수 있습니다.

---

## Example README Format

각 예제 폴더에는 가능하면 아래 형식을 사용합니다.

```md
# 예제 이름

## What I practiced

- 어떤 기능을 만들었는지
- 어떤 개념을 이해하려고 했는지
- 다시 볼 때 확인해야 할 포인트

## How to run

npm install
npm run dev

## Notes

- 구현하면서 막혔던 부분
- 지금 다시 보면 고치고 싶은 부분
- 나중에 확장해보고 싶은 아이디어
```

---

## How to Run

정적 HTML 예제는 별도 설치 없이 `.html` 파일을 브라우저에서 열어 확인할 수 있습니다.

Node 기반 예제는 각 폴더에서 실행합니다.

```bash
npm install
npm start
```

또는 프로젝트에 따라 아래 명령을 사용합니다.

```bash
npm run dev
```

일부 예제는 오래전에 만든 코드라 현재 Node 버전이나 패키지 버전에 따라 바로 실행되지 않을 수 있습니다. 이 경우 각 폴더의 `README.md`, `package.json`, 실행 스크립트를 먼저 확인합니다.

---

## External References

직접 만든 예제와 별도로, 학습에 참고하는 외부 자료는 아래처럼 링크로 관리합니다.

| Reference | Type | Note |
|---|---|---|
| [ko.javascript.info](https://github.com/heodokyung/ko.javascript.info) | Forked reference | 모던 JavaScript 튜토리얼 한국어 번역 저장소. 직접 만든 예제는 아니므로 이 저장소로 병합하지 않고 참고 링크로 관리합니다. |

---

## Related Repository

- [frontend-guide](https://github.com/heodokyung/frontend-guide) — 공부하고 작업하면서 정리한 기준과 문서

`frontend-study`는 직접 만들어본 예제와 실험 코드를 모아두는 공간입니다.  
`frontend-guide`는 학습하며 정리한 기준, 컨벤션, 설명 문서를 보관하는 공간입니다.
