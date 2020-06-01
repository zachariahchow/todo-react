import React from 'react';

import ItemFormInput from './ItemFormInput';

const ItemForm = (props) => {

    return (
        <div className="item-form__container">
            <form action="" className="item-form">
                <ItemFormInput inputtype = "input" name="name" placeholder="Item Name" label="Item Name"/>
                <button type="button">Add to List</button>
            </form>
        </div>
    );
}


export default ItemForm;