import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import signupMutation from 'Mutations/Signup';
import SignupBox from 'Components/Containers/SignupBox/SignupBox';
import currentUserQuery from 'Queries/CurrentUser';
import { Routes } from '../../App';

import './Signup.scss';

class Signup extends Component {

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
     * dashboard or show the signup box
     * @return {React.Component | Route} Component or Route(component) to render
     */
    renderRoute() {
        const { loading, user } = this.props.data;

        if(loading) {
            return (<div>Loading...</div>);
        }
        else if(!loading && !user) {
            return (
                <div className="signup-container">
                    <SignupBox onSubmit={ this.onSubmit.bind(this) }/>
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

export default graphql(signupMutation)(
    graphql(currentUserQuery)(Signup)
);
