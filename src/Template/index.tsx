import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./Components/Navbar";
import { Contato } from "./Components/Contato";

export function Template(){

    return (
      <> 
         <NavbarComponent />  
        <Outlet />
        <Contato />
      </>
    )
}