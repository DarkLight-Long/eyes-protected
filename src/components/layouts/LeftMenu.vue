<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  name: 'LefyMenu',
  setup () {
    const menu = [
      {
        id: 1,
        icon: '主页',
        label: '主页',
        router: '主页'
      },
      {
        id: 2,
        icon: '功能',
        label: '功能',
        router: '功能'
      },
      {
        id: 3,
        icon: '个人',
        label: '个人',
        router: '个人'
      },
      {
        id: 4,
        icon: '消息',
        label: '消息',
        router: '消息'
      },
      {
        id: 5,
        icon: '设置',
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
        {{item.label}}
      </li>
    </ul>
  </div>

</template>

<style lang="less" scoped>
  .left-menu {
    min-width: 110px;
    max-width: 300px;
    width: 20vw;
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
</style>