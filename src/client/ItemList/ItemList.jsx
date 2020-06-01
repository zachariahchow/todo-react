import React from 'react';
import AllListItems from './AllListItems';
import InputError from './InputError';

const ItemList = ({ listItems, deleteClickHandler, errorMessage }) => {

    return (
        <ul className="items__list">
            <AllListItems listItems={listItems} deleteClickHandler={deleteClickHandler}/>
            {errorMessage ? <InputError errorMessage={errorMessage}/> : null}
        </ul>
    );

}


export default ItemList;