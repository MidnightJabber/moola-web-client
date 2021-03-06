import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextBox from 'Components/Controls/TextBox/TextBox';
import Validator, { ValidationType } from 'Utils/Validator';
import Button from 'Components/Controls/Button/Button';

import './LoginBox.scss';

class LoginBox extends Component {

    constructor(props) {
        super(props);

        this.buttonCustomStyles = {
            color: "#555"
        };

        this.state = {
            email: "",
            password: ""
        }
    }

    onSubmit(event) {
        // so the form does not submit itself
        event.preventDefault();

        this.props.onSubmit(this.state);
    }

    emailChangeHandler(event, isValid) {
        this.setState({ email: event.target.value });
    }

    passwordChangeHandler(event, isValid) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) } className="loginbox-container">
                <div className="loginbox-textbox-section">
                    <TextBox validations={ this.props.emailValidations } placeholder="Email" changeHandler={ this.emailChangeHandler.bind(this) }/>
                    <TextBox type="password" placeholder="Password" changeHandler={ this.passwordChangeHandler.bind(this) }/>
                </div>

                <div className="loginbox-button-section">
                    <Button text="Login" type="submit" customStyles={ this.buttonCustomStyles }/>
                </div>
            </form>
        );
    }
};

LoginBox.propTypes = {
    emailValidations: PropTypes.array,
    passwordValidations: PropTypes.array,
    buttonValidations: PropTypes.array,
    onSubmit: PropTypes.func
}

export default LoginBox;
