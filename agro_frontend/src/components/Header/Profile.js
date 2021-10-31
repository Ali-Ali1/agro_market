import React from 'react';
import {Avatar} from '@material-ui/core';

function Profile() {
    return (
        <Avatar>B</Avatar>
    )
}

const profileStyle = {
    backgroundColor: '#F5F8F2',
    borderRadius: '100%',
    color: '#378C84',
    width: '50%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center'
}

export default Profile
