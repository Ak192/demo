import React from 'react'
import { IoIosStar } from "react-icons/io";

const TestmonialCart = ({id,name,title,description}) => {
  return (
    <div className='mx-2' key={id} >
      <div className='rounded-full w-14 h-14 flex justify-center items-center bg-black ms-4 '>
        {/* <span className='text-center text-3xl  text-red-700 text-center'>“ </span> */}
        <img src="Assets/coma.png" alt="coma" className='absolute text-center w-5' />
      </div>
      <div className="border-2 border-slate-200 mt-[-30px] pt-12 -z-10 ">
        <div className='flex mx-4'>
          <IoIosStar color='yellow' />
          <IoIosStar color='gray' />
          <IoIosStar color='gray' />
          <IoIosStar color='gray' />
          <IoIosStar color='gray' />
        </div>
        <p className='p-3'>{`${description}`}</p>
        <hr className='border-2 mx-2' />
        <div className='flex my-2 mx-10'>
          <div className=' '>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className='ms-2'>
            <h5 className='font-bold'>{`${name}`}</h5>
            <h6>{`${title}`}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestmonialCart