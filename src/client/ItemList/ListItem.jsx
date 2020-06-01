import React from 'react';

const ListItem = (props) => {
    return (
        <div className="list-item__wrapper">
            <li className="list-item">{props.itemIndex}) {props.itemName}</li>
        </div>
    );
}


export default ListItem;