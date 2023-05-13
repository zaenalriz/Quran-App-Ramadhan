<template>
   <div class="flex px-0 justify-center w-100 h-full">
  <div class="bg-white w-[450px]   px-[15px] sm:px[15px] lg:px=[50px]">
  <Nav/>
<Banner/>
<Categories/>
<ListSurah :post="post"/>
    </div>
</div>
</template>
<script>
import Banner from '../components/ListSurah/Banner.vue';
import Categories from '../components/ListSurah/Categories.vue';
import ListSurah from '../components/ListSurah/ListSurah.vue';
import Nav from '../components/ListSurah/Nav.vue';
import {GetData} from './../Api/index';

export default{
  components:{
 Banner,
 Nav,
 Categories,
 ListSurah
  },
  data() {
    return {
      post: [],
      isLoading: false,
      no:1
    }
  },
  methods: {
 async getPosts() {
      this.isLoading = true
        const response= await GetData(`chapters?language=id`);
this.post=response.data.chapters;

    }
  },
   mounted() {
    this.getPosts()

  }
  
}
</script>

