import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from "../CartWidget/CartWidget"
import Title from "../Titulo/Titulo"

import "./navBar.css"
import { Link } from "react-router-dom";

const categories = [
  {id: '1', title: 'Vinilos', category:'Vinilos'},
  {id: '2', title: 'CDS', category:'CDS'}
]

function NavBar(){
    return(
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Title />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Inicio</Link>
              <NavDropdown className="categoriesContainer" title="Secciones" id="basic-nav-dropdown">
                  {categories.map(categories =>
                  <Link className="categories" key={categories.id} to={`/category/${categories.category}`}>{categories.title}</Link>)}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
       </Container>
       <CartWidget className="cartWidget" />
     </Navbar>
    )
  }
export default NavBar