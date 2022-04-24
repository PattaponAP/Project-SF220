<script>
  let subname = '';
  let longname = '';
  let teacher = '';
  let section = '';
  let student = 0;

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
    $mode = 'professor';
  }

    function cancle() {
    $mode = 'delete';
    
  }
  function addsubject() {
    $mode = 'add'
    
  }

  function add() {
    if (confirm('คุณต้องการเพิ่มรายวิชาใช่หรือไม่')==true) {
    $subject.push({sub:subname, students: student,status:'', nameSub:longname,teacher:teacher,section:section ,history:[],count:0,});
    $subject = $subject;
    subname = '';
    longname = '';
    teacher = '';
    section = '';
    student = 0;
    }
    
  }


</script>
<html>
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
       <a href = '#' on:click={main} class="button">หน้าหลัก</a> <br>
        <a href = '#' on:click={addsubject} class="button">เพิ่มรายวิชาโควต้า</a> <br>
        <a href = '#' on:click={cancle} class="button">ลบรายวิชาโควต้า</a> <br>
        <a href = '#' on:click={loggout} class="button">ออกจากระบบ</a>
      </div>
    
  </div>
      
</div>
</div>
</header>
  
 <main>  
   <div class="addsubject">
     <div class="topic">เพิ่มรายวิชาโควต้า</div>
     <label class='title_subname'>รหัสรายวิชา</label>
     <input bind:value={subname} type='text' class= 'subname'>
    
     
    
     <label class='title_longname'>ชื่อรายวิชา</label> 
      <input bind:value={longname} type='text' class= 'longname'>
     

     <label class='title_teacher'> ผู้สอน</label> 
     <input bind:value={teacher} type='text' class= 'teacher'>
     

      <label class='title_section'>Section</label> 
     <input bind:value={section} type='text' class= 'section'>
      

     <label class='title_student'>จำนวนที่นั่ง</label> 
     <input bind:value={student} type='number' class= 'student'>
       
   
   <button class="add" on:click={add}>เพิ่มรายวิชา</button>
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
  height: 700px;
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

 .button {
   text-decoration: none;
   color: black;
 }


.addsubject {
  background-color: white;
  padding: 20px;
  width: 29%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}



  .topic {
    font-weight: bold;
    color:#717073;
    font-size: 30px;
    text-align: center;
    line-height: 65px;
  }
  
.title_subname {
  padding: 6px;
  margin-right: 0px;
  font-family: kanit;
  
  
}
.subname {
  padding: 8px;
  width: 72%;
  margin-bottom: 10px;
  font-size: 15px;
  font-family: kanit;
}


.title_longname {
  padding: 10px;
  font-family: kanit;
  
}
  
.longname {
  padding: 10px;
  width: 72%;
  margin-bottom: 10px;
  font-size: 15px;
  font-family: kanit;
}
  
  .title_teacher {
    margin-right: 28px;
    padding: 10px;
    font-family: kanit;
    
  }

  .teacher {
  padding: 10px;
  width: 72%;
  margin-bottom: 10px;
  font-family: kanit;
  font-size: 15px;
  }

  .title_section {
    margin-right: 13px;
    padding: 10px;
    font-family: kanit;
   
  }

  .section {
    padding: 10px;
    width: 72%;
    margin-bottom: 10px;
    font-size: 15px;
    font-family: kanit;
  }

  .title_student {
    margin-right: 0px;
    padding: 7px;
    font-family: kanit;
   
  
  }

  .student {
    padding: 10px;
    width: 72%;
    margin-bottom: 10px;
    font-size: 15px;
    font-family: kanit;
  }

  .add {
    background-color: #545454;
    color: #ffffff;
    border: none;
    padding: 8px 20px;
    margin: 10px;
    width: 92%;
    font-family: kanit;
    font-size: 15px;
  }

  
</style>