<template>
  <div class="container">
    <countdown-form></countdown-form>
  </div>
</template>

<script>
  import CountdownForm from './CountdownForm'
  export default{
    name: 'dashboard',
    components: {
      CountdownForm
    }
  }
</script>
