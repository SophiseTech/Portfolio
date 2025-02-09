import { Header } from "@/app/Components/Common/Header";
import { navItems, works } from "@/app/constants"
import Link from "next/link";

function page() {
  return (
    <div>
      <Header title={"WHAT WE HAVE BUILT"} breadcrumbs={[navItems.home, navItems.works]} />
      <div className="p-6 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {works.map((work, index) => <WorkItem work={work} key={index} />)}
      </div>
    </div>
  )
}

const WorkItem = ({ work }) => (
  <div className="basis-1/3 bg-slate-900 p-5 rounded-md group">
    <div className="bg-[url('/workitem_bg.png')] bg-cover bg-no-repeat px-10 pt-10 bg-slate-800 flex justify-center overflow-hidden rounded-md">
      <img loading="lazy" src={work.singleSnap} alt="" className="w-full rotate-3 relative -bottom-3 shadow-xl group-hover:scale-105 transition-all duration-500" />
    </div>
    <div className="mt-9">
      <h1 className="text-xl font-bold font-grotesk">{work.clientName}</h1>
      <p className="line-clamp-2 mt-4 text-stone-300">{work.description}</p>

      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-start md:items-center mt-6">
        <div className="flex items-center">
          <img src="/workitem_icons/react.png" alt="" className="rounded-full aspect-square p-2 border border-gray-700" />
          <img src="/workitem_icons/tw.png" alt="" className="bg-slate-900 rounded-full aspect-square p-2 border border-gray-700 relative -left-1" />
          <img src="/workitem_icons/ts.png" alt="" className="bg-slate-900 rounded-full aspect-square p-2 border border-gray-700 relative -left-2" />
          <img src="/workitem_icons/threejs.png" alt="" className="bg-slate-900 rounded-full aspect-square p-2 border border-gray-700 relative -left-3" />
          <img src="/workitem_icons/idk.png" alt="" className="bg-slate-900 rounded-full aspect-square p-2 border border-gray-700 relative -left-4" />
        </div>
        <Link href={`/works/${work.id}`}>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-pink-500">View More</p>
            <img src="/Arrow.png" alt="" />
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default page