import {connect} from 'react-redux'
import Color from '../components/Color'
import {switchColorAC} from '../redux/actionCreators'
import header_css from '../css/header.module.css'
import footer_css from '../css/footer.module.css'


const mapStateToProps = (state, ownProps) => ({
    bgColor: ownProps.backgroundColor,
    textColor: ownProps.color,
    onClick: () => {
        // Application
        document.body.style.backgroundColor = ownProps.backgroundColor

        // Todos
        let style = document.createElement('style')
        style.innerHTML = `
          li {color: ${ownProps.color};}
        `
        document.head.appendChild(style)

        // Header Input
        let header_input = document.getElementsByClassName(header_css.input)[0]
        header_input.style.backgroundColor = ownProps.input_button_bg_color
        header_input.style.color =  ownProps.input_button_fore_color ?
            ownProps.input_button_fore_color : ownProps.backgroundColor

        // Footer Button
        let footer_buttons = document.getElementsByClassName(footer_css.button)
        Array.prototype.map.call(footer_buttons,
            (e) => {
                e.style.backgroundColor = ownProps.input_button_bg_color
                e.style.color = ownProps.input_button_fore_color ?
                    ownProps.input_button_fore_color : ownProps.backgroundColor
            })


    }
})

const mapDispatchToProps = (dispatch, ownProps) => (
    dispatch(switchColorAC({
        color: ownProps.color,
        backgroundColor: ownProps.backgroundColor,
        input_button_bg_color: ownProps.input_button_bg_color,
        input_button_fore_color: ownProps.input_button_fore_color
    }))
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Color)
