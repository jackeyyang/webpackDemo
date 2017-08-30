<template>
  <div id="app">
    <div class="wrap">
      <vx-navbar></vx-navbar>
      <vx-slider></vx-slider>
      <vx-content-wrap></vx-content-wrap>
    </div>
  </div>
</template>

<script>
import VXNavbar from './Navbar.vue';
import VXSlider from './Slider.vue';
import VXContentWrap from './ContentWrap.vue';

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'vx-navbar': VXNavbar,
    'vx-slider': VXSlider,
    'vx-content-wrap': VXContentWrap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper{
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background:#222d32;
}
</style>
