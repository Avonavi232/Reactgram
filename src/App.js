import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

import './App.css';

class App extends Component {
    render() {
        return (
           <Canvas/>
        ); 
    }
}

App.propTypes = {
    message: PropTypes.string.isRequired,
};

export default App;
