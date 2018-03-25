import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from './store/index';
import App from './App.jsx';
import './App.css';
import {getTodos, addTodo} from "./actions";


store.dispatch(getTodos());


ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('root')
);