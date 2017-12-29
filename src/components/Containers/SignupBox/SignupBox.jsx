import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextBox from 'Components/Controls/TextBox/TextBox';
import Validator, { ValidationType } from 'Utils/Validator';
import Button from 'Components/Controls/Button/Button';

import './SignupBox.scss';

class SignupBox extends Component {

    constructor(props) {
        super(props);

        this.buttonCustomStyles = {
            color: "#555"
        };

        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    emailChangeHandler(event, isValid) {
        this.setState({ email: event.target.value });
    }

    passwordChangeHandler(event, isValid) {
        this.setState({ password: event.target.value });
    }

    confirmPasswordChangeHandler(event, isValid) {
        this.setState({ confirmPassword: event.target.value });
    }

    onSubmit() {
        // so the form does not submit itself
        event.preventDefault();

        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) } className="signupbox-container">
                <div className="signupbox-textbox-section">
                    <TextBox validations={ this.props.emailValidations } placeholder="Email" changeHandler={ this.emailChangeHandler.bind(this) }/>
                    <TextBox type="password" placeholder="Password" changeHandler={ this.passwordChangeHandler.bind(this) }/>
                    <TextBox type="password" placeholder="Confirm Password" changeHandler={ this.confirmPasswordChangeHandler.bind(this) } />
                </div>

                <div className="signupbox-button-section">
                    <Button text="Sign-up" type="submit" customStyles={ this.buttonCustomStyles }/>
                </div>
            </form>
        );
    }
};

SignupBox.propTypes = {
    emailValidations: PropTypes.array,
    passwordValidations: PropTypes.array,
    buttonValidations: PropTypes.array,
    onSubmit: PropTypes.func
}

export default SignupBox;
