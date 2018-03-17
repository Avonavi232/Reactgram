import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import todos from './todos';
import App from './App.jsx';

import { createStore } from "redux";
import { Provider } from 'react-redux';

import reducer from './reducers';

import './App.css';


const store = createStore(reducer, todos);

ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('root')
);