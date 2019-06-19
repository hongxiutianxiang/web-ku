<!-- 1.页面 -->
<template>
	<div class="App" id="app">
		<router-view></router-view>
		<!-- 2.3使用组件 -->
		<TabBar />
	</div>
</template>
<!-- 2.逻辑 -->
<script>
	// 2.1引入组件
	import TabBar from './components/TabBar/TabBar'
	export default {
		name:'App',
		//2.2注册组件
		components:{
			TabBar,
		}
		
	}
</script>
<!-- 3.样式 -->
<style lang="less"> 
	#app{
		.rem(padding-bottom,60)
	}
</style>