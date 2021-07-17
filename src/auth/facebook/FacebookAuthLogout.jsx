import React from 'react';
import { useDispatch } from 'react-redux';

import { facebookSignOutSuccess } from './redux/actionCreators';


const FacebookAuthLogout = () => {

    const dispatch = useDispatch();

    const onSignOutSuccess = () => {
        dispatch(facebookSignOutSuccess())
    }

    return <p onClick={onSignOutSuccess}>logout</p>
}

export default FacebookAuthLogout;
