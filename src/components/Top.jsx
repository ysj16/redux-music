import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Top.css';
const Top = (props)=>(
						<div className={styles.top}>
							<i className="iconfont icon-back" onClick={()=>props.push("/")}></i>
							<h3>
								{props.title}&nbsp;{props.author}
							</h3>
						</div>
					)

export default Top;