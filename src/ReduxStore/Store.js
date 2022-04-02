import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { SliderListReducer } from "./Reducers/SliderListReducer";
import { TestimonialListReducer } from "./Reducers/TestimonialReducer";
import { ProductsListReducer } from "./Reducers/ProductsListResucer";
import { SigninReducer } from "./Reducers/SigninReducer";
import { RegisterReducer } from "./Reducers/RegisterReducer";

const initialState ={
    UserSignin: {
        Signin: localStorage.getItem("Signin")? JSON.parse(localStorage.getItem("Signin")) :null
    }
};
console.log(localStorage);
const reducer = combineReducers({

    SliderList: SliderListReducer,
    TestimonialList: TestimonialListReducer,
    ProductsList: ProductsListReducer,
    UserSignin:  SigninReducer,
    UserRegister: RegisterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;