import React from 'react';

const InputError = ({ errorMessage }) => {

    return (
        <div className="input-error-msg__container w-10/12 p-4 flex justify-center">
            <p className="input-error-msg__content w-full text-center text-sm text-red-600">{errorMessage}</p>
        </div>
    );

}


export default InputError;