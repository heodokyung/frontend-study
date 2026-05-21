# Dice Game

주사위 UI와 랜덤 이벤트를 연습했던 JavaScript 실습 모음입니다.

처음에는 각각의 HTML 파일을 직접 열어야 어떤 예제인지 확인할 수 있었지만, 이제는 `index.html`에서 버튼을 눌러가며 바로 비교할 수 있습니다.

## 바로 보기

- GitHub Pages: `https://heodokyung.github.io/frontend-study/javascript/dice-game/`
- 로컬 확인: `index.html` 열기

## 파일 구성

| 파일 | 설명 |
|---|---|
| `index.html` | 여러 주사위 예제를 한 화면에서 확인하는 미리보기 페이지 |
| `dice1.html` | Craps 스타일의 주사위 게임 예제 |
| `dice2.html` | 랜덤 주사위와 이동판을 결합한 기본형 예제 |
| `dice2_1.html` | 이동판 진행 흐름을 조금 더 다듬은 버전 |
| `dice2_2.html` | 주사위 애니메이션과 이동 타이밍을 조정한 버전 |
| `dice2_backup.html` | 초기 구현 흐름을 남겨둔 백업 파일 |
| `dice3.html` | CSS 3D transform을 활용한 주사위 회전 예제 |

## 학습 포인트

이 예제들은 완성된 게임이라기보다, 작은 기능을 직접 만들어보며 흐름을 익히기 위한 실습에 가깝습니다.

- 랜덤 숫자 생성
- 주사위 눈 표시
- 버튼 클릭 이벤트 처리
- 결과값에 따른 화면 변경
- CSS 애니메이션과 3D transform
- 이동판 형태의 이벤트 UI
- 팝업 열기와 닫기 흐름

## 확인 방법

GitHub Pages를 사용한다면 아래 주소로 접근할 수 있습니다.

```txt
https://heodokyung.github.io/frontend-study/javascript/dice-game/
```

Cloudflare Pages에서 `frontend-study` 저장소 전체를 배포한다면, 같은 방식으로 하위 경로에서 접근하면 됩니다.

```txt
https://배포도메인/javascript/dice-game/
```

## 메모

일부 파일은 jQuery CDN을 사용합니다. 인터넷 연결이 없는 환경에서는 해당 예제가 정상 동작하지 않을 수 있습니다.

기존 실습 파일은 그대로 두고, `index.html`에서 `iframe`으로 불러오는 방식으로 정리했습니다. 그래서 원본 예제를 하나씩 비교하기 쉽고, 나중에 특정 예제만 따로 개선하기도 좋습니다.
