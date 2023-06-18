import React from 'react';

function Button( { buttonType = "button", clickHandler, buttonText } ) {
    return (
        <button
            type={buttonType}
            onClick={clickHandler}
        >
            {buttonText}
        </button>
    );
}

export default Button;