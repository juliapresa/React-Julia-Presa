import CartWidget from "../CartWidget/CartWidget"
import Titulo from "../Titulo/Titulo"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navBar.css"
import { Link } from "react-router-dom";
function NavBar(){
    return(
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Titulo />
       <Container>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
           <Link to="/">Inicio</Link>
             <NavDropdown title="Secciones" id="basic-nav-dropdown">
               <Link to='/category/CDS'>CDS</Link>
               <Link to='/category/Vinilos'>Vinilos</Link>
             </NavDropdown>
           </Nav>
         </Navbar.Collapse>
       </Container>
       <CartWidget className="cartWidget" />
     </Navbar>
    )
  }
export default NavBar