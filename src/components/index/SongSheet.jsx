import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './SongSheet.css';
@CSSModules(styles,{allowMultiple:true})
class SongSheet extends Component{
	componentDidMount(){
		this.props.getSongSheet();
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
						return (<li key={n} onClick={()=>this.props.push("/player")}>
									<img src={item.img}/>
									<h3>{item.title}</h3>
								</li>)
					})}
				</ul>
			)
		}
	}
}
export default SongSheet;