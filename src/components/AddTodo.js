import React from 'react'
import m from '../css/header.module.css'

const AddTodo = ({ todos, setTodos }) => {
  let input
  return (
    <form
      className={m.header}
      onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        setTodos([...todos, { id: todos.length, text: input.value }])
        input.value = ''
      }}>
      <input
        className={m.input}
        ref={(node) => (input = node)}
        placeholder='Type Note, Press Enter'
      />

      <button className={m.button} type='submit'></button>
    </form>
  )
}

export default AddTodo
