import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import ShoppingCartContext from "../Context/Cart/ShoppingCartContext";
import { useContext } from "react";
import { useAuth } from "../Context/Auth/Auth";
import axios from "axios";
import {guardarCompra} from "./auxiliar";
import Product from "../products/product";

const Checkout = (props) => {
  const navigate = useNavigate();
  let { removeProduct, getProducts } = useContext(ShoppingCartContext);
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  
  const getTotal=(compras)=>{
    let total=0
    if(!!compras){
    compras.forEach(x=>total+=x.precio*x.quantity)}
    return total
   }

   


  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    console.log(getTotal(getProducts()));
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: getTotal(getProducts()),
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    let todos = getProducts()
    todos.map(x=>{
        guardarCompra(x.name,x.quantity,x.precio)
       
    })

    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(
        `Compra exitosa por $${getTotal(getProducts())} USD pronto será enviado a su perfil ${name}`
      );
      
      removeProduct();
      navigate("../../Ecommerce_frontend/Perfil");
    });
  };

  return (
    <div className="checkout">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
};

export default Checkout;
