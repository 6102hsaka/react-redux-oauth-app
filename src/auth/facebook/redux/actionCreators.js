import { FACEBOOK_SIGN_IN, FACEBOOK_SIGN_OUT } from './actions';
import { USER_ACCOUNT_TYPE_FACEBOOK } from '../../../common/constant';

export const facebookSignInInit = () => ({
    type: FACEBOOK_SIGN_IN.INIT
})

export const facebookSignInSuccess = user => ({
    type: FACEBOOK_SIGN_IN.SUCCESS,
    payload: {
        accountType: USER_ACCOUNT_TYPE_FACEBOOK,
        user
    }
})

export const facebookSignInFailure = errorMessage => ({
    type: FACEBOOK_SIGN_IN.ERROR,
    payload: errorMessage
})

export const facebookSignOutInit = () => ({
    type: FACEBOOK_SIGN_OUT.INIT
})

export const facebookSignOutSuccess = () => ({
    type: FACEBOOK_SIGN_OUT.SUCCESS
})

export const facebookSignOutFailure = errorMessage => ({
    type: FACEBOOK_SIGN_OUT.ERROR,
    payload: errorMessage
})