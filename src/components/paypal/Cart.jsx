import React from 'react'
import { useContext, useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ShoppingCartContext from '../Context/Cart/ShoppingCartContext';
import Checkout from './Checkout';
import Checkout_button from './Checkout_button';
import CleanCart from './CleanCart';
import TableCart from './TableCart';

function Cart() {

  let [compras,setCompras] = useState([])
  let [total,setTotal]= useState(0)

  let {getProducts}=useContext(ShoppingCartContext)
  
 useEffect(() => {   
  setCompras(getProducts())
 }, [])

 const getTotal=(compras)=>{
  let total=0
  if(!!compras){
  compras.forEach(x=>total+=x.precio*x.quantity)}
  return total
 }
 useEffect(()=>{
  setTotal(getTotal(compras))
 })


 

  return (
    <div>
    <h1 className='text-center m-2'>Carro de compras</h1>
    { compras ? <TableCart compras={compras} total={total}/> : <p className='text-center'>No hay productos agregados al carro</p>}
    </div>
  )
}

export default Cart