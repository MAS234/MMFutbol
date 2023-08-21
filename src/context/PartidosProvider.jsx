import { createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';

const PartidosContext = createContext();

const PartidosProvider = ({ children }) => {

    const [partidos, setPartidos] = useState([]);
    
    const [seleccionLeague, setSeleccionLeague] = useState(39);

    const [loading, setLoading] = useState(true);

useEffect(() => {

    const partidosData = async () =>{

        try {
            if (seleccionLeague !== null) {
              const respuesta = await axios.get(
                `https://v3.football.api-sports.io/fixtures?league=${seleccionLeague}&season=2023`,
                {
                  headers: {
                    "x-apisports-key": "b83f5a413036c3f8de516083d89c9fcc"
                  }
                }
              );
              setPartidos(respuesta.data.response);
              setLoading(false);
            }
          } catch (error) {
            console.log("Error al obtener los partidos");
            setLoading(false);
          }
        
    }

    partidosData();

}, [seleccionLeague]);

const SeleccionDeLiga = (id) => {
    setSeleccionLeague(id);
}


console.log(partidos)

  return (
    <PartidosContext.Provider
    value={{
        partidos,
        SeleccionDeLiga,
        loading
    }}
    >
     {children}
    </PartidosContext.Provider>
      
  )
  
}

PartidosProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export {PartidosProvider};

export default PartidosContext;
