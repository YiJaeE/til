# 알고리즘 성능평가

알고리즘 성능평가는 반드시 상대 시간을 기준으로 평가해야 한다. 절대 시간을 기준으로 삼으면 컴퓨터의 성능에 따라 제각각 다른 결과가 나오기 때문이다.

그래서 알고리즘 성능평가를 하기 위해서는 연산 횟수에 대한 함수를 사용한다.

연산 횟수에 대한 함수는 여러 가지가 있지만 가장 속도가 느린 if 문을 가장 많이 사용한다.



알고리즘 성능평가는 worst case를 기준으로 삼는다. 데이터의 갯수가 n개로 늘어날 때 T(n)을 구한다.

*quick sort의 경우 average case이다.*

## linear search

linear search는 데이터의 갯수만큼 알고리즘이 돈다.

n >> T(n) = n



## binary search

binary search의 조건은 인자로 들어오는 데이터가 오름차순으로 정렬되어 있어야 한다는 것이다. 연속될 필요는 없다.

n >> T(n) = log<sub>2</sub>n

```python
def binary_search(li, target):
    """
    binary_search(li, target) -> idx
    타겟을 찾았다면 인덱스를 반환
    찾지 못했다면 None 반환
    """
    start=0
    end=len(li)-1
    while start <= end:
        mid=(start+end)//2
        if target == li[mid]:
            return mid
        elif target < li[mid]:
            end=mid-1
        elif target > li[mid]:
            start=mid+1
    return None
```

