import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';

const Hero = () => {
    return (
        <div className='mt-24'>
            <Slide
                autoplay={true}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                <div className="each-slide-effect">
                    {/* <img src="Assets/background.png" alt="background" className='absolute  h-auto   w-full ' /> */}
                    <div className='bg-cover bg-center	'
                        style={{
                            backgroundImage: 'url(Assets/background.png)'
                        }}
                    >
                        <span>
                            <div className=' flex  lg:justify-center'>
                                <span className='hidden md:block'>
                                    <img src="Assets/Car.png" alt="car.png" className=' lg:w-[41vh] absolute  bottom-0 md: w-[26vh]  ' />
                                </span>
                                <img src="Assets/car-tyre.png" alt="tyre" className=' w-[17vh] md:w-[25vh] lg:w-[50vh] ' />

                                <div className='w-full lg:w-[50%]'  >
                                    <h1 className='font-cursive font-bold'> Best Tyre Brands In The World</h1>
                                    <p className='text-[8px] md:text-[15px]'>Since its beginning in 1871, Continental’s relentless pursuit of progress
                                        has culminated in an impressive evolution into a thriving multinational
                                        enterprise, having over 190,000 employees in 61 countries and 12 production
                                        plants, celebrating its dynamic range, technical mastery, and forward-looking
                                        ethos....
                                    </p>
                                    <button className="btn btn-xs bg-gradient-to-r from-sky-500 to-indigo-500 ms-5 border-none  ">By Tyre  Online</button>
                                    <button className="btn btn-xs ms-5 hover:bg-gradient-to-r from-sky-500 to-indigo-500 border-none "> Emi Avilable</button>

                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='bg-cover bg-center	'
                        style={{
                            backgroundImage: 'url(Assets/background.png)'
                        }}
                    >
                        <span>
                        <div className=' flex  lg:justify-center'>
                                <span className='hidden md:block'>
                                    <img src="Assets/Car.png" alt="car.png" className=' lg:w-[41vh] absolute  bottom-0 md: w-[26vh]  ' />
                                </span>
                                <img src="Assets/car-tyre.png" alt="tyre" className=' w-[17vh] md:w-[25vh] lg:w-[50vh] ' />

                                <div className='w-full lg:w-[50%]'  >
                                    <h1 className='font-cursive font-bold'> Best Tyre Brands In The World</h1>
                                    <p className='text-[8px] md:text-[15px]'>Since its beginning in 1871, Continental’s relentless pursuit of progress
                                        has culminated in an impressive evolution into a thriving multinational
                                        enterprise, having over 190,000 employees in 61 countries and 12 production
                                        plants, celebrating its dynamic range, technical mastery, and forward-looking
                                        ethos....
                                    </p>
                                    <button className="btn btn-xs bg-gradient-to-r from-sky-500 to-indigo-500 ms-5 border-none  ">By Tyre  Online</button>
                                    <button className="btn btn-xs ms-5 hover:bg-gradient-to-r from-sky-500 to-indigo-500 border-none "> Emi Avilable</button>

                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='bg-cover bg-center	'
                        style={{
                            backgroundImage: 'url(Assets/background.png)'
                        }}
                    >
                        <span>
                        <div className=' flex  lg:justify-center'>
                                <span className='hidden md:block'>
                                    <img src="Assets/Car.png" alt="car.png" className=' lg:w-[41vh] absolute  bottom-0 md: w-[26vh]  ' />
                                </span>
                                <img src="Assets/car-tyre.png" alt="tyre" className=' w-[17vh] md:w-[25vh] lg:w-[50vh] ' />

                                <div className='w-full lg:w-[50%]'  >
                                    <h1 className='font-cursive font-bold'> Best Tyre Brands In The World</h1>
                                    <p className='text-[8px] md:text-[15px]'>Since its beginning in 1871, Continental’s relentless pursuit of progress
                                        has culminated in an impressive evolution into a thriving multinational
                                        enterprise, having over 190,000 employees in 61 countries and 12 production
                                        plants, celebrating its dynamic range, technical mastery, and forward-looking
                                        ethos....
                                    </p>
                                    <button className="btn btn-xs bg-gradient-to-r from-sky-500 to-indigo-500 ms-5 border-none  ">By Tyre  Online</button>
                                    <button className="btn btn-xs ms-5 hover:bg-gradient-to-r from-sky-500 to-indigo-500 border-none "> Emi Avilable</button>

                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Hero