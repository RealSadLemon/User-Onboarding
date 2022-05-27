import React from 'react';

const UserCard = props =>{
    const {email, first_name, last_name} = props;

    return (
        <div className='user-card'>
            <p id={first_name}>Email: {email}</p>
            <p>First Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
        </div>
    )
}

export default UserCard;