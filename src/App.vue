<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftMenu from '@/components/layouts/LeftMenu.vue';
import TopHeader from '@/components/layouts/TopHeader.vue'
</script>

<template>
  <div class="win">
    <div>
      <LeftMenu />
    </div>
    <div>
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
