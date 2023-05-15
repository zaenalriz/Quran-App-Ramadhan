<template>
    <div v-for="(items,index) in post.verses" :id="'ayat'+items.id" class="mt-2 border  border-[#E7E7E7] p-3 flex justify-end">
    <div class="px-3 font-medium ">
<Ayat :words="items.words" :ayat="items.verse_key"/>

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