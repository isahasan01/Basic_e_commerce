import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR, USER_SIGNOUT } from "../Constents/SigninConstent"

export const SigninReducer = (state = {SigninLoading: true, Signin:[]}, action) =>{
    switch(action.type){
        case USER_SIGNIN_REQUEST :
            return {
                Signinloading: true
            }
        case USER_SIGNIN_SUCCESS :
            return {
                Signinloading: false,
                Signin: action.payload
            }
        case USER_SIGNIN_ERROR :
            return {
                SigninLoading: false,
                Signinerror: action.payload
            }
        case USER_SIGNOUT: 
            return {};
        default : 
        return state ;
    }
}