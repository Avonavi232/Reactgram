import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './libs/icomoon/style.css'
import './libs/bootstrap/css/bootstrap.min.css'
import './main.css'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
