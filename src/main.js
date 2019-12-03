// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import store from './store/store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/index'
import echarts from 'echarts'
import cookie from 'vue-cookie'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// 设置cookie
Vue.prototype.$cookie = cookie
Vue.prototype.$api = api
Vue.use(elementUI)

// 屏幕做rem 自适应配置
;(function(win) {
    var tid;
    function refreshRem() {
        let designSize = 1349; // 设计图尺寸
        let html = document.documentElement;
        let wW = html.clientWidth;// 窗口宽度
        let rem = wW * 100 / designSize; 
        document.documentElement.style.fontSize = rem + 'px';
    }
 
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);


/* eslint-disable no-new */
new Vue({
    i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
