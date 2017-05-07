import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import routes from './routes';
import styles from './utils/common.scss'
var store = configureStore();
ReactDOM.render(<Provider store = {store}>
					{routes(hashHistory)}
				</Provider>,document.getElementById('root'));
