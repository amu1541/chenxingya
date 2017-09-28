<template>
	<div class="cc">
		<div class="cs" v-for="i in list">
			<div class="c1">
				<h3>{{i.bz}}</h3>
				<p>{{i.lz}}</p>
			</div>
			<div class="c2">
				<img :src="i.src" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				list:[
				{
					bz:'闪购',
					lz:'1元购最好',
					src:'../../../static/img/product/01 (36).jpg'
				},{
					bz:'发现好货',
					lz:'发现品质生活',
					src:'../../../static/img/product/01 (37).jpg'
				},{
					bz:'排行榜',
					lz:'实时热卖尖货',
					src:'../../../static/img/product/01 (40).jpg'
				},{
					bz:'会买专辑',
					lz:'教你买买买',
					src:'../../../static/img/product/01 (36).jpg'
				}
				]
			}
		}
	}
</script>

<style scoped>
	.cc{
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}
	.cc .cs{
		width: 49.5%;
		display: flex;
		border-bottom:1px solid #ccc;
	}
	.c1{
		margin:.2rem;
	}
	.c1 h3{
		font-size:.4rem;
	}
	.c1 p{
		font-size:.25rem;
		color:#2C3E50;
	}
	.c2{
		margin:.6rem 0 .2rem;
		width: 1.5rem;
	}
	.c2 img{
		width: 100%;
	}
	.cs:nth-child(even) {
		border-left:1px solid #ccc;
	}
</style>