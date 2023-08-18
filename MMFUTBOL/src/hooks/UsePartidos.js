import { useContext } from "react";
import PartidosContext from "../context/PartidosProvider";

const UsePartidos = () => {
    return useContext(PartidosContext)
}

export default UsePartidos;