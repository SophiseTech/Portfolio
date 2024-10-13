
'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Fab = () => {

  return (
    <div class="group fixed bottom-10 right-10 z-50 flex items-end justify-end w-28 h-28 ">
      <div class="text-white flex items-center justify-center p-4 rounded-full border-2 backdrop-blur-lg border-silver z-20 absolute  ">
        <img src="/plus.svg" alt="plus icon" className="w-4 h-4 group-hover:rotate-90 transition-all duration-[0.6s]" />
      </div>

      <Link href={"mailto:info.nyontech@gmail.com"} target='_blank' className='bg-transparent border-2 border-silver absolute rounded-full scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex text-white cursor-pointer'>
        <ItemImg path={"/email.svg"} />
      </Link>
      <Link href={"tel:+918848118309"} target='_blank' className='bg-transparent border-2 border-silver absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  text-white'>
        <ItemImg path={"/telephone.svg"} />
      </Link>
      <Link href={"https://wa.link/723unf"} target='_blank' className='bg-transparent border-2 border-silver absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex text-white'>
        <ItemImg path={"/whatsapp.svg"} />
      </Link>
    </div>
  )
}

const ItemImg = ({ path }) => (<img src={path} alt="Send Email" className="w-10 h-10 p-2 hover:w-11 hover:h-11 transition-all duration-[0.2s] ease-out backdrop-blur-sm rounded-full" />)
export default Fab