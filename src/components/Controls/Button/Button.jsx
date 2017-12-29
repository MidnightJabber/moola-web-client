import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="button-container">
                <button style={ this.props.customStyles }
                        type="button"
                        onClick={ this.props.onClick }
                        type={ this.props.type }>
                    { this.props.text }
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    customStyles: PropTypes.object,
    onClick: PropTypes.func,
}

export default Button;
