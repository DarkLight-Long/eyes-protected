<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MessageList',
  setup () {
    const msg = ref({})
    msg.value = 'Message List'

    const handleChange = () => {
      msg.value = 'Message Changed'
    }
    return { msg, handleChange }
  }
});
</script>

<template>
  <div>
    {{msg}}
    <button @click="handleChange">Click</button>
  </div>
</template>

<style lang="less" scoped>
  
</style>