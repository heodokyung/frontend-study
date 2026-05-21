# animate

재료 이미지가 위에서 떨어져 그릇에 쌓이는 애니메이션을 여러 방식으로 실험한 예제입니다.

예전에는 파일을 하나씩 열어야 어떤 모션인지 확인할 수 있었지만, 이제는 `index.html`에서 버튼으로 각 버전을 바로 비교할 수 있습니다.

## 바로 보기

- [미리보기 index](./index.html)
- [기본 재료 낙하 모션](./animate.html)
- [마크업 기반 재료 낙하 모션](./animate2.html)
- [이벤트 비주얼형 완성 모션](./animate3.html)

GitHub Pages에 배포되어 있다면 아래 주소 형식으로 확인할 수 있습니다.

```txt
https://heodokyung.github.io/frontend-study/animation/animate/
```

## 파일 구성

| 파일 | 설명 |
|---|---|
| `index.html` | 각 애니메이션을 버튼으로 선택해 바로 확인하는 미리보기 화면 |
| `animate.html` | JavaScript로 재료 이미지를 생성해 떨어뜨리는 초기 버전 |
| `animate2.html` | HTML에 이미지를 배치하고 CSS 변수로 위치를 제어하는 버전 |
| `animate3.html` | 실제 이벤트 비주얼 이미지와 그릇 퍼짐 효과를 함께 적용한 확장 버전 |

## 학습 포인트

- `@keyframes`를 활용한 낙하 모션 구현
- CSS 변수로 시작점, 도착점, 회전값 제어
- `animation-delay`를 이용한 순차 모션 처리
- JavaScript로 애니메이션을 재실행하는 방식
- 이벤트 페이지에서 이미지 기반 모션을 구성하는 방법

## 메모

`animate3.html`은 외부 이미지 리소스를 사용합니다. 해당 이미지 경로가 변경되거나 차단되면 일부 이미지가 보이지 않을 수 있습니다.
