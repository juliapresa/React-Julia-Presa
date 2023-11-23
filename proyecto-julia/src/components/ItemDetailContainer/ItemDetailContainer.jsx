import React from "react"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { mFetchId } from "../../helpers/mfetch"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer ({}){
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  const [loading, setLoading]= useState(true)
  const Loading = ()=>{
      return <h3>Cargando</h3>
  }
  useEffect(() => {
    setLoading(true);

    mFetchId(pid)
      .then(result => {
        setProduct(result);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [pid]);

    return(
      <>
      {loading ? <Loading/>:
           <ItemDetail product={product}/> }
      </>
    )
}
export default ItemDetailContainer