<template>
  <div ref="floatBtn" :style="style" class="hola-float-icon" @click="floatIconClick">
    <slot name="icon" />
    <slot name="btnText" />
  </div>
</template>

<script>
/**
 * 可移动浮层icon组件
 */
export default {
  name: 'HolaFloatIcon',
  props: {
    itemWidth: {
      type: Number,
      default: 60,
    },
    itemHeight: {
      type: Number,
      default: 60,
    },
    // 浮层靠边的间隙
    gapWidth: {
      type: Number,
      default: 4,
    },
    // 浮层距离顶部距离的百分比
    coefficientHeight: {
      type: Number,
      default: 0.7,
    },
  },
  data() {
    return {
      // 容器的宽
      clientWidth: 0,
      // 容器的高
      clientHeight: 0,
      // 按钮的位置
      left: 0,
      top: 0,
    }
  },
  computed: {
    style() {
      return {
        width: `${this.itemWidth}px`,
        height: `${this.itemHeight}px`,
        left: `${this.left}px`,
        top: `${this.top}px`,
      }
    },
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
    // console.log(this.clientWidth)
    // console.log(this.clientHeight)
    this.left = this.clientWidth - this.itemWidth - this.gapWidth
    this.top = this.clientHeight * this.coefficientHeight
  },
  mounted() {
    this.$nextTick(() => {
      const { floatBtn } = this.$refs
      floatBtn.addEventListener('touchstart', () => {
        floatBtn.style.transition = 'none'
      })
      floatBtn.addEventListener('touchmove', (e) => {
        if (e.targetTouches.length === 1) {
          e.preventDefault()
          let touch = e.targetTouches[0]
          this.left = touch.clientX - this.itemWidth / 2
          this.top = touch.clientY - this.itemHeight / 2
        }
      })
      floatBtn.addEventListener('touchend', () => {
        floatBtn.style.transition = 'all 0.3s'
        if (this.left > this.clientWidth / 2) {
          this.left = this.clientWidth - this.itemWidth - this.gapWidth
        } else {
          this.left = this.gapWidth
        }
        if (this.top >= this.clientHeight - this.itemHeight || this.top < 0) {
          this.top = this.clientHeight * this.coefficientHeight
        }
      })
    })
  },
  methods: {
    floatIconClick() {
      this.$emit('floatIconClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.hola-float-icon {
  position: fixed;
  z-index: 1000;
  transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
    // 类似background-size
    object-fit: contain;
    margin-bottom: 3px; /* no */
  }
}
</style>
