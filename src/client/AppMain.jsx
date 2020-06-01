import React, { useState } from 'react';

import ItemForm from './ItemForm/ItemForm';
import ItemList from './ItemList/ItemList';

const AppMain = () => {

    const [listItems, setListItems] = useState([{
        index: 1,
        name: 'First Item'
    }]);

    const [inputValue, setInputValue] = useState()

    const inputChangeHandler = (ev) => {
        setInputValue(ev.target.value);
    }

    const submitBtnClickHandler = () => {
        const newItem = {
            index: listItems.length + 1,
            name: inputValue
        }
        listItems.push(newItem);
        setListItems([...listItems]);
    }

    return (
        <main>
                <ItemForm changeHandler={inputChangeHandler} clickHandler={submitBtnClickHandler}/>
                <ItemList listItems={listItems}/>
            </main>
    );
}

export default AppMain