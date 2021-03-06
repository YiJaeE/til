# 자료구조

자료: Low Data를 모두 일컫는다. 현실에서 수집한 사실이나 개념의 값 또는 이들의 집합이 자료이다. 가공된 정보 이전의 단순한 숫자의 순서없는 나열, 키와 값 쌍으로 연결된 값 등을 뜻한다.

자료구조: 가공되기 이전의 자료 값이 모여있는 것이다. 자료 간의 관계, 자료에 적용할 수 있는 함수나 명령도 포함한다.



## 자료구조의 특징

* 효율성(Efficiency): 기본적으로 효율적인 구조를 추구한다.
* 추상화(Abstraction): 자료가 마구잡이로 있을 경우 자료에 대한 처리를 하나하나 직접 처리해줘야 하기 때문에 한 단계 추상화해서 가공하기 쉽도록 만든다. 추상화를 할 수록 사람이 자료를 다루기 편해진다.
* 재사용성(Reusability): 최소한의 코드 변경만을 가지고 재사용해서 쓸 수 있다면 자료구조의 재사용성이 높은 것이다. 재사용성이 낮은 경우 자료구조로써의 장점을 활용할 수 없다.



## 자료구조의 종류

* 선형구조(Linear Structure): 일자로 되어있는 자료 구조.
  * Sequential List: 인덱스를 알고 있으면 한 번(상수 시간 내)에 데이터에 접근할 수 있다.
  * Linked List: 데이터를 하나하나 노드로 떼어서 사용한다. 실제 데이터가 메모리에 연속적으로 존재하지 않고 메모리 어디에든 존재할 수 있다. 큰 데이터들을 저장할 경우 연속해서 배치할 필요가 없고 그것이 효율적이지도 않기 때문에 링크드 리스트를 사용한다.
  * Stack
  * Queue
* 비선형구조: 일자로 되어있지 않는 모든 자료 구조.
  * Tree: 보통 binary tree를 많이 사용한다.
  * Graph: 가장 비선형적이고 가장 일반적인 구조이다. 데이터 간의 연결(엣지)도 구조화할 수 있다.



## 자료구조는 왜 필요할까?

프로그래밍을 하면 다양한 형태의 메모리를 사용하게 된다. 이때 데이터를 메모리에 저장하게 된다. 그러나 만능인 자료구조가 없기 때문에 상황에 따라 적절한 자료구조를 선택해서 사용해야 한다.

'상황에 따라'라는 말은 비용을 고려해야 한다는 뜻이다. 실제 상용하는 서비스의 경우 사용자가 몇 명인지, 어떤 데이터를 운용하는 서비스인지에 따라 수많은 이슈가 발생한다. 그 과정에서 발생하는 여러 조건을 만족시켜줘야 비용을 절감할 수 있다.

따라서 자료구조 선택을 잘 하면 필요한 자료에 효율적으로 빠르게 접근할 수 있게 된다. 어떤 목적에 따라 자료구조를 선택할 지도 달라진다. 자료의 중복을 최소화하여 저장장치를 효율적으로 사용할 수도 있고, 메모리는 다소 많이 차지하더라도 자료를 빠르게 검색하고 활용하는 것을 선택할 수도 있다.