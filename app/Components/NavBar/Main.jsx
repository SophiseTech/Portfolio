'use client'
import './Underline.css'
import GhostButtons from "@/app/Components/Buttons/GhostButtons";
import TransitionLink from "@/app/Components/TransitionLink";
import Link from "next/link";
import { useState, useEffect } from "react";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log("menu clicked")
  }
  return (
    <div className=" w-full flex fixed top-0 z-50">
      <div className="grid grid-rows-2 w-full backdrop-blur-sm bg-white/5 shadow-lg md:backdrop-blur-none md:bg-transparent md:shadow-none pb-5">
        <div className="grid grid-cols-2 gap-4 m-auto  md:grid-cols-3 items-center w-full md:w-11/12">
          <div className="text-5xl font-semibold py-5 md:m-0 m-4 font-neo uppercase">Nyon</div>



          {/* <SigningButtons names="Contact Us" className="px-4 py-2 " /> */}

          <div onClick={toggleMenu} className=" md:hidden flex items-center justify-end   mx-8 ">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)" className="w-10 h-10 "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
          </div>



          <div className="items-center justify-between hidden w-full md:flex">
            <ul className="flex backdrop-blur-lg  bg-white/5 border border-stone-800 rounded-full shadow-lg shadow-white/5 border-1 my-2 px-3">

              <ListItem name="Home" />
              <ListItem name="About" />
              <ListItem name="Contacts" />
              <ListItem name="Works" path={'/works'} />
            </ul>
          </div>
          <div className="hidden md:block  p-3 justify-self-end">
            <SigningButtons names="Contact Us" />


          </div>

        </div>
        {/* second row */}{isMenuOpen &&(
        <div className="md:hidden justify-self-center">
          <ul className="flex flex-col items-center  px-3">
            <LargeListItem name="Home" />
            <LargeListItem name="About" />
            <LargeListItem name="Contacts" />
            <LargeListItem name="Works" path={'/works'} />
          </ul>
        </div>
       )}
      </div>

    </div>

  )
}
const LargeListItem = ({ name, path = "/#" }) => {
  return (
    <Link href={path}>
      <li class="cursor-pointer py-2 px-5  font-display text-left link-underline  link-underline font-semibold text-lg font-oswald">
        {name}
      </li>
    </Link>
  );
};

const ListItem = ({ name, path = "/#" }) => {
  return (
    <TransitionLink href={path}>
      <li className="cursor-pointer py-2 px-5 mx-2 my-2 hover:backdrop-blur-sm hover:bg-white/5 hover:rounded-full hover:shadow-lg hover:border-1 transition-all">
        {name}
      </li>
    </TransitionLink>
  );
};



const SigningButtons = ({ names }) => {
  return (
    <GhostButtons name={names} />
  )
}


export default NavBar