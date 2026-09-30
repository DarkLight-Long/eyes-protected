<script lang="ts">
import { defineComponent } from 'vue';
import { sendChannelMsg, ChannelMsgFlag, ChannelMsg } from '@/components/utils/channelUtils'
import "https://fastly.jsdelivr.net/npm/live2d-widgets@0/autoload.js" //(旧) 新版疑似无法使用，旧版图片无法加载
// import "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0/dist/autoload.js" //(20260223) TODO live2d待优化
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
    <div><button @click="handleClick">Close</button></div>
  </div>
</template>
<style lang="less" scoped>
  .box {
    -webkit-app-region: no-drag;
    width: 150px;
    height: 150px;
    background-color: pink;
    border-radius: 75px;
  }
</style>