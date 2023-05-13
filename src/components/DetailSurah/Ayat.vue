<template>
<p class="arabic">{{ mergeWords() }}</p>
</template>
<script>
export default{
    props:{
        words:{
            type:Object
        }
    },
    methods:{
       mergeWords(){
        let text='';
this.words.forEach(element => {
    console.log(element);
    text+=element.text_madani+' '
});
return text;
       } 
    }
}
</script>