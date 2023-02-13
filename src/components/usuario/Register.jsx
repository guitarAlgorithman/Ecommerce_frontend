import React from "react";
import { useRef } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { signUp } from "../Context/User/UserState";

function Register() {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const name = useRef(null);

  const registrar = async () => {
    const u = username.current.value;
    const p = password.current.value;
    const e = email.current.value;
    const n = name.current.value;
    let result = null;
    try {
      result = await signUp(u, p,n,e);
    } catch (error) {
      console.log(error);
    }

    if (result) {
      navigate("../Login");
    } else {
      console.log("no");
      alert("error en usuario y clave intente nuevamente");
    }
  };
  return (
    <Container>
      <h1>Favor ingrese sus datos para registrarse:</h1>
      <Form className="text-center">
        <Row className="mb-3">
          <label className="form-label">Usuario</label>
          <input ref={username} type="text" className="form-control" />
        </Row>
        <Row className="mb-3">
          <label className="form-label">Password</label>
          <input ref={password} type="password" className="form-control" />
        </Row>
        <Row className="mb-3">
          <label className="form-label">Email</label>
          <input ref={email} type="email" className="form-control" />
        </Row>
        <Row className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input ref={name} type="text" className="form-control" />
        </Row>
        <Button variant="primary" onClick={registrar}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
