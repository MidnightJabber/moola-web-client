import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Validator, { ValidationType } from '../Utils/Validator';
import Textbox from './Controls/Textbox/Textbox';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Textbox validations={[new Validator(ValidationType.MaxLength, 10)]}placeholder="Email"/>
                <Textbox type="password" placeholder="Password"/>
                <Textbox placeholder={["Enter Item Name", "eg: Benny\'s Doghnuts", "Got it?"]}/>
            </div>
        );
    }
}

export default App;
