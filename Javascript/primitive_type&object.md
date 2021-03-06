# 원시 값과 객체의 비교

원시 타입과 객체 타입은 크게 세 가지 측면에서 다르다.

- 원시 값은 변경 불가능한 값(immutable value)이다. 그러나 객체는 변경 가능한 값(mutable value)이다.
- 원시 값을 변수에 할당하면 변수에는 실제 값이 저장된다. 객체를 변수에 할당하면 변수에는 참조 값이 저장된다.
- 원시 값을 갖는 변수를 다른 변수에 할당하면 원시 값이 복사되어 전달된다. 이것을 값에 의한 전달(pass by value)라 한다. 반면 객체는 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이것을 참조에 의한 전달(pass by reference)라고 한다.



## 원시 값

원시 값은 변경 불가능한 값(immutable value)이다. 변경 불가능한 값은 재할당이 불가능한 것이 아니라 해당 값이 변경되지 않는 것이다.

예를 들어 어떤 변수에 원시 값을 할당한 후 다른 값으로 재할당한다면, 변수의 값이 변경되는 것이 아니라 변수가 새로운 값이 들어갈 메모리 공간을 확보해 재할당된 값을 저장한다. 즉, 변수가 처음에 할당한 값을 갖고 있다가, 재할당이 될 경우 해당 메모리가 아닌 새로운 메모리에 값을 저장한다. 메모리 주소가 바뀌는 것이다.

원시 값의 이런 특성을 불변성(immutability)라고 한다.



### 문자열과 불변성

문자열은 0개 이상인 문자들의 집합을 말한다. 1개의 문자는 2byte의 메모리 공간에 저장된다. 따라서 문자열 타입의 값은 몇 개의 문자로 이루어졌는지에 따라 필요한 메모리 공간의 크기가 달라진다.

```javascript
var str = 'Hello';
str = 'world';
console.log(str);
// world
```

문자열은 다른 원시 값과 마찬가지로 immutable value 이므로 값을 변경하는 것이 아니라 재할당하는 것으로 변수에 저장된 값을 변경할 수 있다. 위의 코드에서 str에는 처음에 'Hello' 라는 값이 할당되었다가 'world'를 재할당했다. 이럴 경우 재할당된 'world'가 출력된다.

그렇다고 해서 'Hello'가 사라진 것은 아니다. 'Hello'는 더이상 변수 str이 가리키지 않을 뿐 메모리에 존재하며 'world'는 새로운 메모리에 할당된 값이다. 변수 값의 메모리 주소가 달라진 것이다.

```javascript
var str = 'string';
console.log(str[0]);
// s

str[0] = 'S';
console.log(str);
// string
```

문자열은 배열은 아니지만 배열처럼 처리할 수 있다. 이것을 유사배열이라고 부른다. 따라서 문자열은 마치 배열처럼 인덱스를 통해 각 문자에 접근할 수 있으며 for 문으로 순회할 수도 있다. 이는 문자열이 length 프로퍼티를 갖는 객체일 수 있다는 것을 의미한다.

원시 값과 객체는 다른 것이지만, 원시 값을 객체처럼 사용할 경우 원시 값을 감싸는 객체(wrapper object)로 자동 변환된다. 실행이 끝나면 본래의 원시 값으로 되돌려준다.

그러나 배열처럼 처리할 수 있다고 해서 객체인 것은 아니기 때문에 인덱스 값에 접근해 값을 변경하는 것은 불가능하다. 원시 값에서는 언제나 값을 재할당해야 한다.



### 값에 의한 전달(pass by value)

```javascript
var foo = 10;
var bar = foo;

foo = 100;
console.log(foo); // 100
console.log(bar); // 10

var bar = foo;
console.log(bar); // 100
```

변수 foo에 원시 타입인 숫자 값 10을 할당하고, 변수 bar에 foo를 할당했다. 이후에 변수 foo에 새로운 값을 재할당해도 변수 bar의 값은 처음에 변수 foo에 할당되었던 값이 복사되어 전달된 상태이므로 10을 반환한다. 재할당으로 값이 달라지는 것은 변수 foo이다.

그러나 변수 bar에 변수 foo의 값을 다시 한 번 할당한다면 그때는 재할당한 var foo의 값인 100이 할당된다.



```javascript
var foo = 10;
var bar = foo;
console.log(foo, bar); // 10 10
console.log(foo === bar); // true

foo = 100;
console.log(foo, bar); // 100 10
console.log(foo === bar); // false
```

위의 예에서 변수 bar는 변수 foo의 값을 복사해서 저장한다. 값은 `10`이다. 이 `10`이라는 값이 할당된 메모리는 하나만 있는 것이 아니다. 각기 다른 변수명으로 호출한 값은 각자의 메모리 공간에 저장된 별개의 값이다.

따라서 값이 복사된 상태이기 때문에 원래의 변수 foo의 값을 재할당하더라도 변수 bar는 알 수 없다. 그러므로 변수 foo의 값을 100으로 재할당한 후에 변수 foo와 변수 bar의 값을 확인해도 변수 foo의 값만 변경될 뿐 변수 bar의 값은 변경되지 않는다. 그러므로 변수 foo와 변수 bar는 같지 않다.



## 객체

객체는 프로퍼티의 개수가 정해져 있지 않으며 동적으로 추가되고 삭제될 수 있다. 또한 프로퍼티의 값에도 제약이 없다. 따라서 객체는 원시 값과 같이 확보해야 할 메모리 공간의 크기를 사전에 정해둘 수 없다.

원시 값은 상대적으로 적은 메모리를 소비하지만 객체는 경우에 따라 크기가 매우 클 수도 있다. 또한 객체를 생성하고 프로퍼티에 접근하는 것은 원시 값과 비교할 때 많은 비용을 필요로 한다.

자바스크립트는 사전에 정의된 클래스에 기반하여 객체(인스턴스)를 생성하는 클래스 기반 객체 지향 프로그래밍 언어와는 달리 클래스 없이 객체를 생성할 수 있으며 객체가 생성된 이후라도 동적으로 프로퍼티와 메서드를 추가할 수 있다. 클래스 기반 객체지향 프로그래밍 언어에서는 동적으로 프로퍼티와 메서드를 추가하는 것은 금지되어 있다.

모던 자바스크립트 엔진은 객체의 프로퍼티 값의 위치를 메모리에 저장하기 위해 해시 함수 기반의 유사 딕셔너리 구조(dictionary-like structure)를 사용한다.



### 변경 가능한 값

객체는 변경 가능한 값(mutable value)이다. 객체에 할당한 변수는 값 자체가 아니라 참조 값을 값으로 갖는다. 참조 값은 생성된 객체가 저장된 메모리 공간의 주소 자체이다.

객체를 할당한 변수가 확보한 메모리 공간에는 '생성된 객체가 실제로 저장된 메모리 공간의 주소'가 저장되어 있다. 이 값을 참조 값이라고 한다. 따라서 객체에 할당한 변수를 평가하면 메모리에 저장되어 있는 참조 값을 반환하는 것이 아니라 참조 값을 통해 실제 객체에 접근해 그 객체를 반환한다.

> 일반적으로 원시 값을 할당한 변수의 경우, "변수는 OO값을 갖는다." 또는 "변수의 값은 OO이다." 라고 표현한다. 하지만 객체를 할당한 변수의 경우 "변수는 객체를 참조하고 있다." 또는 "변수는 객체를 가리키고(point) 있다." 라고 표현한다.

원시 값을 갖는 변수의 값을 변경하는 방법은 재할당밖에 없다. 그러나 변수가 가리키는 객체는 생성이 완료된 후에도 프로퍼티를 동적으로 추가할 수 있고, 프로퍼티 값을 갱신할 수도 있으며, 프로퍼티 자체를 삭제할 수도 있다. 이것을 변경 가능한 값(mutable value)라고 한다.

```javascript
var person = {
  name: 'Lee'
};
person.name = 'Lim';
person.address = 'Seoul';
console.log(person);
// {name: "Lim", address: "Seoul"}
```

원시 값은 할당되면 변수 자체가 원시 값을 가리킨다. 따라서 값을 변경할 수 없기 때문에 새로운 메모리 공간을 확보해 새로운 값을 할당하고 메모리 주소를 변경한다.

그러나 객체는 변경 가능한 값이기 때문에 메모리에 저장된 객체를 수정할 수 있다. 변수는 객체의 값을 참조하는 메모리 주소를 갖고 있으므로, 이 주소는 변경되지 않는다.



### 참조에 의한 전달(pass by reference)

객체는 변경 가능한 값으로 매우 유연하지만 이런 구조가 야기하는 부작용도 있다. 여러 개의 식별자가 하나의 객체를 공유할 수 있는 것이다.

```javascript
var person = {
  name: 'Lee'
};
var copy = person;
```

위 코드의 경우 변수 person을 또 다른 변수 copy에 할당하면 원본의 참조 값이 복사되어 전달된다. 참조 값이 있는 메모리 공간은 그대로 있고, 그것을 가리키는 메모리 주소를 가진 공간이 여러 개 생기는 것이다. 이것을 참조에 의한 전달이라고 한다.

두 개의 메모리 공간이 같은 메모리 주소를 가리키고 있으므로, 이것은 곧 두 개의 식별자가 하나의 객체를 공유하는 것과 같다. 따라서 원시 값과는 달리 둘 중 어디서 값을 변경하더라도 서로 영향을 주고 받는다.

```javascript
var person = {
  name: 'Lee'
};
var copy = person;
console.log(copy === person); // true

copy.name = 'Lim';
person.address = 'Seoul';
console.log(person); // {name: "Lim", address: "Seoul"}
console.log(copy); // {name: "Lim", address: "Seoul"}
```



### 퀴즈

```javascript
var person1 = {
  name: 'Lee'
};
var person2 = {
  name: 'Lee'
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
```

