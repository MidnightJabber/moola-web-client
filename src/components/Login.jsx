import React, { Component } from 'react';
import Loginbox from './Containers/Loginbox/Loginbox';
import Validator, { ValidationType } from '../Utils/Validator';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <Loginbox emailValidations={[new Validator(ValidationType.MaxLength, 10)]} />
            </div>
        );
    }
}

export default Login;
