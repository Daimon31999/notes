import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, handleTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} handleTodoClick={handleTodoClick} {...todo} />
    ))}
  </ul>
)

export default TodoList
