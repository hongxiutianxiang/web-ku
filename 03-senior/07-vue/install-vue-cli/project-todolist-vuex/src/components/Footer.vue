<template>
	<div class="Footer">
		<input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click="handleDelAllDone">删除所有完成的任务</button>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		name:'Footer',
		computed:{
			/*
			total(){
				return this.$store.state.todos.length
			},
			
			totalDone(){
				return this.$store.state.todos.reduce((total,item)=>{
					if(item.done){
						total++
					}
					return total
				},0)
			},
			*/
			...mapGetters([
				'total',
				'totalDone', 	
			]),
			allDone:{
				get(){
					return this.$store.getters.allDone
				},
				set(value){
					// this.selectAllTodo(value)
					this.$store.dispatch('selectAllTodo',value)
				}
			}
		},
		methods:{
			handleDelAllDone(){
				if(window.confirm('您确定要删除所有完成的任务吗？')){
					// this.delAllDoneTodo()
					this.$store.dispatch('delAllDoneTodo')
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