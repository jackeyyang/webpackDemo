<template>
  <div id="app">
    <div class="wrapper">
      <vx-navbar></vx-navbar>
    </div>
  </div>
</template>

<script>
import VXNavbar from './Navbar.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'vx-navbar': VXNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
