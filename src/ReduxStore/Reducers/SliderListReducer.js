import { SLIDER_LIST_REQUEST, SLIDER_LIST_SUCCESS, SLIDER_LIST_ERROR } from "../Constents/SliderListConstent"

export const SliderListReducer = (state = {loading:true, Sliders:[]}, action) =>{
    switch(action.type){
        case SLIDER_LIST_REQUEST :
            return {
                loading: true
            }
        case SLIDER_LIST_SUCCESS :
            return {
                loading: false,
                Sliders: action.payload
            }
        case SLIDER_LIST_ERROR :
            return {
                loading: false,
                error: action.payload
            }
        default : 
        return state ;
    }
}