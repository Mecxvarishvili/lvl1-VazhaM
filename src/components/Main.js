import React from 'react';

const Main = ({isLoading, children}) => {
    
    return (
        <main>
            {(isLoading ? <div className="lds-facebook"><div></div><div></div><div></div></div> : children )}
        </main>
    )
}

export default Main;