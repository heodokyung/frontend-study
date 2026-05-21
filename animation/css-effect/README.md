# css-effect

CSS 애니메이션과 간단한 JavaScript를 활용한 화면 장식 효과를 정리한 예제입니다.

## 바로 보기

- [미리보기 index](https://heodokyung.github.io/frontend-study/animation/css-effect/)
- [눈 내림 효과 코드](./snow.html)
- [캔버스 파티클 코드](./fireEffect.js)


## 파일 구성

| 파일 | 설명 |
|---|---|
| `index.html` | 눈 내림 효과와 캔버스 파티클 효과를 버튼으로 확인하는 미리보기 화면 |
| `snow.html` | DOM 요소를 생성해 눈이 내리는 것처럼 보여주는 원본 예제 |
| `fireEffect.js` | 캔버스를 활용한 파티클 효과 실험 코드 |

## 학습 포인트

- `DocumentFragment`를 이용해 여러 DOM 요소를 한 번에 추가하는 방식
- CSS `@keyframes`와 랜덤 값을 조합해 자연스러운 움직임 만들기
- `pointer-events: none`으로 장식 레이어가 화면 조작을 방해하지 않게 처리하기
- Canvas API로 작은 파티클을 그리고 반복 애니메이션을 구성하는 방식
- 이벤트 페이지나 프로모션 화면에 가벼운 장식 효과를 얹는 방법

## 메모
`fireEffect.js`를 실제 사용 시에는 HTML과 JavaScript를 분리하고, 캔버스 요소는 HTML 파일 안에 배치하는 방식으로 정리하는 것을 권장합니다.
