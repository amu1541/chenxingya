<template>
	<div class="ms">
		<div class="m1">
			<img src="../../../static/img/icon/jd_ms.png" alt="" />
			<h4>8点场</h4>
			<time>
				<span>00</span> :
				<span>59</span> :
				<span>52</span>
			</time>
		</div>
		<div class="m2">
			京东尖货轮番秒 
			<img src="../../../static/img/icon/rt.png" alt="" />
		</div>
	</div>
</template>

<script>
</script>

<style>
	.ms{
		width: 100%;
		height: .6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size:.22rem;
	}
	.m1{
		display: flex;
		align-items: center;
		font-size:.26rem;
	}
	.m1 img{
		width: 1.8rem;
	}
	.m1 h4{
		margin-left:.1rem;
	}
	.m1 time{
		margin-left:.1rem;
	}
	.m2{
		color:red;
	}
	.m2 img{
		margin-right:.15rem
	}
</style>