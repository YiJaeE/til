# X-Content-Type-Options

HTTP X-헤더는 사용자가 임의로 헤더를 정의할 때 사용자가 정의한 헤더라는 것을 알려주기 위한 것인데 2012년에 임의라는 의미는 사라졌다.



## X-Content-Type-Options

서버에서 보내온 Content-Type 헤더가 잘못 설정되었다고 생각하는 경우 브라우저는 자체적으로 컨텐츠 타입을 추론합니다. 이 추론하는 과정을 MIME 스니핑이라고 한다. 브라우저들이 MIME 스니핑을 하는 것은 리소스를 훑어보고 정확한 MIME 타입을 추측해내기 위한 것이다.

브라우저들은 각각 다른 방식으로 스니핑을 하는데 이런 과정에 관련된 몇 가지 보안 관련 사항들이 있는데, 몇몇 MIME 타입들은 실행 가능한 컨텐츠를 나타내고 다른 타입들은 그렇지 않기 때문이다. 서버들은 Content-Type 중에 X-Content-Type-Options를 전송하여 이런 MIME 스니핑을 차단할 수 있다.