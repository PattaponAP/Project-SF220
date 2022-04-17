<script>

import {islogin, nameAccount, accounts, mode, subject, nameindex} from "./stores.js";

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
  
  {#each $subject as {sub, students, status, nameSub, history, count},index}
  {#if index == $nameindex}
  
  <div class="head-topic">รายชื่อนักศึกษาที่ลงทะเบียนรายวิชา {sub}</div>
  
  {#each history as namelist}
    <div class='name-box'>
      {namelist}         {$accounts[namelist].name}
    </div>
  {/each}
  
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
  height: 725px;
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
  width: 40%;
  height: 65px;
  font-family: kanit;
}
.name-box {
  background-color: #E8E8E8;
   backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  text-align: center;
  margin: 20px 60px;
  width: 25%;
  float: left;
  height: 50px;
  font-family: kanit;
  font-size: 20px;
}
</style>