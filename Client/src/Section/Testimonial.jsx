import React from 'react'
import TestmonialCart from '../component/TestmonialCart'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Testimonial = () => {
  const feadbackData=[
    {"id":1,
      "name":"Justus Menke",
      "title":"CEO Eronaman",
      "description":"Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      "img":"",
    },
    {"id":2,
      "name":"Britain Eriksen",
      "title":"CEO Universal",
      "description":"Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      "img":"",
    },
    {"id":3,
      "name":"Justus Menke",
      "title":"CEO Eronaman",
      "description":"Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      "img":"",
    },
  ]
  
  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
      breakpoint: 300,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
];
  return (
    <div className=' mx-2  md:mx-24 my-4'>
   
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                {/* children here */}
                {
                  
                  feadbackData?.map(({id,name,title,description})=>{
                    return(
                      <TestmonialCart  key={id} id={id} name={name} title={title} description={description}  /> 
                       
                    )
                  })
                }
               
            </Slide>

      
    </div>
  )
}

export default Testimonial