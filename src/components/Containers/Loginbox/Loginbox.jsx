import React from 'react';
import PropTypes from 'prop-types';
import Textbox from '../../Controls/Textbox/Textbox';
import Validator, { ValidationType } from '../../../Utils/Validator';
import Button from '../../Controls/Button/Button';

import './Loginbox.scss';

const Loginbox = (props) => {

    let buttonCustomStyles = {
        color: "#555"
    };

    return (
        <div className="loginbox-container">
            <div className="loginbox-textbox-section">
                <Textbox validations={[new Validator(ValidationType.MaxLength, 10)]} placeholder="Email"/>
                <Textbox type="password" placeholder="Password"/>
            </div>

            <div className="loginbox-button-section">
                <Button text="Login" customStyles={ buttonCustomStyles }/>
            </div>
        </div>
    );
};

Loginbox.propTypes = {
    emailValidations: PropTypes.array,
    passwordValidations: PropTypes.array,
    buttonValidations: PropTypes.array
}

export default Loginbox;
