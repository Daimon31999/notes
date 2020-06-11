import React from 'react'

const Todo = ({onClick, completed, text}) => (
    <li
        className='todo'
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            opacity: completed ? '0.5' : '1',
            // color: 'black'
        }}
    >
        {text}
    </li>
)

export default Todo
