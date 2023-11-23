import React from "react";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState } from "react"
import { mFetch } from "../../helpers/mfetch"
import { useParams } from "react-router-dom";
function ItemListContainer ({}){
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true)
    const {sid} =useParams()
    const Loading = ()=>{
        return <h3>Cargando</h3>
    }
    useEffect(()=>{
        if (sid){
            mFetch()
            .then(result => setProducts(result.filter(product => product.category===sid)))
            .catch (error => console.log(error))
            .finally(()=>setLoading(false))
        }else{
            mFetch()
            .then(result => setProducts(result))
            .catch (error => console.log(error))
            .finally(()=>setLoading(false))
        }
    }, [sid])
    return (
        <>
        {loading ? <Loading/>:
          <ItemList products={products}/> }
        </>
    )
}
export default ItemListContainer