import React from 'react';
import Loader from './Loader'

const Welcome = (props) => {
    return (
        <div className="welcome"> Welcome Back, {props.name}</div>
    );
};

export default Welcome;