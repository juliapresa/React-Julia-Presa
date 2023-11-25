import { Link } from 'react-router-dom'

import icon from '../../assets/fontCarrito.svg'

import "./cartWidget.css"

const CartWidget = () => {
    return(
        <div>
            <Link to={`/checkout/`}>
                <img className='cart' src={icon}/>
            </Link>
        </div>
    )
}
export default CartWidget