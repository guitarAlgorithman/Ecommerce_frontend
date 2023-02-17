import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../Context/Auth/Auth";
import Checkout_button from "./Checkout_button";
import CleanCart from "./CleanCart";

function TableCart(props) {
  let compras = props.compras;
  let total = props.total;
  const auth = useAuth();

  useEffect(() => {}, [CleanCart]);
  return (
    <div>
      <Container>
        <Row>
          <Col>Número</Col>
          <Col>Nombre</Col>
          <Col>Precio</Col>
          <Col>Cantidad</Col>
        </Row>
        {compras.map((x, i) => (
          <Row key={x._id}>
            <Col>{i + 1}</Col>
            <Col>{x.name}</Col>
            <Col>{x.precio}</Col>
            <Col>{x.quantity}</Col>
          </Row>
        ))}

        <Row className="mt-5 text-center">
          <p>El monto de su compra es: ${total}</p>
        </Row>
        <div className="text-center">
          {" "}
          <CleanCart />
        </div>
      </Container>
      {auth.user ? (
        <Container className="mt-3 text-center">
          <Checkout_button value={total} />
        </Container>
      ) : (
        <Container className="mt-3 text-center">
          <p className="text-center">
            Favor ingrese a su cuenta para poder efectuar el pago:{" "}
            <a href="../Ecommerce_frontend/Login">Login</a>
          </p>
        </Container>
      )}
    </div>
  );
}

export default TableCart;
