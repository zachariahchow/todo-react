import React, { useState } from 'react';

import ItemForm from './ItemForm/ItemForm';
import ItemList from './ItemList/ItemList';

const AppMain = () => {

    //States
    const [listItems, setListItems] = useState([{
        index: 1,
        name: 'First Item'
    }]);

    const [inputValue, setInputValue] = useState();

    const [errorMessage, setErrorMessage] = useState();
    //

    const inputChangeHandler = (ev) => {
        setInputValue(ev.target.value);
    }

    const submitBtnClickHandler = () => {
        const newItem = {
            index: listItems.length + 1,
            name: inputValue
        }

        //length validation
        if (newItem.name.length > 1 && newItem.name.length < 200) {
            listItems.push(newItem);
            setListItems([...listItems]);
            setErrorMessage(null);
        } else {
            setErrorMessage('Item must be between 1 and 200 Characters!');
        }

    }

    const deleteItemClickHandler = (ev) => {
        listItems.forEach(item => {
            if (ev.target.dataset.itemId == item.index)
                listItems.splice(listItems.indexOf(item), 1);
        });

        setListItems([...listItems]);
    }

    return (
        <main className="flex flex-col w-screen justify-around items-center min-h-screen">
                <ItemForm changeHandler={inputChangeHandler} submitClickHandler={submitBtnClickHandler} />
                <ItemList listItems={listItems} deleteClickHandler={deleteItemClickHandler} errorMessage={errorMessage}/>
            </main>
    );
}

export default AppMain