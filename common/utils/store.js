/**
 * localStorage 设置
 * @param {String} key 键
 * @param {String} val 值
 */
export const setPublicInfoByKey = (key, val) => {
  try {
    if (!key) return
    window.localStorage.setItem(key, val)
  } catch (err) {}
}

/**
 * localStorage 获取
 * @param {String} key 键
 * @return {Boolean} key 对应 localStorage 的值
 */
export const getPublicInfoByKey = (key) => {
  try {
    if (!key) return ''
    return window.localStorage.getItem(key)
  } catch (err) {
    return ''
  }
}

/**
 * 清除 localStorage，若不填参数 key ，则清除所有 localStorage
 * @param {String} key 键
 * @return {Boolean} 是否清除成功
 */
export const removePublicInfoByKey = (key) => {
  try {
    if (typeof key === 'undefined') return window.localStorage.clear()
    return window.localStorage.removeItem(key)
  } catch (err) {
    return false
  }
}

export function getCacheInfoByKey(key) {
  let value = window.sessionStorage.getItem(key)
  try {
    value = JSON.parse(value)
  } catch (err) {}
  return value
}

export function setCacheInfoByKey(key, value) {
  let str = ''
  try {
    str = JSON.stringify(value)
  } catch (err) {}
  window.sessionStorage.setItem(key, str)
}

export function removeCacheInfoByKey(key) {
  window.sessionStorage.removeItem(key)
}
