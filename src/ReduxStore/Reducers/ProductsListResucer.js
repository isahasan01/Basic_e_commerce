import { PRODUCTS_LIST_ERROR, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../Constents/ProductsListConstent"

export const ProductsListReducer = (state = {Productsloading:true, Products:[]}, action) =>{
    switch(action.type){
        case PRODUCTS_LIST_REQUEST :
            return {
                Productsloading: true
            }
        case PRODUCTS_LIST_SUCCESS :
            return {
                Productsloading: false,
                Products: action.payload
            }
        case PRODUCTS_LIST_ERROR :
            return {
                Productsloading: false,
                ProductsError: action.payload
            }
        default : 
        return state ;
    }
}