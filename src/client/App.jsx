import React from 'react';
import { hot } from 'react-hot-loader';
import ItemForm from './ItemForm/ItemForm';

class App extends React.Component {
    render() {
        return (
            <main>
                <ItemForm />
            </main>
        );
    }
}

export default hot(module)(App);