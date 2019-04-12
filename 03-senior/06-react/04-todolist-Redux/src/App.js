import React,{ Component } from 'react'
import { Input,Button,Row, Col, List} from 'antd';
import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM} from './store/actionTypes.js'

import store from './store/index.js'

import './App.css'

class App extends Component{
	constructor(props){
	    super(props);
	    this.state = store.getState() 
	    store.subscribe(()=>{
	    	this.setState(()=>store.getState())
	    });
	    this.handleChange = this.handleChange.bind(this)
	    this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		/*
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}))
		*/
		const action = {
			type:ADD_ITEM
		}
		store.dispatch(action)
	}
	handleChange(ev){
		const val = ev.target.value
		/*
		this.setState(()=>({
			val:val
		}))
		*/
		const action = {
			type:CHANGE_ITEM,
			payload:val
		}
		store.dispatch(action)
	}
	handleDel(index){
		/*
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}))
		*/
		const action = {
			type:DEL_ITEM,
			payload:index
		}
		store.dispatch(action)
	}
	render(){
		return(
			<div className="wrap">
			<Row>
				 <Col span={4}>
					<Input onChange={this.handleChange} value={this.state.val} /> 
				 </Col>
				 <Col span={4}>
					<Button type="primary" onClick={this.handleAdd}>新增</Button>
				</Col>
			</Row>
			 <Col span={4}>
			    <List
			    	style={{marginTop:10}}
			        bordered
			        dataSource={this.state.list}
			        renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
			    />
			</Col>
			</div>
		)
	}
}

export default App
