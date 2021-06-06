import React from 'react'
import m from '../css/button.module.css'

const Color = ({ bgColor, textColor, setMode, theme, dark }) => {
  return (
    <button
      className={m.button}
      onClick={() => setMode(dark ? theme.dark : theme.light)}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}>
      T
    </button>
  )
}

export default Color
