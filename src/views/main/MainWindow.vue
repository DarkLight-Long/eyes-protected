<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftMenu from '@/components/layouts/LeftMenu.vue'
import TopHeader from '@/components/layouts/TopHeader.vue'
import { sendChannelMsg, ChannelMsgFlag, ChannelMsg } from '@/components/utils/channelUtils'
import { onMounted, ref } from 'vue'

  const noticeTime = ref(0)
  let noticeFun: NodeJS.Timer
  
  onMounted(() => {
    sendChannelMsg(ChannelMsgFlag.WELCOME)
    sendNotice()
  })

  function sendNotice() {
    if (noticeFun !== undefined) {
      const msg1 = new ChannelMsg()
      msg1.title = '休息提醒',
      msg1.body = '请注意息屏闭眼休息眼睛'

      const msg2 = new ChannelMsg()
      msg2.title = '休息提醒',
      msg2.body = '你已经使用设备长达两小时，请注意休息'
      noticeFun = setInterval(() => {
        noticeTime.value++
        sendChannelMsg(ChannelMsgFlag.NORMAL, noticeTime.value%4 === 0 ? msg2: msg1 )
      }, 1800000)
    }
  }

</script>
<template>
  <div class="win">
    <div>
      <LeftMenu />
    </div>
    <div class="right">
      <TopHeader />
      <RouterView />
    </div>
  </div>
</template>
<style lang="less" scoped>
 .win {
    display: flex;
  }
</style>