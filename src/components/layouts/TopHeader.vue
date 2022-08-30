<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent ({
  name: 'TopHeader',
  setup () {
    const router = useRouter()
    const handleBack = () => {
      router.back()
    }
    const handleClose = () => {
      console.log('close')
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
    width: calc(100vw - 170px);
    display: flex;
    justify-content: space-between;
    background-color: #b45e5e14;
    .back {
      margin-left: 10px
    }
    .close {
      margin-right: 10px
    }
    .back:hover {
      opacity: 0.5;
    }
    .close:hover {
      opacity: 0.5;
    }
  }

  @media(max-width: 800px) {
    .top-header {
      width: calc(100vw - 110px)
    }
  }

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