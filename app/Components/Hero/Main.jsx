import FillButtons from "@/app/Components/Buttons/FillButtons"
import GhostButtons from "@/app/Components/Buttons/GhostButtons"

function Main() {
  return (
    <div className="h-screen overflow-hidden relative ">
      <img src="/hero_gradient.svg" alt="gradient_image" className="w-full absolute" />
      <div className="w-full aspect-square bg-black absolute rounded-full -translate-y-[10%] bottom-0 shadow-heroCircleShadow"></div>
      <div className="relative z-[1] h-full">
        <div className="h-full flex flex-col gap-5 justify-center items-center">
          <h1 class="bg-clip-text text-transparent bg-titleTextGradient text-center text-6xl italic">
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