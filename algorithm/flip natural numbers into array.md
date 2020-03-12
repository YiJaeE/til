# [자연수 뒤집어 배열로 만들기](https://programmers.co.kr/learn/courses/30/lessons/12932)

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

##### 제한 조건

- n은 10,000,000,000이하인 자연수입니다.

##### 입출력 예

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |



---

**나의 풀이**

1. 매개변수로 받은 자연수 n을 문자열로 바꾼다.
2. 문자열로 바꾼 n을 split()로 분리한다.
3. reverse()로 순서를 변경한 다음
4. map()을 돌려 배열에 숫자 타입으로 들어가도록 한다.



```javascript
function solution(n) {
    const str = (n + '').split('').reverse().map( str => +str);
    const answer = str;
    return answer;
}
```
