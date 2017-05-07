import React,{Component} from 'react';
import styles from './BoxTitle.css';
const BoxTitle = (props) => (
	<div className={styles.boxTitle}>
		{props.title}
		<i className="iconfont icon-forward"></i>
	</div>
)
export default BoxTitle;