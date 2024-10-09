
'use client'
import React, { useState } from 'react'

const FAB = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMailClick = () => {
       // Use mailto to open the user's email client
       window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info.nyontech@gmail.com', '_blank');
       ;
        console.log("Gmail opened in new tab");
      };
      const handleWhatsappClick = () => {
      
        window.open('https://wa.link/723unf', '_blank');
        ;
         console.log("Whatsapp opened in new tab");
       };
       const handlePhoneClick = () => {
       
        window.location.href = 'tel:+918848118309'; 
        console.log("Phone app opened");
    };
    return (
        <div class="group fixed bottom-0 right-0 p-4 z-50  flex items-end justify-end w-24 h-24 ">
          

            <div class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-b from-neutral-200 to-neutral-500 z-20 absolute  ">
                <img src="/plus.svg" alt="plus icon"  className="w-3 h-3 group-hover:rotate-90 transition  transition-all duration-[0.6s]" />
            </div>

           {/* email icon */}
           <div
        onClick={handleMailClick}
        className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-gray-600 hover:bg-slate-950 text-white cursor-pointer"
      >
        <img src="/email.svg" alt="Send Email" className="w-5 h-5" />
      </div>
         {/* phone click */}
            <div onClick={handlePhoneClick} class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3  bg-blue-300 hover:bg-blue-400  text-white">
         <img src="/telephone.svg" alt="telephone" className="w-5 h-5" />
            </div>
{/* whatssapp */}
            <div onClick={handleWhatsappClick} class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
               <img src="/whatsapp.svg" alt="whatsapp"  className="w-5 h-5" />
            </div>
        </div>
    )
}
export default FAB