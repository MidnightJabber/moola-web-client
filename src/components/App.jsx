import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Textbox from './Textbox/Textbox';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Textbox placeholder="Email"/>
                <Textbox type="password" placeholder="Password"/>
            </div>
        );
    }
}

export default App;
