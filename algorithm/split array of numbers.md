# [나누어 떨어지는 숫자 배열](https://programmers.co.kr/learn/courses/30/lessons/12910)

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

##### 제한사항

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

##### 입출력 예

| arr           | divisor | return        |
| ------------- | ------- | ------------- |
| [5, 9, 7, 10] | 5       | [5, 10]       |
| [2, 36, 1, 3] | 1       | [1, 2, 3, 36] |
| [3,2,6]       | 10      | [-1]          |

##### 입출력 예 설명

입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.



---

**나의 풀이**

1. 배열을 오름차순으로 정렬한다
2. 오름차순으로 정렬한 배열을 every를 사용해 전체 배열이 나누어 떨어지지 않으면 -1을 리턴
3. 배열 중 나누어 떨어지는 수가 있다면 filter로 걸러낸다



```javascript
function solution(arr, divisor) {
    let answer = [];
    let sortArr = arr.sort((a, b) => { return a - b; });
    return answer = sortArr.every(array => array % divisor) ? [-1] : sortArr.filter(array => array % divisor === 0);
}
```



*필터로 걸러낸 후 빈 배열에 -1을 추가하는 방식으로 짰다면 더 좋았을 것 같다. 고차함수를 두 번 도니까 시간이 오래 걸리고 arr.length를 확인하는 방향으로 했다면 쓰지 않아도 됐을 every 함수를 사용한 게 아쉽다.*

*근데 사실 그냥 every 함수 한 번 써보고 싶었음...*
