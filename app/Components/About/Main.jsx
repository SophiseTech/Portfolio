import "./About.css"
import FillButtons from "@/app/Components/Buttons/FillButtons"
function About() {
  return (
    <>
      <div className="p-6 lg:p-16 min-h-screen relative">
        <div className="w-full shadow-heroBottomGradient absolute left-0 right-0 -top-2 bg-background"></div>
        <div className="flex w-11/12 m-auto gap-10">
          <div className="w-5/12 relative flex items-center">
            <img src="/small_gradient.svg" alt="gradient" className="absolute" />

            <div className="">
              <Card />
            </div>
          </div>
          <div className="p-5 space-y-8 flex-1">
            {abouteItems.map((about, index) => <AboutItem key={index} index={index} title={about.title} desc={about.desc} />)}
          </div>
        </div>
      </div>
    </>

  )
}

const Card = () => (
  <div className="h-full w-full bg-gray-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-stone-700 py-5">
    <div className="border-b border-stone-800 pb-3">
      <div className="p-5 flex gap-2 justify-between ">
        <h1 className="text-lg font-bold">Ready to Grow Your Small Business Online?</h1>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-w-2 aspect-square bg-green-500 rounded-full"></div>
          <div className="w-2 h-w-2 aspect-square bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-w-2 aspect-square bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
    <div className="p-8">
      <ul className="gradient-bullets">
        <li className="text-lg mt-5">Need a professional website for your business?</li>
        <li className="text-lg mt-5">Want to attract more customers online?</li>
        <li className="text-lg mt-5">Looking to build trust and grow your brand?</li>
      </ul>
      <p className="tracking-wider text-lg mt-5">We'll create a stunning online presence that drives results!</p>
    </div>
    <div className="text-center border-t border-stone-800 pt-5">
      <FillButtons label={"Talk To Us"} />
    </div>
  </div>
)

const AboutItem = ({ title, desc, index }) => (
  <div className={`${index !== abouteItems.length - 1 && "border-b border-silver"} pb-8`}>
    <h1 className="text-silver text-4xl">{title}</h1>
    <p className="mt-3 tracking-widest font-thin">{desc}</p>
  </div>
)

const abouteItems = [
  {
    title: "What is Lorem Ipsum?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Why do we use it?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Where does it come from?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
]
export default About