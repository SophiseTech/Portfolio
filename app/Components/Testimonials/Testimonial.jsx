
function Testimonials({ review: { imgSrc, reviews, customerData, companyName, rating } }) {
  return (

    <div className="w-[70vw] h-full bg-gradient-to-tr from-neutral-600 to-neutral-700 p-px  m-auto " >
      <div className=" p-10 h-full  bg-background flex justify-start items-start gap-5 ">
        <div className="relative w-4/12 h-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 371 442" fill="none" className="opacity-20">
            <path d="M1 441L370 1" stroke="white" vector-effect="non-scaling-stroke"></path>
            <path d="M370 441L1 1" stroke="white" vector-effect="non-scaling-stroke"></path>
            <path d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 
                        99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z"
              stroke="white" vector-effect="non-scaling-stroke">
            </path>
          </svg>

          <div className="absolute w-[75%] h-[75%] border bg-gray-900 flex items-center justify-center">
            <img className="h-full aspect-square" src={imgSrc} alt="business man" />
          </div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute -translate-x-1/2 -translate-y-1/2 left-0 top-0"></div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute translate-x-1/2 -translate-y-1/2 right-0 top-0"></div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute -translate-x-1/2 translate-y-1/2 left-0 bottom-0"></div>
          <div className="h-[0.5em] w-[0.5em] bg-white absolute translate-x-1/2 translate-y-1/2 right-0 bottom-0"></div>
        </div>

        <div className="flex flex-col gap-5 items-start justify-between flex-1 h-full">
          <div className="text-lg self-start text-xl">
            {reviews}
          </div>
          <div className="flex justify-between items-start w-full">
            <div>
              <h1 className="text-2xl tracking-wider">{customerData}</h1>
              <p className="text-sm">{companyName}</p>
            </div>
            <div className="flex items-end flex-col gap-2">
              <img src="/google.png" alt="google_logo" className="w-10" />
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
