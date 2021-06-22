import React from 'react';

const Error = (props) => {
    return (
        (props.data ? props.children : <div className="error">Music not found</div>)
    );
};

export default Error;