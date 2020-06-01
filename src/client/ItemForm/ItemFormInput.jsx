import React from 'react';

const ItemFormInput = (props) => {

    let itemInputElement;

    switch (props.inputtype) {
        case ('input'):
            itemInputElement = <input className="item-input" {...props}/>;
            break
        case ('textarea'):
            itemInputElement = <textarea className="item-text-area" {...props} />;
            break;
        default:
            itemInputElement = <input className="item-input" {...props}/>;
    }

    return (
        <div className="item-form-input__container">
            <label htmlFor="">{props.label}</label>
            {itemInputElement}
        </div>
    );
}


export default ItemFormInput;