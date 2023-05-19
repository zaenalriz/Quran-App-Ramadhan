<template>
    <div v-for="(items, index) in post.verses" :id="'ayat' + items.id"
        class="mt-2 border  border-[#E7E7E7] p-3 flex justify-end">
        <div class="px-3 font-medium ">
            <Ayat :words="items.words" :ayat="items.verse_key" />
            <RunAudio :recicationActive="recicationActive2" @play-audio="playAudio" :verse_number="items.verse_number"
                :ayat="items.verse_key" />
        </div>
    </div>
</template>
<script>
import Ayat from './Ayat.vue';
import RunAudio from './Audio.vue';
export default {
    emits: ['recicationActive'],
    components: {
        Ayat,
        RunAudio
    },
    props: {
        post: {
            type: Object,
            required: false,
            dafault: []
        },
        recicationActive2: {
            type: Number
        }
    },
    data() {
        return {
            no: 1
        }
    },
    methods: {

        async playAudio(url) {
            fetch(url)
                .then((response) => response.body)
                .then((rb) => {
                    const reader = rb.getReader();
                    return new ReadableStream({
                        start(controller) {
                            // The following function handles each data chunk
                            function convertBytes(bytes) {
                                if ((bytes >> 30) & 0x3FF)
                                    bytes = (bytes >>> 30) + '.' + (bytes & (3 * 0x3FF)) + 'GB';
                                else if ((bytes >> 20) & 0x3FF)
                                    bytes = (bytes >>> 20) + '.' + (bytes & (2 * 0x3FF)) + 'MB';
                                else if ((bytes >> 10) & 0x3FF)
                                    bytes = (bytes >>> 10) + '.' + (bytes & (0x3FF)) + 'KB';
                                else if ((bytes >> 1) & 0x3FF)
                                    bytes = (bytes >>> 1) + 'Bytes';
                                else
                                    bytes = bytes + 'Byte';
                                return bytes;
                            }
                            function push() {
                                let total = 0;
                                // "done" is a Boolean and value a "Uint8Array"
                                reader.read().then(function ({ done, value }, total) {
                                    // If there is no more data to read
                                    if (done) {
                                        // console.log("done", done);
                                        controller.close();
                                        return;
                                    }
                                    // Get the data and send it to the browser via the controller
                                    controller.enqueue(value);
                                    // Check chunks by logging to the console
                                    console.log(total);
                                    total += value.length;
                                    console.log(done, convertBytes(value.length));
                                    push();
                                });
                                console.log(convertBytes(total));
                            }

                            push();
                        },
                    });
                })
                .then((stream) =>
                    // Respond with our stream
                    new Response(stream)
                )
                .then((result) => {
                    // Do things with result
                    return result.blob()

                })
                .then(blob => URL.createObjectURL(blob))
                // Update image
                .then(url => {
                    let audio = new Audio(url);
                    audio.load();
                    audio.play();
                })
                ;



            // let request = new XMLHttpRequest();
            // request.open("GET", url, true);
            // request.responseType = "blob";
            // request.onload = function () {
            //     console.log(url);
            //     if (this.status == 200) {
            //         console.log(URL.createObjectURL(this.response));
            //         let audio = new Audio(URL.createObjectURL(this.response));
            //         audio.load();
            //         audio.play();
            //     }
            // }
            // request.send();
        }
    },
    mounted() {
        console.log(this.recicationActive2);
    }
}
</script>