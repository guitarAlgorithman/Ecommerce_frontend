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
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    {!auth.user && (
                    <NavLink  eventKey="3" as={Link} to="/Login">Login</NavLink>)}
                    {!auth.user && (
                    <NavLink  eventKey="3" as={Link} to="/Signin">Registrese</NavLink>
                    )} 
                    {auth.user && (
                    <NavLink  eventKey="3" as={Link} to="/Perfil">Perfil</NavLink>                   
                    )}          
                    {auth.user && (
                    <NavLink  eventKey="4" as={Link} to="/Logout">Logout</NavLink>                   
                    )} 
                    <NavLink  eventKey="5" as={Link} to="/Cart">Cart</NavLink>                   
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;