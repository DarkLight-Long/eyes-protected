<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'MessageList',
  setup () {
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
    }
    return { msg, handleChange, msgCache }
  }
});
</script>

<template>
  <div>
    {{msg}}
    <button @click="handleChange">Click</button>
    {{msgCache}}
  </div>
</template>

<style lang="less" scoped>
  
</style>