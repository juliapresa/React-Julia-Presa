import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mfetch"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    useEffect(()=>{
        mFetch(pid)
        .then(result => setProduct(result))
        .catch (error => console.log(error))
    }, [])
    return(
      <ItemDetail product={product}/>
    )
}