function NavBar() {
  const ListItem=({name})=>{
    return (
      <li className="py-2 px-5 mx-2 my-2 hover:backdrop-blur-sm hover:bg-white/5 hover:rounded-full hover:shadow-lg hover:border-1">
        {name}
      </li>
    );
  };
  const SigningButtons=({names})=>{
    return(
      <button className="mx-2 bg-transparent border-2 border-[#ff48bb] hover:bg-[#ff48bb] text-white px-5 py-2 rounded-full">{names}</button>
    )
  }
  return (
    <div className=" w-full flex justify-center   fixed top-0 z-50">
      <div className="flex justify-between items-center w-11/12">
        <div  className="text-3xl font-semibold p-5 ">Nyon</div>
        <div >
            <ul className="flex backdrop-blur-lg  bg-white/5 rounded-full shadow-lg shadow-white/5 border-1 my-2 px-3  ">
            
               <ListItem name="Home"/>
               <ListItem name="About"/>
               <ListItem name="Contacts"/>
               <ListItem name="Project"/>
            </ul>
        </div>
        <div className="last-element p-3">
            <SigningButtons names="Sign Up"/>
            <SigningButtons names="Login"/>
         
        </div>
        
        </div>
    </div>
 
  )

}

export default NavBar
