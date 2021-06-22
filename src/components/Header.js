import React from 'react';

const Header = (props) => {
    return (
        <header>
            <input onChange={props.handleChange}/>
            <button onClick={props.handleGetApi}>Search</button>
        </header>
    );
};

export default Header;
