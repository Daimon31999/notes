import React from 'react'
import m from '../css/app.module.css'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import TopBar from './TopBar'

const App = () => (
    <div className={m.app}>
        <TopBar/>
        <div className={m.content}>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    </div>
)

export default App
