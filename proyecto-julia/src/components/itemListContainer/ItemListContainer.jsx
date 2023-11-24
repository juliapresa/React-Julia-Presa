import React from "react";
import ItemList from "../ItemList/ItemList";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
import {useEffect, useState } from "react"
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
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore,'products')
        const queryFilter  = query(queryCollection, where('category','==', sid))
        getDocs(queryFilter)
        .then(res=>setProducts(res.docs.map(product => ({id: product.id,...product.data()}) ) ))
        .catch(error=>console.log(error))
        .finally(()=> setLoading(false))
        }else{            const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore,'products')
        getDocs(queryCollection)
        .then(res=>setProducts(res.docs.map(product => ({id: product.id,...product.data()}) ) ))
        .catch(error=>console.log(error))
        .finally(()=> setLoading(false))
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