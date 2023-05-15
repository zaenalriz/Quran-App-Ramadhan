<template>
<div class="arabic w-full">
    <div v-html="mergeWords()" class="flex flex-row-reverse flex-wrap">
    </div>
    </div>

<button @click="playAudio(words)">play</button>
</template>
<script>
import {getAudio} from '../../Api/index';
export default{
    props:{
        words:{
            type:Object
        },
        ayat:{
            type:String
        }
    },
    methods:{
       mergeWords(){
        let text='';
this.words.forEach(element => {
    text+=`<div class="mx-[2px]">${element.text_madani} </div>`
});
return text
       }, 
    async playAudio(){
    let getDataAudio=await getAudio(7,1);
    const listAudio=getDataAudio.data.audio_files;
   for (let i = 0; i < getDataAudio.data.audio_files.length; i++) {
    if(listAudio[i].verse_key==this.ayat){
 let audio=new Audio(`https://verses.quran.com/${listAudio[i].url}`)
 audio.play()
    }
    
   }

       }
    }
}
</script>