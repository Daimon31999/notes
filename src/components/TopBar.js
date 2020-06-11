import React from 'react'
import m from '../css/topbar.module.css'
import ColorButton from '../containers/ColorButton'

const TopBar = () => {
    return (
        <div className={m.wrapper}>
            <a href='#' id={m.login}>Login</a>
            <a href='#' id={m.title}>MyNotes</a>
            <div className={m.buttons}>
                <ColorButton backgroundColor='#272727' color='white' input_button_bg_color='#00dbff'/>
                <ColorButton backgroundColor='gold' color='black' input_button_bg_color='black'/>
                <ColorButton backgroundColor='#fff' color='#00dbff' input_button_bg_color='#00dbff'/>
            </div>
        </div>
    )
}

export default TopBar