import React from 'react';
import AllListItems from './AllListItems';
import InputError from './InputError';

const ItemList = ({ listItems, deleteClickHandler, errorMessage, changeHandler }) => {

    return (
        <div className="items__list-container flex flex-col w-10/12 justify-center items-center">
        {errorMessage ? <InputError errorMessage={errorMessage}/> : null}
        <ul className="items__list flex flex-col w-full justify-around items-center">
            <AllListItems listItems={listItems} deleteClickHandler={deleteClickHandler} changeHandler={changeHandler}/>
        </ul>
        </div>
    );

}


export default ItemList;