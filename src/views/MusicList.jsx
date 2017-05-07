import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import BoxTitle from '../components/index/BoxTitle';
import SongSheet from '../components/index/SongSheet';
import {actions} from './MusicListRedux';
class MusicList extends Component{
	render(){
		return(
			<div>
		        <BoxTitle title="歌单" />
		        <SongSheet 
		          {...this.props.songSheet}
		          {...this.props.songSheetActions}
		          push={this.props.push}
		        />
	        </div>
		)
	}
}
export default connect(state=>{
  return{
    songSheet:state.musicList.songSheet,
  }
},dispatch=>{
  return{
  	songSheetActions:bindActionCreators(actions.songSheet,dispatch),
  	push:bindActionCreators(push,dispatch)
  }
})(MusicList);