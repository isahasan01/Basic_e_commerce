import Axios from "axios";
import { SLIDER_LIST_REQUEST, SLIDER_LIST_SUCCESS, SLIDER_LIST_ERROR } from "../Constents/SliderListConstent"

export const SliderListAct = ()=> async(dispatch)=>{
    dispatch({
        type: SLIDER_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get(`sliders`)
        dispatch({
            type: SLIDER_LIST_SUCCESS,
            payload: data
        })
    } catch(err){
        dispatch({
            type: SLIDER_LIST_ERROR,
            payload:err.message
        })
    }
}