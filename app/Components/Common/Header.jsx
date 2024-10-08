import Link from "next/link";

export const Header = ({ title, breadcrumbs }) => (
  <div className="h-[40vh] relative overflow-hidden">
    <img src="/small_gradient2.svg" alt="small_gradient" className="absolute inset-0 w-full h-full blur-3xl" />
    {/* <img src="/small_gradient.svg" alt="small_gradient" className="absolute left-0 h-full" /> */}
    <div className="w-full h-4 shadow-heroBottomGradient absolute z-[1] left-0 right-0 -bottom-0 bg-background"></div>

    <div className="bg-black/10 w-full h-full flex flex-col items-center justify-end pb-[5em] relative z-[2]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm tracking-widest text-pink-500 mt-2">
        {breadcrumbs?.map((crumb, index) => (
          <Link href={index === breadcrumbs.length - 1 ? "#" : crumb.path}>
            <span className={`${index !== 0 && "ml-2"} ${index === breadcrumbs.length - 1 && "text-white"}`}>{crumb.label}</span>
          </Link>
        ))}
      </p>
    </div>
  </div>
)