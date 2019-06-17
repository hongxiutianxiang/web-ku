<template>
	<div class="Message">
		<p>Morning</p>
		{{msg}}
	</div>
</template>

<script>
	export default {
		name:'Message',
		props:{
			msg:String
		}
	}
</script>

<style scoped>
	p{
		color: red;
	}
	.Message{
		color: orange;
	}
</style>