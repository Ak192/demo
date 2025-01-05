import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex justify-center items-center  bg-slate-500 glass h-[100vh] '>
            <div className='flex  md:w-[75%] lg:w-[68%] rounded-lg w-full mx-3 md:mx-0' >
                <div className='bg-[#68717B] w-[40%] md:w-1/2 relative rounded-lg '>
                <div className="flex relative ">
                        <img src="Assets/Logo.png" alt="upload image" width={50} />
                        <span className='m-auto'>
                            <h4 className='font-serif font-bold text-[13px] text-center md:text-xl md:text-start  '> SHREE SHYAM TYRE HUB </h4>
                            <h6 className='text-center font-bold text-slate-400 leading-3'>MRF Exclusive </h6>

                        </span>
                    </div>
                  <img src="Assets/Car.png" alt="" className='absolute w-72 right-[-50px] top-32' />
                </div>
                <div className='md:w-1/2 w-[60%] border bg-white p-5 rounded-lg  '>

                    <div className='justify-end  '>
                        <h1 className='text-xl font-bold my-4'>Create Account</h1>
                        <div className=' flex flex-col lg:flex-row lg:justify-between  gap-2'>
                            <button className='btn btn-outline btn-xs  my-3 lg:my-0 '><FcGoogle /> Signup with Google </button>
                            <button className='btn btn-outline btn-xs  btn-primary '><BsFacebook color='blue' /> Signup with Fecebook </button>
                        </div>
                        <p className='text-center text-xl font-bold py-3 text-[#797979]'>-OR-</p>
                        <form action="">
                            <input type="email" name="email" id="email" placeholder='Email Address' className='border-b-2 w-full  p-4 rounded-md focus:outline-none bg-transparent focus:border-[#797979] ' />
                            <input type="password" name="password" id="password" placeholder='Password ' className='border-b-2 w-full  p-4 rounded-md focus:outline-none  bg-transparent focus:border-[#797979] ' />
                            <button className='btn btn-outline  w-full  my-4' >Login</button>
                            <p>do you have no any Account <Link to='/signup' className='text-blue-700'>signup now</Link></p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login