import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from 'Queries/CurrentUser';

import ErrorDashboardContent from 'Components/Containers/ErrorDashboardContent/ErrorDashboardContent';
import DashboardContent from 'Components/Containers/DashboardContent/DashboardContent';

export const DashboardStates = {
    Unauthorized: 0
}

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
            return (<ErrorDashboardContent errorState={ DashboardStates.Unauthorized }/>
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
