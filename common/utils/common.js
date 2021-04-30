import { android, ios } from '@common/utils/environment'
import message from '@common/components/HolaMessage'

// 获取路径query参数
export const getQueryString = (key) => {
  let url = window.location.href
  let regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * 格式化金额
 * @param {Number} num 金额
 * @param {*} need2point 是否需要2位小数点 100.00
 */
export function prettyNum(num, need2point = true) {
  if (typeof num !== 'number' && typeof num !== 'string') {
    return '0'
  }
  let temp = num === +num ? '' + num : num
  temp = temp.replace(/\.0+$/, '')
  if (temp && temp.length < 4) {
    return temp
  }
  let last = temp.length % 3
  let lenNum = Math.floor(temp.length / 3)
  let tempArr = temp.split('')
  let first = tempArr.splice(0, last)
  let str = ''
  for (let i = 0; i < lenNum; i++) {
    let a = i === lenNum - 1 ? '' : ','
    str = str + tempArr.splice(0, 3).join('') + a
  }
  str = first.length > 0 ? first.join('') + ',' + str : str
  str = need2point ? str + '.00' : str
  return str
}

/**
 * 通过vue路由path获取完全url
 * @param {*} routePath vue路由path
 * @param {*} query vue路由query
 */
export const getFullUrlByRoutePath = (routePath, query = {}) => {
  routePath = routePath || '/'
  const htmlPath = window.location.href.replace(/#.*$/g, '')
  const queryStrArr = []
  for (let key in query) {
    queryStrArr.push(key + '=' + encodeURIComponent(query[key]))
  }
  const queryStr = queryStrArr.join('&')
  // console.log(`${htmlPath}#${routePath}${queryStr ? '?' + queryStr : ''}`)
  return `${htmlPath}#${routePath}${queryStr ? '?' + queryStr : ''}`
}

/**
 * 返回min到max之间的任意正整数
 * @param {*} min 最小值(包含)
 * @param {*} max 最大值(包含)
 */
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 从给定数组中随机一个数值返回
 * @param {Array} arr 给定数组
 */
export function getRandomValueFromArray(arr = []) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * 使用 iframe 加载链接，一般用于 app 下载
 * @param {String} url 链接
 */
export function loadWithIframe(url) {
  // if (!isUrl(url) && !/^.*:\/\/.*$/.test(url)) return
  let iframe = document.createElement('iframe')
  iframe.setAttribute('src', url)
  iframe.setAttribute('style', 'display: none; height: 0px; width: 0px;')
  document.body.appendChild(iframe)
  let tid = setTimeout(() => {
    iframe.parentNode.removeChild(iframe)
    iframe = null
    clearTimeout(tid)
  }, 3000)
}

/**
 * 设置页面标题
 * @param {String} title
 */
export function setTitle(title) {
  document.title = title
  // hack 在 IOS webview 中修改 document.title 页头显示并没有改变的情况
  if (!ios()) return
  let iframe = document.createElement('iframe')
  iframe.src = ''
  iframe.style.display = 'none'
  iframe.onload = () => {
    let tid = setTimeout(() => {
      iframe.remove()
      clearTimeout(tid)
    }, 0)
  }
  document.body.appendChild(iframe)
}

export function isDef(v) {
  return v !== undefined && v !== null
}

export function setToken(token) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token') || ''
}

/**
 * 点击app
 * @mark 若在微信中，则使用我们自己的 app 引导页
 */
export function downloadApp(config) {
  // 下载链接
  let downloadurl = ''
  // 安卓根据类型判断
  if (android()) {
    downloadurl = config.Android
  }
  // 微信使用我们自己的 app 引导页
  // if (android() && weixin()) {
  //   downloadurl = config.downloadld
  // }
  // iOS 跳转到 appstore
  if (ios()) {
    if (!config.IOS) {
      message.open({
        message: 'Vui lòng đổi thành điện thoại Android để hoàn thành đăng kí vay mượn',
        btn: ['xác nhận'],
      })
      return
    }
    downloadurl = config.IOS
  }
  window.location.href = downloadurl
  // 链接跳转
  // if (downloadurl) {
  //   if (isapp()) {
  //     loadWithIframe(downloadurl)
  //   } else {
  //     window.location.href = downloadurl
  //   }
  // }
}
