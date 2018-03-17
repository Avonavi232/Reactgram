import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import {getCanvasPosition} from './utils/formulas';

import './App.css';

class App extends Component {
	componentDidMount() {
		const self = this;
		setInterval(() => {
			self.props.moveObjects(self.canvasMousePosition)
		}, 10)
	}

	trackMouse(event) {
		this.canvasMousePosition = getCanvasPosition(event);
	}

	render() {
		return (
				<Canvas
						angle={this.props.angle}
						trackMouse={event => (this.trackMouse(event))}
				/>
		);
	}
}

App.propTypes = {
	message: PropTypes.string.isRequired,
	moveObjects: PropTypes.func.isRequired,
};

export default App;
