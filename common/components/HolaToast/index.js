import Vue from 'vue'
import toastVue from './index.vue'

const ToastConstructor = Vue.extend(toastVue)
let instanceArray = [] // 实例列表
let timer
const animateTime = 500 // 动画时间/单位ms

const DToast = {
  /**
   * 打开新的toast
   * @param {Object} [config]loading配置信息
   *
   * @param {String} [type = 'tip']toast类型，可选值为tip，success，fail
   * @param {String} [hint = '']文字提示
   * @param {String} [className='']自定义类名
   * @param {Boolean} [time = 2]默认显示时间
   */
  open: (config) => new Promise((resolve) => {
    let lastToast = document.querySelector('#hola-toast')
    if (lastToast) {
      // 如果存在一个Toast，先清除上一个
      clearTimeout(timer)
      document.body.removeChild(lastToast)
    }

    let defaults = {
      visible: false, // toast是否可见(用于过渡)
      type: 'tip', // 类型
      hint: '轻提示',
      className: '', // 自定义类名
      icon: '',
      time: 2, // 默认2s
      index: 'index' + new Date().getTime(), // 编号
    }

    let data = Object.assign(defaults, config)

    let instance = new ToastConstructor({
      el: document.createElement('div'),
      data,
    })

    Vue.nextTick(() => {
      instance.visible = true
    })

    // 设置定时器，多少S后关闭
    timer = setTimeout(() => {
      // DToast.close(data.index)
      DToast.closeAll()
      resolve()
    }, data.time * 1000)

    // 将编号对应的示例对象，保存在数组中
    let domObj = {}
    domObj[data.index] = instance
    instanceArray.push(domObj)
    // console.log(instanceArray)

    document.body.appendChild(instance.$el)
    // return data.index
  }),
  /**
   * 关闭指定的toast
   * @param {String} [index]loading编号
   */
  close: (index) => {
    // 先关闭禁用滚动
    document.body.classList.remove('body-hidden')

    let toastDom = document.querySelector(`#hola-toast.${index}`)
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
      document.body.removeChild(toastDom)
      instanceArray.splice(sourceInstanceIndex, 1)
    }, animateTime)
  },
  /**
   * 关闭所有的toast
   */
  closeAll: () => {
    // 先关闭禁用滚动
    document.body.classList.remove('body-hidden')

    let toastDoms = document.querySelectorAll('#hola-toast')
    instanceArray.forEach((v) => {
      for (let k in v) {
        v[k].visible = false
      }
    })
    setTimeout(() => {
      toastDoms.forEach((v) => {
        document.body.removeChild(v)
      })
    }, animateTime)
  },
}
export default DToast
