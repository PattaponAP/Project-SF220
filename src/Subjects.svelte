<script>
    import { mode } from "./stores.js";
  </script>
  

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
<header>
  <div>
  <div class="name">ระบบลงทะเบียนรายวิชาโควต้า</div>
  <div class="right">
  <div class="dropdown">
    <button class="dropbtn">{$accounts[$nameAccount].name}</button>
      <div class="dropdown-content">
        <a on:click={main} class="button">หน้าหลัก</a> <br>
        <a on:click={enroll} class="button" >รายชื่อวิชาที่ลงทะเบียน</a> <br>
        <a on:click={loggout} class="button">ออกจากระบบ</a>
      </div>
    
  </div>
      
</div>
</div>
</header>

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
  background-image: url(https://thestandard.co/wp-content/uploads/2020/08/update3-1.jpg);
  width: 100%;
  height: 100%;
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
</style>