'use client'
import FillButtons from "@/app/Components/Buttons/FillButtons";
import { works } from "@/app/constants"
import { useEffect, useRef, useState } from "react";

function page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const imageRefs = useRef([])

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const padding = 8

  useEffect(() => {

    contentRefs.current.forEach((ref, index) => {
      if (ref && activeIndex !== index) {
        ref.style.height = '0px';
        ref.style.paddingTop = "0px"
        ref.style.paddingBottom = "0px"
      } else if (ref) {
        ref.style.height = (imageRefs.current[index].clientHeight + 2 * padding) + 'px';
        ref.style.paddingTop = padding + "px"
        ref.style.paddingBottom = padding + "px"
      }
    });
  }, [activeIndex]);

  return (
    <div>
      <Header />
      <div className="">
        {works.map((work, index) => <WorkItem contentRefs={contentRefs} imageRefs={imageRefs} toggleAccordion={toggleAccordion} index={index} work={work} key={index} />)}
      </div>
    </div>
  )
}

const Header = () => (
  <div className="h-[40vh] relative overflow-hidden">
    <img src="/small_gradient2.svg" alt="small_gradient" className="absolute inset-0 w-full h-full blur-3xl" />
    {/* <img src="/small_gradient.svg" alt="small_gradient" className="absolute left-0 h-full" /> */}
    <div className="w-full h-4 shadow-heroBottomGradient absolute z-[1] left-0 right-0 -bottom-0 bg-background"></div>

    <div className="bg-black/10 w-full h-full flex flex-col items-center justify-end pb-[5em] relative z-[2]">
      <h1 className="text-3xl font-bold">WHAT WE HAVE BUILT</h1>
      <p className="text-sm tracking-widest text-pink-500 mt-2">HOME  <span className="ml-2 text-white">WORKS</span></p>
    </div>
  </div>
)

const WorkItem = ({ work, toggleAccordion, index, contentRefs, imageRefs }) => (
  <div className={`${index === 0 && "border-t"} border-b border-silver py-8 px-8`}>
    <div
      className="flex justify-between"
      onClick={() => { toggleAccordion(index) }}
    >
      <button
        className="w-full text-left focus:outline-none text-3xl tracking-widest font-bold italic text-silver"
      >
        {work.clientName}
      </button>
      <img src="/down.png" alt="down_arrow" className="border-2 border-silver rounded-full p-3" />
    </div>
    <div
      ref={(el) => (contentRefs.current[index] = el)}
      className={`text-sm tracking-wider transition-all ease-in-out overflow-hidden h-0 py-0 flex items-center justify-between`}
    >
      <div>
        <p className="w-1/2 text-xl tracking-widest">
          {work.description}
        </p>
        <FillButtons label={"View More"} className={'mt-5'} />
      </div>
      <img ref={(el) => (imageRefs.current[index] = el)} src={work.thumbnail} alt="" className="w-1/3" />
    </div>
  </div>
)

export default page