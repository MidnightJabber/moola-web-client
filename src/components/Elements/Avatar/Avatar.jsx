import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

        if(this.state.showMenu) {
            return (
                <AvatarDropDown menuItems={ this.props.menuItems }/>
            );
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

export default Avatar;
