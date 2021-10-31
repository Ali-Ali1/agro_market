import React from 'react';

const Button = ({ bgcolor, color, text }) => {
    return (
        <button style={{ backgroundColor: bgcolor, color: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    bgcolor: '#358C84',
    color: 'white'
}

export default Button
