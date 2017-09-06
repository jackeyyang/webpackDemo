<template>
  <div id="app">
    <div class="wrap">
      <div class="page-header">
        <vx-navbar></vx-navbar>
      </div>      
      <div class="page-body">
        <vx-slider></vx-slider>
        <vx-content-wrap></vx-content-wrap>
      </div>
    </div>
  </div>
</template>

<script>
import VXNavbar from './Navbar.vue';
import VXSlider from './Slider.vue';
import VXContentWrap from './ContentWrap.vue';

import templateScript from '@/lib/template-script.min'
import templateInit from '@/lib/template-init.min'

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
  },
  mounted (){
    templateScript(); // 初始化
    templateInit(); // tooltip
  }
}
</script>

<style>

</style>
