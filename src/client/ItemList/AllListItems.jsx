import React from 'react';
import ListItem from './ListItem';

const AllListItems = ({ listItems, deleteClickHandler, changeHandler }) => {

    const allListItems = listItems.map((item) => {
        return (
            <ListItem itemName={item.name} itemIndex={item.index} deleteClickHandler={deleteClickHandler} changeHandler={changeHandler}/>
        );
    })

    return (
        <div className="list-items__container flex flex-col justify-center items-center w-full">
            {allListItems}
        </div>
    );
}


export default AllListItems;