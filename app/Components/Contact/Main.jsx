'use client'
import Earth2 from "@/app/Components/Cobe"
import { useState } from "react";
import emailjs from 'emailjs-com'
import ContactForm from "@/app/Components/Contact/Form";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ""
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (loading) return
    setLoading(true)
    e.preventDefault();
    console.log('Form Data:', formData);
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;
    const data = { ...formData, to_email: "info.nyontech@gmail.com" }
    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the email.');
      })
      .finally(() => {
        setLoading(false)
        setFormData({
          name: '',
          email: '',
          requirement: ""
        })
      })
    // You can perform API call or other actions here
  };
  return (
    // <div className="relative z-[2] max-sm:hidden flex items-center w-10/12 m-auto gap-16">
    //   <div className="w-1/2">
    //     <div className="bg-white/5 border border-stone-800 rounded-lg w-auto backdrop-blur-2xl p-8 shadow-contactCard">
    //       <h1 className="text-4xl">Request a Callback!</h1>
    //       <p className="mt-3 text-purple-500">Our execuive are ready to hear you proposals 24x7</p>
    //       <div className="mt-10 flex flex-col gap-10">
    //         <div className="bg-gradient-to-r from-blue-800 to-purple-800 pb-[1px]">
    //           <input
    //             type="text"
    //             className="w-full bg-[#161616] focus:outline-none p-3 py-2"
    //             placeholder="Name"
    //             value={formData.name}
    //             onChange={handleChange}
    //             name="name"
    //           />
    //         </div>
    //         <div className="bg-gradient-to-r from-blue-800 to-purple-800 pb-[1px]">
    //           <input
    //             type="text"
    //             className="w-full bg-[#161616] focus:outline-none p-3 py-2"
    //             placeholder="Email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             name="email"
    //           />
    //         </div>
    //         <div className="bg-gradient-to-r from-blue-800 to-purple-800 pb-[1px]">
    //           <input
    //             type="text"
    //             className="w-full bg-[#161616] focus:outline-none p-3 py-2"
    //             placeholder="What are you building?"
    //             value={formData.requirement}
    //             onChange={handleChange}
    //             name="requirement"
    //           />
    //         </div>
    //         <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-[2px] rounded-full w-fit">
    //           <button
    //             onClick={handleSubmit}
    //             className={`bg-[#161616] focus:outline-none px-10 py-2 rounded-full flex items-center gap-3 ${loading ? "cursor-not-allowed bg-[#161616]/80" : "bg-[#161616]"}`}
    //             placeholder="What are you building?"
    //           >
    //             {loading && <img src="/spinner.svg" alt="" />}
    //             Submit
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Earth2 />
    // </div>
    <div className="my-10 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Let's Talk!
      </p>
      <ContactForm />
    </div>
  )
}

export default Contact