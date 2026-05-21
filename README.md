<div align="center">

# frontend-study

작게 만들어보고, 막혔던 부분을 기록하고, 다시 꺼내보기 쉽게 정리한 프론트엔드 학습 저장소입니다.

`HTML/CSS`부터 `JavaScript`, `React`, `Svelte`, `Animation`까지  
공부하면서 만든 예제와 실험 코드를 주제별로 모았습니다.

<br />

<a href="#빠른-바로가기">빠른 바로가기</a> ·
<a href="#폴더-구조">폴더 구조</a> ·
<a href="#학습-기록-방식">학습 기록 방식</a> ·
<a href="#정리-기준">정리 기준</a>

</div>

---

## 이 저장소는

처음 배울 때 만든 코드는 나중에 보면 부족한 부분이 많습니다.  
그래도 그 코드를 지우지 않고 정리해두면, 나중에 다시 봤을 때 “그때 무엇을 이해하려고 했는지”가 보입니다.

이 저장소는 완성된 포트폴리오라기보다, 프론트엔드를 공부하며 쌓아온 작은 예제들을 모아둔 학습 노트에 가깝습니다.

- 예전에 만든 작은 프로젝트를 한곳에서 다시 찾기 위해
- 비슷한 성격의 레포지토리를 주제별 폴더로 정리하기 위해
- 공부한 흔적을 버리지 않고 현재 기준으로 다시 보기 위해
- 나중에 실무나 개인 프로젝트에서 참고할 코드 조각을 남기기 위해

---

## 빠른 바로가기

### Animation

| 폴더 | 설명 |
|---|---|
| [`animation/css-effect`](./animation/css-effect/) [`DEMO 바로가기`](https://heodokyung.github.io/frontend-study/animation/css-effect/) | 눈, 불꽃 같은 CSS/JavaScript 기반 시각 효과 |
| [`animation/animate`](./animation/animate/) | HTML 파일 중심의 기본 애니메이션 실습 |
| [`animation/animate-css`](./animation/animate-css/) | `animate.css` 라이브러리 구조와 사용 방식 참고 |
| [`animation/aos`](./animation/aos/) | 스크롤 애니메이션 라이브러리 AOS 구조 참고 |

### JavaScript

| 폴더 | 설명 |
|---|---|
| [`javascript/ai-prompt`](./javascript/ai-prompt/) | 목적에 맞는 AI 프롬프트로 변환하는 도구 |
| [`javascript/dice-game`](./javascript/dice-game/) | 주사위 게임을 단계별로 만들며 DOM 조작과 이벤트를 적용 |
| [`javascript/draw-paint-js`](./javascript/draw-paint-js/) | Canvas/DOM을 이옹하여 그림판을 구현 |

### React

| 폴더 | 설명 |
|---|---|
| [`react/react-netflix`](./react/react-netflix/) | React로 구현한 Netflix 클론 사이트 |
| [`react/react-coin-list`](./react/react-coin-list/) | 코인 API를 연동하여 데이터, 리스트 렌더링, 상태 처리를 구현 |
| [`react/react-movie-list`](./react/react-movie-list/) | 영화 목록 UI와 데이터 렌더링을 구현 |
| [`react/react-animation`](./react/react-animation/) | React에서 애니메이션을 다루기 위한 실습과 정리 |
| [`react/react-lottery`](./react/react-lottery/) | 로또 번호 생성 기능을 React로 구현한 토이 프로젝트 |


### Svelte

| 폴더 | 설명 |
|---|---|
| [`svelte/svelte-todo`](./svelte/svelte-todo/) | Svelte 기본 문법과 상태 처리를 익히기 위한 Todo 예제 |


---

## 폴더 구조

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
├─ react/
│  ├─ react-animation/
│  ├─ react-coin-list/
│  ├─ react-lottery/
│  ├─ react-movie-list/
│  └─ react-netflix/
├─ svelte/
│  └─ svelte-todo/
└─ study-list/
```

---

## 학습 기록 방식

각 예제는 가능하면 아래 기준으로 정리합니다.

```md
# 예제 이름

## 무엇을 연습했나

- 어떤 기능을 만들었는지
- 어떤 개념을 이해하려고 했는지
- 다시 볼 때 확인해야 할 포인트

## 실행 방법

```bash
npm install
npm run dev
```

## 메모

- 구현하면서 막혔던 부분
- 지금 다시 보면 고치고 싶은 부분
- 나중에 확장해보고 싶은 아이디어

---

## 정리 기준
프론트엔드를 배우는 과정에서 만든 작은 실험과 예제를 주제별로 보관하며,
정리할 때는 아래 기준을 따릅니다.

- 하나의 예제는 하나의 폴더로 관리합니다.
- 예제 이름은 가능하면 기능이나 학습 주제가 보이게 작성합니다.
- `node_modules`, `dist`, `.env`, `.env.local` 같은 파일은 올리지 않습니다.
- 오래된 예제라도 의미가 있으면 삭제하지 않고 현재 기준의 메모를 추가합니다.
- 완성 프로젝트로 발전한 것은 별도 레포지토리로 분리할 수 있습니다.

---

## 실행 전 확인

일부 예제는 오래전에 만든 코드라 현재 Node 버전이나 패키지 버전에 따라 바로 실행되지 않을 수 있습니다.  
그럴 때는 먼저 각 폴더의 `README.md`, `package.json`, 실행 스크립트를 확인합니다.

```bash
npm install
npm start
```

또는

```bash
npm install
npm run dev
```

정적 HTML 예제는 별도 설치 없이 `.html` 파일을 브라우저에서 열어 확인할 수 있습니다.

---

## 관련 저장소

문서, 컨벤션, 작업 기준은 아래 저장소에서 따로 관리합니다.

- [`frontend-guide`](https://github.com/heodokyung/frontend-guide)

`frontend-study` - 공부한 예제를 모아둔 공간  
`frontend-guide` - 공부하고 작업하면서 정리한 기준을 문서로 정리하는 공간
