"use client";
import React, {useState} from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/moving-border";
import emailjs from 'emailjs-com'

export default function ContactForm() {
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
          requirement: "",
          phone: ""
        })
      })
    // You can perform API call or other actions here
  };

  return (
    <Button
      as="div"
      containerClassName={"max-w-4xl w-full"}
      duration={5000}
    >
      <div
        className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative z-10">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get a call from us!
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Our executives will call you within 20 minutes!
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">First name</Label>
            <Input id="name" placeholder="Tyler" type="text" name="name" value={formData.name} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Mobile</Label>
            <Input id="phone" placeholder="+91 9496525959" type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" name="email" value={formData.email} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">What's in your mind? (Optional)</Label>
            <Input id="password" placeholder="Requirement" type="text" name="requirement" value={formData.requirement} onChange={handleChange} />
          </LabelInputContainer>

          <button
            className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full
                rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
               dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] items-center justify-center flex gap-3 ${loading ? "text-neutral-500 cursor-not-allowed" : "text-white"}`}
            type="submit">
            Get a Call {loading ? <img src="/spinner.svg" alt="" /> : <span>&rarr;</span>}
            <BottomGradient />
          </button>
        </form>
      </div>
    </Button>
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
