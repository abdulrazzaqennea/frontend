import {useEffect, useState} from 'react';
import Product from './Product';
import { getProducts } from '../Services/login-service';


const AllProduct = ()=>{
    const[products, setproducts]=useState([]);

    useEffect(()=>{
        getAllProducts();
    },[]);
    
    const getAllProducts=()=>{
        getProducts().then((response)=>{
            setproducts(response);
        })
    }

    return(
        <div>
            <h1>All Products </h1>
            {products.length>0
            ? products.map((item)=><Product product={item}/>)
            : "No Users"}
        </div>
    )
}
export default AllProduct;