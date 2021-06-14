import React from 'react';

const Header = (props) => {
    return (
        <header>
          <input value={props.search} onChange={props.handleChange}/>
          <button onClick={props.handleGetAPi}>Search</button>
        </header>
    );
};

export default Header;