import React from "react"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading"

function ItemDetailContainer ({}){
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    setLoading(true);
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore,'products', pid)
    getDoc(queryDoc)
    .then(res=>setProduct({id: res.id,...res.data()}))
    .catch(error=>console.log(error))
    .finally(()=> setLoading(false))
  }, [pid]);

  return(
    <>
      {loading ? <Loading/>:
      <ItemDetail product={product}/> }
    </>
  )
}
export default ItemDetailContainer