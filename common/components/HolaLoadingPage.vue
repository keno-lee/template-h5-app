<template>
  <div class="hola-loading-page">
    <slot>
      <HolaSvgLoading :type="1" />
    </slot>
  </div>
</template>

<script>
// TODO 半成品
/**
 * 页面loading
 * @author KeNo
 *
 * @example <HolaLoadingPage />
 */
import HolaSvgLoading from '@common/components/HolaSvgLoading.vue'

export default {
  name: 'HolaLoadingPage',
  components: {
    HolaSvgLoading,
  },
  props: {},
}
</script>
<style lang="scss">
.hola-loading-page {
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    height: 100px;
  }
}
</style>
