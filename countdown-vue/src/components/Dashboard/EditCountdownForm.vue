<template>
  <div>
    <div class="page-header">
      <h3>Edit Countdown {{ currentCountdown.name }}</h3>
    </div>
    <form class="form-inline">
      <div class="form-group">
        <label for="countdown-name">Countdown Name</label>
        <input
                v-model="name"
                type="text"
                class="form-control"
                id="countdown-name"
                placeholder="Iceland">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input
                v-model="date"
                type="email"
                class="form-control"
                id="date">
      </div>
      <button type="submit" class="btn btn-default" @click.prevent="update">Update</button>
    </form>
    <hr>
    <image-manager :countdown="currentCountdown"></image-manager>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {mapActions, mapGetters} from 'vuex'
  import ImageManager from './ImageManager'

  export default{
    created () {
      $(document).ready(() => {
        $('#date').datepicker().on(
          'changeDate', () => {
            this.date = $('#date').val()
          }
        )
      })

      this.name = this.currentCountdown.name
      this.date = this.currentCountdown.date

      this.getImages()
    },
    data () {
      return {
        name: null,
        date: null
      }
    },
    computed: {
      ...mapGetters(['currentCountdown'])
    },
    methods: {
      ...mapActions(['updateCountdown', 'getImages']),
      update () {
        this.updateCountdown({
          id: this.currentCountdown.id,
          name: this.name,
          date: this.date
        })
      }
    },
    components: {
      ImageManager
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css";
</style>
