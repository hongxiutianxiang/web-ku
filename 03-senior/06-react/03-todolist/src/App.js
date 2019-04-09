import React,{ Component } from 'react'

import './App.css'

class App extends Component{
	constructor(props){
	    super(props);
	    this.state = {
		   
	    }
	}
	handleAdd(){
		console.log('add...')
	}
	handleChange(){

	}
	render(){
		return(
			// <div style={{background:'red'}}>
			<div className="wrap">
			{
				//注释
			}
				<input onChange={this.handleChange} /> 
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					<li className="item">first</li>
					{

					}
				</ul>

			</div>
		)
	}
}

export default App
