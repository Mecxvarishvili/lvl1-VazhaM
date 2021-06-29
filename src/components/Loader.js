import React from 'react';
import Welcome from './Welcome';

const Loader = (props) => {
    return (
           props.data ?  <Welcome name={props.name} /> : <div className="spinner"><div className="lds-facebook"><div></div><div></div><div></div></div></div>
    );
};

export default Loader;