import React from 'react';
import { useSelector } from 'react-redux';

import FacebookAuthLogout from '../../auth/facebook/FacebookAuthLogout';
import GoogleAuthLogout from '../../auth/google/GoogleAuthLogout';
import { USER_ACCOUNT_TYPE_FACEBOOK, USER_ACCOUNT_TYPE_GOOGLE } from '../../common/constant';


const LogoutPage = () => {

    const accountType = useSelector(state => state.auth.accountType);

    return (
        <div className="logout-page">
            {accountType===USER_ACCOUNT_TYPE_GOOGLE && <GoogleAuthLogout />}
            {accountType===USER_ACCOUNT_TYPE_FACEBOOK && <FacebookAuthLogout />}
        </div>
    );
}

export default LogoutPage;