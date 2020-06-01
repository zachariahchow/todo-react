import React from 'react';

const ListItem = (props) => {

    return (
        <div className="list-item__wrapper">
            <li className="list-item">{props.itemIndex}) {props.itemName}</li>
            <button type="button" data-item-id={props.itemIndex} onClick={props.deleteClickHandler}>Delete {props.itemName} from List</button>
        </div>
    );

}


export default ListItem;