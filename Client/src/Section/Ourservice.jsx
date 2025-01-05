import React from 'react'
import Card from '../component/Card';

export const Ourservice = () => {
    const serviceData = [
        {
            "id": 1,
            "title": "Professional Tyre Fitting",
            "description": "Get your tyres fitted with precision by our team of experienced professionals.",
            "img": "Assets/service/thumbnail.png",
        },
        {
            "id": 2,
            "title": "Wide Range of Tyres",
            "description": "Choose from a comprehensive selection of MRF tyres for passenger cars, two-wheelers",
            "img": "Assets/service/thumbnail2.png",
        },
        {
            "id": 3,
            "title": "Free Tyre Fitting Service",
            "description": "Enjoy free tyre fitting with every tyre purchase from our showroom.",
            "img": "Assets/service/thumbnail3.png",
        },
        {
            "id": 4,
            "title": "Doorstep Delivery",
            "description": "We deliver tyres directly to your location,ensuring maximum convenience.",
            "img": "Assets/service/thumbnail4.png",
        },
        {
            "id": 5,
            "title": "Wide Range of Tyres",
            "description": "Choose from a comprehensive selection of MRF tyres for passenger cars, two-wheelers",
            "img": "Assets/service/thumbnail4.png",
        },
        {
            "id": 6,
            "title": "Feedback and Improvement",
            "description": "Your satisfaction is our priority! We value your feedback to continually improve our ullamco",
            "img": "Assets/service/thumbnail5.png",
        },

    ]

    console.log(serviceData);


    return (
        <div className=''>
            <img src="Assets/service/our-service-title.png" alt="our service" className='m-auto my-5' />
            <div className='grid grid-cols-1 gap-2 mx-2 md:mx-24 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    serviceData?.map(({ id, title, description, img }) => {
                        return (
                            <Card key={id} id={id} title={title} description={description} img={img} />
                        );
                    }

                    )
                }

            </div>
        </div>
    )
}
