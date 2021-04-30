import Vue from 'vue'
import '@app/module1/assets/iconfont/iconfont.css'
import '@app/module1/assets/iconfont/iconfont'
import '@common/style/index.scss'
import message from '@common/components/HolaMessage'
import toast from '@common/components/HolaToast'
import loading from '@common/components/HolaLoading'
import { autofocus, preventReClick, mask } from '@common/plugins/directives'
import px2rem from '@common/utils/px2rem'
import { loadThemeColor } from './utils/common'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive(autofocus.name, autofocus)
Vue.directive(preventReClick.name, preventReClick)
Vue.directive(mask.name, mask)

px2rem()
loadThemeColor()

Vue.prototype.$message = message
Vue.prototype.$toast = toast
Vue.prototype.$loading = loading

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
