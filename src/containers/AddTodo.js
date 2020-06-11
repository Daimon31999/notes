import React from 'react'
import {connect} from 'react-redux'
import {addTodoAC} from '../redux/actionCreators'
import m from '../css/header.module.css'


const AddTodo = (props) => {
    let input
    return (
            <form className={m.header} onSubmit=
                      {e => {
                          e.preventDefault()
                          if (!input.value.trim()) {
                              return
                          }
                          props.dispatch(addTodoAC(input.value))
                          input.value = ''
                      }
                      }>
                <input className={m.input} ref={node => input = node} placeholder='Type Note, Press Enter'/>
                <button className={m.button} type="submit">
                </button>
            </form>
    )
}

export default connect()(AddTodo)
