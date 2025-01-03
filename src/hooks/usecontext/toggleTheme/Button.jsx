import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Button = ({ children, onClick }) => {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
