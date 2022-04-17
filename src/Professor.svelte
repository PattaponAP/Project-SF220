<script>

import {islogin, nameAccount, accounts, mode, subject, nameindex} from "./stores.js";

 function show(index) {
   $nameindex = index
   $mode = 'showname'
   
 }
  
  function loggout() {
    if (confirm('คุณต้องการออกจากระบบใช่หรือไม่')==true){
      $islogin = false;
    }   
  }
  function main(){
    $mode = 'professor'
  }


</script>
<html>
<header>  
<div>
  <div class="name">ระบบลงทะเบียนรายวิชาโควต้า</div>
  <div class="right">
  <div class="dropdown">
    <button class="dropbtn">{$accounts[$nameAccount].name}</button>
      <div class="dropdown-content">
        <a href = '#' on:click={main} class="button">หน้าหลัก</a> <br>
        <a href = '#' on:click={loggout} class="button">ออกจากระบบ</a>
      </div>
    
  </div>
      
</div>
</div>
</header>
  
 <main>  
   <div class="head-topic">รายชื่อวิชาโควต้าทั้งหมด</div>
{#each $subject as {sub, students, status, nameSub, history, section, count, teacher},index}

{#if history != ''} 
   <div class="subjects-box">
    <div class="name-sub1">{sub}</div>
    <div class="name-sub2">{nameSub}</div> 
    <div class="teacher">ผู้สอน : {teacher}</div>
    <div class="section">Section: {section}</div>
    <div class="students">จำนวนนักศึกษาที่ลงทะเบียน {count} คน</div>
    <button class ='name-students'on:click={()=>show(index)} >แสดงรายชื่อ</button> 
   </div>
    
 {/if} 
{/each}
 </main>
</html>

<style>
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url(https://live.staticflickr.com/65535/48759425063_1e7e23fbfe_o_d.jpg);
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
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25rem;
  }

  .name {
    padding: 15px;
    padding-left: 30px;
    font-size: 40px;
    color: black;
    display: block;
    float: left;
  }

  .right {
    padding: 15px;
    float: right;
    display: block;
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
  .head-topic {
  background-color: white;
   backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  text-align: center;
  font-size: 30px;
  margin: 20px 60px;
  width: 27%;
  height: 65px;
  font-family: kanit;
}
  .subjects-box {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  
  margin: 20px 60px;
  height: 65px;
  font-family: kanit;
}
.name-sub1  {
  padding: 20px;
  float: left;
  width: 4%;
}
.name-sub2 {
  padding: 20px;
  float: left;
  width: 23%;
}

.teacher {
  padding: 20px;
  float: left;
  width: 22%;
}

  .students {
  padding: 20px;
  float: left;
  width: 20%;
  }
  .section {
  padding: 20px;
  float: left;
  width: 12%;
  }
  
  .name-students {
    
    background-color: #778899;
    color: white;
    border: none;
    padding: 8px 20px;
    float: right;
    margin: 14px;
    font-family: kanit;
    font-size: 15px;
  }
</style>