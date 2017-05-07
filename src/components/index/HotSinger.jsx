import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './HotSinger.css';
@CSSModules(styles,{allowMultiple:true})
class HotSinger extends Component{
	componentDidMount(){
		this.props.getHotSinger();
	}
	render(){
		if(this.props.loading)
			return(
				<ul styleName="sheet">
					<li styleName="loading">
						<i className="iconfont icon-loading"></i>
						<div>loading</div>
					</li>
				</ul>
			)
		else{
			return(
				<ul styleName="sheet">
					{this.props.data.map((item,n)=>{
						return (<li key={n}>
									<img src={item.img}/>
									<h3>{item.singer}</h3>
								</li>)
					})}
				</ul>
			)
		}
	}
}
export default HotSinger;