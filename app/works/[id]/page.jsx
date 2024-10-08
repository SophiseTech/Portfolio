import { Header } from "@/app/Components/Common/Header"
import { navItems, works } from "@/app/constants"

function page({ params }) {
  const { id } = params
  const work = works.find(item => item.id === parseInt(id))
  if (!work) return <p>404 | Work not found</p>
  return (
    <div>
      <Header title={work.clientName} breadcrumbs={[navItems.home, navItems.works, { label: work.clientName, path: "" }]} />
      <div className="flex flex-col items-center gap-40 p-6 lg:p-16">
        <div className="flex flex-col items-center">
          <img className="w-2/6 relative top-10" src={work.thumbnail} alt="mockup_img" />
          <div className="w-3/4 p-24  bg-background shadow-workDetailsCard">
            <h1 className="text-4xl text-center font-bold mb-5">{work.title}</h1>
            <p className="text-center tracking-wider leading-8 text-xl">{work.description}</p>
          </div>
        </div>

        <div className="flex gap-10 w-3/4">
          {work.mobileSS?.map((ss, index) => (
            <div key={index} className="border-[25px] border-gray-800">
              <img src={ss} className="" alt="screenshot_mobile" />
            </div>
          ))}
        </div>

        <div className="w-3/4">
          <img src={work.desktopSS} alt="screenshot_desktop" />
        </div>
      </div>
    </div>
  )
}

export default page