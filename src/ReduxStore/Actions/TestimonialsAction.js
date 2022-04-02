import Axios from "axios";
import { TESTIMONIAL_LIST_REQUEST, TESTIMONIAL_LIST_SUCCESS, TESTIMONIAL_LIST_ERROR } from "../Constents/TestimonialListConstent"

export const TestimonialListAct = ()=> async(dispatch)=>{
    dispatch({
        type: TESTIMONIAL_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get(`testimonials`)
        dispatch({
            type: TESTIMONIAL_LIST_SUCCESS,
            payload: data
        })
    } catch(err){
        dispatch({
            type: TESTIMONIAL_LIST_ERROR,
            payload:err.message
        })
    }
}