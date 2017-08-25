<template>
<header class="header-wrap">
	<a href="#" class="logo">
		<span class="logo-lg"><strong>EX</strong>Press</span>	
	</a>
	
    <nav class="navbar navbar-static-top">  
    </nav>
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
			width: 23rem;
			padding: 0 15px;
			color:#fff;
			line-height: 50px;
			font-size: 2rem;
			font-weight: 300;
			text-align: center;
			background: #367fa9;
		}

		.navbar{
			position: relative;
			margin-left: 230px;
			background-color: #3c8dbc;
			border:none;
			.navbar-custom-menu a{
				color:#fff;
			}
		}

		.navbar-static-top{
			z-index: 999;
		}
	}
</style>