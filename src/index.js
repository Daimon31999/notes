import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './redux/reducers/combineReducers'
import './css/style.css'

const store = createStore(rootReducer)
window.store = store
render(
    // The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
