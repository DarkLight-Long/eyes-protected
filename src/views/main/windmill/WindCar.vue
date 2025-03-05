<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Windmill',
  setup () {}
})
</script>

<template>
  <div class="canava">
    <div class="wind-car">
      <span class="leaf"></span>
      <span class="leaf"></span>
      <span class="leaf"></span>
      <span class="leaf"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.canava {
  display: flex;
  justify-content: center;
  background-color: black;
  height: calc(100% - 44px);
  width: calc(100vw - 170px);
  overflow: hidden;
}
.wind-car {
  position: relative;
  margin: auto 0;
  // 动画： 名称 时间 速度 一直执行
  animation: circle 2s linear infinite;
}

@keyframes circle {
  from {}
  to {
    transform: rotate(1turn);
  }
}

.leaf {
  position: absolute;
  width: 40px;
  height: 80px;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
}
.leaf:nth-child(1){
  background-color: white;
  transform: translate(0, -79px);
}

.leaf:nth-child(2){
  background-color: yellow;
  transform: rotate(0.25turn) translate(-19px, -20px);
}

.leaf:nth-child(3){
  background-color: green;
  transform: rotate(0.5turn) translate(40px, -1px);
}

.leaf:nth-child(4){
  background-color: blue;
  transform: rotate(0.75turn) translate(59px, -60px);
}
</style>
