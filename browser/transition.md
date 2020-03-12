# CSS transition

CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법이다. 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있다.



## transition 속성

`transition-property`: 트랜지션을 적용해야 하는 CSS 속성의 이름 혹은 이름들을 명시. 여기에 나열한 속성만 트랜지션하는 동안 움직인다. 또한 다른 모든 속성에 대한 변화는 보통 때와 같이 즉시 일어난다.

`transition-duration`: 트랜지션이 일어나는 지속 시간. 트랜지션 동안 모든 속성에 적용하는 단일 지속 시간을 명시하거나 다른 주기로 각 속성이 트랜지션하게 하는 여러 지속 시간을 명시할 수 있다.

`transition-timing-function`: 속성의 중간값을 계산하게 하는 방법을 정의하는 함수. Timing function은 트랜지션의 중간값을 계산하는 방법을 결정한다. 대부분의 타이밍 함수는 큐빅 베이지어를 정의하는 네 점에 의해 정의되므로 상응하는 함수의 그래프로 제공해서 명시할 수 있다. Easing Function Cheat Sheet에서 이징(easing)을 선택할 수도 있다.

`transition-delay`: 속성이 변한 시점과 트랜지션이 실제로 시작하는 시점 사이에 기다리는 시간.



## transition의 문제점

transition은 해당 옵션이 들어간 태그에 적용된 마진 등의 값까지 같이 transition 하기 때문에 transition을 주고 싶은 특정 위치에 비교적 좁은 범위로 액션을 주는 것이 혼란을 방지할 수 있는 방법이다.

만약 여러 애니메이션을 주는 방법을 취해야 한다면 중첩된 애니메이션들의 순서를 고려해서 transition을 줘야 한다.