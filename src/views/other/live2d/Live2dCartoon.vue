<script lang="ts">
import { defineComponent } from 'vue';
import { sendChannelMsg, ChannelMsgFlag, ChannelMsg } from '@/components/utils/channelUtils'
import "https://fastly.jsdelivr.net/npm/live2d-widgets@0/autoload.js" //TODO live2d待优化
export default defineComponent({
  name: 'Live2dCartoon',
  setup() {
    function handleClick() {
      sendChannelMsg(ChannelMsgFlag.CLOSE)
    }
    return {handleClick}
  }
})
</script>
<template>
  <div class="box">
    <span>Hello World~</span>
    <div><button @click="handleClick">Close</button></div>
  </div>
</template>
<style lang="less" scoped>
  .box {
    -webkit-app-region: no-drag;
  }
</style>