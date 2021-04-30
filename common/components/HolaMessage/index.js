import Vue from 'vue'
import messageVue from './index.vue'

const MessageConstructor = Vue.extend(messageVue)
let instanceArray = [] // 实例列表
const animateTime = 500 // 动画时间/单位ms

const DMessage = {
  /**
   * 打开新的message
   * @param {Object} [config]loading配置信息
   *
   * @param {String} [title = '温馨提示']
   * @param {String} [message = '这里需要填写提示内容']
   * @param {Array} [btn = []]按钮文案，填写一个只有一个leftBtn，填写2个为leftBtn，rightBtn
   * @param {Boolean} [leftBtnCloseLoading = false]左边按钮点击时是否有loading效果
   * @param {Boolean} [rightBtnCloseLoading = false]右边按钮点击时是否有loading效果
   * @param {Function} [leftBtnClick]左边按钮点击的回调函数，不写默认点击关闭
   * @param {Function} [rightBtnClick]右边按钮点击的回调函数，不写默认点击关闭
   * @param {String} [className='']自定义类名
   * @param {String} [lockScroll=true]是否在Message出现时将body滚动锁定
   * @param {Boolean} [hasInput = false]是否有输入框
   * @param {Boolean} [inputType = text]输入框类型
   * @param {Boolean} [inputMaxlength]输入框最大输入
   * @param {Boolean} [hasCountDown = false]是否有倒计时
   * @param {Boolean} [countDownTime = 60]倒计时的时间
   * @param {Function} [countDownClick]倒计时触发时的回调
   */
  open: (config) => {
    let defaults = {
      visible: false, // message是否可见(用于过渡)
      title: '', // message标题
      message: '这里需要填写提示内容', // message内容
      btn: ['确认'], // message按钮
      leftLoading: false, // 是否加载loading
      rightLoading: false, // 是否加载loading
      shadowClose: false, // 背景点击是否可以关闭loading
      className: '', // 自定义类名
      lockScroll: true, // 是否在 Message 出现时将 body 滚动锁定
      countDownTxt: '获取验证码', // 倒计时文案
      hasInput: false,
      inputType: 'text',
      inputMaxlength: '',
      hasCountDown: false,
      countDownTime: 60,
      countDownNow: 60,
      autoCountDown: false,
      inputValue: '',
      index: 'index' + new Date().getTime(), // 编号
    }

    // 如果存在一个Message，先清除上一个
    let lastMessage = document.querySelector('#hola-message')
    if (lastMessage) document.body.removeChild(lastMessage)

    let data = Object.assign(defaults, config)

    let instance = new MessageConstructor({
      el: document.createElement('div'),
      data,
      methods: {
        leftClick() {
          if (typeof data.leftBtnClick !== 'function') {
            DMessage.close(data.index)
            return
          }
          if (data.leftBtnCloseLoading) {
            this.leftLoading = true
          }
          data.leftBtnClick(this.inputValue)
        },
        rightClick() {
          if (typeof data.rightBtnClick !== 'function') {
            DMessage.close(data.index)
            return
          }
          if (data.rightBtnCloseLoading) {
            this.rightLoading = true
          }
          data.rightBtnClick(this.inputValue)
        },
        closeShadow() {
          if (!data.shadowClose) return
          DMessage.close(data.index)
        },
        countDownStart() {
          let timer0
          if (timer0) clearInterval(timer0)
          if (this.countDownNow !== this.countDownTime) return false
          data.countDownTxt = `已发送(${this.countDownNow}s)`
          timer0 = setInterval(() => {
            this.countDownNow--
            data.countDownTxt = `已发送(${this.countDownNow}s)`
            if (this.countDownNow <= 0) {
              clearInterval(timer0)
              this.countDownNow = this.countDownTime
              data.countDownTxt = '重新获取'
            }
          }, 1000)
          return true
        },
        countDown() {
          if (!this.countDownStart()) return
          if (typeof data.countDownClick === 'function') {
            data.countDownClick()
          }
        },
      },
    })

    if (data.lockScroll) {
      document.body.classList.add('body-hidden')
    }

    // instance.countDown(data.countDownTime)

    // 将编号对应的示例对象，保存在数组中
    let domObj = {}
    domObj[data.index] = instance
    instanceArray.push(domObj)

    Vue.nextTick(() => {
      instance.visible = true
      if (instance.autoCountDown) instance.countDownStart()
    })

    document.body.appendChild(instance.$el)
    return data.index
  },
  /**
   * 关闭指定的Message
   * @param {String} [index]loading编号
   */
  close: (index) => {
    // 先关闭禁用滚动
    document.body.classList.remove('body-hidden')

    let messageDom = document.querySelector(`#hola-message.${index}`)
    let sourceInstance // 目标值
    let sourceInstanceIndex // 目标索引
    for (let i = 0; i < instanceArray.length; i++) {
      if (instanceArray[i][index]) {
        sourceInstance = instanceArray[i]
        sourceInstanceIndex = i
      }
    }
    sourceInstance[index].visible = false

    setTimeout(() => {
      document.body.removeChild(messageDom)
      instanceArray.splice(sourceInstanceIndex, 1)
      // if (instanceArray.length < 1) {
      // document.body.classList.remove('body-hidden')
      // }
    }, animateTime)
  },
  /**
   * 关闭所有的Message
   */
  closeAll: () => {
    // 先关闭禁用滚动
    document.body.classList.remove('body-hidden')

    let messageDoms = document.querySelectorAll('#hola-message')
    instanceArray.forEach((v) => {
      for (let k in v) {
        v[k].visible = false
      }
    })
    setTimeout(() => {
      messageDoms.forEach((v) => {
        document.body.removeChild(v)
      })
    }, animateTime)
  },
  exist: () => {
    let messageDoms = document.querySelectorAll('#hola-message')
    return messageDoms.length > 0
  },
}

export default DMessage
