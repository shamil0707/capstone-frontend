import React, {useState, useEffect} from 'react'

const useProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_BASE_URL}/products`)
      .then(res => res.json())
      .then(json=> setProducts(json))
    },[])


  return [products];
}

export default useProducts