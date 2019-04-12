
import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM} from './actionTypes.js'

const defaultState = {
	list:["吃饭","打球"],
	val:'你好'
} 
export default (state=defaultState,action)=>{
	if(action.type == CHANGE_ITEM){
		//1.copy上一次的state
		const newState = JSON.parse(JSON.stringify(state))
		//2.修改新的status再返回
		newState.val = action.payload
		return newState
	}
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(state.val)
		newState.val = ''
		return newState
	}
	if(action.type == DEL_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.payload,1)
		return newState
	}
	
	return state
}

