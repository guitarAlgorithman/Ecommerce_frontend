import { GET_ONE, GET_PRODUCTS } from "../types";

export default function(state,action){
    const {payload,type}=action

    switch(type){
        case GET_PRODUCTS:
            return{
                ...state,
                products:payload
            }
        case GET_ONE:
            return{
                ...state,
                selectProducts:payload               
            }
        default:
            return state
    }
}