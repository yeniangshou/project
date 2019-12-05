import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhLocale from '../lang/zh'
import enLocale from '../lang/en'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

Vue.use(VueI18n)

const i18n = new VueI18n({

  locale: localStorage.lang || 'en',

  messages: {
    en: {
      ...enLocale,
      ...elementEnLocale
    },
    zh: {
      ...zhLocale,
      ...elementZhLocale
    }

  }

})

export default i18n
