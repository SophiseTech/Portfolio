import GhostButtons from "@/app/Components/Buttons/GhostButtons"
import { works } from "@/app/constants"
import Link from "next/link"

function Works() {
  return (
    <div className="p-6 md:px-0 pt-16 md:w-10/12 m-auto flex flex-col gap-20 md:gap-80 items-center">
      {works.slice(0, 3).map((work, index) => <WorkItem work={work} key={index} />)}
    </div>
  )
}

const WorkItem = ({ work }) => (
  <div className={`w-full flex flex-col md:flex-row gap-5 justify-between odd:md:flex-row-reverse group`}>
    <div className="w-full md:w-1/2 relative flex items-center justify-center md:justify-start group-odd:md:justify-end">
      <img src="/work_gradient.svg" alt="small_gradient" className="absolute" />
      <img src={work.thumbnail} alt="ghc_mockup" className="w-3/4 relative z-[1]" />
    </div>
    <div className="mt-5 md:mt-0 text-right group-odd:text-left w-full md:w-1/3 relative z-10">
      <h1 className="text-3xl md:text-5xl font-bold  bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 text-transparent font-grotesk">{work.clientName}</h1>
      <h1 className="mt-5 line-clamp-3 md:line-clamp-none text-xl tracking-wider">
        {work.description}
      </h1>
      {work.path && <Link href={`/works/${work.id}`} className="mt-5 block"><GhostButtons name={"View More"} /></Link>}
    </div>
  </div>
)


export default Works