<script lang="ts">
import { RouterView } from 'vue-router'
import LeftMenu from '@/components/layouts/LeftMenu.vue'
import TopHeader from '@/components/layouts/TopHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'App',
  components: {
    RouterView,
    LeftMenu,
    TopHeader
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
