import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AvatarDropDown.scss';

class AvatarDropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderMenuItems() {
        return this.props.menuItems.map(menuItem => {
            return (
                <li key={ menuItem.key } className="avatar-dropdown-menuitem" onClick={ menuItem.onClick }>
                    { menuItem.title }
                </li>
            );
        });
    }

    render() {

        return (
            <div className="avatar-dropdown-container">
                <div className="avatar-menu-userinfo">
                    <span className="avatar-menu-userinfo-title">Signed in as:</span>
                    <span className="avatar-menu-userinfo-username">vreddi</span>
                </div>
                <ul className="avatar-dropdown-menu">
                    <div className="avatar-dropdown-menulist">
                        { this.renderMenuItems() }
                    </div>
                </ul>
            </div>
        );
    }
}

AvatarDropDown.propTypes = {
    menuItems: PropTypes.array,
}

export default AvatarDropDown;
