<template>
  <div class="hola-picker-column">
    <div
      :style="style"
      class="hola-picker-wrap"
      @touchcancel="onTouchEnd"
      @touchend="onTouchEnd"
      @touchmove="onTouchMove"
      @touchstart="onTouchStart"
    >
      <!-- 假的占位2个 -->
      <div v-for="number of 2" :key="'fake1' + number" class="hola-picker-item" />
      <div
        v-for="(item, index) in data"
        :key="item.label"
        :class="[value == index ? 'active' : '', value == index + 2 || value == index - 2 ? 'samll' : '']"
        :style="itemStyle"
        class="hola-picker-item"
      >
        {{ item[label] }}
      </div>
      <!-- 假的占位2个 -->
      <div v-for="number of 2" :key="'fake2' + number" class="hola-picker-item" />
    </div>
  </div>
</template>
<script>
/**
 * picker地址选择器子项目
 * @author KeNo
 *
 */
export default {
  components: {},
  props: {
    // 渲染的数据
    data: {
      type: Array,
      default() {
        return []
      },
    },
    // 当前选中项
    value: {
      type: Number,
      default: 0,
    },
    // 需要展示的数据
    label: {
      type: String,
      default: 'label',
    },
    // 过度时间
    duration: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      transition: 0,
      startY: 0,
      moveDistanceY: 0,
      translateY: 0,
      itemHeight: 48,
      lastMove: 0, // 上次移动了多少，用来对比，如果没动过，不做传值处理，提高性能
    }
  },
  computed: {
    style() {
      return {
        transition: `${this.transition}ms`,
        transform: `translate3d(0,${this.moveDistanceY + this.translateY}px, 0)`,
      }
    },
    itemStyle() {
      return {
        transition: `${this.transition}ms`,
      }
    },
  },
  watch: {
    value: {
      handler() {
        // 初始化的时候计算默认值位置
        this.translateY = -this.value * this.itemHeight
      },
      immediate: true,
    },
  },
  methods: {
    onTouchStart(e) {
      // 阻止默认事件
      e.preventDefault()
      this.transition = 0
      // 记录触摸开始的位置
      this.startY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY || e.pageY
    },
    onTouchMove(e) {
      // 阻止默认事件
      e.preventDefault()
      // 计算触摸滑动距离
      let y = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY || e.pageY
      // 相应的sheet的滑动偏移距离
      this.moveDistanceY = y - this.startY
    },
    onTouchEnd(e) {
      e.preventDefault()
      let itemLength = this.data.length
      // 已经滑动的距离和上次滑动已经偏移的距离相加得到最终滑动结束时sheet的偏移距离
      let translateYTmp = this.moveDistanceY + this.translateY
      // 偏移距离按单项元素高度四舍五入取整，让偏移位置刚好落到某一单项上
      translateYTmp = Math.round(translateYTmp / this.itemHeight) * this.itemHeight
      // 相应的sheet的滑动偏移距离初始化为0，为下一次滑动准备
      this.moveDistanceY = 0
      // 判断sheet的偏移位置是否超出范围
      if (translateYTmp < -(itemLength - 1) * this.itemHeight) translateYTmp = -(itemLength - 1) * this.itemHeight
      if (translateYTmp > 0) translateYTmp = 0
      this.transition = this.duration
      // 更新sheet偏移距离
      this.translateY = translateYTmp
      // 计算sheet中间选中项的序号
      const selectedIndex = -Math.round(translateYTmp / this.itemHeight)
      if (+translateYTmp === +this.lastMove) return
      this.lastMove = translateYTmp
      // 如果sheet偏移距离为0，则不传
      // 触发选中该项的方法
      this.choose(selectedIndex)
    },
    choose(index) {
      this.$emit('input', index)
      this.$emit('changed')
    },
  },
}
</script>
<style lang="scss">
.hola-picker-column {
  height: 100%; /* no */
  flex: 1;
  overflow: hidden;

  .hola-picker-wrap {
    .hola-picker-item {
      width: 100%;
      height: 48px; /* no */
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: var(--tertiary);

      &.samll {
        opacity: 0.3;
        color: var(--tertiary);
      }

      &.active {
        font-size: 36px;
        color: var(--default);
      }
    }
  }
}
</style>
