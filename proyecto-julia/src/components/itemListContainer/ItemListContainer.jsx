import React from "react";
import ItemList from "../ItemList/ItemList";
function ItemListContainer ({products}){
    return (
        <ItemList products={products}/> )
}
export default ItemListContainer