import ColorButton from '../../containers/ColorButton'
import React from 'react'

const colorReducer = (state = {backgroundColor:'gold',color:'black',input_button_bg_color:'black'}, action) => {
    switch (action.type) {
        case 'SWITCH_COLOR':
            return (
                {
                    ...state,
                    color: action.color,
                    backgroundColor: action.backgroundColor,
                    foreColor: action.foreColor,
                    input_button_bg_color: action.input_button_bg_color,
                    input_button_fore_color: action.input_button_fore_color
                }
            )
        default:
            return state
    }
}

export default colorReducer
