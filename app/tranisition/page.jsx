'use client'


function page() {

  // useEffect(() => {
  //   gsap.timeline().to(".anim", {scaleX: .5}).to(".anim", {scaleY: "0.005"}).to(".anim", {scaleX: 1}).to(".anim", {scaleY: 1}).play();
  // }, [pathname])
  


  return (
    <>
      <div  className="anim absolute w-screen h-screen bg-cyan-900"></div>
      <div className="w-screen h-screen bg-gray-500 flex items-center justify-center text-black">page</div>
    </>
  )
}

export default page