import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import axios from "axios";
// import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";
// import { products } from "../../productsMock";
// import useFetch from "../../utils/hooks/useFetch";
import { InfinitySpin } from "react-loader-spinner";
import {db} from "../../firebaseConfig"
import {getDocs, collection, query, where} from "firebase/firestore"

// import Button from "@mui/material/Button";

const ItemListContainer = () => {
  // const { data } = useFetch("http://localhost:5000/products", []);
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);


  useEffect(()=>{
    const itemCollection = collection(db, "products")

    let consulta

    if(categoryName){
      const itemCollectionFiltered = query(itemCollection,where("categoria", "==", categoryName))
      consulta = itemCollectionFiltered
    }else{
      consulta = itemCollection
    }

    getDocs(consulta)
    .then((res)=> {
      const products = res.docs.map(product =>{
      return {
        ...product.data(),
        id:product.id
      }
    })
    setItems(products)
  }
  )
  .catch((err)=> {console.log(err)})
},[categoryName])






// useEffect(() => {
  
  //   const filteredProducts = data.filter(
    //     (prod) => prod.categoria === categoryName
    //     );
  //     setTimeout(() => {
    
    //       setItems(categoryName ? filteredProducts : data)
    
    
    //     }, 1000);
    
    //     console.log(filteredProducts);
    
    //   }, [data, categoryName]);
    
    if(items.length === 0){
      return( 
      <div className="loader">
        <InfinitySpin width="200" color="rgb(131, 70, 85)"/>
      </div>
    )}
  
    
    
    return (
      
      <div>
      <ItemList
        items={items}
        // deleteProduct={deleteProduct}
        // updateProduct={updateProduct}
        />
      {/* <h1>{counter}</h1>
      <button onClick={increment}>Sumar</button>
    <button onClick={decrement}>Restar</button> */}
    </div>
  );
};

export default ItemListContainer;
