import React from 'react';

const ListItem = ({ itemIndex, itemName, deleteClickHandler }) => {

    return (
        <div className="list-item__wrapper flex flex-col justify-center items-center p-6 bg-gray-200 rounded-md w-10/12 my-3">
            <li className="list-item py-2 block text-gray-700 text-sm font-bold mb-2">{itemIndex}) {itemName}</li>
            <button className="bg-red-500 hover:bg-red-700 focus:outline-none text-white tracking-widest mb-2 py-2 px-4 rounded"type="button" data-item-id={itemIndex} onClick={deleteClickHandler}>Delete "{itemName}"</button>
        </div>
    );

}


export default ListItem;