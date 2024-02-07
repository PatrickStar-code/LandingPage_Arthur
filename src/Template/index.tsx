import { Outlet } from "react-router-dom";
import { Contato } from "./Components/Contato";
import { NavbarComponent } from "./Components/Navbar";

export function Template(){

    return (
      <> 
         <NavbarComponent />  
        <Outlet />
        <Contato />
      </>
    )
}