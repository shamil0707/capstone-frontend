import axios from "axios"
import { useForm } from "react-hook-form"

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{
    axios.post('http://localhost:3000/api/v1/categories',data)
    .then(res=>{
        console.log(res)
    })
    .catch(error=>{
        console.log(error)
    })
    };
     

  

  return (
   
    <form className="py-8 flex flex-col gap-2 max-w-2xl w-full " onSubmit={handleSubmit(onSubmit)}>
      
      


<div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input className="border border-slate-500" {...register("title",{required: true,maxLength:40})} />
        {errors.title?.type === 'required' && <span className="text-xs text-red-600">Title is required</span>}
        {errors.title?.type === 'maxLength' && <span className="text-xs text-red-600">Title cannot exceed 40 character</span>}
      </div>
      <div className="flex flex-col gap-2" >
        <label htmlFor="slug">Slug</label>
        <input className="border border-slate-500" {...register("slug",{required: true})} />
        {errors.slug && <span className="text-xs text-red-600">Slug is required</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="thumbnail">Thumbnail</label>
        <input className="border border-slate-500" {...register("thumbnail",{required: true})} />
        {errors.thumbnail && <span className="text-xs text-red-600">Thumbnail is required</span>}
      </div>
     <div className="flex flex-row justify-center items-center mt-2">
        <input className="bg-black text-white font-semibold rounded-md px-4 h-10  hover:bg-slate-800 cursor-pointer " type="submit" value="Add category" />
     </div>

      

      
    </form>
  )
}