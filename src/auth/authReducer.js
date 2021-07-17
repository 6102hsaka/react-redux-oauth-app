import { FACEBOOK_SIGN_IN, FACEBOOK_SIGN_OUT } from './facebook/redux/actions';
import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from './google/redux/actions';

const initialState = {
    isSignedIn: false,
    accountType: null,
    userProfile: {}
}

const AuthReducer = (state=initialState, action) => {
    switch(action.type) {
        case FACEBOOK_SIGN_IN.SUCCESS:
        case GOOGLE_SIGN_IN.SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                accountType: action.payload.accountType,
                userProfile: action.payload.user
            }
        case FACEBOOK_SIGN_OUT.SUCCESS:
        case GOOGLE_SIGN_OUT.SUCCESS:
            return {
                ...state,
                isSignedIn: false,
                accountType: null,
                userProfile: {}
            }
        default: 
            return {
                ...state
            }
    }
}

export default AuthReducer;