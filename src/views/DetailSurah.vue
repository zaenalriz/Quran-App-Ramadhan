<template>
    <div class="flex px-0 justify-center w-100 min-h-full">
   <div class="bg-white w-[450px]   px-[15px] sm:px[15px] lg:px=[50px]">
   <Nav/>
   <Read :post="post"/>
 </div>
 </div>
 </template>
 <script>
 import Nav from '../components/ListSurah/Nav.vue';
 import Read from '../components/DetailSurah/Read.vue';
import {URL,GetData} from '../Api/index';
 export default{
   components:{
  Nav,
  Read
   },
   data() {
    return {
      post: [],
      no:1
    }
  },
  methods: {
   async getPosts() {
      this.isLoading = true;
      const response= await GetData(`chapters/${this.$route.params.id}/verses?language=id`);
this.post=response.data ;
    }
  },
  mounted() {
    this.getPosts()
  }
   
 }
 </script>
 
 