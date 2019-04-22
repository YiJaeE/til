<h1>수와 진수 변환</h1>
<p>수를 표현하는 방법은 기수법이라고 하는데 흔히 알고 있는 2진수, 10진수, 16진수 등이 그것이다. 1digit(숫자)에 표현할 수 있는 수의 갯수를 &#39;진수&#39;라고 한다.</p>
<p>&nbsp;</p>
<p>2진수: 0 1</p>
<p>10진수: 0 1 2 3 4 5 6 7 8 9</p>
<p>16진수: 0 1 2 3 4 5 6 7 8 9 a b c d e f</p>
<p>2진수에서 2개, 10진수에서 10개, 16진수에서 16개를 밑수 또는 radix라고 부른다.</p>
<p>&nbsp;</p>
<h2>진수 변환</h2>
<p>2진수로 32비트를 표현하려면 32자리가 필요한데, 16진수로 32비트를 표현하면 8자리로 줄일 수 있다.</p>
<p>&nbsp;</p>
<p><code>16진수를 2진수로 변환하기</code></p>
<p>37 = 32+4+1 = 2<sup>5</sup>, 2<sup>2</sup>, 2<sup>0</sup> = 0010 0101</p>
<p>148 = 128+16+4 = 2<sup>7</sup>, 2<sup>4</sup>, 2<sup>2</sup> = 1001 0100</p>
<p>&nbsp;</p>
<p><code>2진수를 10진수로 변환하기</code></p>
<p>0011 0010 = 2<sup>5</sup>+2<sup>4</sup>+2<sup>1</sup> = 32+16+2 = 50</p>
<p>&nbsp;</p>
<p><code>2진수를 16진수로 변환하기</code></p>
<p><em>16진수는 0부터 9까지는 10진수와 동일하게 변환한다.</em></p>
<p><em>a: 1010 | b: 1011 | c: 1100 | d: 1101 | e: 1110 | f: 1111</em></p>
<p>0111 1011 = 2<sup>2</sup>+2<sup>1</sup>+2<sup>0</sup>+b = 7b</p>
<p>1010 0011 = a+2<sup>1</sup>+2<sup>0</sup> = a3</p>
<p>&nbsp;</p>
<p><code>16진수를 2진수로 변환하기</code></p>
<p>f137 = 1111 0001 0011 0111</p>
<p>1fac = 0001 1111 1010 1100</p>