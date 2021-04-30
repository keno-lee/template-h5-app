<template>
  <HolaDialog :hasClose="hasClose" :value="value" @input="input">
    <div class="hola-alert">
      <div class="alert-title">
        {{ title }}
      </div>
      <div class="alert-content-wrap">
        <div class="alert-content">
          <slot name="content" />
        </div>
      </div>
      <div class="alert-button-wrap">
        <slot name="button">
          <HolaButton :active="true" :text="buttonText" @click="btnClick" />
        </slot>
      </div>
    </div>
  </HolaDialog>
</template>
<script>
/**
 * 强制对话框
 * @author KeNo
 *
 * @param {String} [title = 'title']标题
 * @param {String} [buttonText = 'buttonText']按钮文案
 * @param {Boolean} [hasClose = false]是否有关闭按钮
 *
 * @slot [content] 内容
 * @slot [button] 按钮部分
 *
 * @event [btnClick] 按钮点击
 */
import HolaButton from '@common/components/HolaButton.vue'
import HolaDialog from '@common/components/HolaDialog.vue'

export default {
  name: 'HolaAlert',
  components: {
    HolaDialog,
    HolaButton,
  },
  props: {
    value: {
      default: false,
      type: Boolean,
    },
    title: {
      default: 'title',
      type: String,
    },
    buttonText: {
      default: 'buttonText',
      type: String,
    },
    hasClose: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    btnClick() {
      this.$emit('input', !this.value)
      this.$emit('btnClick')
    },
    input(value) {
      this.$emit('input', value)
    },
  },
}
</script>
<style lang="scss">
.hola-alert {
  z-index: 22;
  box-sizing: border-box;
  // width: 80%;
  width: 600px;
  // height: 860px;
  padding: 16px 32px 24px;
  background: #fff;
  border-radius: 10px;

  .alert-title {
    height: 98px;
    font-size: 34px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .alert-content-wrap {
    padding: 24px 0;
    // background-color: #fafafa;

    .alert-content {
      box-sizing: border-box;
      // 最大高度
      max-height: 522px;
      // 预设的
      min-height: 100px;
      padding: 0 24px;
      overflow-y: scroll;
      background-color: #fafafa;
    }

    /* 定义滚动条大小 */
    .alert-content::-webkit-scrollbar {
      width: 5px; /* 对垂直流动条有效 */
    }

    /* 定义滑块颜色、内阴影及圆角 */
    .alert-content::-webkit-scrollbar-thumb {
      background-color: #eee;
    }
  }

  .alert-button-wrap {
    min-height: 152px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
