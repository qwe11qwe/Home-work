<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>6.7 숙제</title>
  <link rel="stylesheet" href="./login.css" />
</head>
  <body>
    <div class="login-box1">
        <div id="로그인"> 로그인
          <div class="login-box2">
        <input type="text" placeholder="euid@euid.de" required> 
        <input type="password" placeholder="8자리 이상" required>
        <button type="submit">로그인</button>
      <div class="links">
        <a href="/" id="signup-link">회원가입</a>
        <a href="/" id="forgot-username-link">아이디 비밀번호 찾기</a> 
      </div>
    </div>
  </div>
</div>

  </body>

</html>


<!-- 배경 -->
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

<!-- 제일 큰 로그인 상자1 -->
.login-box1 {
  width: 300px;
  margin: 50px;
  background-color: #ED552F;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}

<!-- 로그인 상자2 -->
.login-box2{
  width: 250px;
  margin: 20px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
  left: 100px;

}

<!-- 로그인 상자3 -->
button {
   width: 30%;
  padding: 20px;
  background-color: #ED552F;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  /* float: right; */
}

/* box-shadow 그림자 만들기 */

