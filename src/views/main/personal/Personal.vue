<script setup lang="ts">
import Dialog from '@/components/components/dialog/Dialog.vue';
import ToolTip from '@/components/components/toolTip/ToolTip.vue';
import { ref } from 'vue';

  let show = ref(false)

  function handleConfirm() {
    console.log('confirm')
    show.value = !show.value
  }

  function handleCancel() {
    console.log('cancel')
    show.value = !show.value
  }

  const dialog = ref()
  // let dialog = useTemplateRef('dialog')//vue 3.5之后才支持
  function handleClick() {
    dialog.value.handleRefFunc()
    show.value = !show.value
  }

</script>
<template>
  <div class="personal">
    <button @click="handleClick">点击</button>
    <Dialog ref="dialog" @confirm="handleConfirm" @cancel="handleCancel" :show="show">
      <template v-slot:head>
        <div class="tHead">
          <p>Head</p>
        </div>
      </template>
      <template v-slot:body>
        <div class="tBody">
          <p>Body</p>
        </div>
      </template>
    </Dialog>
    <ToolTip :show="show">
      <template v-slot:default>
        ToolTip
      </template>
    </ToolTip>
  </div>
</template>
<style lang="less" scoped>
</style>