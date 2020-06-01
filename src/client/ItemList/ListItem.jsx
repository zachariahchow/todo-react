import React from 'react';

const ListItem = ({ itemIndex, itemName, deleteClickHandler }) => {

    return (
        <div className="list-item__wrapper">
            <li className="list-item">{itemIndex}) {itemName}</li>
            <button type="button" data-item-id={itemIndex} onClick={deleteClickHandler}>Delete {itemName} from List</button>
        </div>
    );

}


export default ListItem;