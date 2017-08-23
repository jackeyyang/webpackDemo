<template>
<header class="header-wrap">
	<a href="#" class="logo">
		<span class="logo-lg">Choice</span>		
	</a>
</header>
</template>

<script>
export default {
	name: 'va-navbar'
}
</script>

<style lang="scss">
	.header-wrap{
		position: relative;
		max-height: 100px;
		z-index: 1000;
	
		.logo{
			display: block;
			float: left;
			line-height: 50px;
			font-size: 20px;
			font-weight: 300;
			text-align: center;
			width: 230px;
		}
	}
</style>