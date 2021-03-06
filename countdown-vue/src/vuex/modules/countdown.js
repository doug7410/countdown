import http from '../../services'
import {getHeader} from '../../config.js'

export default {
  state: {
    currentCountdown: {},
    countdowns: {}
  },

  getters: {
    currentCountdown: state => state.currentCountdown,
    countdowns: state => state.countdowns
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
    },
    getCountdown ({ commit }, id) {
      return http.get(`/api/countdown/${id}`, {headers: getHeader()}).then((response) => {
        commit('SET_CURRENT_COUNTDOWN', response.data)
      })
    },
    getCountdowns ({ commit }) {
      return http.get('/api/countdowns', {headers: getHeader()}).then((response) => {
        commit('SET_USER_COUNTDOWNS', response.data)
      })
    },
    getImages ({ commit, getters }) {
      return http.get(`/api/countdown/${getters.currentCountdown.id}/images`, {headers: getHeader()}).then((images) => {
        commit('SET_IMAGES', images.data)
      })
    }
  },

  mutations: {
    SET_CURRENT_COUNTDOWN (state, countdown) {
      state.currentCountdown = countdown
    },

    SET_IMAGES (state, images) {
      state.currentCountdown.images = images
    },

    SET_USER_COUNTDOWNS (state, countdowns) {
      state.countdowns = countdowns
    }
  }
}
