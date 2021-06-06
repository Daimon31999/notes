import React, { useEffect } from 'react'

const Counter = ({ count, dispatch, todos }) => {
  useEffect(() => {
    dispatch({ type: 'increment' })
  }, [todos])
  return <div>Active Todo Count: {count}</div>
}

export default Counter
