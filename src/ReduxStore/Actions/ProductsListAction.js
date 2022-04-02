import Axios from "axios";
import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_ERROR } from "../Constents/ProductsListConstent"

export const ProductsListAct = ()=> async(dispatch)=>{
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get(`items`)
        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        })
    } catch(err){
        dispatch({
            type: PRODUCTS_LIST_ERROR,
            payload:err.message
        })
    }
}