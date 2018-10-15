import React from 'react';

const Button = ( {name, onClick} ) => {
    return (
    <button
    className="f10 link br2 ph3 pv2 mb2 dib bg-transparent menu-button"
    onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;