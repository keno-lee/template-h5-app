<template>
  <div class="hola-tabview-item">
    <slot />
  </div>
</template>

<script>
/**
 * 标签栏子项 - 需要配合使用HolaTabview
 * @author KeNo
 */
export default {
  name: 'HolaTabviewItem',
  props: {},
  data() {
    return {
      transition: 300,
      translateX: 0,
    }
  },
  computed: {
    style() {
      return {
        transition: `${this.transition}ms`,
        transform: `translate3d(${this.translateX}, 0, 0)`,
      }
    },
  },
  methods: {
    click(index) {
      this.translateX = `${-1 * index * 100}%`
    },
  },
}
</script>
<style lang="scss">
.hola-tabview-item {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  // 恢复默认大小
  font-size: 28px;
  // 恢复默认样式
  white-space: normal;
}
</style>
