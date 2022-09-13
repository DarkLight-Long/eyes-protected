<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent ({
  name: 'LefyMenu',
  setup () {
    const menu = [
      {
        id: 1,
        icon: 'icon-eyesHome',
        label: '主页',
        route: '/'
      },
      {
        id: 2,
        icon: 'icon-eyesCategory',
        label: '功能',
        route: '功能'
      },
      {
        id: 3,
        icon: 'icon-eyesProfile',
        label: '个人',
        route: '个人'
      },
      {
        id: 4,
        icon: 'icon-eyesMessage',
        label: '消息',
        route: 'message'
      },
      {
        id: 5,
        icon: 'icon-eyesSetting',
        label: '设置',
        route: '设置'
      }
    ]
    const router = useRouter()
    const handleMenuClick = (route : string) => {
      router.push({ path: route })
    }
    const user = {
      name: 'Admin',
      account: 'root'
    }
    const dayStatus = ref('light')
    setInterval(() => {
      const datehour = new Date().getHours()
      if (datehour >= 20 || datehour <= 5) {
        dayStatus.value = 'night'
      } else {
        dayStatus.value = 'light'
      }
    }, 3600000)
    return { menu, handleMenuClick, user, dayStatus }
  }
})
</script>

<template>
  <div class="left-menu">
    <ul type="none">
      <li class="user">
        <img v-if="dayStatus === 'night'" src="../../assets/moon.jpeg" width="50" height="50" />
        <img v-else src="../../assets/sun.jpeg" width="50" height="50" />
        <div class="userInfo">
          <span>{{user.name}}</span>
          <span>{{user.account}}</span>
        </div>
      </li>
      <li class="tip">Happy {{dayStatus}} ~</li>
      <li class="menu" v-for="(item, index) in menu" :key="index" @click="handleMenuClick(item.route)">
        <i class="iconfont" :class="item.icon"></i>
        {{item.label}}
      </li>
    </ul>
  </div>

</template>

<style lang="less" scoped>
  .left-menu {
    // 解决 无边框不可拖拽
    -webkit-app-region: drag;

    width: 170px;
    background-color: rgb(197, 202, 202);
    overflow-x: hidden;
    ul {
      padding: 20px 0;
      height: 100vh;
      padding-left: 30px;
      li {
        // 解决 解决无边框不可拖拽时导致的按钮不可点击
        -webkit-app-region: no-drag;
        margin: 10px;
      }
      .user {
        // margin-bottom: 30px;
        display: flex;
        flex-wrap: wrap;
        img {
          margin-right:10px;
        }
        .userInfo {
          span {
            display: block;
            font-weight: 600;
          }
        }
      }
      .tip {
        font-size: 11px;
        color: azure;
      }
      .menu {
        margin-top: 10px;
        cursor: pointer;
      }
      .menu:hover {
        opacity: 0.5;
        color: white;
      }
      .menu:last-child {
        position: absolute;
        bottom: 20px;
      }
    }
  }

  // // 宽度小于800，则left-menu宽度为110
  // @media (max-width: 800px) {
  //   .left-menu {
  //     width: 110px
  //   }
  // }

  // iconfont.cn
  @font-face {
    font-family: "iconfont"; /* Project id 3613037 */
    src: url('//at.alicdn.com/t/c/font_3613037_jgek4e54qk.woff2?t=1661741658846') format('woff2'),
        url('//at.alicdn.com/t/c/font_3613037_jgek4e54qk.woff?t=1661741658846') format('woff'),
        url('//at.alicdn.com/t/c/font_3613037_jgek4e54qk.ttf?t=1661741658846') format('truetype')
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-eyesCategory:before {
    content: "\e745";
  }

  .icon-eyesHome:before {
    content: "\e746";
  }

  .icon-eyesNotification:before {
    content: "\e747";
  }

  .icon-eyesMessage:before {
    content: "\e748";
  }

  .icon-eyesProfile:before {
    content: "\e749";
  }

  .icon-eyesSetting:before {
    content: "\e74a";
  }
</style>