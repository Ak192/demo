import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <div className="flex">
                    <img src="Assets/Logo.png" alt="upload image" width={50} />
                    <span className='m-auto'>
                        <h4 className='font-serif font-bold text-[13px] text-center md:text-xl md:text-start  '> SHREE SHYAM TYRE HUB </h4>
                        <h6 className='text-center font-bold text-slate-400 leading-3'>MRF Exclusive </h6>

                    </span>
                </div>
                <div className='m-auto'>
                    <div className='flex gap-5 my-2'>
                        <FiMapPin className='text-xl ' color='#3A86FF' />
                        <span className='text-[#77808B]'>8819 Ohio St. South Gate,
                            CA 90280</span>
                    </div >
                    <div className='flex gap-5 my-2'>
                        <CgMail className='text-xl ' color='#3A86FF' />
                        <span className='text-[#77808B]'>Ourstudio@hello.com</span>
                    </div>
                    <div className='flex gap-5 my-2'>
                        <MdOutlinePhone className='text-xl ' color='#3A86FF' />
                        <span className='text-[#77808B]'>+1 386-688-3295</span>
                    </div>
                </div>
                <div className='flex m-auto gap-2'>
                <a href="#" ><FaInstagram className='text-xl ' color='#3A86FF'  /></a>
                <a href="#"><FaFacebook className='text-xl ' color='#3A86FF'  /></a>
                </div>
            </aside>

            <nav>
                <h6 className="footer-title text-[#3A86FF]">Services</h6>
                <a className="link link-hover">Professional Tyre Fitting</a>
                <a className="link link-hover">Wide Range of Tyres</a>
                <a className="link link-hover">Doorstep Delivery</a>
                <a className="link link-hover">Same-Day Delivery</a>
                <a className="link link-hover">Feedback and Improvement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#3A86FF]">Gallary</h6>
                <div className='grid grid-cols-2 w-40 gap-2  '>
                    <img src="Assets/service/thumbnail.png" alt="gallary" className='rounded-md' />
                    <img src="Assets/service/thumbnail2.png" alt="gallary" className='rounded-md' />
                    <img src="Assets/service/thumbnail3.png" alt="gallary" className='rounded-md'/>
                    <img src="Assets/service/thumbnail4.png" alt="gallary" className='rounded-md'/>
                </div>
               

            </nav>
            <nav>
                <h6 className="footer-title text-[#3A86FF]">Location</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29385602.58073298!2d85.27224719999998!3d25.964442700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734587499991!5m2!1sen!2sin" className='w-40 h-40 rounded-full' ></iframe>
            </nav>
        </footer>
    )
}

export default Footer