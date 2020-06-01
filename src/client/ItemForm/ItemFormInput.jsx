import React from 'react';

const ItemFormInput = (props) => {

    let itemInputElement;

    let defaultStyleClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    switch (props.inputtype) {
        case ('input'):
            itemInputElement = <input className={`item-input ${defaultStyleClasses}`} {...props}/>;
            break
        case ('textarea'):
            itemInputElement = <textarea className={`item-text-area ${defaultStyleClasses}`} {...props} />;
            break;
        default:
            itemInputElement = <input className={`item-input ${defaultStyleClasses}`} {...props}/>;
    }

    return (
        <div className="item-form-input__container flex flex-col justify-center items-center">
            <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>
            {itemInputElement}
        </div>
    );
}


export default ItemFormInput;