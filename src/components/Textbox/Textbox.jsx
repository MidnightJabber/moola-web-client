import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Textbox.scss';

class Textbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            value: ""
        }
    }

    /**
     * [handleChange description]
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    handleChange = (event) => {

        let value = event.target.value,
            isValid = this.validate(this.state.value);

        this.setState({ value, isValid });
    }

    /**
     * Checks every validator configured as part of the control
     * for if the current input in the textbox is valid or not.
     * @param  {string} input Current value of the textbox
     * @return {booean}       current textbox value is valid or not
     */
    validate(input) {

        // No validators configured for the textbox control
        if(!this.props.validations) {
            return true
        }

        for(let validation of this.props.validations) {
            if(!validation.isValid(input)) {
                return false;
            }
        }

        return true;
    }

    render() {
        return (
            <div className="textbox-container">
                <input onChange={ this.handleChange }
                       type={ this.props.type }
                       placeholder={ this.props.placeholder }/>
            </div>
        );
    }
}

export default Textbox;
