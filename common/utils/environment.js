/**
 * 获取 userAgent 字符串
 * @returns {String} 浏览器 userAgent 字符串
 */
function getUserAgent() {
  return window.navigator.userAgent + ''
}

/**
 * 判断设备是否为移动终端
 * @returns {Boolean} 设备是否为移动终端
 */
export function mobile() {
  return /AppleWebKit.*Mobile.*/i.test(getUserAgent())
}

/**
 * 判断设备操作系统是否是 Android
 * @returns {Boolean} 设备操作系统是否是 Android
 */
export function android() {
  return /android|linux/i.test(getUserAgent())
}

/**
 * 判断设备操作系统是否是 IOS
 * @returns {Boolean} 设备操作系统是否是 IOS
 */
export function ios() {
  return /iphone|ipad/i.test(getUserAgent())
}

/**
 * 判断浏览器是否为 qq
 * @returns {Boolean} 浏览器是否为 qq
 */
export function qq() {
  return /\sQQ|MQQBrowser/.test(getUserAgent())
}

/**
 * 判断浏览器是否为微信
 * @returns {Boolean} 浏览器是否为微信
 */
export function weixin() {
  return /micromessenger/i.test(getUserAgent())
}

/**
 * 判断页面运行环境是否是企业微信
 * @returns {Boolean} 是否是企业微信
 */
export function weixinWork() {
  return /wxwork/i.test(window.navigator.userAgent)
}

/**
 * 判断浏览器是否为 Chrome
 * @returns {Boolean} 浏览器是否为 Chrome
 */
export function chrome() {
  return /chrome/i.test(getUserAgent())
}

/**
 * 判断浏览器是否为 Safari
 * @returns {Boolean} 浏览器是否为 Safari
 */
export function safari() {
  return /safari/i.test(getUserAgent()) && !chrome()
}

/**
 * 判断浏览器是否为 Firefox
 * @returns {Boolean} 浏览器是否为 Firefox
 */
export function firefox() {
  return /firefox/i.test(getUserAgent())
}

/**
 * 判断浏览器是否为 Internet Explorer
 * @returns {Boolean} 浏览器是否为 Internet Explorer
 */
export function ie() {
  return /MSIE/.test(getUserAgent())
}

/**
 * 判断浏览器是否为 Opera
 * @returns {Boolean} 浏览器是否为 Opera
 */
export function opera() {
  return /opera/i.test(getUserAgent())
}

// 导出默认模块
export default {
  android,
  ios,
  qq,
  weixin,
  weixinWork,
  chrome,
  safari,
  firefox,
  ie,
  opera,
}
