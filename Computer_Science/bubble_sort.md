# Bubble Sort

인접한 두 원소를 비교해 앞에 있는 원소가 뒤에 있는 원소보다 더 크면 위치를 변경하는 방법이다.
정렬은 0번 인덱스부터 순차적으로 진행한다. 만약 0번 인덱스와 1번 인덱스를 비교해 0번 인덱스가 더 작다면 정렬을 고치지 않고, 0번 인덱스가 더 크다면 두 인덱스의 값을 교환한다. 그리고 1번 인덱스와 2번 인덱스를 비교해 1번 인덱스가 더 크다면 다시 1번 인덱스와 2번 인덱스를 교환한다.
Bubble sort는 가까이 있는 원소 두 개를 단순히 비교해 정렬하는 방식으로, 직접 비교한 두 값의 대소만 알 수 있을 뿐이므로 배열에 속한 인덱스에서 1을 뺀 숫자만큼 반복해서 비교한다. 한 번을 빼는 이유는 마지막 한 번은 굳이 비교하지 않아도 자연스럽게 가장 큰 수가 배치되어 있을 것이기 때문이다.



## 시간복잡도

버블 정렬은 데이터 개수가 4개일 때 3번 -> 2번 -> 1번 순으로 비교한다.

데이터 개수가 5개라면 4번 -> 3번 -> 2번 -> 1번 순으로 비교한다.

이것을 등차수열을 이용해 계산한다.

시간 복잡도를 계산할 때는 계수와 상수를 모두 제거하고 가장 큰 수만 남기므로 시간 복잡도는 O(n<sup>2</sup>)이다. 데이터가 많아질수록 기하급수적으로 느려진다.



## Bubble sort 계산

파이썬
```python
def bubble_sort(li):
    # n은 리스트의 갯수를 뜻한다    
    n=len(li)
    # 바깥 포문인 i가 돌 때 n-1번만큼 돈다.
    for i in range(n-1):
        # 안쪽 포문인 j가 돌 때 n-1-i만큼 돈다. >> i가 1번째 돌 때 j가 3번 / i가 2번째 돌 때 j가 2번 / i가 3번째 돌 때 j가 1번 돌아야 하기 때문.
        for j in range(n-1-i):
            # 만약 리스트의 j(숫자)가 j+1번째 숫자보다 크다면
            if li[j] > li[j+1]:
                # 리스트 j와 j=1의 위치를 바꾼다.
                li[j], li[j+1] = li[j+1], li[j]

if __name__=="__main__":
    li=[6, 2, 1, 4]
    bubble_sort(li)
    print(li)
```

자바스크립트
```javascript
function bubbleSort(array) {
  const sortArr = array;
  const arrLength = sortArr.length - 1;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i; j++) {
      if (sortArr[j] > sortArr[j + 1]) {
        const temp = sortArr[j];
        sortArr[j] = sortArr[j + 1];
        sortArr[j + 1] = temp;
      }
    }
  } return sortArr;
}
```

