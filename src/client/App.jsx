import React from 'react';
import { hot } from 'react-hot-loader';
import AppMain from './AppMain';
import Header from './layout/Header';
import './styles/tailwind.css';

class App extends React.Component {
    render() {
        return ( <
            >
            <Header /> <
            AppMain / >
            <
            />
        );
    }
}

export default hot(module)(App);