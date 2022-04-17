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

  function change(index) {
    if (confirm('คุณต้องการยกเลิกการลงทะเบียนใช่หรือไม่')==true){
        $subject[index].status = false;
        $subject[index].students += 1;
        $subject[index].count -= 1;}
        $subject[index].history.splice($subject[index].history.indexOf($nameAccount), 1)
  }

  
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<body>
<header>
<div>
  <div class="name">ระบบลงทะเบียนรายวิชาโควต้า</div>
  <div class="right">
  <div class="dropdown">
    <button class="dropbtn">{$accounts[$nameAccount].name}</button>
      <div class="dropdown-content">
        <a href = '#' on:click={main} class="button">หน้าหลัก</a> <br>
        <a href = '#' on:click={enroll} class="button" >รายชื่อวิชาที่ลงทะเบียน</a> <br>
        <a href = '#' on:click={loggout} class="button">ออกจากระบบ</a>
      </div>
    
  </div>
      
</div>
</div>
</header>

<main>
  {#each $subject as {sub, students,teacher,section, status, nameSub},index}
   {#if (status)}
   
    <div class="subjects-box">
    <div class="name-sub1">{sub}</div>
    <div class="name-sub2">{nameSub}</div> 
    <div class="teacher">ผู้สอน : {teacher}</div>
    <div class="section">Section: {section}</div>
    <div class="students">จำนวนที่นั่งคงเหลือ {students} ที่นั่ง</div>
    <button on:click={()=>change(index)} class ='cancle'>ยกเลิก</button> 
  
    
    </div>
   
   
   {/if}
    
  {/each}
  </main>
</body>
 

<style>




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  
}

body {
  background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
  background-image: url(https://thestandard.co/wp-content/uploads/2020/08/update3-1.jpg);
  width: 100%;
  height: 1450px;
  font-family: kanit;
  letter-spacing: 0.2m;
  font-weight: 400;
  border-radius: 2px;
  overflow: hidden;
}

header {
  width: 100%;
  height: 120px;
  padding: 1rem 2rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.25rem;
  }

  .name {
    padding: 15px;
    padding-left: 30px;
    font-size: 40px;
    color: black;
    display: block;
    float: left;
    font-family: kanit;
  }

  .right {
    padding: 15px;
    float: right;
    display: block;
    font-family: kanit;
  }

.dropdown {
   position: relative;
  display: inline-block;
  float: right;  
}

.dropbtn {
    padding: 10px;
    font-family: kanit;
    font-size: 20px;
    background-color: #F8EFD4;
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
  .subjects-box {
  background-color: #E8E8E8;
  margin: 20px 60px;
  height: 65px;
  font-family: kanit;
}
.name-sub1  {
  padding: 20px;
  float: left;
  width: 7%;
}
.name-sub2 {
  padding: 20px;
  float: left;
  width: 32%;
}

.teacher {
  padding: 20px;
  float: left;
  width: 22%;
}

  .students {
  padding: 20px;
  float: left;
  width: 18%;
  }
  .section {
  padding: 20px;
  float: left;
  width: 12%;
  }
  
  .cancle {
    background-color: #FF3300;
    color: white;
    border: none;
    padding: 8px 20px;
    float: right;
    margin: 14px;
    font-family: kanit;
    font-size: 15px;
  }
  
 
</style>