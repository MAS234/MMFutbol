import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bienvenida from "../componentes/Bienvenida";
import Inicio from "../componentes/Inicio";

export default function AppsRoutes() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Bienvenida/>}/>

            <Route path="/inicio" element={<Inicio/>}/>
        </Routes>
      </Router>
    </>
  )
}
