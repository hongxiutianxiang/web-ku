import React,{ Component } from 'react'
import Item from './Item.js'

import './App.css'

class App extends Component{
	constructor(props){
	    super(props);
	    this.state = {
		   list:["吃饭","睡觉","打球"],
		   val:''
	    }
	}
	handleAdd(){
		this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})
	}
	handleChange(ev){
		this.setState({
			val:ev.target.value
		})
	}
	handleDel(index){
		// console.log("del...",index)
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}

	render(){
		return(
			// <div style={{background:'red'}}>
			<div className="wrap">
			{
				//注释
			}
				<input onChange={this.handleChange.bind(this)} value={this.state.val} /> 
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							/*
							return (
								<li 
									key={index}
									onClick={this.handleDel.bind(this,index)}
								>
								{item}
								</li>
							)
							*/
							// return <Item key={index} content={item} list={this.state.list} index={index} />
							return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
						})
					}
				</ul>

			</div>
		)
	}
}

export default App
