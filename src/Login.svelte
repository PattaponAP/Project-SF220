<script>
  
 import {accounts, islogin, nameAccount, mode, subject} from "./stores.js";

  let accountNo = '';
  let pin = '';

  function checkLogin() {
    if (!(accountNo in $accounts) || $accounts[accountNo].pin != pin) {
    alert('คุณกรอก เลขทะเบียน หรือ รหัสผ่าน ของคุณไม่ถูกต้อง');
      
  }
    else {
      $nameAccount = accountNo;
      $islogin = true;
      accountNo = '';
      pin = '';
      if ($accounts[$nameAccount].type == 'student') {
          $mode = 'main'; }
      else {
          $mode = 'professor';
      }
      
       for (let x in $subject)  {
             if ($subject[x].history.includes($nameAccount)){
                $subject[x].status = true
              } else {
                $subject[x].status = false}}
  }
  
  }


</script>
   
    

      
<html>
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=kanit">
</head>
<body>
  <div class="blurred-box">

    <div class="user-login-box">
      <span class="user-icon"></span>
      <div class="user-name"><b>ลงทะเบียนเข้าสู่ระบบ</b></div>
      <input type="text" bind:value={accountNo} class="user-username" placeholder="รหัสนักศึกษา">
      <input type="password" bind:value={pin} class="user-password" placeholder="รหัสผ่าน">
      <button on:click={checkLogin} class="login-button"><b>เข้าสู่ระบบ</b></button>
    </div>
    </div>
</body>

</html>
     

  <style>

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100vw;
  height: 100vh;
}

body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url(https://thestandard.co/wp-content/uploads/2020/08/update3-1.jpg);
  width: 100%;
  height: 100%;
  font-family: kanit;
  letter-spacing: 0.2m;
  font-weight: 400;
  
}

.blurred-box {
  position: relative;
  width: 250px;
  height: 350px;
  top: calc(50% - 175px);
  left: calc(50% - 125px);
  background: inherit;
  border-radius: 2px;
  overflow: hidden;
  
}

.blurred-box:after {
  content: "";
  width: 300px;
  height: 300px;
  background: inherit;
  position: absolute;
  left: -20px;
  right: 0;
  top: -25px;
  bottom: 0;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05);
  filter: blur(10px);
}

.user-login-box{
  position: relative;
  margin-top: 30px;
  text-align: center;
  z-index: 1;
}


.user-login-box > * {
  display: inline-block;
  width: 200px;
  font-family: kanit;
}


.user-icon {
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  background-size: contain;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/1200px-Emblem_of_Thammasat_University.svg.png);

  
}


.user-name {
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
}

input.user-username {
  margin-bottom: 4px !important;
  
}

input.user-username, input.user-password   {
  display: block;
  width: 200px;
  height: 18px;
  opacity: 0.4;
  border-radius: 2px;
  padding: 15px 15px;
  border: none;
  margin: 0 auto;
  outline: none;
  
}

.login-button {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 5px;
  
}
  </style>