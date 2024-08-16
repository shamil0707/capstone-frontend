import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'


function Login(props) {

  return (

    <main>
        <section className='container mx-auto px-4 mt-8 flex flex-col items-center justify-center py-8'>
          <h1 className='text-xl font-semibold'>Login</h1>
          <LoginForm/>
        </section>
    </main>
  )
}

export default Login