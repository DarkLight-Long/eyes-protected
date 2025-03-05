<script lang="ts">
import { defineComponent } from 'vue';
import { sendChannelMsg, ChannelMsgFlag, ChannelMsg } from '@/components/utils/channelUtils'
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