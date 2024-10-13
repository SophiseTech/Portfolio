import { navItems, works } from "@/app/constants"

function Footer() {
  return (
    <div className="relative overflow-hidden w-full p-6 md:w-10/12 m-auto md:px-5 md:py-14">
      <div className="flex flex-row flex-wrap justify-between items-start">
        <div className="text-3xl font-semibold font-neo uppercase w-full basis-full md:basis-auto md:w-1/3 mb-3 md:mb-0">Nyon</div>
        <div className="basis-1/2 md:basis-auto">
          <FooterNavHeader label={"Quick Links"} />
          {Object.values(navItems).map((item, index) => (<FooterNavItem label={item.label} key={index} />))}
        </div>
        <div className="basis-1/2 md:basis-auto">
          <FooterNavHeader label={"Quick Peek"} />
          {works.slice(0, 3).map((item, index) => (<FooterNavItem label={item.clientName} key={index} />))}
        </div>
        <div className="basis-1/2 md:basis-auto">
          <FooterNavHeader label={"Legal"} />
          <FooterNavItem label={"Terms and Conditions"} />
          <FooterNavItem label={"Privacy Policy"} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-neutral-400 to-neutral-700 pb-[1px] mt-7 md:mt-14"></div>
      <div className="flex justify-between pt-6">
        <h1 className="text-stone-400 text-sm tracking-wider" >© 2024 Nyon Tech</h1>
        <div className="flex items-center gap-3">
          <FooterSocialIcon image={"/linkedin.png"} />
          <FooterSocialIcon image={"/twitter.png"} />
        </div>
      </div>
    </div>
  )
}

const FooterNavHeader = ({ label }) => (<h1 className="text-stone-400 mb-3 text-sm tracking-wider">{label}</h1>)
const FooterNavItem = ({ label }) => (<p className="text-white mb-3 text-sm tracking-wider first-letter:capitalize lowercase font-semibold">{label}</p>)
const FooterSocialIcon = ({ image, path }) => (<img className="w-5" src={image} />)

export default Footer