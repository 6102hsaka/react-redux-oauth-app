import React from 'react';
import { useSelector } from 'react-redux';

import GoogleAuthLogout from '../../auth/google/GoogleAuthLogout';
import { USER_ACCOUNT_TYPE_GOOGLE } from '../../common/constant';


const LogoutPage = () => {

    const accountType = useSelector(state => state.auth.accountType);

    return (
        <div className="logout-page">
            {accountType===USER_ACCOUNT_TYPE_GOOGLE && <GoogleAuthLogout />}
        </div>
    );
}

export default LogoutPage;