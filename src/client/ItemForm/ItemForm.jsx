import React, { useState } from 'react';

import ItemFormInput from './ItemFormInput';
import ItemList from '../ItemList/ItemList';

const ItemForm = ({ changeHandler, submitClickHandler }) => {


    return (
        <div className="item-form__container flex flex-col w-full justify-around items-center">
                <ItemFormInput inputtype = "input" name="name" placeholder="Item Name" label="Enter an item!" onChange={changeHandler}/>
                <button type="button" onClick={submitClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Add to List</button>

        </div>
    );
}


export default ItemForm;