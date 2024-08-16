


import axios from "axios";
import { useForm, } from "react-hook-form"

export default function ProductForm(props) {

  const {
    register,
    handleSubmit,
    watch,
    
    formState: { errors },
  } = useForm()

  const {categories}  = props;

 const onSubmit = (data) => {
  console.log(data)
  

  const formData = new FormData()
  formData.append("picture", data.picture[0])
   delete data.picture
formData.append("productDetails",JSON.stringify(data))
axios.post(`${import.meta.env.VITE_BASE_URL}/products`, formData,{withCredentials: true})
.then(res=>console.log(res))

.catch(err=>console.log(err))

 }

 
  
  return (
   
  <form className="py-8 flex flex-col gap-2 max-w-2xl w-full " onSubmit={handleSubmit(onSubmit)}>
<div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input className="p-2 border border-slate-500" {...register("title",{required: true,maxLength:40})} />
        {errors.title?.type === 'required' && <span className="text-xs text-red-600">Title is required</span>}
        {errors.title?.type === 'maxLength' && <span className="text-xs text-red-600">Title cannot exceed 40 character</span>}
      </div>
      <div className="flex flex-col gap-2" >
        <label htmlFor="slug">Slug</label>
        <input className="p-2 border border-slate-500" {...register("slug",{required: true})} />
        {errors.slug?.type==="required" && <span className="text-xs text-red-600">Slug is required</span>}
      </div>
     
      <div>
      <label htmlFor="image">Picture</label>
      <input
      
              {...register("picture", {
                required: "Recipe picture is required",
              })}
              type="file"
              id="picture"
            />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="price">Price</label>
        <input type="number" className="p-2 border border-slate-500" {...register("price",{required: true, min:0 })} />
        {errors.price?.type==='required' && <span className="text-xs text-red-600">Price is required</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category">Category</label>
       <select className="p-2 border border-slate-500" {...register("category",{required: true})}>
        <option value="">Select an option</option>
       {
         categories&& categories.map (category=>{
            return (
                <option key={category._id} value={category._id}>{category.title}</option>
            )
         })
       }
          </select>     
        {errors.category?.type==='required' && <span className="text-xs text-red-600">Category is required</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>
        
        <textarea className="p-2 border border-slate-500" name="description" id="description" cols="30" rows="10" {...register("description",{required: true, maxLength: 500 })}></textarea>
        {errors.description?.type==='required' && <span className="text-xs text-red-600">Description is required</span>}
      </div>



     <div className="flex flex-row justify-center items-center mt-2">
        <input className="bg-black text-white font-semibold rounded-md px-4 h-10  hover:bg-slate-800 cursor-pointer " type ="submit"  value="Add product" />
     </div>
    </form>
  )
}