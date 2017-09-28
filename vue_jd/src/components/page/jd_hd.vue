<template>
	<div id="hd">
		<div class="h1">
			<img :src="h1" alt="" />
		</div>
		<div class="h2">
			<img v-for="i in list" :src="i" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				h1:'../../../static/img/hr/jd_02.jpg',
				list:[
				'../../../static/img/hr/jd_03.jpg',
				'../../../static/img/hr/jd_04.jpg',
				'../../../static/img/hr/jd_05.jpg',
				'../../../static/img/hr/jd_06.jpg'
				]
			}
		}
	}
</script>

<style scoped> 
	.hd{
		width: 100%;
		height:auto;
	}
	.h1{
		background:#eee;
	}
	.h1 img{
		width: 100%;
		margin-top:.3rem;
		
	}
	.h2{
		background: #e7161c;
	}
	.h2 img {
		width: 50%;
	}
</style>