import { combineReducers } from 'redux';

import todos, * as fromTodos from './todo';
import {default as filterReducer} from './filter';

const reducer = combineReducers({
	todos,
	filter: filterReducer
});

export default reducer

export function getFilteredTodos(state) {
	return fromTodos.getFilteredTodos(state.todos, state.filter)
}