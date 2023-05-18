<template>
    <div>

        <label for="underline_select" class="sr-only">Underline select</label>
        <select ref:list @change="SelectRececation" ref="rececations" id="underline_select"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option value="7" selected>Select Recications</option>
            <option :value="items.id" v-for="items in this.listRecications">{{
                items.translated_name.name
            }}</option>

        </select>
    </div>
</template>


<script>
export default {
    props: {
        listRecications: {
            type: Object
        }
    },
    methods: {
        SelectRececation(event) {
            console.log('eee');
            this.$emit('recicationActive', event.target.value)
        }
    }
}

</script>