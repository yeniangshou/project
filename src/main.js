// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import 'font-awesome/css/font-awesome.min.css'
import vuex from './store/store'
// Normalize.css是一种CSS reset的替代方案
import 'normalize.css/normalize.css'
import i18n from './i18n/index'
import elementUI from 'element-ui'
import cookie from 'vue-cookie'
import 'element-ui/lib/theme-chalk/index.css'

// 这里重点，elementUI 进行中英文切换
Vue.use(elementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
// 这里时使用aixos集合，重点
Vue.prototype.$api = api
Vue.config.productionTip = false

// 设置cookie set  get  delete 方法  this.$cookie.set('token', token, 1)
Vue.prototype.$cookie = cookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  vuex,
  components: { App },
  template: '<App/>'
})
