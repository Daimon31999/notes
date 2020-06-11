import React from 'react'
import m from '../css/footer.module.css'

const Link = ({active, children, onClick}) => (
    <button
        className={m.button}
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

export default Link
