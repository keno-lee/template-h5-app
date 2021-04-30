/**
 * 移动端使用的调试工具
 * @example
 * new Debuger()
 */

/**
 * 移动端使用的调试工具类
 */
class Debuger {
  /**
   * 构造函数
   * @param {Object} options 配置
   * @param {Element} options.el 调试工具挂载 dom 节点
   * @param {String} options.mode 调试工具模式，'click': 在 time 秒 时间内连续点击 times 展示，'always': 总是显示
   * @param {String} options.time 调试工具 'click' 模式限制时间，单位秒
   * @param {String} options.times 调试工具 'click' 模式限制最少点击次数
   * @param {String} options.height 调试工具高度
   * @param {String} options.width 调试工具宽度
   */
  constructor({
    el = document.body, mode = 'click', times = 15, time = 3, height = '30px', width = '100%',
  } = {}) {
    this.mode = mode
    // 处理不同的模式
    switch (mode) {
      case 'click':
        this.el = el instanceof window.Element ? el : document.body
        this.time = time
        this.times = times
        this.height = height
        this.width = width
        this.tid = -1
        this.clickTimes = 0
        this.initClickMode()
        break
      case 'always':
        Debuger.loadScript()
        break
      default:
        break
    }
  }

  /**
   * 初始化 click 模式
   */
  initClickMode() {
    let tmpDiv = document.createElement('div')
    tmpDiv.style.width = this.width
    tmpDiv.style.height = this.height
    tmpDiv.addEventListener(
      'click',
      () => {
        if (this.clickTimes < 0) return
        if (this.tid < 0) {
          this.tid = setInterval(() => {
            this.clickTimes = 0
          }, 3000)
        }
        this.clickTimes++
        if (this.clickTimes >= this.times) {
          this.clickTimes = -1
          Debuger.loadScript()
          clearInterval(this.tid)
        }
      },
      false,
    )
    this.el.appendChild(tmpDiv)
  }

  /**
   * 加载 vconsole 调试工具
   */
  static loadScript() {
    let tmp = document.createElement('script')
    tmp.src = 'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js'
    tmp.onload = function() {
      /* eslint-disable no-new */
      new window.VConsole()
    }
    document.body.appendChild(tmp)
  }
}

// 导出默认模块
export default Debuger
