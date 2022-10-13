<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import { sendChannelMsg } from '@/components/utils/channelUtils'
import webSocket from '@/components/utils/webSocketUtils'

export default defineComponent ({
  name: 'TopHeader',
  setup () {
    webSocket.onmessage = (message) => {
      console.log(message)
    }

    watch(() => webSocket.readyState, () => {
      if (webSocket.readyState === 1) {
        const func = setInterval(() => {
          if (webSocket.readyState === 1) {
            webSocket.send('hello')
          } else {
            switch(webSocket.readyState) {
              case 0:
                console.log('websocket 连接异常, 连接中...')
                break
              case 2: 
                console.log('websocket 连接异常, 关闭中...')
                break
              case 3: 
                console.log('websocket 连接异常, 已关闭')
                break
              default: 
                console.log('websocket 连接异常, 未知状态')
            }
            clearInterval(func)
          }
        }, 6000)
      } else {
        console.log('websocket 连接异常')
      }
    })

    

    const router = useRouter()
    const handleBack = () => {
      router.back()
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