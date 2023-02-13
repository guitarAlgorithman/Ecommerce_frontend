import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../Context/Auth/Auth";
import Compras from "./Compras";

function Perfil(props) {
  const auth = useAuth();
  let user = auth.user;
  let [data, setData] = useState({});
  const token = sessionStorage.getItem("token");
  const bodyParameters = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    const loadUserData = async () => {
      const salida = await axios.get(
        `http://localhost:3000/user/findOneP/${user}`,
        bodyParameters
      );
      setData(salida.data.result[0]);
    };
    
    loadUserData()

  }, []);



  if(Object.keys(data).length==0){console.log("loading");}
  return (
    <div>
      <Container>
        <h2 className="text-center m-2">Bienvenido a un panel de control</h2>
      </Container>
      <Container className="m-5">
        <p className="text-left m-2">Nombre del usuario: {Object.keys(data).length==0 ? <p>waiting</p> : data.name}</p>
        <p className="text-left m-2">Usuario: {user}</p>
        <p className="text-left m-2">Email: {Object.keys(data).length==0 ?  <p>waiting</p>: data.email}</p>
      </Container>

      <Container>
        <h3 className="text-center m-2">Compras efectuadas</h3>
        {!data._id ? <p>waiting</p> : <Compras token={token} id={data._id} />}
        
        <div className="text-center"></div>
      </Container>
    </div>
  );
}

export default Perfil;
