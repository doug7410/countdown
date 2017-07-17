<template>
  <div class="countdown-wrapper">
    <div>{{ currentCountdown.name }}</div>
    <div>{{ currentCountdown.date }}</div>
    <clock :trip-date="currentCountdown.date"></clock>
    <div class="hidden" v-for="image in currentCountdown.images">
      <img :src="'http://countdown.dev/storage/' + image.path">
    </div>
  </div>
</template>
<script>
  import Clock from './Clock'
  import { mapActions, mapGetters } from 'vuex'
  import $ from 'jquery'

  export default{
    created () {
      this.getCountdown(this.$route.params.id)
      this.runImages()
    },

    computed: {
      ...mapGetters(['currentCountdown'])
    },
    methods: {
      ...mapActions(['getCountdown']),
      runImages () {
        let currentImage = 0
        setInterval(() => {
          if (currentImage === this.currentCountdown.images.length) {
            currentImage = 0
          }
          $('body').css(
            'background-image',
            'url(http://countdown.dev/storage/' + this.currentCountdown.images[currentImage].path + ')'
          )
          currentImage++
        }, 3000)
      }
    },

    components: {
      Clock
    }
  }
</script>

<style lang="scss">
  .countdown-wrapper {
    max-width: 80%;
    margin: 0 auto;
  }

  body {
    background-size: cover;
  }
</style>
