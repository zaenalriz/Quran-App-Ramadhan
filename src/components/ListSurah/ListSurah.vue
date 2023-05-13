<template>

    <div v-for="(items,index) in post"  class="mt-2 border h-[62px] border-[#E7E7E7] p-3 flex">
        <div class="relative w-[10%]">
            <div class="number w-[36px] h-[36px] rotate-45  bg-[#E5E5E5]">
            </div>
            <div class="absolute w-full top-1 right-[3px]">
<div class="w-full ">
    <p class="text-center  font-medium text-[15px] ">{{no+index}}</p>
</div>
            </div>
        </div>
    <div class="w-[90%] px-3 font-medium ">
      <router-link  :to="{ name: 'DetailSurah', params: { id: items.id }}">
<h5 class="text-[18px] mb-0">{{items.name_simple}}</h5>
<div class="flex justify-between">
    <p class="text-default text-[13px]">{{items.translated_name.name}}</p>
    <p class="text-default text-[13px]">{{items.verses_count}} ayat</p>
</div>
</router-link>

    </div>
    </div>

</template>

<script>
export default {
  props:['post']
}
</script>