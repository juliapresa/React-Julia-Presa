import React from "react";
import {useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";

function ItemListContainer ({}){
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true)
    const {sid} =useParams()

    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore,'products')
        const queryFilter = sid ? query(queryCollection, where('category','==', sid)) : queryCollection

        getDocs(queryFilter)
        .then(res=>setProducts(res.docs.map(product => ({id: product.id,...product.data()}) ) ))
        .catch(error=>console.log(error))
        .finally(()=> setLoading(false))

    }, [sid])
    
    return (
        <>
            {loading ? <Loading/>:
            <ItemList products={products}/> }
        </>
    )
}
export default ItemListContainer