import React from 'react'

function Testimonials({imgSrc,Review, CustomerData}) {
    return (
        <div >
                     {/* most outer one */}
                     <div className=" bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 p-px  m-auto ">
            <div className=" p-10  bg-background flex justify-start items-center gap-5 ">
                <div className="relative w-1/2 h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 371 442" fill="none" class="quote__image-svg"><path d="M1 441L370 1" stroke="currentColor" vector-effect="non-scaling-stroke"></path><path d="M370 441L1 1" stroke="currentColor" vector-effect="non-scaling-stroke"></path><path d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z" stroke="currentColor" vector-effect="non-scaling-stroke"></path></svg>

                    <div className="absolute w-3/5  border bg-gray-900 flex items-center justify-center">
                        <img src={imgSrc} alt="business man" /></div>
                </div>

                <div className="flex flex-col gap-5 items-start ">
                    <div className="text-lg self-start">
                        {Review}
                    </div>

                    <div className="self-end">
                       {CustomerData}
                    </div>
                </div>


            </div>
        </div>

 
        </div>
    )
}

export default Testimonials
