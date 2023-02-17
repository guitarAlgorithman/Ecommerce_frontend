import React from "react";
import { useRef } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Auth/Auth";

import { signIn } from "../Context/User/UserState";
function Login() {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const auth=useAuth()

  const login = async () => {
    const u = username.current.value;
    const p = password.current.value;
    let result = null;

    

    try {
      result = await signIn(u, p);
    } catch (error) {
      console.log(error);
    }

    if (result) {

      auth.login(u,result._id)
      navigate("../Perfil");
    } else {
      alert("error en usuario y clave intente nuevamente");
    }
  };
  return (
    <Container>
      <Form className="text-center">
        <Row className="mb-3">
          <label className="form-label">Usuario</label>
          <input ref={username} type="text" className="form-control" />
        </Row>
        <Row className="mb-3">
          <label className="form-label">Password</label>
          <input ref={password} type="password" className="form-control" />
        </Row>
        <Button variant="primary" onClick={login}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
