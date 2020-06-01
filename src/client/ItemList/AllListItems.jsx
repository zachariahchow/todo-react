import React from 'react';
import ListItem from './ListItem';

const AllListItems = (props) => {

    const allListItems = props.listItems.map((item) => {
        return (
            <ListItem itemName={item.name} itemIndex={item.index} deleteClickHandler={props.deleteClickHandler}/>
        );
    })

    return (
        <div className="list-items__container">
            {allListItems}
        </div>
    );
}


export default AllListItems;