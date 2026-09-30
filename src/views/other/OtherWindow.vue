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
    width: 400px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0);
    -webkit-app-region: drag;
  }
</style>