import React from 'react';

const ErrorBox = props =>{
    return(
        <div className='error'>{props.error}</div>
    )
}

export default ErrorBox;