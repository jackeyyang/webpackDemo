<template>
	<div class="content">
		<div class="content-header">
            <div class="leftside-content-header">
                <ul class="breadcrumbs">
                    <li><i class="fa fa-home" aria-hidden="true"></i><a href="#">Dashboard</a></li>
                </ul>
            </div>
        </div>
    	<router-view></router-view>
	</div>
</template>


<script>
	export default {
		name: 'vx-content-wrap'
	}
</script>

<style lang="scss">

</style>