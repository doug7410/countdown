<template>
  <div class="container">
    <router-link
        class="btn btn-sm btn-default"
        :to="{name: 'createCountdown'}">
      + Create Countdown
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'dashboard'
  }
</script>
