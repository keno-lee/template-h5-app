import { getUserID } from '@app/fruitapp/utils/store'
import { config } from '@app/fruitapp/utils/common'
import { getSysPlatform } from '@common/jsbridge'

/**
 * 拼接参数
 * @param {*} data
 */
function dataToQueryString(data) {
  data = data || {}
  let str = ''
  for (const key in data) {
    let val = data[key]
    str += `${key}=${encodeURIComponent(typeof val === 'object' ? JSON.stringify(val) : val)}&`
  }
  return str
}

/**
 * 以创建图片的方式上报
 * @param {string} src 上报路径
 */
function traceByImg(src) {
  return new Promise((resolve) => {
    let img = document.createElement('img')
    img.style.visibility = 'hidden'
    img.style.width = '0px'
    img.style.heigth = '0px'
    img.src = src
    img.onerror = function() {
      document.body.removeChild(img)
      resolve()
    }
    img.onload = function() {
      document.body.removeChild(img)
      resolve()
    }
    document.body.appendChild(img)
  })
}

/**
 * 上报kibana
 * @param {string} message 上报的错误信息
 * @param {string} level 错误等级
 */
function kibanaReport(message, level) {
  let parms = {
    userId: getUserID() || 'UNKNOWN',
    error: message,
    level: level || 'error',
  }
  let baseApi = process.env.CODE_ENV === 'production' ? config.baseApi : window.location.origin
  let src = baseApi + '/system/report ' + (/\?/.test(baseApi) ? '?' : '') + dataToQueryString(parms)
  traceByImg(src)
}

function traceVueErrorByKibana(message, level) {
  const sysPlatform = getSysPlatform()
  let tmpMsg = `web-multi-error--${sysPlatform.softVersion}--${message}--${window.location.href}`
  kibanaReport(tmpMsg, level)
}

/**
 * 安装插件
 */
function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.config.errorHandler = function(err, vm, info) {
    // errorHandler 会捕获到 vue ui 层调用 async 方法的报错
    // 如果 async 方法内调用接口，接口报错没有捕获，则会抛出接口返回错误，所以此处过滤接口报错
    if (typeof err.code !== 'undefined') return
    traceVueErrorByKibana('message:' + err.message + ',info:' + info, 'error')
    Promise.reject(err)
  }
  Vue.config.warnHandler = function(msg, vm, trace) {
    traceVueErrorByKibana('message:' + msg + ',trace:' + trace, 'warn')
  }
}

export default {
  install,
}
