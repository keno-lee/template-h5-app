<template>
  <section class="hola-agreement">
    <!-- icon部分 -->
    <div @click="clickIcon">
      <span v-if="value" class="icon iconfont fs-xl c-primary">&#xe675;</span>
      <span v-else class="icon iconfont fs-xl">&#xe687;</span>
    </div>
    <!-- 内容 -->
    <div class="agreement-content">
      <span class="c-tertiary" @click="clickIcon">{{ hint }}</span>
      <slot />
      <span class="c-tertiary">{{ trailing }}</span>
    </div>
  </section>
</template>

<script>
/**
 * 合同、协议同意的组件
 * @author KeNo
 *
 * @example <HolaAgreement v-model="agreementChecked">
 *
 * @param {String} [hint = '我已阅读并同意']提示文案
 * @param {Boolean} [canSelect = false]是否可以勾选
 *
 * @slot [] 协议内容部分
 */
export default {
  name: 'HolaAgreement',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    canSelect: {
      default: true,
      type: Boolean,
    },
    hint: {
      default: '我已阅读并同意',
      type: String,
    },
    trailing: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      selected: true,
    }
  },
  methods: {
    /**
     * 点击同意按钮
     */
    clickIcon() {
      if (!this.canSelect) {
        return
      }
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style lang="scss">
.hola-agreement {
  line-height: 44px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .icon.iconfont {
    margin-right: 12px;
  }

  .agreement-content {
    flex: 1;
    text-align: left;
  }
}
</style>
