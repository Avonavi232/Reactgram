import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import List from '../components/List';
import {deleteTodo, editTodo, toggleTodo} from "../actions";


/*
* todos={this.context.store.getState()}
	onDelete={ id => this.store.dispatch(deleteTodo(id))  }
	onToggle={ id => this.store.dispatch(toggleTodo(id))}
	onEdit={ (id, title) => this.store.dispatch(editTodo(id, title))}
* */

function mapStateToProps(state) {
	return {
		todos: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onDelete: id => dispatch(deleteTodo(id)),
		onToggle: id => dispatch(toggleTodo(id)),
		onEdit: (id, title) => dispatch(editTodo(id, title))
	};
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;