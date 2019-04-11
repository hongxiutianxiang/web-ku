import React,{ Component } from 'react'

class Item extends Component{
	render(){
		const {handleDel,content} = this.props;
		return (
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
}

export default Item