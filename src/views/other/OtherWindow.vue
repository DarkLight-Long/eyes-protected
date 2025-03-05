<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
export default defineComponent({
  name: 'OtherWindow',
  components: {RouterView},
  setup() {
  }
})
</script>
<template>
  <div class="test">
    <RouterView />
  </div>
</template>
<style lang="less" scoped>
  .test {
    width: 100px;
    height: 100px;
    background-color: red;
    -webkit-app-region: drag;
  }
</style>