import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';
import FilterContainer from './containers/FilterContainer';

import {addTodo, deleteTodo, editTodo, toggleTodo} from "./actions/index";


function App() {
	return (
			<main>
				<HeaderContainer/>

				<FilterContainer/>

				<ListContainer/>

				<FormContainer/>
			</main>
	);
}

export default App;
