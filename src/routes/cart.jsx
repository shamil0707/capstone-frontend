import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { decrementQuantity, incrementQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import useCartItems from '../hooks/useCartItems';
import CartItem from '../components/cartItem/cartItem';


function Cart (props)  {
   const [items,totalPrice] = useCartItems()
   
    const dispatch = useDispatch()
  return (
    <main>
    <section className='container mx-auto px-4 py-10'>
          <h2 className='text-xl font-bold'>Shopping bag</h2>
          <Link className='bg-black text-white font-semibold text-md mt-5    rounded-md flex flex-row items-center justify-center h-10 hover:bg-slate-900 ' to={'/checkout'}>
                       Continue to Checkout  - INR {totalPrice.toFixed(2)}
                        </Link>
          <div className='mt-8 flex flex-col'>
            {
                items.map(item =>{
                    return(
                      
                      <CartItem key={item.id} item={item}  />
                    
                    )
                })
            }

           
          </div>
          


        </section>

    </main>
        

    
  );
}


export default Cart;