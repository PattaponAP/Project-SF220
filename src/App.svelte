<script>

import Login from "./Login.svelte";
import {islogin, mode} from "./stores.js";
import Menu from "./Menu.svelte";
import Enroll from "./Enroll.svelte";
import Professor from "./Professor.svelte" ; 
import Showname from "./Showname.svelte"; 
import Welcome from "./Welcome.svelte";
import Delete from "./Delete.svelte";
import Add from "./Add.svelte";
  
  
  
</script>


{#if !$islogin}
  <Login />
  {:else}
        {#if $mode == 'home'}
        <Welcome />
        {:else if $mode == 'main'}
        <Menu />
        {:else if $mode == 'enroll'}
        <Enroll />
        {:else if $mode == 'professor'}  
        <Professor /> 
         {:else if $mode == 'showname'}  
        <Showname /> 
           {:else if $mode == 'delete'}  
        <Delete />
            {:else if $mode == 'add'}  
        <Add />
     
        {/if}     
  {/if}