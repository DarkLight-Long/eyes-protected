<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'App',
  components: {
    RouterView
  },
  setup () {}
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
</style>
