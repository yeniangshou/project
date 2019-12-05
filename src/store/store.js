import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'path'
import { reject } from 'q'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: []
  },
  mutations: {
    addTags(state, view) {
      if (state.tags.length > 0) {
        if (state.tags.find((tag) => {
          return tag.path == view.path
        })) {
          return false
        }
      }
      state.tags.push({ name: view.name, path: view.path })
    },
    delTag(state, view) {
      for (const [i, v] of state.tags.entries()) {
        if (v.path === view.path) {
          state.tags.splice(i, 1)
        }
      }
    }

  },
  getters: {
    tags: state => state.tags

  }
})
