import React from 'react';
import AllListItems from './AllListItems';

const ItemList = (props) => {

    const clickHandler = () => {
        return;
    };

    return (
        <ul className="items__list">
            <AllListItems listItems={props.listItems}/>
        </ul>
    );

}


export default ItemList;