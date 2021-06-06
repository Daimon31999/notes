import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import m from '../css/app.module.css'
import AddTodo from './AddTodo'
import Counter from './Counter'
import TodoList from './TodoList'
import TopBar from './TopBar'

const themes = {
  light: {
    color: '#FFF8D1',
  },
  dark: {
    color: '#20232A',
  },
}

export const ThemeContext = React.createContext()

const initialState = { count: -1 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const App = () => {
  // *********************** useState ***********************
  const [todos, setTodos] = useState([])
  // *********************** useReducer ***********************
  const [state, dispatch] = useReducer(reducer, initialState)

  // *********************** useCallback ***********************
  const handleTodoClick = useCallback(
    (todo) => {
      dispatch({ type: 'decrement' })
      todo.current.style.textDecoration =
        todo.current.style.textDecoration === 'line-through'
          ? 'none'
          : 'line-through'
    },
    [dispatch]
  )

  // *********************** useEffect ***********************
  useEffect(() => {
    console.log('todos: ', todos)
  }, [todos, setTodos])

  const computeExpensiveValue = (start, stop) => {
    let result = 0
    console.log('rerender computeExpensiveValue')
    for (let i = start; i < stop; i++) {
      result += i
    }
    return result
  }

  // *********************** useMemo ***********************
  let start = 0
  let stop = 99999999
  const memoizedValue = useMemo(
    () => computeExpensiveValue(start, stop),
    [start, stop]
  )

  return (
    <ThemeContext.Provider value={themes}>
      <div className={m.app}>
        <TopBar />
        <div className={m.content}>
          <AddTodo todos={todos} setTodos={setTodos} />
        </div>
        <Counter todos={todos} count={state.count} dispatch={dispatch} />
        <div>
          <h3>Use Memo value - {memoizedValue}</h3>
        </div>
        <TodoList todos={todos} handleTodoClick={handleTodoClick} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
