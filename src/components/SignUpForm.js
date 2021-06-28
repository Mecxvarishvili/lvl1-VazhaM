import React from 'react';
import Loader from './Loader';

const SignUpForm = (props) => {
    const ab = true;
    return (
        ab ? props.children : <Loader />
    );
};

export default SignUpForm;