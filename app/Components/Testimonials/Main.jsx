"use client"
import React, {Component}  from 'react'
import Testimonials from './Testimonial'
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
function TestimonialsArea() {
  let testimonialData =[
    {
      id:0,
      imgSrc:'/business-man.png',
      reviews:"lorem Lorem ipsum dolor sit amet. Qui eaque animi aut voluptatem quae eum iusto obcaecati. Vel minima debitis et quia nihil vel eveniet ullam aut reiciendis molestiae et nisi deleniti non sapiente rerum est quod vitae.",
      customerData:"Mark XYZ Company",
    },
    {
      id:1,
      imgSrc:'/business-man.png',
      reviews:"lorem Lorem ipsum dolor sit amet. Qui eaque animi aut voluptatem quae eum iusto obcaecati. Vel minima debitis et quia nihil vel eveniet ullam aut reiciendis molestiae et nisi deleniti non sapiente rerum est quod vitae.",
      customerData:"Mark XYZ Company",
    },
    {
      id:2,
      imgSrc:'/business-man.png',
      reviews:"lorem Lorem ipsum dolor sit amet. Qui eaque animi aut voluptatem quae eum iusto obcaecati.",
      customerData:"Mark XYZ Company",
    }
  ]
  let sliderBoxStyle = {
    width:"100%",
    
    background: "var(--background)",
   margin:"10px",
   padding:"10px"
  };

  let itemsStyle = {
 
    width: "100%",
    padding: "0px",
    background: "var(--background)",
 

  };

  let items=testimonialData.map(data =>
  <Testimonials imgSrc={data.imgSrc} Review={data.reviews} CustomerData={data.customerData} />)
  return (
    <div>
           <div className="w-10/12 relative m-auto" >
            <div className="text-5xl  my-10 font-bold font-oswald bg-clip-text bg-titleTextGradient text-transparent">What our <br/>customers think?</div>
           
            <Carousel items={items} />
      </div>

    
</div>





  )
}

export default TestimonialsArea
