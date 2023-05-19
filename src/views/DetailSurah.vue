<template>
  <div class="flex px-0 justify-center w-100 min-h-full">
    <div class="bg-white w-[450px]   px-[15px] sm:px[15px] lg:px=[50px]">
      <Nav />
      <ListRecitations :listRecications="listRecications" @recication-active="recicationActiveOption" />
      <Read :post="post" />
    </div>
  </div>
</template>
<script>
import Nav from '../components/ListSurah/Nav.vue';
import ListRecitations from '../components/DetailSurah/ListRecitations.vue';
import Read from '../components/DetailSurah/Read.vue';
import { URL, GetData } from '../Api/index';
export default {
  components: {
    Read,
    Nav,
    ListRecitations
  },
  data() {
    return {
      post: [],
      listRecications: [],
      recicationActive: 7,
      no: 1
    }
  },
  methods: {
    async getPosts() {
      this.isLoading = true;
      const response = await GetData(`chapters/${this.$route.params.id}/verses?language=id`);
      this.post = response.data;
    },
    async getListRecitations() {
      this.isLoading = true;
      const response = await GetData(null, null, `https://api.quran.com/api/v4/resources/recitations?language=en`);
      this.listRecications = response.data.recitations;
    },
    recicationActiveOption(id = 7) {
      this.recicationActive = parseInt(id);
    }
  },
  mounted() {
    this.getPosts()
    this.getListRecitations()


  }

}
</script>
 
 