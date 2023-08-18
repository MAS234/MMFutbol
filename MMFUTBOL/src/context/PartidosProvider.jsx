import { createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';

const PartidosContext = createContext();

const PartidosProvider = ({ children }) => {

    const [partidos, setPartidos] = useState([]);

useEffect(() => {

    const partidosData = async () =>{

        try{
            const respuesta = await axios.get(
                "https://v3.football.api-sports.io/fixtures?league=39&season=2023",
                {
                    headers: {
                        "x-apisports-key": "b83f5a413036c3f8de516083d89c9fcc"
                    }
                }
            );
            setPartidos(respuesta.data.response)
        }catch (error){
            console.log("Error al obtener los partidos")
        }
        
    }

    partidosData();

}, []);


console.log(partidos)

  return (
    <PartidosContext.Provider
    value={{
        partidos
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
