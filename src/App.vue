<template>
  <div id="app">
    <div class="wrapper">
      <vm-navbar></vm-navbar>
    </div>
  </div>
</template>

<script>
import VMNavbar from './Navbar.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'vm-navbar': VMNavbar
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
