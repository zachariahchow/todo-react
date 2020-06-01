import React, { useState } from 'react';

import ItemFormInput from './ItemFormInput';
import ItemList from '../ItemList/ItemList';

const ItemForm = ({ changeHandler, submitClickHandler }) => {


    return (
        <div className="item-form__container">
            <form action="" className="item-form">
                <ItemFormInput inputtype = "input" name="name" placeholder="Item Name" label="Item Name" onChange={changeHandler}/>
                <button type="button" onClick={submitClickHandler}>Add to List</button>
            </form>
        </div>
    );
}


export default ItemForm;