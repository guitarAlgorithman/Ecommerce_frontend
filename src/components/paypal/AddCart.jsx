
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import ShoppingCartContext from "../Context/Cart/ShoppingCartContext";

function AddCart(props) {
  const shoppingCartCtx = useContext(ShoppingCartContext);
const { addProduct } = shoppingCartCtx;

const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/Cart")
      
    }

  
  
  const handleShow = () => {  
    console.log(props.product);  
    addProduct(props.product);
    setShow(true);
  }

  
  return (
    <>
      <div>
        <Button
          variant="primary"
          className="m-2"
          onClick={handleShow}
        >
          Agregar
        </Button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Favor revise su carro de compra</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCart;
