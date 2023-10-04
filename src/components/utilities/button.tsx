import React from 'react';
import './button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

interface Props {
    _onClick : () => void,
    _buttonStyle: string,
    _buttonSize: string,
    children?: React.ReactNode
}

const Button: React.FC<Props> = ({
    _onClick,
    _buttonStyle,
    _buttonSize,
    children
}) => {
    const checkButtonStyle = STYLES.includes(_buttonStyle) ? _buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(_buttonSize) ? _buttonSize : SIZES[0];

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {_onClick}>
                {children}
            </button>
        </Link>
    )
}

export default Button;