<template>
	<div class="List">
		<Item 
			
			v-for="(todo,index) in todos"
			:todo="todo"
			:delTodo="delTodo"
			:index="index"
		/>
	</div>
</template>
<script>
	import Item from '../components/Item.vue'

	export default {
		name:'List',
		props:{
			todos:Array,
			delTodo:Function
		},
		components:{
			Item
		}
	}

</script>
<style scoped>
	
</style>