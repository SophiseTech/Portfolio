import GhostButtons from "@/app/Components/Buttons/GhostButtons";
import Link from "next/link";

function NavBar() {
  return (
    <div className=" max-w-screen-xl flex justify-center fixed top-0 z-50">
      <div className="grid grid-cols-3 items-center w-full md:w-11/12">
        <div className="text-5xl font-semibold py-5 md:m-0 m-4 font-neo uppercase">Nyon</div>
      

          <div class="flex relative top-0 right-0 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <SigningButtons names="Contact Us" className="px-4 py-2 " />
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex backdrop-blur-lg  bg-white/5 border border-stone-800 rounded-full shadow-lg shadow-white/5 border-1 my-2 px-3">

            <ListItem name="Home" />
            <ListItem name="About" />
            <ListItem name="Contacts" />
            <ListItem name="Works" path={'/works'} />
          </ul>
        </div>
        {/* <div className="last-element p-3 justify-self-end">
          <SigningButtons names="Sign Up" />
          <SigningButtons names="Login" />

        </div> */}

      </div>
    </div>

  )
}

const ListItem = ({ name, path = "/#" }) => {
  return (
    <Link href={path}>
      <li className="cursor-pointer py-2 px-5 mx-2 my-2 hover:backdrop-blur-sm hover:bg-white/5 hover:rounded-full hover:shadow-lg hover:border-1 transition-all">
        {name}
      </li>
    </Link>
  );
};

const SigningButtons = ({ names }) => {
  return (
    <GhostButtons name={names} />
  )
}


export default NavBar