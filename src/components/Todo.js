import React, { useRef } from 'react'

const Todo = ({ handleTodoClick, text }) => {
  // *********************** useRef ***********************
  const todoRef = useRef(null)

  return (
    <li className='todo' ref={todoRef} onClick={() => handleTodoClick(todoRef)}>
      {text}
    </li>
  )
}

export default Todo
