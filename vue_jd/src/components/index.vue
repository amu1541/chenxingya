<template>
  <div class="index">
  	
    <nav>
    	<div><i></i><i></i><input type="text" placeholder=""/></div>
    	<button>登录</button>
    </nav>
    <div class="main">
    	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
	    	<!--轮播-->
	    	<banner></banner>
	    	<navs></navs>
	    	<nots></nots>
	    	<jd_ms></jd_ms>
	    	<jd_is></jd_is>
	    	<jd_hd></jd_hd>
	    	<jd_s></jd_s>
	    	<p class="floor"><img src="../../static/img/hr/6.jpg" alt="" /></p>
	    	<jd_a1></jd_a1>
	    	<lun></lun>
	    	<p class="floor"><img src="../../static/img/hr/7.jpg" alt="" /></p>
	    	<jd_a1></jd_a1>
	    	<lun></lun>
	    	<p class="floor"><img src="../../static/img/hr/4.jpg" alt="" /></p>
	    	<jd_a1></jd_a1>
	    	<lun></lun>
	    	<p class="floor"><img src="../../static/img/hr/5.jpg" alt="" /></p>
	    	<jd_a1></jd_a1>
	    	<lun></lun>
	    	<div class="dd"><p class="dp">为您推荐</p></div>
	    	<jd_f></jd_f>
    	</mt-loadmore>
    </div>
    <div class="foot">
    	<router-link :to="{path:'/index'}"><img src="../../static/img/footer/1.png" alt="" /></router-link>
    	<router-link :to="{path:'/index2'}"><img src="../../static/img/footer/2.png" alt="" /></router-link>
    	<router-link :to="{path:'/index3'}"><img src="../../static/img/footer/3.png" alt="" /></router-link>
    	<router-link :to="{path:'/index4'}"><img src="../../static/img/footer/4.png" alt="" /></router-link>
    	<router-link :to="{path:'/index5'}"><img src="../../static/img/footer/5.png" alt="" /></router-link>
    </div>
  </div>
</template>

<script>
import banner from './page/banner'
import navs from './page/navs'
import nots from './page/nots'
import jd_ms from './page/jd_ms'
import jd_is from './page/jd_is'
import jd_hd from './page/jd_hd'
import jd_s from './page/jd_s'
import jd_a1 from './page/jd_a1'
import lun from './page/lun'
import jd_f from './page/jd_f'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    banner,
    navs,
    nots,
    jd_ms,
    jd_is,
    jd_hd,
    jd_s,
    jd_a1,
    lun,
    jd_f
  },
  methods:{
  	loadTop () {
  		// load more data
  		var _this = this
  		setTimeout(function(){
  			_this.$refs.loadmore.onTopLoaded();
  		},500)
  		
  	},
  	loadBottom () {
			this.allLoaded = true;// if all data are loaded
  		this.$refs.loadmore.onBottomLoaded();
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
