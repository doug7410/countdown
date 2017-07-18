<template>
  <div class="countdown-wrapper" :style="{backgroundImage: currentImage}">
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

  export default{
    name: 'countdown-wrapper',
    data () {
      return {
        currentImageNumber: 0,
        currentImage: null
      }
    },
    created () {
      this.getCountdown(this.$route.params.id)
      this.currentImage = this.getImageUrl(this.currentCountdown.images)
      this.runImages()
    },
    computed: {
      ...mapGetters(['currentCountdown'])
    },
    methods: {
      ...mapActions(['getCountdown']),
      runImages () {
        setInterval(() => {
          if (this.currentImageNumber === this.currentCountdown.images.length) {
            this.currentImageNumber = 0
          }
          this.currentImage = this.getImageUrl(this.currentCountdown.images)
          this.currentImageNumber++
        }, 3000)
      },
      getImageUrl (images) {
        return 'url(http://countdown.dev/storage/' + images[this.currentImageNumber].path + ')'
      }
    },

    components: {
      Clock
    }
  }
</script>

<style lang="scss" scoped>
  .countdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
