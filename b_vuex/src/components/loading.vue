<template>
  <div class="loading">
   <p v-if="state=='start'">数据开始请求 </p>
   <p v-else-if="state=='loading'">数据正在加载 </p>
   <p v-else-if="state=='end'">数据请求完毕 </p>
   <p v-else>数据请求失败，再次发起数据请求 </p>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: 'loading',
  data () {
    return {
    }
  },
  created(){
    this.defaultData(this.redirectfn)
    // console.log(22222)
  },
  computed:{
    ...mapState({
      state:function(state){
      	// console.log(state)
        if(state.state=='end'){
          this.$router.push("/")
        }else if(!state.state){
          this.defaultData(this.redirectfn)
        }
        // this.$router.go(-1)
        return state.state
      }
    })
  },
  methods:{
    redirectfn(){
      this.$router.push({path:'/'})
    },
    ...mapActions([
      'defaultData',
    ])
  }
}
</script>


<style>

</style>