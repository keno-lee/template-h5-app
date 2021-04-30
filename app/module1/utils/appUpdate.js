import {
  isapp, getVersionCode, getSysPlatform, compareVersion,
} from '@common/jsbridge'
import { config } from '@app/fruitapp/utils/common'
import { android as isAndroid, ios as isIOS } from 'knife/utils/regexp/environment'
import { get as getPublicInfoByKey, set as setPublicInfoByKey } from 'knife/utils/storage/localstorage'

export const updateRemindLimitTime = 24 * 60 * 60 * 1000
export const APPUpdateRemindTimestampKey = 'app-update-remind-timestamp' // two key for emergency update

// Android app 根据版本更新信息
export const { AppVersionAndroid } = config

// iOS app 根据版本更新信息
export const { AppVersionIOS } = config

export function getAppUpdateData() {
  if (isapp()) {
    if (!checkRemindTimestamp()) return null

    if (isAndroid()) {
      let currentVersionCode = getVersionCode()
      let currentAppId = getSysPlatform().appID || ''
      for (let i = 0; i < AppVersionAndroid.length; i++) {
        let appData = AppVersionAndroid[i]
        let isConfigApp = currentAppId.indexOf(appData.appID) > -1
        let isVersionOld = compareVersion(currentVersionCode, appData.version) < 0
        if (isConfigApp) {
          if (isVersionOld) return appData
          break
        }
      }
      return null
    }

    if (isIOS()) return null
  }
  return null
}

/**
 * 检查提示更新时间 updateRemindLimitTime 时间内只提示一次
 */
function checkRemindTimestamp() {
  let time = parseInt(getPublicInfoByKey(APPUpdateRemindTimestampKey)) || 0
  let timenow = Date.now()
  if (timenow - time >= updateRemindLimitTime) {
    setPublicInfoByKey(APPUpdateRemindTimestampKey, timenow)
    return true
  }
  return false
}
