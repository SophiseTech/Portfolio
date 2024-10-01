
function Main() {
  return (
    <div className="h-screen overflow-hidden relative ">
      <img src="/hero_gradient.svg" alt="gradient_image" className="w-full absolute" />
      <div className="w-full aspect-square bg-black absolute rounded-full -translate-y-[10%] bottom-0 shadow-heroCircleShadow"></div>
      <div className="w-full h-7 blur-2xl absolute -bottom-5 bg-black"></div>
      <div className="relative z-[1] h-full">
        <div className="h-3/4 flex flex-col gap-5 justify-center items-center">
          <h1 class="bg-clip-text text-transparent bg-titleTextGradient text-center text-6xl ">
            Unlock the Power of AI <br />for Smarter Websites and Better Business
          </h1>
          <div className="flex gap-3">
            <button className="bg-white text-black px-5 py-2 rounded-full">Build Now</button>
            <button className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-full">View Works</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Main