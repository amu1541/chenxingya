<template>
	<div class="ft">
		<dl v-for="i in list">
			<dt><img :src="i.img" alt="" /></dt>
			<dd>
				<p>{{i.zi}}</p>
				<p class="red">￥<span>{{i.pr}}</span>.00</p>
				<p class="fei">
		          <span>好评率{{i.hao}}%</span>
		          <span>看相似</span>
		        </p>
			</dd>
		</dl>
		<button class="btn" @click="jiazai">点击加载更多</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				list:[
				{
					img:'../../../static/img/product/01 (46).jpg',
					zi:'【京东配送】Chigo/志高96升双门冰箱 小型电冰...',
					pr:658,
					hao:'97'
				},{
					img:'../../../static/img/product/01 (47).jpg',
					zi:'【京东配送】Chigo/志高96升双门冰箱 小型电冰...',
					pr:658,
					hao:'97'
				},{
					img:'../../../static/img/product/01 (48).jpg',
					zi:'【京东配送】Chigo/志高96升双门冰箱 小型电冰...',
					pr:658,
					hao:'97'
				},{
					img:'../../../static/img/product/01 (49).jpg',
					zi:'【京东配送】Chigo/志高96升双门冰箱 小型电冰...',
					pr:658,
					hao:'97'
				},{
					img:'../../../static/img/product/01 (50).jpg',
					zi:'【京东配送】Chigo/志高96升双门冰箱 小型电冰...',
					pr:658,
					hao:'97'
				},{
					img:'../../../static/img/product/01 (51).jpg',
					zi:'【京东配送】Chigo/志高96升双门冰箱 小型电冰...',
					pr:658,
					hao:'97'
				}
				]
			}
		},
		methods:{
			jiazai () {
				var _this = this;
				setTimeout(function() {
//                     alert(1111111111111)
                    _this.list.push(..._this.list)
                    _this.loading = false;
                }, 1000)
			}
		}
	}
</script>

<style scoped>
	.ft{
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}
	.ft dl{
		width: 49%;
		margin-left:1%;
	}
	.ft dl dt img{
		width: 94%;
		margin-left:3%;
	}
	.ft dl dd{
		font-size:.3rem;
	}
	.red{
		color:red;
	}
	.red span{
		font-size:.35rem;
	}
	.fei{
		font-size:.25rem;
		color:#404040;
		display: flex;
		justify-content: space-around;
	}
	.fei span{
		display: inline-block;
		padding:.2rem 0;
	}
	.btn{
		padding:.1rem 2rem;
		font-size:.25rem;
		margin:auto;
		background:none;
		border:0;
		outline:0;
	}
	
</style>