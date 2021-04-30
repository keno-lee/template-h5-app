<template>
  <div class="hola-popup">
    <transition name="transition-fade">
      <HolaModal v-if="value" @dismiss="cancel" />
    </transition>

    <transition name="transition-slide">
      <div v-if="value" class="popup-content">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
<script>
/**
 * 向上弹出层
 * @author KeNo
 *
 * @param {Boolean} [value = ''] 是否展示
 */
import HolaModal from '@common/components/HolaModal.vue'

export default {
  components: {
    HolaModal,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      seletedIndex: 0,
    }
  },
  methods: {
    selected(index) {
      this.seletedIndex = index
    },
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm', this.seletedIndex)
    },
  },
}
</script>
<style lang="scss">
.hola-popup {
  .popup-content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    // max-height: 389px; /* no */
    // min-height: 200px; /* no */
    background-color: #fff;
    z-index: 10000;
    overflow-y: scroll;

    .content {
      height: 600px; /* no */
      background-color: yellow;
    }
  }
}
</style>
