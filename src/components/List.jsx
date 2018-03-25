import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

function List(props) {
	return (
			<section className="todo-list">
				{props.todos.length ?
						props.todos.map(todo =>
								<Todo
										key={todo.id}
										id={todo.id}
										title={todo.title}
										completed={todo.completed}
										onDelete={props.onDelete}
										onToggle={props.onToggle}
										onEdit={props.onEdit}
								/>) :
						<div>Loading</div>
				}
			</section>
	);
}


export default List;