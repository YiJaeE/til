<h1>부동소수점(floating point)</h1>
<p>부동소수점은 실수를 표현하는 방법이다. 부동은 영어로 float로 부표처럼 떠다닌다는 의미의 부동이다. 움직이지 않는다는 의미의 부동이 아니다. 이 부동소수점은 정밀도는 떨어지지만 표현 범위가 확장되는 장점이 있다.</p>
<p>&nbsp;</p>
<p>과거에는 고정소수점(fixed point)을 썼었다. 1바이트를 만든다면 8자리 수에서 &#39;4비트.4비트&#39;로 나눠서 앞에 있는 4비트는 정수, 뒤에 있는 4비트는 소수로 잡았다. 이렇게 되면 정밀도는 높지만 표현 범위가 아주 좁아지는 한계가 있다.</p>
<p>&nbsp;</p>
<p>따라서 모든 프로그램의 언어가 부동소수점을 채택한다.</p>
<p>예를 들어 1234라는 수가 있을 때 부동소수점을 활용하게 되면</p>
<blockquote><p>1234 X 10<sup>0</sup> = 1234e+0</p>
<p>123.4 X 10<sup>1</sup> = 1234e+1</p>
<p>12.34 X 10<sup>2</sup> = 1234e+2</p>
<p>1.234 X 10<sup>3</sup> = 1234e+3</p>
<p>0.1234 X 10<sup>4</sup> = 1234e+4</p>
</blockquote>
<p>부동소수점을 쓰면 이렇게 값을 바꿀 수 있고 소수점 앞에 있는 수는 가수부, 뒤에 있는 수는 지수부라고 부른다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2>부동소수점의 표현</h2>
<p>부동소수점은 32bit인 단정도와 64bit인 배정도로 나뉘어진다.</p>
<p>단정도는 부호비트인 맨 앞자리가 1bit, 지수부가 8bit, 가수부가 23bit이고</p>
<p>배정도는 부호비트인 맨 앞자리가 1bit, 지수부가 11bit, 가수부가 52bit이다.</p>
<p>&nbsp;</p>
<h4>10.625를 부동소수점으로 표현해보자</h4>
<p>먼저 10진수를 2진수로 변환해야 한다.</p>
<p>10.625 = 8 + 2 + 0.5 + 0.125 = 2<sup>3</sup> + 2<sup>1</sup> + 2<sup>-1</sup> + 2<sup>-3</sup> = 1010.101</p>
<p>여기서 도출된 1010.101은 정규화 되지 않은 수이다. <code>정규화</code>는 <code>정수부에 0을 제외한 한 자리 자연수로 만드는 것</code>인데, 컴퓨터는 2진법을 사용하므로 정수부는 언제나 1이 된다. 따라서 저장할 때 정수부를 저장하지 않고 소수부만 저장하면 된다. 이런 이유로 실제 저장되는 값은 52bit인데 논리적으로 앞에 1이 붙기 때문에 표현 범위(mantissa digit)은 53이 된다.</p>
<p>&nbsp;</p>
<p>1010.101을 정규화하면 1.010101<sub>2</sub> X 2<sup>3</sup> 이다.</p>
<p>&nbsp;</p>
<p>1.010101<sub>2</sub> X 2<sup>3</sup> 은 양수이기 때문에 부호비트는 0이 되고,</p>
<p>가수부는 010101 에서 값이 있는 6자리를 제외한 뒷자리(46자리)를 0으로 채운다.</p>
<p>&nbsp;</p>
<p>지수부에 들어가는 값은 직관적으로 3이지만, 11bit인 지수부는 2진수로 표현해야 하고 음수는 지원하지 않는다. 따라서 음수를 표현하기 위해 편향지수(bias)라는 프로토콜을 만들었다.</p>
<p>&nbsp;</p>
<h3>편향지수(bias)</h3>
<p>지수부에 들어가는 11bit에는 부호비트가 존재하지 않는다. 부호비트가 존재하지 않는다는 것은 음수를 지원하지 않는다는 뜻이다. 따라서 음수를 표현해야 할 경우를 위해 편향지수를 사용할 수 있다. 편향지수의 공식은 아래와 같다.</p>
<p>&nbsp;</p>
<blockquote><p>bias = 2<sup>n-1</sup>-1</p>
</blockquote>
<p>이 수식에서 n은 지수부의 비트 수를 뜻한다. 따라서 배정도의 편향지수는</p>
<blockquote><p>bias = 2<sup>11-1</sup>-1</p>
</blockquote>
<p>이 되어 1023이 도출된다.</p>
<p>&nbsp;</p>
<p>이 편향지수가 있으면 양수로 지수부를 채울 수 있다. 왜냐하면 지수부에서 편향지수를 빼면 논리적인 실제 값이 나오기 때문이다.</p>
<p>&nbsp;</p>
<blockquote><p>E<sub>re</sub> = E<sub>mem</sub> - bias</p>
</blockquote>
<p>&nbsp;</p>
<p>이 수식에 맞게 1.010101<sub>2</sub> X 2<sup>3</sup> 의 지수부를 구하면</p>
<p>3 = E<sub>mem</sub> - 1023</p>
<p>E<sub>mem</sub> = 3 + 1023 = 1026</p>
<p>&nbsp;</p>
<h2>부동소수점의 최종 표현식</h2>
<p>±1.man X 2<sup>Exp-bias</sup></p>
<p>이 수식으로 10.625를 계산하면</p>
<ol>
<li>sign: 0</li>
<li>Exp : 00000001026</li>
<li>man: 010101…(나머지 비트는 0)</li>

</ol>
<p>&nbsp;</p>
<p>000000001026010101…(나머지 46비트는 0)</p>
