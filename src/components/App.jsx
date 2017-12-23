import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Loginbox from './Containers/Loginbox/Loginbox';

class App extends Component {
    render() {
        return (
            <div>
                <Loginbox />
            </div>
        );
    }
}

// <Textbox validations={[new Validator(ValidationType.MaxLength, 10)]}placeholder="Email"/>
// <Textbox type="password" placeholder="Password"/>
// <Textbox placeholder={["Enter Item Name", "eg: Benny\'s Doghnuts", "Got it?"]}/>

export default App;
