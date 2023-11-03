import React from 'react';
import './button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

interface Props {
    _onClick : () => void,
    _routing: string,
    _buttonStyle: string,
    _buttonSize: string,
    children?: React.ReactNode
}

const Button = ({
    _onClick,
    _routing,
    _buttonStyle,
    _buttonSize,
    children
}:Props) => {
    const checkButtonStyle = STYLES.includes(_buttonStyle) ? _buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(_buttonSize) ? _buttonSize : SIZES[0];

    return(
        <Link to={_routing} className= {_buttonStyle}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {_onClick}>
                {children}
            </button>
        </Link>
    )
}

export default Button;