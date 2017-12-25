import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from "Mutations/Logout";
import query from 'Queries/CurrentUser';

import LogoText from 'Components/Elements/LogoText/LogoText';
import "./Header.scss";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    onLogoutClick() {
        this.props.mutate({
            // When we re-run the query after the mutation happens, React
            // re-renders the associated components with the query
            refetchQueries: [{ query }]
        });
    }

    render() {
        return (
            <header className="header-container">
                <LogoText />
                <button onClick={ this.onLogoutClick.bind(this) }>Logout</button>
            </header>
        );
    }
}

export default graphql(mutation)(Header);
