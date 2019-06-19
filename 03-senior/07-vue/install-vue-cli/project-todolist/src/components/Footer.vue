<template>
	<div class="Footer">
		<input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click="handleDelAllDone">删除所有完成的任务</button>
	</div>
</template>
<script>
	export default {
		name:'Footer',
		props:{
			todos:Array,
			selectAllTodo:Function,
			delAllDoneTodo:Function
		},
		computed:{
			total(){
				return this.todos.length
			},
			
			totalDone(){
				/*
				let total = 0;
				this.todos.forEach(item=>{
					if(item.done){
						total++
					}
				})
				return total
				*/
				return this.todos.reduce((total,item)=>{
					if(item.done){
						total++
					}
					return total
				},0)
			},
			allDone:{
				get(){
					return (this.total == this.totalDone && this.total != 0)
				},
				set(value){
					this.selectAllTodo(value)
				}
			}
		},
		methods:{
			handleDelAllDone(){
				if(window.confirm('您确定要删除所有完成的任务吗？')){
					this.delAllDoneTodo()
				}
			}
		}
	}
</script>
<style scoped>
	.Footer{
		width: 100%;
		line-height: 30px;
		margin-top: 30px;
	}
	.Footer input{
		float: left;
		margin: 8px 10px 0 0;
	}
	.Footer button{
		float: right;
		margin-top: 4px;
	}
</style>