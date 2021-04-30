import { getRandomValueFromArray, isDef } from '@common/utils/common'
import { setPublicInfoByKey, getPublicInfoByKey } from '@common/utils/store'
// 自定义
export const LocalUserInfoKey = 'x-user'

export const DefaultUserInfo = {
  phone: '',
  token: '',
  userId: '',
  category: '', // from home index api
}

export function isFirstOpen() {
  try {
    const userinfo = JSON.parse(getPublicInfoByKey(LocalUserInfoKey))
    const result = typeof userinfo.userId === 'undefined'
    if (result) {
      initUserInfo()
    }
    return result
  } catch (err) {
    return true
  }
}

export function getUserInfo() {
  try {
    return { ...DefaultUserInfo, ...JSON.parse(getPublicInfoByKey(LocalUserInfoKey)) }
  } catch (err) {
    return DefaultUserInfo
  }
}

export function setUserInfo(userinfo = {}) {
  let str = ''
  try {
    userinfo = { ...DefaultUserInfo, ...userinfo }
    str = JSON.stringify(userinfo)
  } catch (err) {
    str = JSON.stringify(DefaultUserInfo)
  }
  setPublicInfoByKey(LocalUserInfoKey, str)
}

export function initUserInfo() {
  setUserInfo()
}

export function getUserInfoByKey(key) {
  return getUserInfo()[key]
}

export function setUserInfoByKey(key, value) {
  const userinfo = getUserInfo()
  userinfo[key] = value
  setUserInfo(userinfo)
}

/**
 * get user token
 * @returns {String} user token
 */
export function getToken() {
  return getUserInfoByKey('token')
}

/**
 * get user id
 * @returns {String} user id
 */
export function getUserID() {
  return getUserInfoByKey('userId')
}

/**
 * get user category
 * @returns {String} user category
 */
export function getUserCategory() {
  return getUserInfoByKey('category')
}

/**
 * set user category
 */
export function setUserCategory(category) {
  setUserInfoByKey('category', category)
}

/**
 * 弹窗通知 开关
 */
export function setNotificationListSwitch(list) {
  setPublicInfoByKey('notificationListSwitch', JSON.stringify(list))
}

/**
 * 弹窗通知 开关
 */
export function getNotificationListSwitch() {
  return JSON.parse(getPublicInfoByKey('notificationListSwitch')) || {}
}

export function setABtestInfo(AB_TEST_INFO = {}, bindUser = true) {
  if (bindUser) {
    const userId = getUserInfoByKey('userId')
    if (!userId) {
      // eslint-disable-next-line no-console
      console.warn('没有登录，无法设置缓存')
      return
    }
    setPublicInfoByKey(`AB_TEST_INFO_${userId}`, JSON.stringify(AB_TEST_INFO))
  } else {
    setPublicInfoByKey('AB_TEST_INFO', JSON.stringify(AB_TEST_INFO))
  }
}

export function getABtestInfo(bindUser = true) {
  try {
    if (bindUser) {
      const userId = getUserInfoByKey('userId')
      if (!userId) return {}
      return JSON.parse(getPublicInfoByKey(`AB_TEST_INFO_${userId}`) || {})
    }
    return JSON.parse(getPublicInfoByKey('AB_TEST_INFO') || {})
  } catch (err) {
    return {}
  }
}

export function setABtestInfoByKey(key, value, bindUser = true) {
  let AB_TEST_INFO = getABtestInfo(bindUser)
  AB_TEST_INFO[key] = value
  setABtestInfo(AB_TEST_INFO, bindUser)
}

export function getABtestInfoByKey(key, bindUser = true) {
  return getABtestInfo(bindUser)[key]
}

/**
 * 获取abtest的值
 * @param {String} key
 * @param {Array} range eg.['A', 'B', 'C']
 * @param {boolean} bindUser 是否绑定用户userId
 */
export function getABtestValueByKey(key, range = [], bindUser = true) {
  const testValue = getABtestInfoByKey(key, bindUser)
  let tmp
  if (testValue) {
    tmp = testValue
  } else {
    tmp = getRandomValueFromArray(range)
    setABtestInfoByKey(key, tmp, bindUser)
  }
  return tmp
}

// 下次abtest使用该class，上面暴露的方法即将弃用
/**
 * @param {String} key
 * @param {boolean} bindUser 是否绑定用户userId
 */
export class ABtest {
  constructor(key, bindUser = true) {
    this.key = key
    this.bindUser = bindUser
  }

  static setInfo(AB_TEST_INFO = {}, bindUser = true) {
    if (bindUser) {
      const userId = getUserInfoByKey('userId')
      if (!userId) {
        // eslint-disable-next-line no-console
        console.warn('没有登录，无法设置缓存')
        return
      }
      setPublicInfoByKey(`AB_TEST_INFO_${userId}`, JSON.stringify(AB_TEST_INFO))
    } else {
      setPublicInfoByKey('AB_TEST_INFO', JSON.stringify(AB_TEST_INFO))
    }
  }

  static getInfo(bindUser = true) {
    try {
      if (bindUser) {
        const userId = getUserInfoByKey('userId')
        if (!userId) return {}
        return JSON.parse(getPublicInfoByKey(`AB_TEST_INFO_${userId}`) || {})
      }
      return JSON.parse(getPublicInfoByKey('AB_TEST_INFO') || {})
    } catch (err) {
      return {}
    }
  }

  static setInfoByKey(key, value, bindUser = true) {
    let AB_TEST_INFO = ABtest.getInfo(bindUser)
    AB_TEST_INFO[key] = value
    ABtest.setInfo(AB_TEST_INFO, bindUser)
  }

  static getInfoByKey(key, bindUser = true) {
    return getABtestInfo(bindUser)[key]
  }

  /**
   * 获取abtest的值
   * @param {Array} range eg.['A', 'B', 'C']
   */
  getRandomValue(range = []) {
    const testValue = ABtest.getInfoByKey(this.key, this.bindUser)
    let tmp
    if (isDef(testValue)) {
      tmp = testValue
    } else {
      tmp = getRandomValueFromArray(range)
      ABtest.setInfoByKey(this.key, tmp, this.bindUser)
    }
    return tmp
  }
}
