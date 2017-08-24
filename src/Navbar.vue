<template>
<header class="header-wrap">
	<a href="#" class="logo">
		<span class="logo-lg"><strong>EX</strong>Press</span>	
	</a>
</header>
</template>

<script>
export default {
	name: 'vx-navbar'
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
			width: 230px;
			padding: 0 15px;
			color:#fff;
			line-height: 50px;
			font-size: 20px;
			font-weight: 300;
			text-align: center;
			background: #367fa9;
		}
	}
</style>