import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import {push} from 'react-router-redux';
import styles from './Frame.css';
@CSSModules(styles,{ allowMultiple:true })
class SearchBox extends Component{
	render(){
		return(
			<div styleName="searchBox">
				<i className="iconfont icon-maikefeng" styleName="icon-mic" onClick={()=>this.props.push("/player")}></i>
				<i className="iconfont icon-yinle" styleName="icon-yinyue" onClick={()=>this.props.push("/player")}/>
				<input type="text" styleName="searchInput" placeholder="搜索音乐、歌词、电台"/>
			</div>
		)
	}
}
export default SearchBox;