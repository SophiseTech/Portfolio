
function Testimonials({ review: { imgSrc, reviews, customerData, companyName, rating } }) {
  return (

    <div className="w-[75vw] md:w-[50vw] h-full bg-gradient-to-tr from-neutral-600 to-neutral-700 p-px  m-auto " >
      <div className="p-5 md:first:p-10 h-full  bg-background flex justify-start items-start gap-5 ">
        <div className="relative w-4/12 h-full hidden md:flex items-center justify-center">
          <img src="/testimonialBg.svg" className="opacity-20" alt="" />

          <div className="absolute w-[75%] h-[75%] border bg-gray-900 flex items-center justify-center">
            <img loading="lazy" className="h-full aspect-square" src={imgSrc} alt="business man" />
          </div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute -translate-x-1/2 -translate-y-1/2 left-0 top-0"></div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute translate-x-1/2 -translate-y-1/2 right-0 top-0"></div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute -translate-x-1/2 translate-y-1/2 left-0 bottom-0"></div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute translate-x-1/2 translate-y-1/2 right-0 bottom-0"></div>
        </div>

        <div className="flex flex-col gap-5 items-start justify-between flex-1 h-full">
          <div className="self-start text-xl">
            {reviews}
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-between items-start w-full">
            <div>
              <h1 className="text-2xl tracking-wider">{customerData}</h1>
              <p className="text-sm">{companyName}</p>
            </div>
            <div className="flex items-end flex-col gap-2">
              <img src="/google.png" alt="google_logo" className="w-10 hidden md:block" />
              <div className="flex gap-2">
                {[...Array(rating)].map((_, i) => (
                  <img src="/star_color.png" key={"rating " + i} className="w-5" alt="" />
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <img src="/star_empty.png" key={"rating " + i} className="w-5" alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </div >



  )
}

export default Testimonials
