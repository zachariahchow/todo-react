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

    const [editInputValue, setEditInputValue] = useState();

    const [errorMessage, setErrorMessage] = useState();
    //

    const inputChangeHandler = (ev) => {
        setInputValue(ev.target.value);
    }

    const editInputChangeHandler = (ev) => {
        // const targetItemIndex = listItems.findIndex(item => {
        //     item.index == ev.target.dataset.itemId;
        // })


        // listItems[targetItemIndex].name = ev.target.value;

        const itemNewName = ev.target.value;
        const itemId = ev.target.dataset.itemId;

        setListItems(prevItems => {
            prevItems.forEach(item => {
                if (itemId == item.index)
                    item.name = itemNewName;
            });

            return prevItems;
        })

        setEditInputValue(ev.target.value);
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
        <main className="flex flex-col w-screen justify-center items-center h-auto">
                <ItemForm changeHandler={inputChangeHandler} submitClickHandler={submitBtnClickHandler} />
                <ItemList listItems={listItems} deleteClickHandler={deleteItemClickHandler} errorMessage={errorMessage} changeHandler={editInputChangeHandler}/>
            </main>
    );
}

export default AppMain