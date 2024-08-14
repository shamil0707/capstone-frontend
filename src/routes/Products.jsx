import React from 'react'
import Product from '../components/product/product'
import useProducts from '../hooks/useProducts'

const Products = (props) => {

    const [products] = useProducts()
  return (
    <>
    <main>
        <section className='container mx-auto px-4 py-10'>
          <h2 className='text-xl font-bold'>VIEW ALL</h2>
          <div className='grid grid-cols-4 lg:grid-cols-4 gap-3 mt-8'>
            {
             products.map(product=>{
              return(
                <Product key={product._id} product={product}/> 
              )
             })
            }
          </div>

        </section>
      </main>
    </>
  )
}

export default Products;