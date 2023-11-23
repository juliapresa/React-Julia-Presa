import icon from '../../assets/fontCarrito.svg'
import { Link } from 'react-router-dom'
import "./cartWidget.css"
const CartWidget = () => {
    return(
        <div>
               <Link to={`/checkout/`}>
                <img className='carrito' src={icon}/>
                </Link>
        </div>
    )
}
export default CartWidget