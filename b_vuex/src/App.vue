<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
  	this.$store.axios=this.axios
  }
}
</script>

<style>
	*{
		margin:0;
		padding:0;
		list-style: none;
		text-decoration: none;
	}
	html,body,#app{
		height:100%;
		overflow: hidden;
	}
	body{
		font-size: 16px;
	}
</style>
