import React, { useReducer } from 'react'
import { ADD_PRODUCT,GET_ALL_PRODUCT,REMOVE_PRODUCT } from '../types.js'
import ShoppingCartContext from './ShoppingCartContext.jsx'
import ShoppingCartReducer from './ShoppingCartReducer.jsx'

const ShoppingCartState = ( props ) => {

  const initialState = {
    productsCart: [],
  }

  const [ state, dispatch ] = useReducer( ShoppingCartReducer, initialState )


  const addProduct = ( product ) => {

    let auxCart = sessionStorage.getItem("shoppingCart");
    let aux=null
    if (!auxCart) {
      aux=[
        {
          "_id": product._id,
          "name": product.name,
          "precio": product.price,
          "quantity": 1,
        },
      ]
      sessionStorage.setItem(
        "shoppingCart",
        JSON.stringify(aux)
      );}


      else {
        let encontrado = false;
        aux = JSON.parse(sessionStorage.getItem("shoppingCart"));
      
        for(let i in aux){
          if (aux[i]._id === product._id) {
            aux[i].quantity++;
            encontrado = true;
          }
        }
        if(encontrado==true){
          sessionStorage.setItem("shoppingCart",JSON.stringify(aux))
        }
        else{
          let toAdd = {
            "_id": product._id,
            "name": product.name,
            "precio": product.price,
            "quantity": 1,
          };
          aux.push(toAdd)
          sessionStorage.setItem("shoppingCart",JSON.stringify(aux))
        }
      }
    dispatch( {
      type: ADD_PRODUCT,
      payload:aux
    } )
    
  }

  const removeProduct = () => {

    sessionStorage.removeItem("shoppingCart");
    let nuevo=[]
    dispatch( {
      type: REMOVE_PRODUCT,      
      payload:nuevo,
    } )

  }

  const getProducts = () => {
    let auxCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    
    if(auxCart){
      dispatch( {
        type: GET_ALL_PRODUCT,
        payload:auxCart
      } )
      return auxCart
    }
    

  }

  return (
    <ShoppingCartContext.Provider value={ {
      productsCart: state.productsCart,
      addProduct,
      removeProduct,
      getProducts
    } }>

      { props.children }

    </ShoppingCartContext.Provider>
  )
}
export default ShoppingCartState