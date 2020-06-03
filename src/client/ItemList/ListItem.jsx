import React from 'react';

const ListItem = ({ itemIndex, itemName, deleteClickHandler, changeHandler }) => {

    return (
        <div className="list-item__wrapper flex flex-col justify-center items-center p-6 bg-gray-200 rounded-md w-10/12 my-3">
            <li className="list-item py-2 block text-gray-700 text-sm font-bold mb-2">{itemIndex}</li>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={itemName} onChange={changeHandler} data-item-id={itemIndex}/>
                <button className="bg-red-500 hover:bg-red-700 focus:outline-none text-white tracking-widest m-2 py-2 px-4 rounded"type="button" data-item-id={itemIndex} onClick={deleteClickHandler}>Delete</button>
        </div>
    );

}


export default ListItem;