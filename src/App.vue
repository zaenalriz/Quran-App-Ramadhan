<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  
 
  <RouterView />
 
</template>
<script>
export default{
methods:{
  page(){
    const page=this.$route.name;
    console.log('ss');
    if (page=='home') {
      return 'h-[100vh]';
    }else{
return 'h-[100%]';
    }
  }
}
}
</script>
