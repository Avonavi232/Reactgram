import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

/*Только эта функция может менять состояние
* функция-преобразователь: reducer*/
function reducer(state = { count: 0 }, action){
	switch (action.type) {
		case 'INCREMENT': return { count: state.count + action.amount };
		case 'DECREMENT': return { count: state.count - action.amount };
		case 'RESET': return { count: 0 };
		default: return state;
	}
}

/*Action Creators*/
function increment(amount) {
	return {type: 'INCREMENT', amount: amount};
}

function decrement(amount) {
	return {type: 'DECREMENT', amount: amount};
}

function reset(amount) {
	return {type: 'RESET'};
}
/****************************************/

/*Начальное значение состояния*/
const initialState = {count: 0};

/*СТОР*/
const store = createStore(reducer, initialState);

class Counter extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		store.subscribe( () => {
			this.forceUpdate();
		} );
	}

	increment = () => {
		let amount = parseInt(this.refs.amount.value || 1);
		store.dispatch(increment(amount));
	};

	decrement = () => {
		let amount = parseInt(this.refs.amount.value || 1);
		store.dispatch(decrement(amount));
	};

	reset = () => {
		store.dispatch(reset());
	};

	render(){
		const count = store.getState().count;
		return(
				<div className="counter">
					<span className="count">{count}</span>

					<div className="buttons">
						<button className="decrement" onClick={this.decrement}>-</button>
						<button className="reset" onClick={this.reset}>R</button>
						<button className="increment" onClick={this.increment}>+</button>
					</div>
					<input type="number" ref="amount" defaultValue={1}/>
				</div>
		)
	}

}

ReactDOM.render(
		<Counter/>,
		document.getElementById('root')
);