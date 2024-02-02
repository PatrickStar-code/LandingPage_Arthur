import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ErrorPage } from "../Pages/ErrorPage";
import { Portifolio } from "../Pages/Portifolio";
import { Template } from "../Template";

export function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home/>} />
          <Route path="portifolio" element={<Portifolio/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </>
  );
}
