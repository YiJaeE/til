# Insertion Sort

Insertion Sort는 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열과 비교하여 자신의 위치를 찾아 삽입하는 방법이다.

Insertion Sort는 정렬할 역순의 배열이 이미 정렬되어 있음을 가정한다. 따라서 임의의 위치에 있는 임의의 숫자를 선택해 정렬하는 것이 아니라 비교할 수 있는 가장 작은 범위에서부터 정렬을 시작해야 한다. 즉, 처음으로 정렬을 시작하는 인덱스 값은 1번 인덱스이다. 왜냐하면 1번 인덱스 앞에는 0번 인덱스만이 존재하고, 이 0번 인덱스는 당연적으로 정렬이 필요없는 상태이기 때문이다.

따라서 역순으로 비교해 정렬하는 Insertion Sort의 특성상 가장 작은 범위에서부터 정렬을 확대해 나간다.

이런 특성 때문에 Insertion Sort는 배열을 일일이 비교하지 않고 이미 정렬되어있는 배열에서 특정 값의 위치를 확인해 삽입하는 정렬 방식이므로 같은 시간 복잡도(O(n<sup>2</sup>))를 갖는 Bubble sort, Selection sort에 비해 빠르게 문제를 해결할 수 있다는 장점을 가진다.

가령 [2, 3, 4, 5, 6, 7, 8, 9, 1] 이라는 배열이 있다고 했을 때, 1이라는 숫자만 맨 앞으로 이동시키면 정렬이 끝나므로 연산이 복잡한 Quick sort나 Merge sort보다 효율적인 측면이 있다.



## Insertion Sort 계산

1. 첫번째 for 문에서 i는 1부터 n번까지 진행되는 반복문이며 temp라는 변수에 i의 값을 삽입한다.
2. 두번째 for 문은 j는 i-1부터 -2까지, -1만큼씩 이동하는 반복문이다.
3. 만약 j가 -1이면 반복문을 탈출하고, 그게 아니라 temp보다 크면 j+1 위치에 j를 삽입한다.
4. 반복문을 탈출한 후 temp에 저장된 값을 3에서 삽입된 j보다 1자리 큰 위치에 삽입한다.

파이썬
```python
def insertion_sort(li):
    n=len(li)
    
    for i in range(1, n):
        temp=li[i]
        for j in range(i-1, -2, -1):
            if j==-1:
                break
                
            if li[j] > temp:
                li[j+1]=li[j]
            else:
                break
        li[j+1]=temp
```

자바스크립트
```javascript
// 이중 for문
function insertionSort(array) {
  const sortArr = array;
  for (let i = 1; i < sortArr.length; i++) {
    const temp = sortArr[i];
    let prev = i - 1;
    for (prev; prev > -1 && sortArr[prev] > temp; prev--) {
      sortArr[prev + 1] = sortArr[prev];
    } sortArr[prev + 1] = temp;
  } return sortArr;
}

// for - while문
function insertionSort2(array) {
  const sortArr = array;
  for (let i = 1; i < sortArr.length; i++) {
    const temp = sortArr[i];
    let prev = i - 1;
    while (sortArr[prev] > temp) {
      sortArr[prev + 1] = sortArr[prev];
      prev -= 1;
    } sortArr[prev + 1] = temp;
  } return sortArr;
}
```
