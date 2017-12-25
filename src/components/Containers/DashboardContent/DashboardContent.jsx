import React, { Component } from 'react';
import Header from 'Components/Containers/Header/Header';

import "./DashboardContent.scss";

class DashboardContent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.data);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default DashboardContent;
