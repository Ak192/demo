import React from 'react'
import { IoIosStar } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
const Card = ({id,title,description,img}) => {
  return (
    <div className="card bg-base-100 w-68 shadow-xl h-[90%] overflow-hidden object-contain  ">
    <figure>
      <img
        src={`${img}`}
        alt="Shoes" className='w-full *:  ' />
    </figure>
    <div className="card-body bg-[#F7F6FA] ">
      <h2 className="card-title">{`${title}`}</h2>
      <p>{`${description}`}</p>
      <button className='w-10'>More...</button>
      <div className="card-actions justify-between">
       <div className='flex'>
       <IoIosStar color='yellow' />
       <IoIosStar color='gray' />
       <IoIosStar color='gray'/>
       <IoIosStar color='gray' />
       <IoIosStar color='gray' />
       </div>
       <CiBookmark />
      </div>
    </div>
  </div>
  )
}

export default Card