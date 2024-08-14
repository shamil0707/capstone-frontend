import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';


function Product (props) {
    const dispatch = useDispatch()
    const product = props.product
  return (
    <article className='p-4 border rounded-sm flex flex-col justify-between '>
                <img className='w-full aspect-[3/4] object-contain' src={product.image} alt="" />
                <h3 className='text-sm font-bold mt-5'>{product.title}</h3>
                <div className='flex flex-row justify-between items-center mt-3'>
  
                <span className='text-sm text-gray-800'>${product.price}</span>
                <button onClick={() => dispatch(addToCart(product))} className='bg-black text-white text-sm px-2 py-1 rounded-sm'>Add</button>
                </div>
              </article>
  );
}

export default Product;