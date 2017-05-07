import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './player.css';
@CSSModules(styles,{allowMultiple:true,errorWhenNotFound:false})
export default class Player extends Component{
	constructor(props){
		super(props)
		this.state = {
			curTime:"0:00",
			allTime:"0:00"
		}
		this.initAudio = this.initAudio.bind(this);
		this.playHandle = this.playHandle.bind(this);
		this.pauseHandle = this.pauseHandle.bind(this);
		this.nextHandle = this.nextHandle.bind(this);
		this.prevHandle = this.prevHandle.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.status=="pause"){
			this.audio.pause();
		}else{
			this.audio.play();
		}
	}
	componentDidMount(){
		this.audio = ReactDOM.findDOMNode(this.refs.audio);
		var clickHandle = function(){
			audio.play();
			document.querySelector(".icon-bofang").removeEventListener("click",clickHandle)
		}
		document.querySelector(".icon-bofang").addEventListener("click",clickHandle)
		//阻止页面滚动
        document.querySelector(".player__player22_eo").addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
		this.props.getMusicList();
		this.props.status = "pause";
	}
	componentWillUnmount(){
		clearInterval(this.interval);
		this.props.init();
	}
	// 开始、暂停播放
	playHandle(){
		this.props.play();
	}
	pauseHandle(){
		this.props.pause();
	}
	// 前一首,下一首
	nextHandle(){
		this.props.next();
		this.props.pause();
	}
	prevHandle(){
		this.props.prev();
		this.props.pause();
	}

	// 初始化
	initAudio(){
		const audio = this.audio;
		this.setState({
			curTime:"0:00",
			allTime:Math.floor(audio.duration/60)+":"+Math.round(audio.duration%60).toString().padStart(2,0),
			percent:audio.currentTime/audio.duration
		})
		// 清除之前的循环
		if(this.interval){
			clearInterval(this.interval)
		}
		this.interval = setInterval(function(){
			this.setState({
				curTime:Math.floor(audio.currentTime/60) + ":" + Math.round(audio.currentTime%60).toString().padStart(2,0),
				percent:audio.currentTime/audio.duration
			})
			if(this.state.percent===1){
				clearInterval(this.interval);
				this.setState({
					allTime:Math.floor(audio.duration/60)+":"+Math.round(audio.duration%60),
					curTime:"0:00",
					percent:0
				})
			}
		}.bind(this),1000)
	}
	render(){
		const curMusic = this.props.musicList[this.props.curIndex];
		return (
			<div styleName="player">
				<Disc loading={this.state.loading} status={this.props.status} imgSrc={curMusic.discImg}></Disc>
				<Progress curTime={this.state.curTime} allTime={this.state.allTime} percent={this.state.percent}></Progress>
				<Control 
					playHandle={this.playHandle} 
					pauseHandle={this.pauseHandle}
					nextHandle = {this.nextHandle}
					prevHandle = {this.prevHandle} 
					status={this.props.status}
				/>
				<audio ref="audio" src={curMusic.src} id="audio" onCanPlay={this.initAudio}>
				</audio>
			</div>
		)
	}
}
// 旋转唱片+歌曲封面
@CSSModules(styles,{allowMultiple:true,errorWhenNotFound:false})
class Disc extends Component{
	constructor(props){
		super(props)
		this.state={
			deg:0
		}
		this.animationFrame = this.animationFrame.bind(this);
	}
	componentWillReceiveProps(nextProps){
		const disc = this;
		if(nextProps.status=="play"&&nextProps.status!==this.props.status){
			this.loop = setInterval(function(){
				disc.setState({
					deg:(disc.state.deg+1.5)%360
				})
			},17)
		}else if(nextProps.status=="pause"&&nextProps.status!==this.props.status){
			clearInterval(this.loop)
		}
	}
	componentWillUnmount(){
		clearInterval(this.loop)
	}
	animationFrame(){
		this.setState({
			deg:this.state.deg+1
		})
	}
	render(){
		const style = {
			transform:`rotate(${this.state.deg}deg)`
		}
		return(
			<div>
				<div styleName="disc" style={style}>
					<div styleName="cover"><img src={this.props.imgSrc}/></div>
				</div>
			</div>
		)
	}
}

// 播放器进度条
@CSSModules(styles,{allowMultiple:true,errorWhenNotFound:false})
class Progress extends Component{
	constructor(props){
		super(props);
		this.state = {
			curTime:this.props.curTime,
			allTime:this.props.allTime
		}
	}
	render(){
		const barStyle = {
			transform:`translate3d(${this.props.percent*100}%,0,0)`
		}
		return(
			<div styleName="progress">
				<i styleName="curTime">{this.props.curTime}</i>
				<div styleName="proBar">
					<div styleName="proInner" style={barStyle}><i styleName="proPoint"></i></div>
				</div>
				<i styleName="allTime">{this.props.allTime}</i>
			</div>
		)
	}
}
//播放器控制
@CSSModules(styles,{allowMultiple:true,errorWhenNotFound:false})
class Control extends Component{
	render(){
		return(
			<div styleName="controls">
				<i className="iconfont icon-prev" onClick={this.props.prevHandle}></i>
				{
					this.props.status=="pause"?<i className="iconfont icon-bofang" onClick={this.props.playHandle}></i>:<i className="iconfont icon-zanting" onClick={this.props.pauseHandle}></i>
				}
				<i className="iconfont icon-next" onClick={this.props.nextHandle}></i>
			</div>
		)
	}
}