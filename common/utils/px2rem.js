/**
 * 根元素 html font-size 设置方法
 * @param {Number} designWidth 设计稿尺寸
 * @param {Number} rate 布局缩放基数，与loader保持一致
 */
export default function(designWidth = 750, rate = 100) {
  function setHtmlFontSize() {
    const screenWidth = window.innerWidth
    const fontSize = (screenWidth / designWidth) * rate
    document.documentElement.style.fontSize = fontSize + 'px'
  }
  window.onload = setHtmlFontSize
  window.onresize = setHtmlFontSize
}
