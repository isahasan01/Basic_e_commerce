import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_ERROR} from "../Constents/RegisterConstant"

export const RegisterReducer = (state = {RegisterLoading: true, Register:[]}, action) =>{
    switch(action.type){
        case USER_REGISTER_REQUEST :
            return {
                Registerloading: true
            }
        case USER_REGISTER_SUCCESS :
            return {
                Registerloading: false,
                Register: action.payload
            }
        case USER_REGISTER_ERROR :
            return {
                Registerloading: false,
                Registererror: action.payload
            }
        default : 
        return state ;
    }
}