<template>
    <div v-for="(items,index) in post.verses"  class="mt-2 border  border-[#E7E7E7] p-3 flex justify-end">
       
    <div class="px-3 font-medium ">
<Ayat :words="items.words"/>
    </div>
    </div>
</template>
<script>
import Ayat from './Ayat.vue';
export default{
    components:{
Ayat
    },
    props:{
        post:{
            type:Object,
            required:false,
            dafault:[]
        }
    },
    data(){
        return {
            no:1
        }
    }
}
</script>