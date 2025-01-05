import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Ourservice } from '../../Section/Ourservice';
import Footer from '../../component/Footer';

const Aboutus = () => {
  return (
    <div className=''>
      {/* about us hero section */}
      <div className="w-full bg-[#737A82] bg-opacity-70 mt-16  lg:flex block px-10  ">
        <div className='absolute  lg:w-[35rem] w-[28rem] h-[26rem]  lg:h-[33rem] rounded-full bg-black  left-[-35%] lg:left-[-120px] -z-10'> </div>
        <div className='lg:w-[46%] w-full '>
          <h1 className=' text-3xl lg:text-9xl font-bold text-[#fff] leading-none '>ABOUT US</h1>
          <img src="Assets/multiple-tyres.png" alt="tyres image" className='lg:ms-14 ms-0' />
        </div>
        <div className=" w-full  lg:w-[54%] pt-10">
          <h1 className='text-3xl font-bold text-white font-serif'>Our History</h1>
          <p className='text-white font-sans'><span className='font-bold text-2xl'> Welcome to Shree Shyam Tyre hub,</span>  your trusted destination for top – quality MRF tyres and unmatched customer service.
            At Shree Shyam Tyre hub, we take pride in being an Exclusive dealer of MRF Tyres ,one of India’s most reliable and reputed tyre brands.
            We offering a wide range of tyres for cars , bikes , trucks , commercial vehicle and many more.
            with a focus on quality and customer satisfaction , we aim to provide the best products to keep your journey smooth and safe.
          </p>
          <div>
            <h4 className='text-white font-bold text-xl '>Why Choose Shree Shyam Tyre Hub ?</h4>
            <ul className='text-white text-md'>
              <li className='flex gap-x-2' ><IoMdCheckmarkCircleOutline color='green' /> 100 % genuine MRF Tyres for all vehicle types.</li>
              <li className='flex gap-x-2' ><IoMdCheckmarkCircleOutline color='green'  /> Dedicated to quality and customer satisfaction.</li>
              <li className='flex gap-x-2 '><IoMdCheckmarkCircleOutline color='green'  /> Expert advice to help you pick the perfect tyre based on your need and budget.</li>
              <li className='flex gap-x-2' ><IoMdCheckmarkCircleOutline  color='green' /> Your satisfaction is our priority , and we strive to provide you with a seamless buying experience. </li>
            </ul>
            <h3 className='font-bold text-2xl text-white'>Drive with confidence – Visit Shree Shyam Tyre Hub and experience the perfect blend of MRF quality and expert fitment!
            </h3>
          </div>
        </div>
      </div>
      <Ourservice />
      <Footer />
    </div>


  )
}

export default Aboutus