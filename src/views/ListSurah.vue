<template>
   <div class="flex px-0 justify-center w-100 h-full">
  <div class="bg-white w-[450px]   px-[15px] sm:px[15px] lg:px=[50px]">
  <Nav/>
<Banner/>
<Categories/>
<ListSurah v-for="n in 100"/>
    </div>
</div>
</template>
<script>
import Banner from '../components/ListSurah/Banner.vue';
import Categories from '../components/ListSurah/Categories.vue';
import ListSurah from '../components/ListSurah/ListSurah.vue';
import Nav from '../components/ListSurah/Nav.vue';
export default{
  components:{
 Banner,
 Nav,
 Categories,
 ListSurah
  },
  data(){
    return {
      data:1,
      n:1
    }
  },
  
}
</script>

