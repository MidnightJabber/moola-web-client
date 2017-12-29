import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import currentUserQuery from 'Queries/CurrentUser';
import AvatarDropDown from 'Components/Controls/DropDown/AvatarDropDown';
import './Avatar.scss';

class Avatar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }
    }

    avatarOnClick() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    renderDropDown() {
        const { loading, user } = this.props.data;

        if(this.state.showMenu) {
            if(!loading && user) {
                return (
                    <AvatarDropDown menuItems={ this.props.menuItems } userEmail={ user.email }/>
                );
            }
            else {
                <AvatarDropDown menuItems={ this.props.menuItems } />
            }
        }
        else {
            return;
        }
    }

    render() {
        return (
            <div className="avatar-container">
                <div onClick={ this.avatarOnClick.bind(this) } className="sprite">
                </div>
                <div className="avatar-menu">
                    { this.renderDropDown() }
                </div>
            </div>
        )
    }
}

Avatar.propTypes = {
    menuItems: PropTypes.array,
}

export default graphql(currentUserQuery)(Avatar);
