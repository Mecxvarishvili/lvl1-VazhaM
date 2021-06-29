import React from 'react';
import Loader from './Loader';

const SignUpForm = (props) => {
    return (
        props.loading ? <Loader data={props.data} name={props.name}/> : props.children 
    );
};

export default SignUpForm;