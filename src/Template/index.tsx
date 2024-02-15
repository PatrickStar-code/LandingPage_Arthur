import { Outlet } from "react-router-dom";
import { Contato } from "./Components/Contato";
import { NavbarComponent } from "./Components/Navbar";
import { Whatsapp_button } from "./Components/Whatsapp_button";

export function Template(){

    return (
      <> 
         <NavbarComponent />  
        <Outlet />
        <Contato />
        <Whatsapp_button />
      </>
    )
}