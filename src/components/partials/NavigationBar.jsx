import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Auth/Auth";



const Navigationbar = () => {

    const auth=useAuth()

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="Ecommerce_frontend">Home</NavLink>
                    {!auth.user && (
                    <NavLink  eventKey="3" as={Link} to="Ecommerce_frontend/Login">Login</NavLink>)}
                    {!auth.user && (
                    <NavLink  eventKey="3" as={Link} to="Ecommerce_frontend/Signin">Registrese</NavLink>
                    )} 
                    {auth.user && (
                    <NavLink  eventKey="3" as={Link} to="Ecommerce_frontend/Perfil">Perfil</NavLink>                   
                    )}          
                    {auth.user && (
                    <NavLink  eventKey="4" as={Link} to="Ecommerce_frontend/Logout">Logout</NavLink>                   
                    )} 
                    <NavLink  eventKey="5" as={Link} to="Ecommerce_frontend/Cart">Cart</NavLink>                   
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;