import http from '../../services'
import {getHeader} from '../../config.js'

export default {
  state: {
    image: null
  },

  actions: {
    uploadImage ({ commit, getters }, image) {
      let data = new FormData()
      data.append('image', image)
      data.append('countdown_id', getters.currentCountdown.id)
      http.post('api/images', data, {
        headers: {...getHeader(), ...{'content-type': 'multipart/form-data'}}
      }).then((countdownImages) => {
        commit('SET_IMAGES', countdownImages.data)
      })
    }
  }
}
