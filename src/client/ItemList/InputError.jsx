import React from 'react';

const InputError = ({ errorMessage }) => {

    return (
        <div className="input-error-msg__container">
            <p className="input-error-msg__content">{errorMessage}</p>
        </div>
    );

}


export default InputError;