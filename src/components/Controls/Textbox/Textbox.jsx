import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Guid from 'guid';
import MdErrorOutline from 'react-icons/lib/md/error-outline';
import $ from 'jquery';

import './Textbox.scss';

class Textbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            value: "",
            currentPlaceholderText: this.getInitialPlaceHolderText()
        }

        this.placeholderAnimationId = null;

        this.id = Guid.create();

        this.initializePlaceHolderText();
    }

    /**
     * Textbox input change handler.
     * @param  {object} event window event object
     */
    handleChange = (event) => {

        let value = event.target.value,
            isValid = this.validate(this.state.value);

        this.setState({ value, isValid });
    }

    /**
     * Provides the initial placeholder text for a looping placeholder textbox
     * or the initial and only placeholder text of a static placeholder textbox.
     * @return {string} initial placeholder text
     */
    getInitialPlaceHolderText() {
        let placeholderText = "";

        if(typeof(this.props.placeholder) === "string") {
            placeholderText = this.props.placeholder;
        }
        else if(this.props.placeholder.length > 0){
            placeholderText = this.props.placeholder[0];
        }

        return placeholderText;
    }

    /**
     * Sets up the interval callback on the textbox if there is need for more than
     * one placeholder text to be configured.
     */
    initializePlaceHolderText() {

        // Only add a time based callback if placeholder text is an array and has more than one elements
        if(Array.isArray(this.props.placeholder) && this.props.placeholder.length > 1) {
            this.placeholderAnimationId = setInterval(() => {

                $(`#${this.id}`).removeClass('textbox-placeholder-fade-in');
                $(`#${this.id}`).addClass('textbox-placeholder-fade-out');
                setTimeout(() => {
                    $(`#${this.id}`).removeClass('textbox-placeholder-fade-out');
                    $(`#${this.id}`).addClass('textbox-placeholder-fade-in');

                    let index = this.props.placeholder.indexOf(this.state.currentPlaceholderText);

                    if(index >= (this.props.placeholder.length - 1)) {
                        this.setState({ currentPlaceholderText: this.props.placeholder[0] });
                    }
                    else {
                        this.setState({ currentPlaceholderText: this.props.placeholder[index + 1] });
                    }

                }, 500);
            }, this.props.placeholderAnimationDuration ? this.props.placeholderAnimationDuration : 10000);
        }
    }

    /**
     * Stops the palceholder text rotation within the textbox.
     */
    stopPlaceholderAnimation() {
        clearInterval(this.placeholderAnimationId);
    }

    /**
     * Checks every validator configured as part of the control
     * for if the current input in the textbox is valid or not.
     * @param  {string} input Current value of the textbox
     * @return {booean}       Current textbox value is valid or not
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
                <input id={ this.id } className = { this.state.isValid ? "" : "incorrect" }
                       onChange={ this.handleChange }
                       type={ this.props.type }
                       placeholder={ this.state.currentPlaceholderText }
                       style={ this.props.customStyles } />
               { !this.state.isValid ? <div className="textbox-error-badge">
                                           <MdErrorOutline size={30} />
                                       </div>
                                       : null }
            </div>
        );
    }
}

Textbox.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    placeholderAnimationDuration: PropTypes.number
}

export default Textbox;
