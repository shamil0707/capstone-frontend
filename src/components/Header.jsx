import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header (props) {
  
    const items = useSelector(state=>state.cart.items)
    const noOfItems = items.reduce((total, item)=>{
      return total+item.quantity


    },0)

  return (
  
    <header className='py-1 h-16 border-b '>
       <div className='h-full container mx-auto px-4 flex flex-row justify-between items-center'>
        <Link to={'/home'}>
        <span className='text-xl font-semibold'>ShopZy</span>
        </Link>
       <input className='text-black border px-2 rounded-md' type="text"  placeholder='search' />
      <div className=' flex-row items-between px- mt-3'>
      <div className='flex flex-row gap-4 text-'>
        <Link to={'/logout'}>
        <span className='text-xs font-semibold'>Login</span>
        </Link>
        <Link to={'/signup'}>
        <span className='text-xs font-semibold'>Signup</span>
        </Link>
        <Link to={'/profile'}>
        <span className='text-xs font-semibold'>UserProfile</span>
        </Link>
        </div>
      </div>
        {/* <div className='flex flex-row gap-4 text-'>
<Link to={'/add-category'}>
<span className='text-md font-semibold'>Add category</span>
</Link>
<Link to={'/add-product'}>
<span className='text-md font-semibold'>Add product</span>
</Link> 
</div> */}

        <Link to={'/cart'} className='relative'>
        <>
        <span className="material-symbols-outlined">local_mall
        </span>
        <span className='text-xs font-bold flex flex-row items-center justify-center w-4 h-4 bg-red-800 text-white rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/3'>{noOfItems}
        </span>
        </>
        </Link>
       </div>  
      </header>
      
  )
}

export default Header