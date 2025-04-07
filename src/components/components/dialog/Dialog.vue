<script setup lang="ts">
import { defineExpose } from 'vue'
  const props = defineProps(['show'])
  const emits = defineEmits(['confirm','cancel'])
  
  function handleCancel() {
    emits('cancel')
  }
  function handleConfirm() {    
    emits('confirm')
  }
  function handleRefFunc() {
    console.log('调用成功');
  }

  defineExpose({handleRefFunc})
</script>
<template>
  <div class="dialog" v-show="show">
    <div class="head">
      <slot name="head">
        <p>提示</p>
      </slot>
    </div>
    <div class="body">
      <slot name="body">
        <p>确认操作吗？</p>
      </slot>
    </div>
    <div class="foot">
      <button class="btn cancel" @click="handleCancel">返回</button>
      <button class="btn confirm" @click="handleConfirm">确认</button>
    </div>
    
  </div>
</template>
<style lang="less" scoped>
.dialog {
  width: 250px;
  height: 150px;
  border: 1px solid blueviolet;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  z-index: 80;
  top: calc((100vh - 200px)*0.5 - 44px);
  left: calc((100vw - 420px)*0.5);
}
.head {
  height: 30px;
  border-bottom: 1px solid cadetblue;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.body {
  height: 85px;
  
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.foot {
  height: 35px;
  border-top: 1px solid saddlebrown;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  cursor: pointer;
}
.btn.confirm {
  margin-left: 20px;
}
</style>