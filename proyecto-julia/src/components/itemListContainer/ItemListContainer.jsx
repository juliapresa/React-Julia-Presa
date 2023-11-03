import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mfetch"
import "./itemListContainer.css"
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const {sid} =useParams()
    useEffect(()=>{
        if (sid){
            mFetch()
            .then(result => setProducts(result.filter(product => product.category===sid)))
            .catch (error => console.log(error))
        }else{
            mFetch()
            .then(result => setProducts(result))
            .catch (error => console.log(error))
        }
    }, [sid])
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
export default ItemListContainer