'use client'
import "./About.css"
import FillButtons from "@/app/Components/Buttons/FillButtons"
import { TiltEffect } from "./TiltEffect"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the screen width is less than 768px (mobile devices)
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (!isMobile) {
        const marginStart = 120; // Initial margin-top for the first element
        const marginStep = 120;   // Increment step for each subsequent element
        // const minMargin = 60;    // Minimum margin-top to stop reducing

        // Select all elements with class 'reduce-margin-element'
        gsap.utils.toArray(".move-up-element").forEach((element, index) => {
          const initialMargin = marginStart + (index * marginStep); // Calculate initial margin for each element
          console.log(initialMargin);

          gsap.set(element, { marginTop: `${initialMargin}px` }); // Set initial margin-top

          // Scroll-triggered animation to reduce margin
          gsap.to(element, {
            marginTop: `${initialMargin / 2}px`, // Reduce margin to a minimum of 60px
            ease: "power1.out",
            scrollTrigger: {
              trigger: element, // Trigger animation for each element individually
              start: "top bottom", // Start when element enters viewport
              end: "bottom top",   // End when element leaves the viewport
              scrub: true,         // Sync animation with scroll
            }
          });
        });
      }
    }

  }, []);

  return (
    <>
      <div id="about" className="min-h-screen relative">
        <div className="w-full shadow-heroBottomGradient absolute left-0 right-0 -top-2 bg-background "></div>
        <div className="p-6 md:p-0 md:pt-10 md:w-10/12 md:m-auto">
          <div className=" w-full md:w-3/4  py-6 gap-10 relative z-50">
            <h1 className="font-grotesk bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4 text-5xl font-medium">Why choose us?</h1>
            <ul class="gradient-bullets" >
              <li className="text-xl font-extralight font-sans py-1"> <strong>Custom Solutions: </strong>We tailor every project to fit your unique needs, ensuring effective results.</li>
              <li className="text-xl font-extralight font-sans py-1 "><strong>Expert Team: </strong> Our skilled professionals excel in web development, AI, and software engineering. </li>
              <li className="text-xl font-extralight font-sans py-1"> <strong>Affordable & Agile: </strong> Competitive pricing with fast, flexible project delivery and regular updates.</li>
            </ul>
          </div>

          {/* mobile */}
          <div className="md:hidden w-full grid grid-cols-2 gap-4 mt-8 ">
            <div className="space-y-4">
              <TiltEffect imageSrc="/web.png" label="Web Development" />
              <TiltEffect imageSrc="/mobile.png" label="App Development" />
            </div>
            <div className="space-y-4 mt-[80px]">
              <TiltEffect imageSrc="/creator.png" label="AI solutions" />
              <TiltEffect imageSrc="/backend.png" label="Webasite Revamb" />
            </div>
          </div>

          {/* desktop */}
          <div className="w-full hidden md:flex justify-between flex-wrap gap-4 md:gap-8 mt-8 ">
            <TiltEffect imageSrc="/web.png" label="Web Development" />
            <TiltEffect className={'move-up-element'} imageSrc="/mobile.png" label="App Development" />
            <TiltEffect className={'move-up-element'} imageSrc="/creator.png" label="AI solutions" />
            <TiltEffect className={'move-up-element'} imageSrc="/backend.png" label="Webasite Revamb" />
          </div>
        </div>

      </div>
    </>

  )
}





export default About