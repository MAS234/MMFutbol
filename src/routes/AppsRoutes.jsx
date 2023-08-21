import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bienvenida from "../componentes/Bienvenida";
import Inicio from "../componentes/Inicio";
import Partidos from "../componentes/Partidos/Partidos";
import PartidosJugados from "../componentes/PartidosJugados/PartidosJugados";

export default function AppsRoutes() {
  return (
    <>

      <Router>
        <Routes>
            <Route path="/" element={<Bienvenida/>}/>

            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/partidos" element={<Partidos/>}/>
            <Route path="/jugados" element={<PartidosJugados/>}/>
        </Routes>
      </Router>


    </>
  )
}
