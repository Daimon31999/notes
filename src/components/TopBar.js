import React, { useContext, useState } from 'react'
import m from '../css/topbar.module.css'
import Color from './Color'
import { ThemeContext } from './App'

const TopBar = () => {
  // *********************** useContext ***********************
  const theme = useContext(ThemeContext)
  const [mode, setMode] = useState(theme.dark)

  return (
    <div
      className={m.wrapper}
      style={{
        backgroundColor: mode.color,
      }}>
      <a href='#' id={m.login}>
        Login
      </a>
      <a href='#' id={m.title}>
        MyNotes
      </a>
      <div className={m.buttons}>
        <Color
          backgroundColor='#272727'
          textColor='white'
          theme={theme}
          setMode={setMode}
          dark={true}
        />
        <Color
          backgroundColor='gold'
          textColor='black'
          theme={theme}
          setMode={setMode}
        />
      </div>
    </div>
  )
}

export default TopBar
