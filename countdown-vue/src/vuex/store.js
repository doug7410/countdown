import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import persistedState from './plugins/persistedState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
    persistedState({blacklist: ['route']})
  ]
})
