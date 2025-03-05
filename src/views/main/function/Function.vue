<script setup lang="ts">
import { sendChannelMsg, ChannelMsgFlag, ChannelMsg } from '@/components/utils/channelUtils'

function handleClick() {
  sendChannelMsg(ChannelMsgFlag.NEW_WIN)
}

</script>

<template>
  <div>
    <button @click="handleClick" >切换</button>
  </div>
</template>
<style lang="less" scoped>
</style>