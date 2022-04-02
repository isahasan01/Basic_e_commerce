import { TESTIMONIAL_LIST_REQUEST, TESTIMONIAL_LIST_SUCCESS, TESTIMONIAL_LIST_ERROR } from "../Constents/TestimonialListConstent"


export const TestimonialListReducer = (state = {TestimonialLoading:true, Testimonial:[]}, action) =>{
    switch(action.type){
        case TESTIMONIAL_LIST_REQUEST :
            return {
                TestimonialLoading: true
            }
        case TESTIMONIAL_LIST_SUCCESS :
            return {
                TestimonialLoading: false,
                Testimonial: action.payload
            }
        case TESTIMONIAL_LIST_ERROR :
            return {
                TestimonialLoading: false,
                TestimonialError: action.payload
            }
        default : return state ;
        
    }
}