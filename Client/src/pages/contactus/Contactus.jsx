import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'


const Contactus = () => {
  return (
    <div>
      <div className='mt-16'>
        <h1 className='lg:text-9xl text-6xl px-20 font-extrabold'>Contact us</h1>
      </div>
      <div className='w-full lg:flex block md:px-20 px-10'>
        <div className='w-1/2'>
          <Link to='/'>
            <div className="block">
              <img src="Assets/Logo.png" alt="upload image" width={300} />
              <span className='m-auto'>
                <h4 className='font-serif font-bold text-[13px] text-center md:text-xl md:text-start  '> SHREE SHYAM TYRE HUB </h4>
                <h6 className=' font-bold text-slate-400 leading-3'>MRF Exclusive </h6>

              </span>
            </div>
          </Link>
        </div>
        <div className='lg:w-1/2 w-full'>
          <form action="">
            <label className="input input-bordered flex items-center gap-2 my-2">
              Name
              <input type="text" className="grow " placeholder="John don" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2 ">
              Email
              <input type="text" className="grow my-2 " placeholder="john@gmail.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2">
              Phone
              <input type="phone" className="grow my-2" placeholder="+91" />
            </label>
            <textarea placeholder="comment" className="textarea textarea-bordered textarea-lg w-full my-2 ">
            </textarea>
            <button className="btn btn-wide my-2 w-full  bg-gradient-to-r from-sky-500 to-indigo-500 ">Wide</button>
          </form>
        </div>
      </div>
      <div className='m-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726741.0093434153!2d84.13276393774072!3d25.81014820031586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59001e3e5c53%3A0x5b734c2bc912ab20!2sDome%20Toli!5e1!3m2!1sen!2sin!4v1735711405109!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full rounded-md ' />
      </div>
      <Footer />
    </div>
  )
}

export default Contactus