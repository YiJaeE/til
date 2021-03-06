## 엡실론(epsilon)

엡실론(epsilon)은 1.0 다음으로 표현할 수 있는 수 사이의 차이(next representable)를 뜻한다.



실수 1.0은 1.0 X 2<sup>0</sup> 이다.

이 수는 지수부가 '0' 52개로 끝나므로 표현 가능한 다음 수는 지수부의 맨 끝이 1로 끝나야 한다. 그러면 지수부의 epsilon은 2<sup>-52</sup> 이고, 표현 가능한 다음 수는

+1.0<sub>2</sub> X 2<sup>0</sup> + 2<sup>-52</sup> 이다.



위에서 도출한 엡실론에 따라 실수 10.5와 그 다음 표현 가능한 수 사이의 차이를 계산하면

10.5 = 8 + 2 + 0.5 = 2<sup>3</sup> + 2<sup>1</sup> + 2<sup>-1</sup> = 1.0101<sub>2</sub> X 2<sup>3</sup>



diff = 2<sup>E</sup> X epsilon
     = 2<sup>3</sup> X 2<sup>-52</sup>
     = 2<sup>-49</sup>
     
     
## 엡실론의 쓰임

엡실론은 실수를 비교할 때 Relative comparison을 하기 위해 필요하다.

Absolute comparison은 프로그래머가 생각할 수 있는 가장 작은 임의의 수로 계산하기 때문에 추상화가 깨지는 문제가 생긴다. 만든 함수를 일회용으로 쓰고 말 거라면 절대 비교를 사용해도 되지만 계속 사용하려면 엡실론을 사용해 상대 비교를 해야 한다.



아래처럼 1e-10이라는 임의의 수를 사용한 절대비교 코드를

```javascript
function is_equal(a, b){
    return Math.abs(a-b) <= 1e-10
}

function main(){
    var a = 0.3;
    var b = 0.1 * 3;

    if(is_equal(a, b))
    {
        console.log("THE SAME");
    }else{
        console.log("NOT THE SAME");
    }
}
```



엡실론을 이용한 상대 비교 코드로 변경하면 아래와 같다.

```javascript
function is_equal(a, b, allowed=0){
    var ep = Number.EPSILON;
    var diff = Math.abs(a-b);
    return diff <= Math.max(Math.abs(a), Math.abs(b))*ep*Math.pow(2, allowed);
}

function main(){
    var sum=0;

    for(var i = 0; i < 100; i++){
        sum+=0.01;
    }

    if(is_equal(sum, 1.0, 1))
    {
        console.log("THE SAME");
    }else{
        console.log("NOT THE SAME");
    }
}
```

