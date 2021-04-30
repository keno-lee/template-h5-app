<template>
  <div class="hola-count-down">
    <span v-if="timeNow < timeTotal" class="c-tertiary">{{ countDownText }}{{ timeNow }}s</span>
    <span v-else class="c-primary" @click.stop="countDownStart()">{{ initText }}</span>
  </div>
</template>

<script>
/**
 * 倒计时组件（仅文案，布局自行设置）
 * @author KeNo
 *
 * @param {String} [initText = '获取验证码']初始化文案
 * @param {String} [countDownText = '已发送']倒计时文案，会拼接{{timeNow}}s
 * @param {Number} [timeTotal = 60]倒计时总时间
 * @param {Boolean} [active = false]是否激活可点击
 *
 * @methods {Fuction} [countDownInit]初始化倒计时（某些报错时可以通过ref调用）
 */
export default {
  name: 'HolaCountdown',
  props: {
    initText: {
      type: String,
      default: '获取验证码',
    },
    countDownText: {
      type: String,
      default: '已发送',
    },
    timeTotal: {
      type: Number,
      default: 60,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timeNow: 60,
      timer: null,
    }
  },
  created() {
    this.countDownInit()
  },
  methods: {
    countDownInit() {
      this.timeNow = this.timeTotal
      clearInterval(this.timer)
    },
    countDownStart() {
      if (!this.active) {
        this.$emit('disabledClick')
        return
      }
      // 如果倒计时中不可再点击
      if (this.timeNow !== this.timeTotal) return
      this.$emit('countDownClick')
      this.timeNow--
      this.timer = setInterval(() => {
        this.timeNow--
        if (!this.timeNow) {
          this.countDownInit()
        }
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.hola-count-down {
  display: inline-block;
}
</style>
