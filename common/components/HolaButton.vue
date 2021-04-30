<template>
  <div v-preventReClick :class="[active && 'active', weaken && 'weaken' ]" class="hola-button" @click="btnClick">
    {{ text }}
  </div>
</template>

<script>
/**
 * 按钮
 * @author KeNo
 *
 * @example <HolaButton :active="true" @click="download" text="按钮"></HolaButton>
 *
 * @param {String} [text = 'button']按钮文案
 * @param {Boolean} [active = false]是否激活，未激活时click事件无法触发
 * @param {Boolean} [weaken = false]按钮类型weaken:弱化
 *
 * @event [disabled] 未激活时点击触发
 * @event [click] 激活时点击触发
 */
export default {
  name: 'HolaButton',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'button',
    },
    weaken: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    btnClick() {
      if (!this.active) {
        this.$emit('disabled')
        return
      }
      this.$emit('click')
    },
  },
}
</script>
<style lang="scss">
.hola-button {
  // width: 622px;
  width: 100%;
  height: 96px;
  max-height: 100%;
  // border-radius: 48px;
  background: #d4d4d4;
  background: var(--disabled);
  font-size: 36px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.active {
    background: #12B7F5;
    background: var(--primary);
  }

  &.weaken {
    background: transparent;
    border: 1px solid #999;/*no*/
    color: #999;
    border: 1px solid var(--tertiary);/*no*/
    color: var(--tertiary);
  }
  &.active.weaken {
    border: 1px solid #12B7F5;
    border: 1px solid var(--primary);
    color: var(--primary);
  }
}
</style>
