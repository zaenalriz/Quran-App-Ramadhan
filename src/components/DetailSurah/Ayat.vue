<template>
    <div class="arabic w-full">
        <div v-html="mergeWords()" class="flex flex-row-reverse flex-wrap">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        words: {
            type: Object
        }
    },
    methods: {
        mergeWords() {
            let text = '';
            this.words.map(function (element) {
                text += `<div class="mx-[2px]">${element.text_madani} </div>`
            })
            return text
        }

    }
}
</script>