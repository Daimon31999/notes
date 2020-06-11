import { combineReducers } from 'redux'
import todosReducer from './todos-reducer'
import visibilityFilterReducer from './visibilityFilter-reducer'
import colorReducer from './color-reducer'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  color: colorReducer
})
