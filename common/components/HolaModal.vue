<template>
  <div class="hola-modal" @click="dismiss">
    <div @click.stop>
      <slot />
    </div>
  </div>
</template>
<script>
/**
 * 模态框 - 遮罩层
 * @author KeNo
 *
 * @example <HolaModal></HolaModal>
 */
export default {
  name: 'HolaModal',
  created() {
    document.body.classList.add('body-hidden')
  },
  destroyed() {
    document.body.classList.remove('body-hidden')
  },
  methods: {
    // 点击模态框部分的事件
    dismiss() {
      this.$emit('dismiss')
    },
  },
}
</script>
<style lang="scss">
.hola-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
}
</style>
