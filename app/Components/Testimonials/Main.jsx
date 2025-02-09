"use client"
import React from 'react'
import Testimonials from './Testimonial'
import { Carousel } from "@/components/ui/apple-cards-carousel";
function TestimonialsArea() {
  let testimonialData = [
    {
      id: 0,
      imgSrc: 'reviews/yoroi.jpg',
      reviews: "I had my website developed by Nyon Tech and i am happy about the output. We had a great interaction to accomplish what I was looking for.",
      customerData: "Vipin M J",
      companyName: "YOROI Entertainment, Canada",
      rating: 5
    },
    {
      id: 1,
      imgSrc: 'reviews/rio.jpg',
      reviews: "Good service. Unique designs and timely delivery. Highly recommend",
      customerData: "Derin",
      companyName: "Rio Livings",
      rating: 5
    },
    {
      id: 2,
      imgSrc: 'reviews/knr.jpg',
      reviews: "We had a great time working with Nyon Tech. They provided good service and was patient throughout the process",
      customerData: "Amal Jose P",
      companyName: "KNR Technologies",
      rating: 4
    }
  ]

  let items = testimonialData.map(data =>
    <Testimonials review={data} />)
  return (
    <div>
      <div className="w-10/12 relative m-auto" >
        <div className="text-5xl font-bold font-grotesk my-10 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 text-transparent">Clients that<br />believe in us</div>

        <Carousel items={items} />
      </div>


    </div>





  )
}

export default TestimonialsArea
