<script lang="ts">
import { defineComponent } from 'vue';
// TODO 待完善
export default defineComponent({
  name: 'ToolTip',
  props: ['show'],
  emits: [],
  computed: {},
  setup(props, ctx) {
    
  },
})
</script>
<template>
  <div class="tooltip" v-show="show">
    <slot>
      <p>提示</p>
    </slot>
  </div>
</template>
<style lang="less" scoped>
.tooltip {
  border: 1px solid violet;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
}

@keyframese loop {
  from {}
  to {}
}
</style>