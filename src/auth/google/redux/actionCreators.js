import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from './actions';
import { USER_ACCOUNT_TYPE_GOOGLE } from '../../../common/constant';

export const googleSignInInit = () => ({
    type: GOOGLE_SIGN_IN.INIT
})

export const googleSignInSuccess = user => ({
    type: GOOGLE_SIGN_IN.SUCCESS,
    payload: {
        accountType: USER_ACCOUNT_TYPE_GOOGLE,
        user: user
    }
})

export const googleSignInFailure = errorMsg => ({
    type: GOOGLE_SIGN_IN.ERROR,
    payload: errorMsg
})

export const googleSignOutInit = () => ({
    type: GOOGLE_SIGN_OUT.INIT
})

export const googleSignOutSuccess = () => ({
    type: GOOGLE_SIGN_OUT.SUCCESS
})

export const googleSignOutFailure = errorMsg => ({
    type: GOOGLE_SIGN_OUT.ERROR,
    payload: errorMsg
})