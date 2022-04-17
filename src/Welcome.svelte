<script>
  import {islogin, ismain} from "./stores.js";
  
  let src = "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/277233555_346442110785873_757943516236827943_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=sMnisNQVXwoAX9Nznhl&tn=qgauPwOIvarMDeQ1&_nc_ht=scontent.fbkk5-4.fna&oh=03_AVKfY679Qdt07WehE4sASgyv-H8FAWl8fjm10TtNkfFoKw&oe=62710C98"
</script>
<html>
<body>
  
  <img src={src}  width="50%" class="pic">
  <button on:click={() => ($ismain = false)}><b>CLICK TO LOGIN</b></button>
</body>
  </html>


<style>
  body {
    padding: 90px;
  }
  .pic {
    margin: auto auto;
    display: block;
    box-shadow: 5px 5px 5px #B3BEC8;
    
  }
  html {
    font-family: kanit, Gill Sans, sans-serif; 
    background-color: #DDE5EB;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    
  }

  button {
    padding: 10px;
    margin: auto auto;
    display: block;
    width: 50%;
    font-family: kanit;
    font-size:20px;
    background-color: #DDE5EB;
    border: none;
    color: #545454;
  }
  
</style>
