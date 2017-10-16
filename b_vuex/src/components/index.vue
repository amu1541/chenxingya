<template>
  <div class="hello">
    这是渲染的页面
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'newdata',
      'actdatas'
    ])
  },
  created(){
  	console.log(this.newdata)
    if(!this.newdata){
      this.$router.push({path:'/loading'})
    }
  }
}
</script>


<style scoped>

</style>
