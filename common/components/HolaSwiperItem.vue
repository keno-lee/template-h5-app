<template>
  <section class="hola-swiper-item">
    <slot />
  </section>
</template>

<script>
/**
 * 轮播图子组件
 * @author KeNo
 *
 */

export default {
  name: 'HolaSwiperItem',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.hola-swiper-item {
  width: 100%;
  // height: 300px;
  // background-color: green;
  display: inline-block;
  font-size: 28px;
}
</style>
