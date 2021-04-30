/**
 * input 自动聚焦
 * @example <input v-fucus>
 */
export default {
  name: 'autofocus',
  inserted(el) {
    // 聚焦元素
    el.focus()
  },
}
