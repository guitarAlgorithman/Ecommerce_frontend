import { ADD_PRODUCT, GET_ALL_PRODUCT, REMOVE_PRODUCT } from "../types";

const ShoppingCartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT:
      
        return {
          ...state,
          productsCart: payload,
        };
      

    case REMOVE_PRODUCT:
      console.log("removiendo");

    case GET_ALL_PRODUCT:    
        
      return {
        ...state,
        productsCart: payload,
      };

    default:
      console.log("default");
  }
};

export default ShoppingCartReducer;
