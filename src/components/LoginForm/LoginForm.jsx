import axios from "axios"
import { useForm } from "react-hook-form"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{
    axios.post('http://localhost:3000/api/v1/auth/login',data, {withCredentials: true})
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
        <label htmlFor="title">Email</label>
        <input className="p-2 border border-slate-500" {...register("email",{required: true,maxLength:40})} />
        {errors.email?.type === 'required' && <span className="text-xs text-red-600">Email is required</span>}
        {errors.email?.type === 'maxLength' && <span className="text-xs text-red-600">Email cannot exceed 40 character</span>}
      </div>
      <div className="flex flex-col gap-2" >
        <label htmlFor="password">Password</label>
        <input type="password" className="p-2 border border-slate-500" {...register("password",{required: true})} />
        {errors.password && <span className="text-xs text-red-600">Password is required</span>}
      </div>
      
     <div className="flex flex-row justify-center items-center mt-2">
        <input className="bg-black text-white font-semibold rounded-md px-4 h-10  hover:bg-slate-800 cursor-pointer " type="submit" value="Login" />
     </div>

      

      
    </form>
  )
}