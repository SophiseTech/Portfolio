import "./About.css"
import FillButtons from "@/app/Components/Buttons/FillButtons"
import { TiltEffect } from "./TiltEffect"
function About() {
  return (
    <>
      <div className="p-6 lg:p-16 min-h-screen relative ">
        <div className="w-full  shadow-heroBottomGradient absolute left-0 right-0 -top-2 bg-background "></div>
        
        <div className=" w-3/4  py-6 gap-10 relative z-50">
        <h1 className="font-oswald bg-clip-text text-transparent bg-titleTextGradient mb-4 text-5xl font-medium">Why choose us?</h1>
        <ul class="gradient-bullets" >
          <li  className="text-xl font-extralight font-sans py-1"> <strong>Custom Solutions: </strong>We tailor every project to fit your unique needs, ensuring effective results.</li>
          <li className="text-xl font-extralight font-sans py-1 "><strong>Expert Team: </strong> Our skilled professionals excel in web development, AI, and software engineering. </li>
          <li className="text-xl font-extralight font-sans py-1"> <strong>Affordable & Agile: </strong> Competitive pricing with fast, flexible project delivery and regular updates.</li>
         </ul>
     </div>

     <div className="w-11/12 flex flex-wrap gap-16 mt-10 ">
     
      <TiltEffect imageSrc="/web.png" label="Web Development" />
      <TiltEffect imageSrc="/mobile.png" label="App Development" />
      <TiltEffect imageSrc="/creator.png" label="AI solutions"/>
      <TiltEffect imageSrc="/backend.png" label="Webasite Revamb"/>
    
     </div>
      </div>
    </>

  )
}





export default About