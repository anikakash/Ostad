import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>This is Header</h1>
            <p>{props.logo}</p>
        </div>
    );
};

export default Header;