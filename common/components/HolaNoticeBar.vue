<template>
  <div class="hola-noticebar">
    <div class="noticebar-bg">
      <div class="noticebar-fixed">
        <slot name="leading">
          <span v-if="!onlyText" class="icon iconfont">&#xe683;</span>
        </slot>
        <slot name="content">
          <div ref="content-wrap" class="noticebar-content-wrap">
            <div ref="content" :style="style" class="noticebar-content">
              {{ text }}
            </div>
          </div>
        </slot>
        <slot name="trailing" />
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 顶部滚动通知条 - 文案超出屏幕宽度自动滚动
 * @author KeNo
 *
 * @param {String} [text = '']文案
 * @param {Boolean} [onlyText = false]仅文字
 * @param {Number} [speed = 50]动画速度
 */
export default {
  name: 'HolaNoticeBar',
  props: {
    onlyText: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    speed: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      wrapWidth: 0,
      contentWidth: 0,
      duration: 0,
      translateX: 0,
      startTimer: null,
    }
  },
  computed: {
    style() {
      return {
        transform: `translateX(${this.translateX}px)`,
        transition: `${this.duration}s linear`,
      }
    },
  },
  mounted() {
    // 解决安卓手机(仅在初次打开webview时)无法获取数量和宽度的问题。延迟200ms获取
    setTimeout(() => {
      this.wrapWidth = this.$refs['content-wrap'] ? this.$refs['content-wrap'].offsetWidth : 0
      this.contentWidth = this.$refs.content ? this.$refs.content.offsetWidth : 0

      if (this.contentWidth > this.wrapWidth) {
        this.translateX = -this.contentWidth
        this.duration = this.contentWidth / this.speed
        clearTimeout(this.startTimer)
        this.startTimer = setTimeout(() => {
          this.reset()
        }, this.duration * 1000)
      }
    }, 200)
  },
  beforeDestroy() {
    clearTimeout(this.startTimer)
  },
  methods: {
    dismiss() {
      this.$emit('dismiss')
    },
    start() {
      this.translateX = -this.contentWidth
      this.duration = (this.contentWidth + this.wrapWidth) / this.speed
      // console.log(1111, this.duration)
      clearTimeout(this.startTimer)
      this.startTimer = setTimeout(() => {
        this.reset()
      }, this.duration * 1000)
    },
    reset() {
      this.translateX = this.wrapWidth
      this.duration = 0
      setTimeout(() => {
        this.start()
      }, 100)
    },
  },
}
</script>
<style lang="scss">
.hola-noticebar {
  width: 100%;
  height: 80px;

  .noticebar-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 999;
    background: #fff;
  }

  .noticebar-fixed {
    width: 100%;
    height: 80px;
    padding: 0 32px;
    background-color: var(--light-primary);
    font-size: 26px;
    color: var(--secondary);
    display: flex;
    flex-direction: row;
    align-items: center;

    .iconfont {
      font-size: 44px;
      margin-right: 10px;
    }

    .noticebar-content-wrap {
      height: 100%;
      overflow: hidden;
      position: relative;
      // white-space: nowrap;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;

      .noticebar-content {
        position: absolute;
        left: 0;
        white-space: nowrap;
      }

      .notice-animate {
        animation: translateX linear infinite;
        animation-duration: 10s;
        animation-delay: 2s;
      }
    }

    @keyframes translateX {
      0% {
        left: 0;
        transform: translateX(0);
      }
      // 70% {
      //   left: 100%;
      //   transform: translateX(-100%);
      // }
      100% {
        left: 100%;
        transform: translateX(-100%);
      }
    }
  }
}
</style>
