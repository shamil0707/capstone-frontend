import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Admin(props) {
  
  
  
  return (
    <header className='py-1 h-16 border-b '>
    <div className='h-full container mx-auto px-4 flex flex-row justify-between items-center'>
    <Link to={'/products'}>
        <span className='text-md font-semibold'> All Products</span>
        </Link>
     <div className='flex flex-row gap-4 text-'>
<Link to={'/add-category'}>
<span className='text-md font-semibold'>Add category</span>
</Link>
<Link to={'/add-product'}>
<span className='text-md font-semibold'>Add product</span>
</Link> 
</div>

   </div>
   </header>
  
  )
}

export default Admin