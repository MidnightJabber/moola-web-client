import React, { Component } from 'react';
import { DashboardStates } from 'Components/Major/Dashboard/Dashboard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'Components/Controls/Button/Button'

import * as labelResources from 'Assets/Resources/Labels.json';
import * as errorResources from 'Assets/Resources/Errors.json';
import userNotFoundImage from 'Assets/Images/user_not_found.gif';
import './ErrorDashboardContent.scss';

const componentResources = errorResources.ErrorDashboardContent;

class ErrorDashboardContent extends Component {

    constructor(props) {
        super(props);
    }

    renderErrorContent() {
        switch(this.props.errorState) {

            case DashboardStates.Unauthorized:
                return this.getUnauthorizedDashboardContent();

            default:
                return;
        }
    }

    getUnauthorizedDashboardContent() {

        let customStyles = {
            "backgroundColor": "#01579B"
        };

        return (
            <div className="unauthorized-container">
                <div className="unauthorized-error-container-image">
                    <img src={ userNotFoundImage } />
                </div>
                <div className="unauthorized-error-container">
                    <span className="unauthorized-error-container-text">
                        { componentResources.UserNotFound.value }
                    </span>
                    <span className="unauthorized-error-container-button">
                        <Link to="/login">
                            <Button text={ labelResources.Button.Login.value } customStyles= { customStyles }/>
                        </Link>
                    </span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="error-dashboard-container">
                { this.renderErrorContent() }
            </div>
        );
    }
}

ErrorDashboardContent.propTypes = {
    errorState: PropTypes.number
}

export default ErrorDashboardContent;
