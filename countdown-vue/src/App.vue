<template>
  <div id="app">
    <top-menu v-if="accessToken"></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import TopMenu from './components/Nav/TopMenu'

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['accessToken'])
    },
    components: {
      TopMenu
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/main";
</style>
