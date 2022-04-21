<script>


import {islogin, nameAccount, accounts, mode, subject} from "./stores.js";

  

  function loggout() {
    if (confirm('คุณต้องการออกจากระบบใช่หรือไม่')==true){
      $islogin = false;
    }   
  }
  function main(){
    $mode = 'main'
  }
  function enroll() {
    $mode = 'enroll'
    
  }
   function home() {
    $mode = 'home'
    
  }

  function change(index) {
    let newHis = $subject[index].sub;
    if (confirm('คุณต้องการลงทะเบียนรายวิชาใช่หรือไม่')==true){
        $subject[index].status = true;
        $subject[index].students -= 1;
        $subject[index].history.push($nameAccount)
        $subject[index].count += 1;
 
  }
  }

  
</script>

<html>
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=kanit">
</head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<header>
<div>
  <div class="left">
    <div class="tu">
    <img  src="https://cdn.discordapp.com/attachments/898856117122256896/965537458391494736/01_-.jpg"width="100"height="100"></div>
    
    <div class="name1"><h3>ระบบขอโควต้ารายวิชา</h3></div>
    <div class="name2"><p style="color:#545454">มหาวิทยาลัยธรรมศาสตร์</p></div>
  </div>

    
  <div class="right">
  <div class="dropdown">
    <button class="dropbtn">{$accounts[$nameAccount].name}</button>
      <div class="dropdown-content">
        <a href = '#' on:click={home} class="button">หน้าหลัก</a><br>
        <a href = '#' on:click={main}  class="button">รายชื่อวิชาโควต้า</a> <br>
        <a href = '#' on:click={enroll} class="button" >รายชื่อวิชาที่ขอโควต้า</a> <br>
        <a href = '#' on:click={loggout} class="button">ออกจากระบบ</a>
         
      </div>
    
  </div>
      
</div>
</div>
</header>
  
 <main>
   <div class="welcome">
   <div class="hello">ยินดีต้อนรับ</div>    
  <div class="myname">{$accounts[$nameAccount].name}</div>
    <img class="pic1" src="https://cdn.discordapp.com/attachments/898856117122256896/965882977554944010/pic1.png"width=130 height=10>
   </div>
   </main>
</html>

 





<style>

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html main{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-color: #DDE5EB;
  width: 100%;
  height: 615px;
  font-family: kanit;
  letter-spacing: 0.2m;
  font-weight: 400;
  border-radius: 2px;
  overflow: hidden;
}

header {
  width: 100%;
  height: 100px;
  padding: 1rem 2rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #ffffff;
  font-family: kanit;
  }

  .tu {
    float:left;
    width: 13%;
   
  }

  
  .name {
    padding: 0.1px;
    font-weight: bold;
    padding-left: 30px;
    font-size: 40px;
    color: #000000;
    display: block;
    float: left;
    line-height: 0.6;
  }

  .left {
    width: 70%;
    float: left;
    padding: 15px;
  }


  .right {
    width: 30%;
    padding: 30px;
    float: left;
    display: block;
  }
  .name1 {
    font-size: 35px;
    padding-top: 0px;
    
  
 
}
  .name2 {
    font-size: 20px;
    padding-top: 0px;
    
  }
  
.dropdown {
  position: relative;
  display: inline-block;
  float: right;  
}

  .dropbtn {
    padding: 10px;
    font-family: kanit;
    font-size: 18px;
    color: #545454;
    background-color: #c7d0d8;
    border: none;
  
  }
.dropdown-content {
  right: 0;
  display: none;
  position: absolute;
  background-color: white;
  min-width: 215px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 10px 15px;
  z-index: 1;
  line-height: 3;
  
}

.dropdown:hover .dropdown-content {
  display: block;
}

 .button {
   text-decoration: none;
   color: black;
 }


  .head-topic {
  background-color: white;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 9px;
  text-align: center;
  font-size: 30px;
  margin: 20px 60px;
  width: 30%;
  height: 65px;
  font-family: kanit;
}

  
.subjects-box {
  background-color: #E8E8E8;
  margin: 20px 60px;
  height: 65px;
  font-family: kanit;
}
.name-sub1  {
  font-weight: bold;
  padding: 20px;
  float: left;
  width: 8%;
}
.name-sub2 {
  padding-top: 20px;
  float: left;
  width: 29%;
  color: black;
}

.teacher {
  padding: 20px;
  float: left;
  width: 22%;
}

  .students {
  padding: 20px;
  float: left;
  width: 17%;
  }
  
  .section {
  padding: 20px;
  float: left;
  width: 12%;
  }
  
  .register {
    background-color: #21BF73;
    border: none;
    padding: 8px 20px;
    float: right;
    margin: 14px;
    font-family: kanit;
    font-size: 15px;
  }
  
  .cousre-outline {
    background-color: #88E1F2;
    border: none;
    padding: 8px 10px;
    float: left;
    margin: 14px;
    font-family: kanit;
    font-size: 15px;
    text-decoration: none;
    color: black;
  }


  .welcome {
    background-color: white;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 50px;
    width: 30%;
    height: 250px;
  }

  .hello {
    padding-top: 12%;
    font-weight: bold;
  
  }

 .myname {
   font-size: 25px;
   color:#545454;
 }

</style>
