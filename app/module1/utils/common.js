import { getQueryString } from '@common/utils/common'

const originMap = {
  strawberry: 'witfintech',
  banana: 'eliteeagle',
  pitaya: 'chuanyueinfo',
}

// 获取当前运行的app
export function whichApp() {
  // 优先级 1.域名判断 2.app参数
  return whichAppByOrigin() || getQueryString('app') || 'strawberry'
}

/**
 * 通过域名来获取当前运行的app，主要用于线上
 */
function whichAppByOrigin() {
  try {
    let { origin } = window.location
    let tmp
    Object.keys(originMap).forEach((key) => {
      let reg = new RegExp(originMap[key])
      if (reg.test(origin)) tmp = key
    })
    return tmp
  } catch (error) {
    return ''
  }
}

/**
 * 修改css变量颜色
 * @param {*} variable 变量 ex. --primary-color
 * @param {*} color 颜色 ex. red
 */
export function changeCssColor(variable, color) {
  document.documentElement.style.setProperty(variable, color)
}

// 加载主题颜色
export function loadThemeColor() {
  if (whichApp() === 'banana') {
    changeCssColor('--primary', '#33c6ba')
    changeCssColor('--light-primary', '#eaf9f8')
    document.body.classList.add('banana')
  }
  if (whichApp() === 'pitaya') {
    changeCssColor('--primary', '#ff3434')
    changeCssColor('--light-primary', '#ffeaea')
    document.body.classList.add('pitaya')
  }
}
/**
 * 通过urlFlag获取跳转path
 * @param {String} urlFlag 跳转标志
 */
export function urlFlag2path(urlFlag) {
  const jumpPathMap = {
    homeIndex: '/home', // 首页
    authIdentity: '/auth/identity', // 身份识别
    authBaseinfo: '/auth/baseinfo?from=home', // 基本信息
    authRelation: '/auth/relation', // 联系人
    processDistribute: '/process/distribute', // 流量分发
    processIndex: '/process', // 借款
    processIndexSecond: '/process?confirm=1', // 借款（二次确认）
    processAccount: '/process/account', // 开户
    processStatus: '/process/status', // 放款进度页面
    processAdditionalAuth: '/process/additional-auth', // 信息补充页
    repayList: '/repay', // 还款
    infoConfirmSl: '/process/info-confirm-sl', // 信息确认页 - 矢隆资方
    channelConfirm: '/process/channel-confirm', // 资方确认页，包括前置确认页和后置确认页
    changeCard: '/bank/bank-list?from=changeCard', // TODO 放款失败，更换银行卡
    // withdraw: '/process/withdraw', // TODO 提现（规划中，此次需求暂不需要）
  }
  return jumpPathMap[urlFlag]
}
