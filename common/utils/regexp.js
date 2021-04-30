/**
 * IP 地址校验
 * @param {String} ipString IP 地址
 * @returns {Boolean} 传入参数是否为合法的 IP 地址
 */
export function ip(ipString = '') {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(ipString)
}

/**
 * 图片类型校验
 * @param {String} imageTypeString 图片类型字符串
 * @returns {Boolean} imageTypeString 是否为图片类型
 */
export function image(imageTypeString = '') {
  return /image\/[jpg,jpeg,png]/i.test(imageTypeString)
}

/**
 * 金额验证，整数或者满足一定位数的小数
 * @param {String|Number} [verifyingString = ''] 待验证字符串
 * @param {String|Number} [decimals = 2] 匹配数字保留小数位数
 * @returns {Boolean} 是否为金额
 */
export function money(verifyingString = '', decimals = 2) {
  return new RegExp('(?:^-?([1-9]\\d*|0))(?:\\.\\d{1,' + decimals + '})?$').test(verifyingString + '')
}

/**
 * 中华人民共和国身份证号验证
 * @param {String|Number} [verifyingString = ''] 待验证字符串
 * @returns {Boolean} 是否为中华人民共和国身份证号
 */
export function chineseIdNum(verifyingString = '') {
  return new RegExp('^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}(\\d|x|X)$').test(verifyingString + '')
}

/**
 * 中文名验证
 * @param {String} verifyingString 待验证字符串
 * @returns {Boolean} 是否为中文名验证
 */
export function chineseName(verifyingString = '') {
  let i = (verifyingString || 'x').replace(/·|•/g, '')
  return new RegExp('^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$').test(i)
}

/**
 * 邮箱地址验证
 * @param {String} [verifyingString = ''] 待验证字符串
 * @returns {Boolean} 是否为邮箱地址
 */
export function email(verifyingString = '') {
  return new RegExp("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$").test(verifyingString + '')
}

/**
 * 验证手机号码，允许 +86 188xxxxxxxx, +86188xxxxxxxx, 188xxxxxxxx, 86188xxxxxxxx 格式
 * @param {String} [verifyingString = ''] 待验证字符串
 * @returns {Boolean} 是否为 +86 188xxxxxxxx, +86188xxxxxxxx, 188xxxxxxxx, 86188xxxxxxxx 格式的手机号码
 */
export function mobile(verifyingString = '') {
  // 检验剩余字符
  return new RegExp('^(?:(?:\\+?86)?1[3456789])\\d{9}$').test(verifyingString.replace(/\\s|\\-/g, ''))
}

/**
 * 验证掩码手机号码，允许 +86 188xxxxxxxx, +86188xxxxxxxx, 188xxxxxxxx, 86188xxxxxxxx 格式
 * @param {String} [verifyingString = ''] 待验证字符串
 * @returns {Boolean} 是否为 +86 188xxxxxxxx, +86188xxxxxxxx, 188xxxxxxxx, 86188xxxxxxxx 格式的手机号码
 */
export function maskPhone(verifyingString = '') {
  // 检验剩余字符
  return new RegExp('^(?:(?:\\+?86)?1[3456789])\\d{1}.{4}\\d{4}$').test(verifyingString.replace(/\\s|\\-/g, ''))
}

/**
 * 验证电话号码（包括座机和手机）
 * @param {String} [verifyingString = ''] 待验证字符串
 * @returns {Boolean} 是否为电话号码（包括座机和手机）
 */
export function tel(verifyingString = '') {
  return new RegExp('(^(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-?[0-9]{1,4})?$)|(^((\\(\\d{3}\\))|(\\d{3}\\-?))?(1[3456789]\\d{9})$)').test(verifyingString)
}

/**
 * 验证是否为空
 * @param {String} [verifyingString = ''] 待验证字符串
 * @returns {Boolean} 是否为空字符串
 */
export function empty(verifyingString = '') {
  return new RegExp('^.*\\S+.*$').test(verifyingString)
}

/**
 * 银行卡验证，最大 19 位数字
 * @param {String} o 银行卡卡号字符串
 * @return {Boolean} 是否为满足条件的银行卡号
 */
export function bankcard(i) {
  let reg = new RegExp('^\\d{14,19}$')
  return reg.test(i)
}

/**
 * 信用卡号，最大 16 位数字
 * @param {String} o 信用卡号卡号字符串
 * @return {Boolean} 是否为满足条件的信用卡号
 */
export function creditCard(i) {
  let reg = new RegExp('^\\d{16}$')
  return reg.test(i)
}
