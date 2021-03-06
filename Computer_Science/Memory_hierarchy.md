# 메모리 계층 (Memory hierarchy)

![](https://imgur.com/O3PtZyx.jpg)

메모리 계층 구조란 메모리를 필요에 따라 여러가지 종료로 나누어둔 것을 의미한다.

하드디스크<메모리<캐시<레지스터 순으로 속도가 빠르고

레지스터<캐시<메모리<하드디스크 순으로 생산성이 높다.



## 레지스터

CPU 안에 들어있고 CPU와 같은 속력으로 동작한다. 가장 빠르다. CPU가 일을 할 때 임시로 자료를 저장하는 용도로 사용한다.



## 캐시

대부분의 프로그램은 한 번 사용한 데이터를 다시 사용할 가능성이 높고, 그 주변의 데이터도 곧 사용할 가능성이 높은 데이터 지역성의 원리를 가진다. 데이터 지역성은 대표적으로 시간 지역성과 공간 지역성으로 나뉜다.

시간 지역성은 한 번 참조된 데이터는 잠시 후에 또 참조될 가능성이 높다는 것이고, 공간 지역성은 같은 데이터 배열에 연속으로 접근할 때 참조된 데이터 근처에 있는 데이터가 잠시 후에 사용될 가능성이 높다는 것이다.

CPU가 데이터를 요청했을 때 캐시 메모리가 해당 데이터를 가지고 있다면 이를 캐시 히트라 부르고 해당 데이터가 없으면 캐시 미스라고 부른다.



## 메모리

주 기억장치. 메모리에는 총 4개의 영역이 있다.

#### 코드(CODE)영역

실행할 프로그램의 코드가 저장되는 영역이다.

#### 데이터(DATA)영역

프로그램의 전역변수와 정적 변수가 저장되는 영역이다. 데이터 영역은 프로그램이 시작됨과 동시에 할당되며 종료되면 소멸한다.

#### 힙(heap)영역

사용자에 의해 메모리 공간이 동적으로 할당되고 해제되는 영역이다.

#### 스택(stack)영역

함수의 호출과 관계되는 지역변수와 매개변수가 저장되는 영역이다. 스택 영역에 저장되는 함수의 호출 정보를 스택 프레임이라고 한다.
