import React from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm/ProductForm'
import { useLoaderData } from 'react-router-dom'

export async function loader() {
  const res = await axios.get('http://localhost:3000/api/v1/categories')
  const categories = res.data
  return { categories }

  }

function AddProduct(props) {
    const {categories} = useLoaderData()
    
  return (
    <main>
        <section className='container mx-auto px-4 mt-8 flex flex-col items-center justify-center py-8'>
          <h1 className='text-xl font-semibold'>Add Product</h1>
          <ProductForm categories={categories}/>
        </section>
    </main>
  )
}

export default AddProduct