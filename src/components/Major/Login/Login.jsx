import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginBox from 'Components/Containers/LoginBox/LoginBox';
import Validator, { ValidationType } from 'Utils/Validator';

import { graphql } from 'react-apollo';
import loginMutation from 'Mutations/Login';
import currentUserQuery from 'Queries/CurrentUser';
import { Routes } from '../../App';

import './Login.scss';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: currentUserQuery }]
        });
    }

    /**
     * Based on if an active cookie for a logged in user exists, we direct to then
     * dashboard or show the login box
     * @return {React.Component | Route} Component or Route(component) to render
     */
    renderRoute() {
        const { loading, user } = this.props.data;

        if(loading) {
            return (<div>Loading...</div>);
        }
        else if(!loading && !user) {
            return (
                <div className="login-container">
                    <LoginBox emailValidations={[new Validator(ValidationType.MaxLength, 10)]} onSubmit={ this.onSubmit.bind(this) }/>
                </div>
            );
        }
        else {
            return (<Redirect to={ Routes.Dashboard } />);
        }
    }

    render() {
        return this.renderRoute();
    }
}

export default graphql(loginMutation)(
    graphql(currentUserQuery)(Login)
);
