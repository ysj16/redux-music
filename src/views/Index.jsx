import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import {Carousel} from 'antd-mobile';
import BoxTitle from '../components/index/BoxTitle';
import SongSheet from '../components/index/SongSheet';
import HotSinger from '../components/index/HotSinger';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import {actions as indexActions} from './IndexRedux.js';

@CSSModules(styles,{allowMultiple:true})
class Index extends React.Component {
  componentDidMount(){
    // simulate img loading
    this.props.carouselActions.getSlider();
  }
  render() {
    return (
      <div>
        <Carousel
          styleName="my-carousel" autoplay={true} infinite selectedIndex={0}
        >
          {this.props.carousel.data.map((d,n) => (
            <a href="http://www.baidu.com" key={n} >
              <img
                src={d.src}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
        <BoxTitle title="推荐歌单" />
        <SongSheet 
          push={this.props.push}
          {...this.props.songSheet}
          {...this.props.songSheetActions}
        />
        <BoxTitle title="热门歌手" />
        <HotSinger 
          {...this.props.hotSinger}
          {...this.props.hotSingerActions}
        />
      </div>

    );
  }
}
export default connect(state=>{
  return{
    carousel:state.index.carousel,
    songSheet:state.index.songSheet,
    hotSinger:state.index.hotSinger
  }
},dispatch=>{
  return{
    carouselActions:bindActionCreators(indexActions.carousel,dispatch),
    songSheetActions:bindActionCreators(indexActions.songSheet,dispatch),
    hotSingerActions:bindActionCreators(indexActions.hotSinger,dispatch),
    push:bindActionCreators(push,dispatch)
  }
})(Index);