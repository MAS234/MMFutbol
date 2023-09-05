import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bienvenida from "../pages/Bienvenida";
import Inicio from "../pages/Inicio";
import Partidos from "../pages/Partidos/Partidos";
import PartidosJugados from "../pages/PartidosJugados/PartidosJugados";
import PantallaError from "../pages/Error/PantallaError";
import DetallesDelPartido from "../pages/DetallesPartido/DetallesDelPartido";
import Registrarse from "../pages/Registro/Registrarse";
import Logueo from "../pages/Logueo/Logueo";

export default function AppsRoutes() {
  return (
    <>

      <Router>
        <Routes>
            <Route path="/" element={<Bienvenida/>}/>
            <Route path="/registro" element={<Registrarse/>}/>
            <Route path="/login" element={<Logueo/>}/>
            

            
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/partidos" element={<Partidos/>}/>
            <Route path="/jugados" element={<PartidosJugados/>}/>
            <Route path="/detalles/:id" element={<DetallesDelPartido/>}/>

            {/* Error  */}
            <Route path="*" element={<PantallaError/>}/>

        </Routes>
      </Router>


    </>
  )
}
