<template>
	<swiper :options="swiperOption">
    <swiper-slide v-for="i in banners">
    	<img :src="i" alt="" class="banner_img" />
    </swiper-slide>
    <div class="swiper-pagination pag" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'banner',
  data () {
    return {
		components: {
		    swiper,
		    swiperSlide
		},
		banners: [ 
		'../../../static/img/header_swiper/01.jpg', 
		'../../../static/img/header_swiper/02.jpg',
		'../../../static/img/header_swiper/03.jpg',
		'../../../static/img/header_swiper/04.jpg', 
		'../../../static/img/header_swiper/05.jpg',
		'../../../static/img/header_swiper/06.jpg',
		'../../../static/img/header_swiper/07.jpg'
		],
		swiperOption: {
          autoplay: 5000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
       },
    }
  }
}
</script>

<style>
.banner_img{
	width: 100%;
}
.pag span{
	width: .15rem;
	height: .15rem;
}
.swiper-pagination-bullet-active{
	background:#fff;
}
</style>