import FillButtons from "@/app/Components/Buttons/FillButtons"
import GhostButtons from "@/app/Components/Buttons/GhostButtons"

function Main() {
  return (
    <div className="h-screen overflow-hidden relative ">
      <img src="/hero_gradient.svg" alt="gradient_image" className="hidden md:block md:w-full absolute" />
      <img src="/mobile_hero_gradient.svg" alt="gradient_image" className="md:hidden absolute" />
      <div className="hidden md:block w-full aspect-square bg-black absolute rounded-full -translate-y-[10%] bottom-0 shadow-heroCircleShadow"></div>
      <div className="relative z-[1] h-full p-6 md:p-0">
        <div className="h-full flex flex-col gap-5 items-start justify-center md:items-center">
          <h1 class="bg-clip-text text-transparent bg-white font-bold text-4xl text-left md:text-center md:text-6xl font-grotesk">
            Unlock the Power of AI <br />for Smarter Websites and Better Business
          </h1>
          <div className="flex gap-3">
            <FillButtons label={"Build Now"} />
            <GhostButtons name={"View Works"} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Main