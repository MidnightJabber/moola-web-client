import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Header from './Header/Header';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Header />
            </div>
        );
    }
}

export default App;