import http from '../../services'
import {getHeader} from '../../config.js'

export default {
  state: {

  },

  actions: {
    createCountdown ({ commit }, countdown) {
      console.log(countdown)
      http.post('/api/countdown', countdown, {headers: getHeader()}).then(() => {

      })
    }
  }
}
