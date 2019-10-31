// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import aixos from 'axios'
import store from './store/store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/index'


Vue.prototype.$axios = aixos
Vue.config.productionTip = false
Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
    i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
