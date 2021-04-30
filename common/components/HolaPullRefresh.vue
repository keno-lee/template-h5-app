<template>
  <div class="hola-pullrefresh">
    <div
      :style="style"
      class="track"
      @touchcancel="onTouchEnd"
      @touchend="onTouchEnd"
      @touchmove="onTouchMove"
      @touchstart="onTouchStart"
    >
      <!-- 下拉刷新的部分 -->
      <div :style="setHeadStyle" class="head">
        <!-- 正常状态 -->
        <slot v-if="status === 'normal'" name="normal" />
        <!-- 下拉状态 -->
        <slot v-if="status === 'pulling'" name="pulling">
          <div :style="setHintStyle" class="hint">
            {{ pullingText }}
          </div>
        </slot>
        <!-- 松手状态 -->
        <slot v-if="status === 'loosing'" name="loosing">
          <div :style="setHintStyle" class="hint">
            {{ loosingText }}
          </div>
        </slot>
        <!-- 加载状态 -->
        <slot v-if="status === 'loading'" name="loading">
          <div :style="setHintStyle" class="hint">
            {{ loadingText }}
          </div>
        </slot>
      </div>
      <!-- 页面内容 -->
      <slot />
    </div>
  </div>
</template>
<script>
/**
 * 下拉刷新组件
 * @author KeNo
 *
 * @param {Boolean} [disabled]是否禁用功能
 * @param {String} [pullingText = '下拉即可刷新']下拉时状态文本
 * @param {String} [loosingText = '释放即可刷新']释放前状态文本
 * @param {Boolean} [loadingText = '正在加载...']加载中状态文本
 * @param {Number} [headHeight = 50]状态文本头部高度
 * @param {Number} [animationDuration = 300]动画时长
 * @param {Boolean} value - 必传
 * @example
 * <HolaPullRefresh v-model="isRefreshLoading" @refresh="onRefresh"></HolaPullRefresh>
 */

export default {
  name: 'HolaPullRefresh',
  props: {
    disabled: Boolean, // 是否禁用下拉刷新
    pullingText: {
      type: String,
      default: '下拉即可刷新',
    },
    loosingText: {
      type: String,
      default: '释放即可刷新',
    },
    loadingText: {
      type: String,
      default: '正在加载...',
    },
    headHeight: {
      type: Number,
      default: 50,
    },
    animationDuration: {
      type: Number,
      default: 300,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      duration: 0, // 动画时间
      height: 0, // 移动距离
      startY: 0, // 起始位置
      status: 'normal', // 状态 - normal: 未操作常态, pulling: 下拉状态, loosing: 即将松手状态, loading: 加载状态
      invalid: 0, // 是否禁用
      setHeadStyle: '', // 设置头部样式
      setHintStyle: '', // 设置提示文本样式
    }
  },
  computed: {
    /**
     * 页面样式
     */
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.height}px, 0)`,
      }
    },
    /**
     * 是否为禁用状态
     */
    untouchable() {
      return this.status === 'loading' || this.disabled || this.invalid
    },
  },
  watch: {
    value(nv) {
      this.duration = this.animationDuration

      // 给个最低的动画时长
      setTimeout(() => {
        this.getStatus(nv ? this.headHeight : 0, nv)
      }, 500)
    },
  },
  mounted() {
    this.setHeadStyle = `height: ${this.headHeight}px; line-height: ${this.headHeight}px; top: -${this.headHeight}px;`
    this.setHintStyle = `height: ${this.headHeight}px; line-height: ${this.headHeight}px;`
  },
  methods: {
    onTouchStart(e) {
      // 触摸开始时，未在顶部，此次触摸标记为无效
      this.invalid = this.getScrollTop() > 0 ? 1 : 0
      if (this.untouchable) return
      this.duration = 0
      this.startY = e.touches[0].clientY
    },
    onTouchMove(e) {
      if (this.untouchable) return
      if (e.touches[0].clientY - this.startY > 0) {
        this.getStatus(Math.sqrt((e.touches[0].clientY - this.startY) * 40))
        e.preventDefault() // 阻止事件冒泡
      }
    },
    onTouchEnd(e) {
      if (this.untouchable) return
      // 判断如果移动的距离小于headHeight高度，则不刷新
      if (e.changedTouches[0].clientY - this.startY < this.headHeight) {
        this.duration = this.animationDuration
        this.getStatus(0)
        return
      }
      // 松手回到默认位置
      this.duration = this.animationDuration
      this.getStatus(this.headHeight, true)
      this.$emit('refresh')
      this.$emit('input', true)
    },
    /**
     * 获取页面当前状态
     */
    getStatus(height, isLoading) {
      this.height = height
      const status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing'
      if (this.status !== status) {
        this.status = status
      }
    },
    /**
     * 获取页面滚动条高度
     */
    getScrollTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      return scrollTop
    },
  },
}
</script>
<style lang="scss" scoped>
.hola-pullrefresh {
  // overflow: hidden;
  user-select: none; // 用户不能选中复制文本

  .track {
    position: relative;
  }

  .head {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 50px; /* no */
    overflow: hidden;
    font-size: 14px; /* no */
    color: gray;

    display: flex;
    justify-content: center;
    align-items: center;

    .hint {
      width: 100%;
      height: 50px; /* no */
      line-height: 50px; /* no */
      text-align: center;
    }
  }
}
</style>
