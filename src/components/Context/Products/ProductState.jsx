import React,{useReducer} from 'react'
import ProductReducer from './ProductReducer'
import ProductContext from './ProductContext'
import axios from 'axios'
import { GET_PRODUCTS,GET_ONE } from '../types'

function ProductState(props) {
    const initialState={
        productos:[],
        selectProducts:null
    }
    
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    
    const loadProducts= async ()=>{
        const baseURL = "http://localhost:3000";
        const result = await axios.get(`${baseURL}/products`);
        dispatch({
            type:GET_PRODUCTS,
            payload:result.data.products        
        })
        return result.data.products;
    }

    const readProduct=async(name)=>{
        const baseURL = "http://localhost:3000";
        const result = await axios.get(`${baseURL}/products/${name}`);
        dispatch({
            type:GET_ONE,
            payload:result.data.products 
        })
        return result.data.products 
    }

    return(
        <ProductContext.Provider value={{
            productos:state.products,
            selectProducts:state.selectProducts,
            loadProducts,
            readProduct
            }}>
            {props.children}
        </ProductContext.Provider>
    )
    
}

export default ProductState