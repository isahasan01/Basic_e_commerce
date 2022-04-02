import Axios from "axios";
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_ERROR } from "../Constents/RegisterConstant"

export const RegisterAct = (name,contact, email, password, password_confirmation)=> async(dispatch)=>{
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {name,contact, email, password, password_confirmation}
    });
    try{
        const {data} = await Axios.post(`auth/sign-up`,{name, contact, email, password, password_confirmation})
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
        localStorage.setItem('Signin',JSON.stringify(data));
    } catch(err){
        dispatch({
            type: USER_REGISTER_ERROR,
            payload:err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}