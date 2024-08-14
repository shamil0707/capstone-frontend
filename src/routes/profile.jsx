import axios from 'axios'
import React, { useEffect } from 'react'
import { redirect, useLoaderData } from 'react-router-dom'

export async function loader({request}) {
    try {
        const res = await axios.get('http://localhost:3000/api/v1/auth/verify', {withCredentials: true})
        const userData = res.data
           return { userData }
        
    } catch (error) {
        return redirect('/login')
    }
    }
  
function Profile(props) {
    
    
  return (
    <main>
        <section className='container mx-auto px-4 mt-8 flex flex-col items-center justify-center py-8'>
          <h1 className='text-xl font-semibold'>Profile</h1>
         
        </section>
    </main>
  )
}

export default Profile