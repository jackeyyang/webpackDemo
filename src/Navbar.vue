<template>
<header class="main-header">
	<a href="#" class="logo">
		<span class="logo-lg"><strong>EX</strong>press</span>	
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
	.main-header{
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
			font-size: 2rem;
			font-weight: 300;
			text-align: center;
			background: #367fa9;
		}

		.navbar{
			position: relative;
			margin-left: 230px;
			margin-bottom:0;
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