import React from 'react'
import CategoryForm from '../components/CategoryForm/CategoryForm'

function AddCategory(props) {
  return (
    <main>
        <section className='container mx-auto px-4 mt-8 flex flex-col items-center justify-center py-8'>
          <h1 className='text-xl font-semibold'>Add Category</h1>
          <CategoryForm/>
        </section>
    </main>
  )
}

export default AddCategory