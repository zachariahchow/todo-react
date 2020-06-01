import React, { useState } from 'react';

import ItemForm from './ItemForm/ItemForm';
import ItemList from './ItemList/ItemList';

const AppMain = () => {

    const [listItems, setListItems] = useState([{
        index: 1,
        name: 'First Item'
    }]);

    const [inputValue, setInputValue] = useState();

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

    const deleteItemClickHandler = (ev) => {
        listItems.forEach(item => {
            if (ev.target.dataset.itemId == item.index)
                listItems.splice(listItems.indexOf(item), 1);
        });

        setListItems([...listItems]);
    }

    return (
        <main>
                <ItemForm changeHandler={inputChangeHandler} submitClickHandler={submitBtnClickHandler} />
                <ItemList listItems={listItems} deleteClickHandler={deleteItemClickHandler}/>
            </main>
    );
}

export default AppMain