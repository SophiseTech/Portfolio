import FillButtons from "@/app/Components/Buttons/FillButtons"
import GhostButtons from "@/app/Components/Buttons/GhostButtons"
import { Cover } from "@/components/ui/cover"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import Link from "next/link"

function Main() {
  return (
    <div className="h-screen overflow-hidden relative flex items-center justify-center p-6 md:p-0">
      <ShootingStars />
      <StarsBackground />
      <img src="/spotlight.png" alt="sptlight_1" className="left-0 top-0 absolute" />
      <img src="/spotlight.png" alt="sptlight_2" className="scale-x-[-1] absolute right-0 top-0" />
      <div className="w-full md:w-8/12 flex flex-col items-center">
        <h2 className="text-center uppercase tracking-widest font-grotesk mb-4 md:mb-2 font-thin text-purple-500 text-xs md:text-sm">Your Premier Partner in Digital Solutions</h2>
        <h1 className="text-center first-letter:uppercase text-4xl md:text-6xl font-bold font-grotesk">Crafting Seamless Digital Spaces That Drive Your <Cover className="text-purple-400">Business Forward</Cover></h1>
        <h2 className="text-center mt-6 md:mt-3 tracking-wider md:text-xl">Have an idea or want to build your online presence? Let's connect today!</h2>
        <Link href={'/#contact'}>
          <Button />
        </Link>
      </div>
    </div >
  )
}

export default Main

const Button = () => (
  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block mt-4">
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </span>
    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-16 md:py-1 md:px-8 ring-1 ring-white/10 ">
      <span>
        Contact Us
      </span>
      <svg
        fill="none"
        height="16"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.75 8.75L14.25 12L10.75 15.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
  </button>
)