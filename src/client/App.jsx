import React from 'react';
import { hot } from 'react-hot-loader';
import AppMain from './AppMain';
import './styles/tailwind.css';

class App extends React.Component {
    render() {
        return (
            <AppMain />
        );
    }
}

export default hot(module)(App);