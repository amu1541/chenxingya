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
		'../../../static/img/banner/swiper/1/01.jpg', 
		'../../../static/img/banner/swiper/1/02.jpg'
		],
		swiperOption: {
          autoplay: 500,
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
</style>