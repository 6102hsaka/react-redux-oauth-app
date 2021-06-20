import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { googleSignInFailure, googleSignInSuccess } from './redux/actionCreators';


const GoogleAuthLogin = () => {

    const dispatch = useDispatch();

    const onSignInSuccess = response => {
        const user = {
            id: response.profileObj.googleId,
            name: response.profileObj.name,
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email,
            imageUrl: response.profileObj.imageUrl
        }
        dispatch(googleSignInSuccess(user));
    }

    const onSignInFailure = response => {
        dispatch(googleSignInFailure(response));
    }

    return (
        <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGlE_OAUTH_CLIENT_ID}
            onSuccess={onSignInSuccess}
            onFailure={onSignInFailure}
        />
    )
}

export default GoogleAuthLogin;