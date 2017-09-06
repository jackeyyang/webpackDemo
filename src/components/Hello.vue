<template>
	<div>
		<div class="hello">
			<p>{{lang.TABLEURL}}</p>
		</div>		
	</div>
</template>

<script>
import langx from "./language.js";

export default {
  name: 'hello',
  data (){
  	return {
  	}
  },

  computed: {
  	lang () {
  		return {
  			TABLEURL:langx.TABLEURL[this.$store.state.language]
  		}
  	}
  }   
}
</script>

<style lang="scss">
	
</style>
