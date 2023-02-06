import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import ShoppingCartContext from "../Context/Cart/ShoppingCartContext";
import ProductContext from "../Context/Products/ProductContext";
import { useContext, useState,useEffect} from "react";
import AddCart from "../paypal/AddCart";

function ProductCard(props) {
  let navigate = useNavigate();

  const { readProduct } = useContext(ProductContext);
  let [producto, setProducto] = useState([]);

  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { addProduct } = shoppingCartCtx

 
  useEffect(() => {
    setProducto(props);
  }, []);
  
  return (
    <Card style={{ width: '18rem' }} className="m-2">
    <Card.Img variant="top" src={props.url} />
    <Card.Body>
      <Card.Title className="text-center">{props.name}</Card.Title>
      <Card.Text className="justify-text-center">
        {props.description}
      </Card.Text>
      <Card.Subtitle>
            ${props.price}
    </Card.Subtitle>
    <Row>
    <Col>
     <AddCart product={producto}/>
     </Col>
     <Col>
      <Button variant="secondary" className="m-2" onClick={() => navigate(`/product/${props.name}`)}> Detalles</Button>
      </Col>
      </Row>
    </Card.Body>
  </Card>
  )
}

export default ProductCard