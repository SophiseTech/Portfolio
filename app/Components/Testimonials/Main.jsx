"use client"
import React from 'react'
import Testimonials from './Testimonial'
import { Carousel } from "@/components/ui/apple-cards-carousel";
function TestimonialsArea() {
  let testimonialData = [
    {
      id: 0,
      imgSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
      reviews: "lorem Lorem ipsum dolor sit amet. Qui eaque animi aut voluptatem quae eum iusto obcaecati. Vel minima debitis et quia nihil vel eveniet ullam aut reiciendis molestiae et nisi deleniti non sapiente rerum est quod vitae.",
      customerData: "Mark",
      companyName: "XYZ Company",
      rating: 5
    },
    {
      id: 1,
      imgSrc: 'https://randomuser.me/api/portraits/men/36.jpg',
      reviews: "lorem Lorem ipsum dolor sit amet. Qui eaque animi aut voluptatem quae eum iusto obcaecati. Vel minima debitis et quia nihil vel eveniet ullam aut reiciendis molestiae et nisi deleniti non sapiente rerum est quod vitae.",
      customerData: "Mark",
      companyName: "XYZ Company",
      rating: 5
    },
    {
      id: 2,
      imgSrc: 'https://randomuser.me/api/portraits/men/40.jpg',
      reviews: "lorem Lorem ipsum dolor sit amet. Qui eaque animi aut voluptatem quae eum iusto obcaecati.",
      customerData: "Mark",
      companyName: "XYZ Company",
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
