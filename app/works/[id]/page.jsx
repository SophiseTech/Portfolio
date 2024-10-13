import { Header } from "@/app/Components/Common/Header"
import { navItems, works } from "@/app/constants"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/moving-border"

function page({ params }) {
  const { id } = params
  const work = works.find(item => item.id === parseInt(id))
  if (!work) return <p>404 | Work not found</p>
  return (
    <div>
      <Header title={work.clientName} breadcrumbs={[navItems.home, navItems.works, { label: work.clientName, path: "" }]} />
      <div className="flex flex-col items-center gap-20 md:gap-40 p-6 lg:p-16">
        <div className="flex flex-col items-center w-full">
          <img loading="lazy" className="w-3/4 md:w-2/6 relative top-0 z-50" src={work.thumbnail} alt="mockup_img" />
          <div className="w-full relative md:w-3/4">
            <Button
              as="div"
              duration={5000}
            >
              <BackgroundBeams />
              <div className="p-5 md:p-24  bg-background">
                <h1 className="text-2xl md:text-4xl text-center font-bold mb-5">{work.title}</h1>
                <p className="text-justify md:text-center tracking-wider leading-8 text-xl">{work.description}</p>
              </div>
            </Button>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-10 w-3/4">
          {work.mobileSS?.map((ss, index) => (
            <div key={index} className="border-[25px] border-gray-800">
              <img loading="lazy" src={ss} className="" alt="screenshot_mobile" />
            </div>
          ))}
        </div>

        <div className="w-3/4">
          <img loading="lazy" src={work.desktopSS} alt="screenshot_desktop" />
        </div>
      </div>
    </div>
  )
}

export default page