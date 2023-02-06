import { Container } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../Context/Products/ProductContext";
import ProductCard from "./ProductCard";


function ProductList() {

  const {loadProducts}=useContext(ProductContext)
  let [productos,setProductos] = useState([])
  useEffect(()=>{
    loadProducts().then(
      data=>setProductos(data)
    )
  },[])
  
  return (
    <Container>
      <header>
      <h1>Seleccione el servicio de su interés:</h1>
      </header>
      <div className="row">
       {
        productos.map((x,i) => (          
          <ProductCard name={x.name} description={x.description} price={x.price} url={x.imgUrl} key={x._id} long_description={x.long} _id={x._id}/>
        ))
       }
      </div>

    </Container>
  )
}

export { ProductList }