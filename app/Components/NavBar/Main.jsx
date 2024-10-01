function NavBar() {
  const ListItem=({name})=>{
    return (
      <li className="p-3">
        {name}
      </li>
    );
  };
  return (
    <div>
      <div className="flex justify-between">
        <div  className="text-3xl font-semibold p-5">Nyon</div>
        <div >
            <ul className="flex">
            
               <ListItem name="Home"/>
               <ListItem name="About"/>
               <ListItem name="Contacts"/>
               <ListItem name="Project"/>
            </ul>
        </div>
        <div class="last-element">
            <button>Sign Up</button>
            <button>Login</button>
        </div>
        
        </div>
    </div>
 
  )

}

export default NavBar
