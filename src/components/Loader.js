import React from 'react';
import Spinner from './Spinner';

const Loader = (props) => {
    return (
        <main>
            {(props.isLoading ? <Spinner /> : props.children )}
        </main>
    );
};

export default Loader;