import GhostButtons from "@/app/Components/Buttons/GhostButtons"
import { works } from "@/app/constants"
import Link from "next/link"

function Works() {
  return (
    <div className="p-6 lg:p-16 flex flex-col gap-80 items-center">
      {works.slice(0, 3).map((work, index) => <WorkItem work={work} key={index} />)}
    </div>
  )
}

const WorkItem = ({ work }) => (
  <div className={`w-11/12 flex gap-5 justify-between odd:flex-row-reverse group`}>
    <div className="w-1/2 relative flex items-center justify-center">
      <img src="/work_gradient.svg" alt="small_gradient" className="absolute inset-0" />
      <img src={work.thumbnail} alt="ghc_mockup" className="w-3/4 relative z-[1]" />
    </div>
    <div className="text-right group-odd:text-left w-1/3">
      <h1 className="text-5xl font-bold italic bg-clip-text bg-titleTextGradient text-transparent">{work.clientName}</h1>
      <h1 className="mt-5 text-xl tracking-wider">
        {work.description}
      </h1>
      <Link href={work.path} className="mt-5 block"><GhostButtons name={"View More"} /></Link>
    </div>
  </div>
)


export default Works