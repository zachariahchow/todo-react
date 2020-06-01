import React from 'react';
import ListItem from './ListItem';

const AllListItems = ({ listItems, deleteClickHandler }) => {

    const allListItems = listItems.map((item) => {
        return (
            <ListItem itemName={item.name} itemIndex={item.index} deleteClickHandler={deleteClickHandler}/>
        );
    })

    return (
        <div className="list-items__container">
            {allListItems}
        </div>
    );
}


export default AllListItems;