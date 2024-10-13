"use client"
import { animateOut } from "@/app/Components/animate"
import { usePathname, useRouter } from "next/navigation"


const TransitionLink = ({ href, label, className, children }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animateOut(href, router)
    }
  }

  return (
    <button
      className={className || ""}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default TransitionLink