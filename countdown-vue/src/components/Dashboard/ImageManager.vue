<template>
  <div class="image-list">
    <file-select v-model="image"></file-select>
    <button class="btn btn-default" @click="addImage()">Add Image</button>
    <ul v-for="image in countdown.images">
      <li>
        <img :src="`http://countdown.dev/storage/${image.path}`">
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import FileSelect from '../FileSelect'

  export default{
    data () {
      return {
        image: null
      }
    },
    props: {
      countdown: Object
    },
    computed: {
      imageName () {
        JSON.stringify(this.image)
      }
    },
    methods: {
      ...mapActions(['uploadImage']),
      addImage () {
        this.uploadImage(this.image)
      }
    },
    components: {
      FileSelect
    }
  }
</script>
<style lang="scss" scoped>
  .image-list {
    ul {
      display: block;
    }

    li {
      display: inline-block;
    }

    img {
      width: 200px
    }
  }
</style>
