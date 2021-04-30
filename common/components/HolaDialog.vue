<template>
  <transition name="transition-fade">
    <HolaModal v-if="value" @dismiss="dismissModal">
      <div class="hola-dialog">
        <slot />
        <div v-if="hasClose" class="close" @click="close">
          <!-- TODO 这个右箭头用的是项目的 -->
          <span class="icon iconfont">&#xe673;</span>
        </div>
      </div>
    </HolaModal>
  </transition>
</template>
<script>
/**
 * 单元格输入框
 * @author KeNo
 *
 * @example <HolaDialog :hasClose="false" @close="close" v-model="holaDialogVisible">xxx</HolaDialog>
 *
 * @param {Boolean} [hasClose = true]是否有关闭按钮
 * @param {Boolean} [shadowClose = false]是否可以点击阴影关闭
 *
 * @slot [] 对话框内容
 */
import HolaModal from '@common/components/HolaModal.vue'

export default {
  name: 'HolaDialog',
  components: {
    HolaModal,
  },
  props: {
    value: {
      default: false,
      type: Boolean,
    },
    hasClose: {
      default: true,
      type: Boolean,
    },
    shadowClose: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    close() {
      // 由于再点击叉号的时候会做些额外的处理，所以加上这一个拦截判断，如果父级有传递这个方法，则调用方法
      if (this.$listeners.closeHoc) {
        this.$listeners.closeHoc()
      }
      this.$emit('input', !this.value)
    },
    // 点击模态框部分的事件
    dismissModal() {
      if (this.shadowClose) this.$emit('input', !this.value)
    },
  },
}
</script>
<style lang="scss">
.hola-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 22;

  .close {
    // width: 72px;
    // height: 72px;
    // background-color: red;
    position: absolute;
    bottom: -120px;
    left: 50%;
    transform: translateX(-50%);

    .iconfont {
      font-size: 72px;
      color: #fff;
    }
  }
}
</style>
