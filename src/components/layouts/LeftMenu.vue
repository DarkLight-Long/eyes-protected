<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  name: 'LefyMenu',
  setup () {
    const menu = [
      {
        id: 1,
        icon: 'icon-eyesHome',
        label: '主页',
        router: '主页'
      },
      {
        id: 2,
        icon: 'icon-eyesCategory',
        label: '功能',
        router: '功能'
      },
      {
        id: 3,
        icon: 'icon-eyesProfile',
        label: '个人',
        router: '个人'
      },
      {
        id: 4,
        icon: 'icon-eyesMessage',
        label: '消息',
        router: '消息'
      },
      {
        id: 5,
        icon: 'icon-eyesSetting',
        label: '设置',
        router: '设置'
      }
    ]
    const handleMenuClick = (val : string) => {
      console.log(val + "is clicked")
    }
    const user = {
      name: 'Admin',
      account: 'root'
    }
    return { menu, handleMenuClick, user }
  }
})
</script>

<template>
  <div class="left-menu">
    <ul type="none">
      <li class="user">
        <img src="../../assets/avatar.jpg" width="50" height="50" />
        <div class="userInfo">
          <span>{{user.name}}</span>
          <span>{{user.account}}</span>
        </div>
      </li>
      <li class="menu" v-for="(item, index) in menu" :key="index" @click="handleMenuClick(item.label)">
        <i class="iconfont" :class="item.icon"></i>
        {{item.label}}
      </li>
    </ul>
  </div>

</template>

<style lang="less" scoped>
  .left-menu {
    width: 170px;
    background-color: rgb(197, 202, 202);
    overflow-x: hidden;
    ul {
      padding: 20px 0;
      height: 100vh;
      padding-left: 30px;
      .user {
        margin-bottom: 30px;
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

  // 宽度小于800，则left-menu宽度为110
  @media (max-width: 800px) {
    .left-menu {
      width: 110px
    }
  }

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