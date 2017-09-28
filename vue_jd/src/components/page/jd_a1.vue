<template>
	<div class="ai">
		<div class="a1">
			<div class="a11" v-for="i in list">
				<div class="c1">
					<h3>{{i.bz}}</h3>
					<p>{{i.lz}}</p>
					<span class="c">{{i.lzz}}</span>
				</div>
				<div class="c2">
					<img :src="i.img" alt="" />
				</div>
			</div>
		</div>
		<div class="a2">
			<div class="a22"  v-for="i in list2">
				<h3>{{i.bz}}</h3>
				<p>{{i.lz}}</p>
				<img :src="i.img" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				list:[
				{
					img:'../../../static/img/product/01 (4).jpg',
					bz:'玩3C',
					lz:'iPhone 7超低价',
					lzz:'疯狂秒杀中'
				},{
					img:'../../../static/img/product/01 (5).jpg',
					bz:'京东家电',
					lz:'每满1000减100',
					lzz:''
				},{
					img:'../../../static/img/product/01 (6).jpg',
					bz:'京东超市',
					lz:'满99减50',
					lzz:'零食188减100'
				},{
					img:'../../../static/img/product/01 (7).jpg',
					bz:'爱家',
					lz:'家装节199-100',
					lzz:'家装节全品类'
				}
				],
				list2:[
				{
					img:'../../../static/img/product/01 (39).jpg',
					bz:'爱宝宝',
					lz:'爆款低至5折'
				},{
					img:'../../../static/img/product/01 (41).jpg',
					bz:'爱美丽',
					lz:'美妆0元试用'
				},{
					img:'../../../static/img/product/01 (39).jpg',
					bz:'爱吃',
					lz:'十一出行穿搭'
				},{
					img:'../../../static/img/product/01 (41).jpg',
					bz:'爱穿搭',
					lz:'iPhone 7超低价'
				}
				]
			}
		}
	}
</script>

<style scoped>
	.ai{
		width: 100%;
		height: auto;
	}
	.a1,.a2{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.a1 .a11{
		width: 49.5%;
		display: flex;
		border-bottom:1px solid #ccc;
	}
	.c1{
		margin:.2rem;
	}
	.c1 h3{
		font-size:.3rem;
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
	.a11:nth-child(even) {
		border-left:1px solid #ccc;
	}
	.c{
		background:deeppink;
		color:#fff;
		font-size:.25rem;
	}
	.a22{
		width: 24.8%;
		border-right:1px solid #ccc;
	}
	.a22 h3{
		font-size:.3rem;
		margin:.15rem;
	}
	.a22 p{
		font-size:.2rem;
		margin:.1rem .2rem .2rem;		
	}
	.a22 img{
		margin-left:.2rem;
	}
</style>