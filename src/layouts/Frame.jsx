import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import styles from './Frame.css';
import SearchBox from './Search';
import Nav from './Nav';
import {actions as frameActions} from './FrameRedux';
@CSSModules(styles,{allowMultiple:true})
class Frame extends Component{
	render(){
		var navs = [{id:"nav1",href:"/",title:"个性推荐"},{id:"nav2",href:"/gedan",title:"歌单"},{id:"nav3",href:"/radio",title:"主播电台"},{id:"nav4",href:"/rank",title:"排行榜"}]
		return(
			<div>
				<SearchBox push={this.props.push}></SearchBox>
				<Nav navs={navs} push = {this.props.push} 
					{...this.props.frame}
					{...this.props.frameActions} 
				/>
				<div styleName="main">
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default connect((state)=>{
	return {
		frame:state.frame,
	}
},(dispatch)=>{
	return {
		push:bindActionCreators(push,dispatch),
		frameActions:bindActionCreators(frameActions,dispatch)
	}
})(Frame)