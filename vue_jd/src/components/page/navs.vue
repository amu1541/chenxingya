<template>
	<div>
		<dl v-for = 'i  in  list'>
			<dt><img :src="i.img" alt="" /></dt>
			<dd>{{i.zi}}</dd>
		</dl>
	</div>
	
</template>

<script>
	export default {
		data () {
			return {
				list: [
				 {
				 	img:'../../../static/img/nav/1.png',
				 	zi:'京东超市'
				 },{
				 	img:'../../../static/img/nav/2.png',
				 	zi:'全球购'
				 },{
				 	img:'../../../static/img/nav/3.png',
				 	zi:'服装城'
				 },{
				 	img:'../../../static/img/nav/4.png',
				 	zi:'京东生鲜'
				 },{
				 	img:'../../../static/img/nav/5.png',
				 	zi:'京东到家'
				 },{
				 	img:'../../../static/img/nav/6.png',
				 	zi:'充值缴费'
				 },{
				 	img:'../../../static/img/nav/7.png',
				 	zi:'领京豆'
				 },{
				 	img:'../../../static/img/nav/8.png',
				 	zi:'领券'
				 },{
				 	img:'../../../static/img/nav/9.png',
				 	zi:'会赚钱'
				 },{
				 	img:'../../../static/img/nav/10.png',
				 	zi:'物流查询'
				 }
				]
			}
		}
	}
</script>

<style scoped>
	div{
		width: 100%;
		height:auto;
		display: flex;
		flex-wrap:wrap;
		background:#eee;
	}
	div dl{
		width: 20%;
		text-align: center;
		margin:.15rem 0;	
		font-size:.25rem;
	}
	dl dt img{
		width: .6rem;
	}
</style>