import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Loginbox from './Containers/Loginbox/Loginbox';
import Validator, { ValidationType } from '../Utils/Validator';

class App extends Component {
    render() {
        return (
            <div>
                <Loginbox emailValidations={[new Validator(ValidationType.MaxLength, 10)]} />
            </div>
        );
    }
}

export default App;
