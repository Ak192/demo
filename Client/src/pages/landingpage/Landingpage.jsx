import React from 'react'

import Hero from '../../Section/Hero'
import { Ourservice } from '../../Section/Ourservice'
import PolicySection from '../../Section/PolicySection'
import Testimonial from '../../Section/Testimonial'
import Footer from '../../component/Footer'


const Landingpage = () => {
  return (
    <div>
        
        <Hero />
        <Ourservice />
        <PolicySection/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Landingpage