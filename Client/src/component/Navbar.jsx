import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdWifiCalling2 } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [isopen, setIsonpen] = useState(false);


    return (
        <>
            <div className="navbar fixed top-0 left-0 right-0 z-10 glass">
                <div className="navbar-start ">
                    <Link to='/'>
                    <div className="flex">
                        <img src="Assets/Logo.png" alt="upload image" width={50} />
                        <span className='m-auto'>
                            <h4 className='font-serif font-bold text-[13px] text-center md:text-xl md:text-start  '> SHREE SHYAM TYRE HUB </h4>
                            <h6 className='text-center font-bold text-slate-400 leading-3'>MRF Exclusive </h6>

                        </span>
                    </div>
                    </Link>
                </div>
                <div className='navbar-center gap-5 font-[roboto] hidden lg:flex' >
                    
                    <Link to='/'  className='  hover:border-b-4 border-indigo-500'>Home</Link>
                    <Link>Produts</Link>
                    <Link to='/service'>Service</Link>
                    <Link to='/contactus'>Contact us</Link>
                    <Link to='/aboutus'  className='hover:border-b-4'>About</Link>
                    <Link>Gallary</Link>
                </div>
                <div className='navbar-end gap-5'>
                    <span className='flex items-center gap-1 hidden md:flex '>
                        <MdWifiCalling2 className='font-bold text-2xl' />
                        <a href="#" className='text-red-400 '>+91 6200478590 </a>
                    </span>
                     <Link to='/login' className='btn-sm bg-gradient-to-r from-sky-500 flex to-indigo-500 rounded gap-1 items-center font-cursive p-4 font-bold text-white tracking-normal' >Login <RiLoginCircleLine /> </Link>

                    <RiMenu3Line onClick={() => setIsonpen(true)} className={`${isopen == false ? 'block lg:hidden' : 'hidden'} `} />
                    <RiCloseLine onClick={() => setIsonpen(false)} className={`${isopen == true ? 'block lg:hidden' : 'hidden'} `} />
                </div>
            </div>
            <div className={`${isopen == true ? ' block lg:hidden w-full  glass absolute z-10 ' : 'hidden'}`}>
                <div className=' gap-5 font-[roboto]  inline-grid ms-5 w-3/6' >
                    
                    <Link className='hover:border-b-4 border-indigo-500' to='/'>Home</Link>
                    <Link>Produts</Link>
                    <Link to='/service'>Service</Link>
                  <Link to='/contactus'>Contact us</Link>
                    <Link to='/aboutus'  className='hover:border-b-4'>About</Link>
                 
                    <Link >Gallary</Link>
                    <hr className='bold'/>
                    <span className='flex items-center gap-1  md:hidden '>
                        <MdWifiCalling2 className='font-bold text-2xl' />
                        <a href="#" className='text-slate-800 '>+91 6200478590 </a>
                    </span>
                    
                </div>

            </div>
        </>
    )
}

export default Navbar