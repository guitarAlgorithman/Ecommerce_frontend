import React from "react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShoppingCartContext from "../Context/Cart/ShoppingCartContext";
import ProductContext from "../Context/Products/ProductContext";
import AddCart from "../paypal/AddCart";


function Product() {
  let { id } = useParams();
  const { readProduct } = useContext(ProductContext);
  let [producto, setProducto] = useState([]);

  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { addProduct } = shoppingCartCtx

  useEffect(() => {
    readProduct(id).then((data) => {
      setProducto(data[0]);
    });
  }, []);

  return (
    
    <div className="text-center jumbotron mb-5">
      <div className="bg-light p-5 rounded-lg m-3">
        <img src={producto.imgUrl} />
        <h1 className="display-4">{producto.name}</h1>
        <p className="lead">{producto.long_description}.</p>
        <AddCart product={producto}/>
        {/* <a className="btn btn-primary btn-lg" href="#" role="button" 
        onClick={()=>{
          addProduct(producto)
        }}>
          Agregar
        </a> */}
      </div>
    
      <div className="m-5">&nbsp;</div>
    </div>
    
    
  );
};
//ok
export default Product;