/**
 * 支持三种格式掩码（手机 身份证号 名字）
 * 手机：显示前三位和后三位 中间的掩码 eg. 188****4799
 * 身份证号：显示前两位和尾部往前11位 末尾和其余的掩码 eg. 34****19980514132*
 * 名字：显示前一位和后一位，两个字的只显示第一个 eg. 张* 陈*大 欧**拉
 * 主程序中使用
 * type: phone IdNum name
 * <span v-yanma="'phone'"></span>
 */
function mask(el, binding) {
  let rawValue = el.innerText
  let star = ''
  let typeConfig = {
    name: { frontLen: 1, endLen: 1, isEndHide: false },
    phone: { frontLen: 3, endLen: 4, isEndHide: false },
    IdNo: { frontLen: 6, endLen: 4, isEndHide: true },
  }
  let { frontLen } = typeConfig[binding.value]
  let { endLen } = typeConfig[binding.value]
  let len = rawValue.length > 2 ? rawValue.length - frontLen - endLen : rawValue.length - frontLen
  for (let i = 0; i < len; i++) {
    star += '*'
  }
  let text = rawValue.substring(0, frontLen) + star + rawValue.substring(rawValue.length - endLen)
  if (rawValue.length < 3) text = text.slice(0, rawValue.length - 1) + '*'
  // 身份证
  if (typeConfig[binding.value].isEndHide) text = text.slice(0, rawValue.length - 2) + '**'
  el.innerHTML = text
}
export default {
  name: 'mask',
  inserted(el, binding, vnode) {
    // console.log(2, binding)
    mask(el, binding, vnode)
  },
  update(el, binding, vnode) {
    // console.log(2, binding)
    mask(el, binding, vnode)
  },
}
