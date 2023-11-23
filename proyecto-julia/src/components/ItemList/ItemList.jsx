import {Link} from 'react-router-dom'
import "./itemList.css"
const ItemList = ({products}) => {
    return(
         <div className="divCards">
            {products.map(product => <div className="card">                       
            <div className="card-body">
                <img src={product.imageUrl} className="card-img-top img"/>
                    <h1 className="title">{product.title}</h1>
                    <p>{product.artist}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Secciones: {product.category}</p>
                </div>
                <Link to={`/detail/${product.id}`}>
                <button>Detalle</button>
                </Link>
                                        
            </div>)}
         </div>
    )
}
export default ItemList