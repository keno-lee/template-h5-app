/**
 * 提交按钮限制 vue 指令，每间隔 time s 才能提交一次（防止连点）
 * @prop {Object}   prop           指令传递数据
 * @prop {Function} prop.cb        提交回调方法
 * @prop {number}   prop.time      提交间隔时间, 1
 * @prop {Object}   prop.data      需要传递给提交回调方法的数据
 * @prop {Boolean}  prop.countdown 是否显示倒计时
 * @prop {String}   prop.key       指令的唯一标识，如果单个页面中有多个指令，需指定改值
 * @prop {String}   prop.cache     缓存倒计时状态，需指定 key
 * @example
 * <button v-submit="{cb: submit, data: 11}"></button>
 * <script>
 *   export default {
 *     data() {
 *       return {}
 *     },
 *     methods: {
 *       submit(data) {
 *         console.log(data)
 *       }
 *     }
 *   }
 * </script>
 */
import { getRandom } from '../../utils/common'

const GlobalVar = {}
const ElementSubmitKeyName = 'dataIgnoreSubmitKey'

function findTextNode(node = document.body) {
  let tmp = null
  let { children } = node
  if (children.length <= 0) {
    if (node.innerText) {
      tmp = node
    }
  } else {
    for (let i = 0; i < children.length; i++) {
      tmp = findTextNode(children[i])
      if (tmp) break
    }
  }
  return tmp
}

function generateElementSubmitKey(el, value = '') {
  const randomKey = Date.now() + '' + getRandom(0, 999999)
  try {
    value = value || el.dataset[ElementSubmitKeyName] || randomKey
    el.dataset[ElementSubmitKeyName] = value
    return value
  } catch (err) {
    return randomKey
  }
}

function initTmpObject(el, value, type) {
  let {
    time = 3, countdown = false, key, cb, data, callback, cache,
  } = value
  key = generateElementSubmitKey(el, key)
  GlobalVar[key] = GlobalVar[key] || {}
  const tmpObject = GlobalVar[key]
  tmpObject.time = time
  tmpObject.cb = cb
  tmpObject.data = data
  tmpObject.callback = callback
  tmpObject.cache = cache && key
  tmpObject.countdownNode = findTextNode(el)
  // limit time
  if (!countdown && time > 3) {
    tmpObject.time = 3
  }
  // countdown false > true
  if (!tmpObject.countdown && countdown) {
    tmpObject.countdownNodeText = tmpObject.countdownNode.textContent
    tmpObject.countdown = true
    if (type !== 'inserted') {
      setTmpInterval(tmpObject)
    }
  }
  // countdown true > false
  if (tmpObject.countdown && !countdown) {
    tmpObject.timenow = tmpObject.time
    tmpObject.countdownNode.textContent = tmpObject.countdownNodeText
    tmpObject.countdownNode = null
    tmpObject.countdownNodeText = ''
    tmpObject.countdown = false
    clearTmpIntervalId(tmpObject)
  }
  // console.log(JSON.stringify(tmpObject))
  return tmpObject
}

function clearTmpIntervalId(tmpObject) {
  clearInterval(tmpObject.tid)
  tmpObject.tid = null
}

function setTmpInterval(tmpObject) {
  clearTmpIntervalId(tmpObject)
  tmpObject.timenow = 0
  countdownMethod(tmpObject)
  tmpObject.tid = setInterval(() => {
    countdownMethod(tmpObject)
  }, 1000)
}

function countdownMethod(tmpObject) {
  // console.log('countdownMethod tmpObject.timenow', tmpObject.timenow)
  tmpObject.timenow++
  if (tmpObject.timenow <= tmpObject.time) {
    if (tmpObject.countdown) {
      tmpObject.countdownNode.textContent = tmpObject.time - tmpObject.timenow + 'S'
    }
  } else {
    if (tmpObject.countdown) {
      tmpObject.countdownNode.textContent = tmpObject.countdownNodeText
    }
    clearTmpIntervalId(tmpObject)
    if (tmpObject.callback) tmpObject.callback()
  }
}

export default {
  name: 'submit',
  inserted(el, binding) {
    const { value = {} } = binding
    const tmpObject = initTmpObject(el, value, 'inserted')
    if (tmpObject.cache) {
      tmpObject.timenow = tmpObject.timenow || tmpObject.time
      if (tmpObject.countdown && tmpObject.timenow < tmpObject.time) {
        tmpObject.countdownNode.textContent = tmpObject.time - tmpObject.timenow + 'S'
      }
    } else {
      tmpObject.timenow = tmpObject.time
    }

    function click() {
      // console.log(GlobalVar, tmpObject.timenow, tmpObject.time)
      if (tmpObject.timenow >= tmpObject.time) {
        setTmpInterval(tmpObject)
        tmpObject.cb(tmpObject.data)
      }
    }

    el.addEventListener('click', click, false)
  },
  update(el, binding) {
    const { value = {} } = binding
    initTmpObject(el, value)
  },
  unbind(el) {
    const key = generateElementSubmitKey(el)
    if (!GlobalVar[key].cache) {
      clearTmpIntervalId(GlobalVar[key])
      delete GlobalVar[key]
    }
  },
}
