/**
 * 移动端手势判断工具类
 * @example
 * import Touch from ''
 * new Touch(document.body, {
 *   swipe: (x, y) => { console.log(x, y) }
 *   drag: (x, y, end) => { console.log(x, y, end) }
 * })
 */
const swipe = Symbol('swipe')
const drag = Symbol('drag')

/**
 * 动作定义
 */
const action = {
  /**
   * 滑动
   * @param {Number} dX
   * @param {Number} dY
   * @param {Number} delta
   * @param {Function} callback
   */
  [swipe](dX, dY, delta, callback) {
    const holdTime = 300
    const holdDis = 30
    if ((delta < holdTime && Math.abs(dX) > holdDis) || Math.abs(dY) > holdDis) {
      if (typeof callback === 'function') callback(dX, dY)
    }
  },
  /**
   * 拖动
   * @param {Number} mX
   * @param {Number} mY
   */
  [drag](mX, mY, callback, end) {
    if (typeof callback === 'function') callback(mX, mY, !!end)
  },
}

/**
 * 手势判断类
 * @param {Object} el DOM
 * @param {Object} options 动作函数
 */
class Touch {
  /**
   * 构造函数
   * @param {Element} el 接收用户操作的元素
   * @param {Object} options 配置
   */
  constructor(el, options) {
    this.touchEl = el || null
    this.options = options || {}

    this.sX = 0 // start x
    this.sY = 0 // start y

    this.tStart = 0 // start time
    this.tEnd = 0 // end time
    this.delta = 0 // 间隔

    this.touchstartFunc = (e) => {
      this.tStart = Date.now()
      this.sX = e.touches[0].pageX // start x
      this.sY = e.touches[0].pageY // start y
    }

    this.touchmoveFunc = (e) => {
      prevent(e)
      const mX = e.touches[0].pageX
      const mY = e.touches[0].pageY
      const dX = mX - this.sX
      const dY = mY - this.sY
      action[drag](dX, dY, this.options.drag)
    }

    this.touchendFunc = (e) => {
      this.tEnd = Date.now()
      this.delta = this.tEnd - this.tStart
      let eX = e.changedTouches[0].pageX
      let eY = e.changedTouches[0].pageY
      const dX = eX - this.sX
      const dY = eY - this.sY
      action[swipe](dX, dY, this.delta, this.options.swipe)
      action[drag](dX, dY, this.options.drag, 'end')
    }
  }

  static _getInstance(el, options) {
    if (!(this.instance instanceof Touch)) {
      this.instance = new Touch(el, options)
    }
    return this.instance
  }

  init() {
    this.touchEl.addEventListener('touchstart', this.touchstartFunc, false)
    this.touchEl.addEventListener('touchmove', this.touchmoveFunc, false)
    this.touchEl.addEventListener('touchend', this.touchendFunc, false)
  }

  remove() {
    this.touchEl.removeEventListener('touchstart', this.touchstartFunc)
    this.touchEl.removeEventListener('touchmove', this.touchmoveFunc)
    this.touchEl.removeEventListener('touchend', this.touchendFunc)
  }
}

/**
 * 阻止默认事件
 * @param {Event} e 事件对象
 */
function prevent(e) {
  e.preventDefault()
}

// 导出默认对象
export default Touch
