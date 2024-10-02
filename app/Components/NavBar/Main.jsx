
function NavBar() {
  const ListItem=({name})=>{
    return (
      <li className="py-2 px-5 mx-2 my-2 text-gray-300 hover:text-white hover:backdrop-blur-sm hover:bg-white/10 hover:rounded-full hover:shadow-lg hover:border-1">
        {name}
      </li>
    );
  };
  const SigningButtons=({names})=>{
    return(
      <button className="mx-2 hover:text-black text-blackbg-transparent border-2 border-white hover:bg-white px-5 py-2 rounded-full">{names}</button>
    )
  }
  return (
    <div className=" w-full flex justify-center fixed top-0 z-50">
      <div className="grid grid-cols-3 items-center w-11/12">
        <div  className=" text-3xl font-semibold p-5  justify-self-start">Nyon</div>
        <div >
            <ul className="flex justify-center bg-white/10 rounded-full  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50  border-stone-600 border-2 my-2 px-3  ">
            
               <ListItem name="Home"/>
               <ListItem name="About"/>
               <ListItem name="Contacts"/>
               <ListItem name="Project"/>
            </ul>
        </div>
        <div className="last-element p-3 justify-self-end">
        <button className="mx-2 text-black hover:text-white hover:bg-transparent border-2 border-white bg-white px-5 py-2 rounded-full">Sign Up</button>
        <button className="mx-2 hover:text-black text-blackbg-transparent border-2 border-white hover:bg-white px-5 py-2 rounded-full">Login</button>

         
        </div>
        
        </div>
    </div>
 
  )

}


export default NavBar
