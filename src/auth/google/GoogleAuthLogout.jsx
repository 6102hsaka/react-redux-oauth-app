import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { googleSignOutFailure, googleSignOutSuccess } from './redux/actionCreators';


const GoogleAuthLogout = () => {

    const dispatch = useDispatch();

    const onSignOutSuccess = () => {
        dispatch(googleSignOutSuccess());
    }

    const onSignOutFailure = response => {
        dispatch(googleSignOutFailure(response));
    }

    return (
        <GoogleLogout 
            clientId={process.env.REACT_APP_GOOGlE_OAUTH_CLIENT_ID}
            onLogoutSuccess={onSignOutSuccess}
            onFailure={onSignOutFailure}
            render={renderProps => <p onClick={renderProps.onClick}>logout</p>}
        />
    )
}

export default GoogleAuthLogout;