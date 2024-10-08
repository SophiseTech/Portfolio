'use client'
import Earth2 from "@/app/Components/Cobe"
import { useState } from "react";
import ContactForm from "@/app/Components/Contact/Form";

function Contact() {
  return (
    <div className="my-10 w-full dark:bg-background bg-background  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Let's Talk!
      </p>
      <ContactForm />
    </div>
  )
}

export default Contact