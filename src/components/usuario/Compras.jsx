import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getCompras } from "../paypal/auxiliar";
function Compras(props) {
  const [comprado, setComprado] = useState([]);

  useEffect(() => {
    const salida = async (token, id) => {
      let sal = await getCompras(token, id);
      setComprado(sal);
    };
    salida(props.token, props.id);
  }, []);

//   console.log(comprado);
  return (
    <>
      <div>Compras</div>
      <Container className="mb-5">
      {comprado ? (
        comprado.map((x,i) => (
          <p key={i} >
            {" "}
            Producto: {x.product}, Cantidad:{ x.quantity }, Precio (unitario): {x.price}, fecha:{x.date}
          </p>
        ))
      ) : (
        <p>error</p>
      )}
      </Container>

      <div className="m-5">&nbsp;</div>
    </>
  );
}

export default Compras;
