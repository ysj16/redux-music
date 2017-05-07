import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {hashHistory} from 'react-router';
import styles from './Frame.css';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import Util from '../utils/common';
@CSSModules(styles,{allowMultiple:true})
class Nav extends Component{
	constructor(){
		super()
		this.navHandle = this.navHandle.bind(this);
	}
	componentDidMount(){
		const barNode = ReactDom.findDOMNode(this.refs.bar);
		const active = ReactDom.findDOMNode(this.refs.nav).querySelector("."+styles.active);
		this.props.changeNavBar(active.offsetWidth,active.offsetLeft)
		setTimeout(function(){
			barNode.style.transition = "all .2s ease";
		})
	    window.onpopstate = function(e) {
            if (e.state) {
            	store.dispatch({type: "@@redux-undo/UNDO"})
            }
        }
	}
	shouldComponentUpdate(nextProps,nextState){
		if(this.props.present.barLeft!==nextProps.present.barLeft)
			return true;
		else return false;
	}
	navHandle(e){
		e.preventDefault();
		this.active = e.target;
		this.props.changeNavBar(this.active.offsetWidth,this.active.offsetLeft)
		this.props.push(e.target.getAttribute("href"));
	}
	render(){
		return(
			<nav ref="nav" styleName="topNav">
				{this.props.navs.map((nav,index)=>{
					let classes = classnames({
						active:nav.href==hashHistory.getCurrentLocation().pathname
					})
					return <a key={nav.id} href={nav.href} onClick={this.navHandle} styleName={classes}>{nav.title}</a>
				})}
				<NavBar ref="bar" width={this.props.present.barWidth} left={this.props.present.barLeft}/>
			</nav>
		)
	}
}

@CSSModules(styles,{allowMultiple:true})
class NavBar extends Component{
	render(){
		const {width,left} = this.props;
		return(
			<div styleName="navBar" style={{
				width:width,
				transform:`translate3d(${left}px,0,0)`
			}}></div>
		)
	}
}
export default Nav;