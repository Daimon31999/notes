import React from 'react'
import m from '../css/button.module.css'

const Color = ({onClick, bgColor, textColor}) => {
    return (
        <button
            className={m.button}
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
        >
            T
        </button>
    )
}

export default Color