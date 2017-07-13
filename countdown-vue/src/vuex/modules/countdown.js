import http from '../../services'
import {getHeader} from '../../config.js'

export default {
  state: {
    currentCountdown: {}
  },

  getters: {
    currentCountdown: state => state.currentCountdown
  },

  actions: {
    createCountdown ({ commit }, countdown) {
      return http.post('/api/countdown', countdown, {headers: getHeader()}).then(response => {
        commit('SET_CURRENT_COUNTDOWN', response.data)
      })
    },
    updateCountdown ({ commit }, countdown) {
      return http.put('/api/countdown', countdown, {headers: getHeader()}).then(response => {
        commit('SET_CURRENT_COUNTDOWN', response.data)
      })
    }
  },

  mutations: {
    SET_CURRENT_COUNTDOWN (state, countdown) {
      state.currentCountdown = countdown
    }
  }
}
