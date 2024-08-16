import React from 'react'

import SignupForm from '../components/signupForm/signupForm'

function Signup(props) {
  return (
    <main>
        <section className='container mx-auto px-4 mt-8 flex flex-col items-center justify-center py-8'>
          <h1 className='text-xl font-semibold'>SignUp</h1>
          <SignupForm/>
        </section>
    </main>
  )
}

export default Signup

//  <div className='flex flex-row gap-4 text-'>
// <Link to={'/add-category'}>
// <span className='text-md font-semibold'>Add category</span>
// </Link>
// <Link to={'/add-product'}>
// <span className='text-md font-semibold'>Add product</span>
// </Link> 

//  <Link to={'/add-category'}>
//         <span className='text-md font-semibold'>Add category</span>
//         </Link>
//         <Link to={'/add-product'}>
//         <span className='text-md font-semibold'>Add product</span>
//         </Link> 