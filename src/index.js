import React from 'react';
import ReactDOM from 'react-dom';
import App from './Reactgram/App';
import 'material-components-web/dist/material-components-web.css';
import registerServiceWorker from './registerServiceWorker';

import './Reactgram/index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
