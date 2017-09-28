<template>
		<swiper :options="swiperOption">
		    <swiper-slide v-for="i in list">
		    	<dl>
					<dt><img :src="i.img" alt="" /></dt>
					<dd>
						<p>￥<span>{{i.pr}}</span></p>
						<a href="">￥{{i.m}}</a>
					</dd>
				</dl>
		    </swiper-slide>
		</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data () {
			return {
				components: {
				    swiper,
				    swiperSlide
				},
				list:[
				{
					img: '../../../static/img/product/01 (1).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (2).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (11).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (16).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (1).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (2).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (11).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (16).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (1).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (2).jpg',
					pr: 899,
					m: 1299
				},{
					img: '../../../static/img/product/01 (11).jpg',
					pr: 899,
					m: 1299
				}
				
				],
				swiperOption: {
		          setWrapperSize :true,
		          paginationClickable :true,
		          mousewheelControl : true,
		          observeParents:true,
		       }
			}
		}
	}
</script>

<style scoped>
	.swiper-container{
		width: 100%;
	}
	.swiper-wrapper{
		width: 100% !important;
	}
	.swiper-container .swiper-slide{
		width: 1.8rem !important;
		margin-left:.25rem;
	}
	.swiper-container .swiper-slide dl dt img{
		width:95%;
	}
	dl dd {
		text-align: center;
		font-size: .23rem;
	}
	dl dd p{
		color:red;
		font-weight: 700;
	}
	dl dd p span{
		font-size: .3rem;
	}
	dl dd a{
		color:#999;
		text-decoration: line-through;
	}
</style>