import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import Top from '../components/Top.jsx';
import Player from '../components/Player.jsx';
import {actions} from './MusicPlayerRedux';
class MusicPlayer extends Component{
	render(){
		return(
			<div>
				<Top title={this.props.player.musicList[this.props.player.curIndex].title} 
					 author={this.props.player.musicList[this.props.player.curIndex].author} 
					 push={this.props.push}
				/>
				<Player 
					{...this.props.player} 
					{...this.props.playerAction}
				/>
			</div>
		)
	}
}
export default connect(state=>{
	return{
		player:state.player
	}
},dispatch=>{
	return{
		playerAction:bindActionCreators(actions,dispatch),
		push:bindActionCreators(push,dispatch)
	}
})(MusicPlayer)