import React from 'react';
import Textbox from '../../Controls/Textbox/Textbox';
import Validator, { ValidationType } from '../../../Utils/Validator';

import './Loginbox.scss';

const Loginbox = (props) => {

    console.log(props.children);
    return (<div className="loginbox-container">
        <div className="loginbox-textbox-section">
            <Textbox validations={[new Validator(ValidationType.MaxLength, 10)]}placeholder="Email"/>
            <Textbox type="password" placeholder="Password"/>
        </div>
        <div className="loginbox-textbox-button">
        </div>
    </div>);
};

export default Loginbox;
