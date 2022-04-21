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
          $mode = 'home';}
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
  width: 100%;
  height: 730px;
}

body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url(https://media.discordapp.net/attachments/898856117122256896/965881556864491540/Untitled-2.png?width=1178&height=662);
  width: 100%;
  height: 100%;
  font-family: kanit;
  letter-spacing: 0.2m;
  font-weight: 100;
  
}

.blurred-box {
  position: relative;
  width: 250px;
  height: 350px;
  top: calc(50% - 175px);
  left: calc(50% - 125px);
  background: #ffffff;
  border-radius: 2px;
  overflow: hidden;
  
  
}

.blurred-box:after {
  content: "";
  width: 300px;
  height: 300px;
  background: #ffffff;
  position: absolute;
  left: -20px;
  right: 0;
  top: -25px;
  bottom: 0;
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
  width: 110px;
  height: 110px;
  position: relative;
  border-radius: 0%;
  background-size: contain;
  background-image: url(https://cdn.discordapp.com/attachments/898856117122256896/965537458391494736/01_-.jpg);

}


.user-name {
  margin-top: 15px;
  margin-bottom: 15px;
  color: #545454;
  
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
  border: 1px solid #b3bec8;
  
}

.login-button {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 5px;
  background:#545454;
  color:#ffffff
  
}
  </style>