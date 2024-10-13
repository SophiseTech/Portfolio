import GhostButtons from "@/app/Components/Buttons/GhostButtons";
import TransitionLink from "@/app/Components/TransitionLink";
import Link from "next/link";

function NavBar() {
  return (
    <div className=" w-full flex justify-center fixed top-0 z-50">
      <div className="grid grid-cols-3 items-center w-11/12">
        <div className="text-5xl font-semibold py-5 font-neo uppercase">Nyon</div>
        <div className="justify-self-center">
          <ul className="flex backdrop-blur-lg  bg-white/5 border border-stone-800 rounded-full shadow-lg shadow-white/5 border-1 my-2 px-3">

            <ListItem name="Home" />
            <ListItem name="About" />
            <ListItem name="Contacts" />
            <ListItem name="Works" path={'/works'} />
          </ul>
        </div>
        <div className="last-element p-3 justify-self-end">
          <SigningButtons names="Sign Up" />
          <SigningButtons names="Login" />

        </div>

      </div>
    </div>

  )
}

const ListItem = ({ name, path = "/#" }) => {
  return (
    <TransitionLink href={path}>
      <li className="cursor-pointer py-2 px-5 mx-2 my-2 hover:backdrop-blur-sm hover:bg-white/5 hover:rounded-full hover:shadow-lg hover:border-1 transition-all">
        {name}
      </li>
    </TransitionLink>
  );
};

const SigningButtons = ({ names }) => {
  return (
    <GhostButtons name={names} />
  )
}


export default NavBar
