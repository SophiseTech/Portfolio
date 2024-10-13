'use client'
import { animateIn } from "@/app/Components/animate";
import { gsap } from "gsap";
import { useEffect } from "react";

function Template({ children }) {

  useEffect(() => {    
    animateIn()
  }, [])

  return (
    <>
 
      {children}
    </>
  )
}

export default Template