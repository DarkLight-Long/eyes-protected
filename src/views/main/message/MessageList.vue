<script lang="ts">
import { useCounterStore } from '@/stores/counter/counter';
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'MessageList',
  setup () {
    const counter = useCounterStore()

    const msg = ref({})
    msg.value = 'Message List'

    watch(msg, () =>{
      console.log(msg.value)
    })

    const msgCache = computed(() => {
      return msg.value + "cache"
    })

    const handleChange = () => {
      msg.value = 'Message Changed'
      counter.increment()
    }
    return { msg, handleChange, msgCache, counter }
  }
});
</script>

<template>
  <div>
    {{msg}}
    <button @click="handleChange">Click</button>
    {{msgCache}}
    {{counter.count}}
  </div>
</template>

<style lang="less" scoped>
  
</style>