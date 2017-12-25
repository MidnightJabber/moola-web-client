import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from 'Queries/CurrentUser';
import { Link } from 'react-router-dom';

import DashboardContent from 'Components/Containers/DashboardContent/DashboardContent';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    renderDashboardContent() {
        const { loading, user } = this.props.data;

        if(loading) {
            return (<div>Loading...</div>);
        }
        else if(!loading && !user) {
            return (
                <div>
                    You are not signed in.
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            );
        }
        else {
            return <DashboardContent />;
        }
    }

    render() {
        return (
            <div className="dashboard-container">
                { this.renderDashboardContent() }
            </div>
        );
    }
}

export default graphql(query)(Dashboard);
