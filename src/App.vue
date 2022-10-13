<script lang="ts">
import { RouterView } from 'vue-router'
import LeftMenu from '@/components/layouts/LeftMenu.vue'
import TopHeader from '@/components/layouts/TopHeader.vue'
import { defineComponent, onMounted } from 'vue'
import { sendChannelMsg, ChannelMsgFlag, ChannelMsg } from '@/components/utils/channelUtils'

export default defineComponent ({
  name: 'App',
  components: {
    RouterView,
    LeftMenu,
    TopHeader
  },
  setup () {
    onMounted(() => {
      sendChannelMsg(ChannelMsgFlag.WELCOME)
      const msg = new ChannelMsg()
      msg.title = '休息眼睛提醒',
      msg.body = '半小时提醒一次'
      setInterval(() => {
        sendChannelMsg(ChannelMsgFlag.NORMAL, msg)
      }, 1800000)
    })
  }
})
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
