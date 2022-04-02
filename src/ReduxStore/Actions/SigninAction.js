import Axios from "axios";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR, USER_SIGNOUT } from "../Constents/SigninConstent"

export const SigninAct = (email,password)=> async(dispatch)=>{
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {email,password}
    });
    try{
        const {data} = await Axios.post(`auth/sign-in`,{email,password})
        console.log(data)
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('Signin',JSON.stringify(data));
    } catch(err){
        dispatch({
            type: USER_SIGNIN_ERROR,
            payload:err.response 
        })
    }
}

export const SignoutAct = (dispatch)=>{
    window.localStorage.clear();
    dispatch({type: USER_SIGNOUT });

}
