/**
 * 防止连点，默认500
 * @example v-preventReClick 或 v-preventReClick="2000"
 */
export default {
  name: 'preventReClick',
  inserted(el, binding) {
    el.addEventListener('click', () => {
      // 禁用使用这个指令的DOM结构点击事件
      el.style.pointerEvents = 'none'
      setTimeout(() => {
        // 启动使用这个指令的DOM结构点击事件
        el.style.pointerEvents = 'auto'
      }, binding.value || 500)
    })
  },
}
