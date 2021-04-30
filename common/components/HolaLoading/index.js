import Vue from 'vue'
import LoadingVue from './index.vue'

const LoadingConstructor = Vue.extend(LoadingVue)
let instanceArray = [] // 实例列表

const knLoading = {
  /**
   * 打开新的loading
   * @param {Object} [config]loading配置信息
   *
   * @param {String} [type = 'circular']类型
   * @param {String} [shadowColor]背景色（支持css颜色写法）
   * @param {Boolean} [shadowClose = false]背景点击是否可以关闭loading
   * @param {String} [contentColor = 'transparent']中心内容区域颜色（支持css颜色写法）
   * @param {String} [hint = '加载中...']中心内容区域文案
   * @param {Number} [time]至少n秒后关闭
   * @param {String} [className = '']自定义类名
   * @param {String} [lockScroll = true]是否在Loading出现时将body滚动锁定
   */
  open: (config = {}) => {
    // 这里处理一些各种loading的默认样式
    let defaults = getDefaultStyle(config.type)

    // 如果存在一个loading，则清除上一个
    let lastLayer = document.querySelector('#hola-loading')
    if (lastLayer) document.body.removeChild(lastLayer)

    let data = Object.assign(defaults, config)

    // 使用LoadingConstructor()构造函数生成一个新的实例(虚拟dom)
    let instance = new LoadingConstructor({
      el: document.createElement('div'),
      data,
      methods: {
        closeShadow() {
          if (!data.shadowClose) return
          knLoading.close(data.index)
        },
      },
    })

    // 如果有最小显示的时间
    if (data.time) {
      knLoading.timeOut = false
      setTimeout(() => {
        knLoading.timeOut = true
        knLoading.close(data.index)
      }, data.time * 1000)
    }

    if (data.lockScroll) {
      document.body.classList.add('body-hidden')
    }

    // 将编号对应的示例对象，保存在数组中
    let domObj = {}
    domObj[data.index] = instance
    instanceArray.push(domObj)
    // console.log(instanceArray)

    document.body.appendChild(instance.$el)
    return data.index
  },
  /**
   * 关闭指定的loading
   * @param {String} [index]loading编号
   */
  close: (index) => {
    if (!knLoading.timeOut) return
    // 先关闭禁用滚动
    document.body.classList.remove('body-hidden')

    // let sourceInstance // 目标值
    let sourceInstanceIndex // 目标索引
    for (let i = 0; i < instanceArray.length; i++) {
      if (instanceArray[i][index]) {
        // sourceInstance = instanceArray[i]
        sourceInstanceIndex = i
      }
    }
    instanceArray.splice(sourceInstanceIndex, 1)

    let loadingDom = document.querySelector(`#hola-loading.${index}`)
    if (loadingDom) document.body.removeChild(loadingDom)
  },
  /**
   * 关闭所有的loading
   */
  closeAll: () => {
    // 先关闭禁用滚动
    document.body.classList.remove('body-hidden')

    let loadingDoms = document.querySelectorAll('#hola-loading')
    for (let i = 0; i < loadingDoms.length; i++) {
      document.body.removeChild(loadingDoms[i])
    }
  },
  /**
   * 倒计时是否完成
   */
  timeOut: true,
}
export default knLoading

/**
 * 获取 loading 的默认样式
 * @param {String} [type]loading类型
 * @return {Object} 样式的默认对象
 */
function getDefaultStyle(type = 'circular') {
  switch (type) {
    case 'circular':
      return {
        type: 'circular', // loading类型
        shadowColor: '#fff', // 背景区域颜色
        shadowClose: false,
        contentColor: 'transparent', // 中心内容区域颜色
        hint: '加载中...', // 提示文案
        lockScroll: true,
        className: '', // 自定义类名
        index: 'index' + new Date().getTime(), // 编号
      }
    case 'bubble':
      return {
        type: 'bubble', // loading类型
        shadowColor: '', // 背景区域颜色
        shadowClose: false,
        contentColor: 'transparent', // 中心内容区域颜色
        hint: '加载中...', // 提示文案
        lockScroll: true,
        className: '', // 自定义类名
        index: 'index' + new Date().getTime(), // 编号
      }
    case 'spinner':
      return {
        type: 'spinner', // loading类型
        shadowColor: 'transparent', // 背景区域颜色
        shadowClose: false,
        contentColor: 'rgba(0, 0, 0, .5)', // 中心内容区域颜色
        hint: '加载中...', // 提示文案
        lockScroll: true,
        className: '', // 自定义类名
        index: 'index' + new Date().getTime(), // 编号
      }
    default:
      return {}
  }
}
