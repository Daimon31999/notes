import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => props.toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
