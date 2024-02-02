import { HashRouter } from "react-router-dom";
import { Rotas } from "./Rotas";

export function App() {

  return (
    <HashRouter basename="/">
        <Rotas />
    </HashRouter>
  )
}

