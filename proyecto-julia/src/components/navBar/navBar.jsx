import CartWidget from "../CartWidget/cartWidget"
import Titulo from "../titulo/titulo"

function NavBar(){
    return(
      <nav>
         <Titulo />
        <ul>
          <li>Inicio</li>
          <li>CDS</li>
          <li>Vinilos</li>
          <li>Contacto</li>
        </ul>
        <CartWidget/>
      </nav>
    )
  }
export default NavBar