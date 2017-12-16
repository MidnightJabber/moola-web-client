import React from 'react';

import './Header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <h1>Moola</h1>
        </div>
    );
}

const Sum = (a, b) => {
    return a + b;
}

export default Header;

export { Sum };
