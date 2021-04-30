<template>
  <section class="hola-swiper">
    <div ref="swiper" :style="style" class="swiper-content">
      <slot />
    </div>
    <div v-if="itemsLength > 1" class="indicator-wrap">
      <div v-for="item of itemsLength" :key="item" :class="index + 1 === item || (item === 1 && (index < 0 || index >= itemsLength)) ? 'active' : ''" class="indicator-item" />
    </div>
  </section>
</template>

<script>
/**
 * 轮播图组件
 * @author KeNo
 *
 * @param {Number} [duration = 1000]过度时间ms
 * @param {Number} [duration = 3000]间隔时间ms
 * @param {Number} [speed = 3000]自动轮播速度ms
 * @param {Boolean} [auto = true]是否自动轮播
 */

// 导入移动端手势判断工具类
import Touch from '@common/utils/touch'

export default {
  name: 'HolaSwiper',
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    auto: {
      type: Boolean,
      default: true,
    },
    speed: {
      type: Number,
      default: 3000,
      validator (val) {
        return val >= 500
      },
    },
  },
  data() {
    return {
      itemsLength: 0,
      timer: null,
      index: 0,
      translate: 0,
      transition: 0,
      touch: null,
    }
  },
  computed: {
    style() {
      return {
        transition: `transform ${this.transition}ms`,
        transform: `translate3d(${this.translate}, 0, 0)`,
      }
    },
  },
  mounted() {
    this.touch = Touch._getInstance(this.$refs.swiper, {
      swipe: (x) => {
        this.stopLoop()
        if (x > 0) this.prev()
        if (x < 0) this.next()
        this.startLoop()
      },
    })
    // 复制第一个元素，并插入末尾，作为占位
    const ele = this.$refs.swiper.children[0].cloneNode(true)
    this.$refs.swiper.appendChild(ele)
    this.init()
  },
  updated() {
    // 异步请求后可能会添加元素，为了保证正确性在更新数据中获取
    this.init()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    init() {
      this.itemsLength = this.$refs.swiper.children.length - 1
      // console.log(this.itemsLength)

      if (this.itemsLength <= 1) {
        // 只有一张时停止轮播
        this.stopLoop()
        this.removeTouch()
      } else {
        this.startLoop()
        this.initTouch()
      }
    },
    startLoop() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.next()
      }, this.interval)
    },
    // 停止循环
    stopLoop() {
      clearInterval(this.timer)
      this.timer = null
    },
    // 下一张
    next() {
      this.index++
      this.transition = this.duration
      this.translate = `${-1 * this.index * 100}%`

      // 如果是最后一张，先去第一张，再执行一次动画
      if (this.index > this.itemsLength) {
        this.index = 0
        this.transition = 0
        this.translate = 0
        let timer = setTimeout(() => {
          this.index = 1
          this.transition = this.duration
          this.translate = `${-1 * this.index * 100}%`
          clearTimeout(timer)
        }, 100)
      }
    },
    // 上一张
    prev() {
      this.index--
      this.transition = this.duration
      this.translate = `${-1 * this.index * 100}%`

      // 如果是第一张。先去最后一张，再执行一次动画
      if (this.index <= -1) {
        this.index = this.itemsLength
        this.transition = 0
        this.translate = `${-1 * this.index * 100}%`

        let timer = setTimeout(() => {
          this.index = this.itemsLength - 1
          this.transition = this.duration
          this.translate = `${-1 * this.index * 100}%`
          clearTimeout(timer)
        }, 100)
      }
    },
    // 初始化用户动作
    initTouch() {
      this.touch.init()
    },
    removeTouch() {
      this.touch.remove()
    },
  },
}
</script>

<style lang="scss" scoped>
.hola-swiper {
  width: 100%;
  white-space: nowrap;
  // 去除水平+垂直间隙
  font-size: 0;
  overflow: hidden;
  position: relative;

  /* 定义滚动条大小 */
  &::-webkit-scrollbar {
    // width: 10px; /* 对垂直流动条有效 */
    height: 0.1px; /* no */
  }

  /* 定义滑块颜色、内阴影及圆角 */
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .indicator-wrap {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    .indicator-item {
      width: 5px; /* no */
      height: 4px; /* no */
      opacity: .3;
      background-color: #12B7F5;
      background-color: var(--primary);
      margin-right: 4px; /* no */
      transition: all 500ms linear;

      &.active {
        opacity: 1;
        width: 8px; /* no */
        background-color: #12B7F5;
        background-color: var(--primary);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
