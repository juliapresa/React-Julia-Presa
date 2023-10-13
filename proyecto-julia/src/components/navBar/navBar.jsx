import CartWidget from "../CartWidget/cartWidget"
import Titulo from "../titulo/titulo"
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar(){
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Titulo />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">CDS</a>
          <a className="nav-link" href="#">Vinilos</a>
          <a className="nav-link" href="#">Contacto</a>
        </div>
        </div>
        </div>
        <CartWidget />
      </nav>
    )
  }
export default NavBar