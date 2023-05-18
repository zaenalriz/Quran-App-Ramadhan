<template>
    <button @click="playAudio(words)">play</button>
</template>

<script>
import ListRecitations from './ListRecitations.vue';
import { getAudio, URL_PLAY_AUDIO } from '../../Api/index';
export default {
    props: {
        ayat: {
            type: String
        },
        verse_number: {
            type: Number
        },
        recicationActive: {
            type: Number
        }
    },
    methods: {
        filter(data) {
            return data.filter(item => item.verse_key == this.ayat);
        },
        async getListAudio() {
            let getDataAudio = await getAudio(this.$parent.$parent.recicationActive, this.$route.params.id);
            return getDataAudio.data.audio_files;
        },
        async playAudio() {
            let filterAudio = this.filter(await this.getListAudio());
            this.$emit('playAudio', `${URL_PLAY_AUDIO}${filterAudio[0].url}`)

        }
    }
}
</script>