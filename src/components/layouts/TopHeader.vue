<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { sendChannelMsg } from '@/components/utils/channelUtils'

export default defineComponent ({
  name: 'TopHeader',
  setup () {
    const router = useRouter()
    const handleBack = () => {
      console.log('back');
      // router.back()
    }
    const handleClose = () => {
      sendChannelMsg('close')
    }
    return { handleBack, handleClose }
  }
})

</script>

<template>
  <div class="top-header">
    <i class="back iconfont icon-eyesarrow-left" @click="handleBack"></i>
    <i class="close iconfont icon-eyesclose" @click="handleClose"></i>
  </div>
</template>

<style lang="less" scoped>
  .top-header {
    // 解决 无边框不可拖拽
    -webkit-app-region: drag;

    width: calc(100vw - 170px);
    height: 44px;
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    .back {
      // 解决 解决无边框不可拖拽时导致的按钮不可点击
      -webkit-app-region: no-drag;
      
      margin-left: 10px;
      z-index: 99;
    }
    .close {
      // 解决 解决无边框不可拖拽时导致的按钮不可点击
      -webkit-app-region: no-drag;

      margin-right: 10px;
      z-index: 99;
    }
  }

  @media(hover:hover) {
    .back:hover{
      opacity: 0.5;
    }
    .close:hover {
      opacity: 0.5;
    }
  }

  // @media(max-width: 800px) {
  //   .top-header {
  //     width: calc(100vw - 110px)
  //   }
  // }

  @font-face {
    font-family: "iconfont"; /* Project id 3613037 */
    src: url('//at.alicdn.com/t/c/font_3613037_jgek4e54qk.woff2?t=1661741658846') format('woff2'),
        url('//at.alicdn.com/t/c/font_3613037_jgek4e54qk.woff?t=1661741658846') format('woff'),
        url('//at.alicdn.com/t/c/font_3613037_jgek4e54qk.ttf?t=1661741658846') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 28px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-eyesarrow-left:before {
    content: "\e605";
  }

  .icon-eyesclose:before {
    content: "\e607";
  }
</style>