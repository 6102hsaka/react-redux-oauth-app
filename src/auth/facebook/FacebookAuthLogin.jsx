import React from 'react';
import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { facebookSignInFailure, facebookSignInSuccess } from './redux/actionCreators';
import './FacebookAuth.css';


const FacebookAuthLogin = () => {

    const dispatch = useDispatch();

    const onSignInSuccess = response => {

        const indexOfSpace = response.name.indexOf(" ");

        const user = {
            id: response.id,
            name: response.name,
            firstname: response.name.substring(0, indexOfSpace),
            lastname: response.name.substring(indexOfSpace+1),
            email: response.email,
            imageUrl: response.picture.data.url
        }
        dispatch(facebookSignInSuccess(user));
    }

    const onSignInFailure = response => {
        dispatch(facebookSignInFailure(response));
    }

    return (
        <FacebookLogin 
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            callback={onSignInSuccess}
            onFailure={onSignInFailure}
        />
    )
}

export default FacebookAuthLogin;