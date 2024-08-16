import React, { useEffect } from 'react'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'

function Logout(props) {
    const navigate = useNavigate()
useEffect(() =>{
      axios.get(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {withCredentials: true})
      .then(res=>{
        navigate('/login')
      })
      .catch(error=>{
        console.log(error)
      })
},[])

  return (
    <main>
        <section className='container mx-auto px-4 mt-8 flex flex-col items-center justify-center py-8'>
          <h3 className='text-xl font-semibold'>Logging out...</h3>
          
        </section>
    </main>
  )
}

export default Logout