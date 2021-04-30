<template>
  <div :class="[value && 'active', disabled && 'disabled']" :style="{fontSize: size + 'px'}" class="hola-switch" @click="click">
    <div class="switch-box" />
  </div>
</template>

<script>
/**
 * 滑动开关
 * @author KeNo
 *
 * @param {Boolean} [value = false]是否打开，双向绑定
 * @param {Boolean} [disabled = false]是否禁用
 * @param {Number} [size = 22]尺寸大小
 */
export default {
  name: 'HolaSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 22,
    },
  },
  methods: {
    click() {
      if (this.disabled) return
      this.$emit('input', !this.value)
      this.$emit('switch')
    },
  },
}
</script>
<style lang="scss">
.hola-switch {
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  width: 2em;
  height: 1em;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1); /* no */
  border-radius: 1em;
  transition: background-color 0.3s;
  font-size: 28px; /* no */

  .switch-box {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 1em;
    height: 1em;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05); /* no */
    transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  }

  &.active {
    background-color: #12B7F5;
    background-color: var(--primary);

    .switch-box {
      transform: translateX(1em);
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
