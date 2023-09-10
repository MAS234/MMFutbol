import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";


//FIREBASE
import {auth} from "../firebase/firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const PartidosContext = createContext();

const PartidosProvider = ({ children }) => {


  // FIREBASE 

  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth,email, password);
    console.log(response);
  }

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  }

  const loginGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  }

  const logout = async () => {
    const response = await signOut();
    console.log(response);
  }

  const registrarseGoogle = async () => {
    try{
      const responseGoogle = new GoogleAuthProvider();
      await signInWithPopup(auth, responseGoogle);
      alert("Registrado correctamente con google")
    }
    catch(error){
      console.log("Ocurrio un error al registrarse", error)
    }
  }



  // TERMINA FUNCIONES DE FIREBASE 

  const [partidos, setPartidos] = useState([]);

  const [seleccionLeague, setSeleccionLeague] = useState(39);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const partidosData = async () => {
      try {
        if (seleccionLeague !== null) {
          const respuesta = await axios.get(
            `https://v3.football.api-sports.io/fixtures?league=${seleccionLeague}&season=2023`,
            {
              headers: {
                "x-apisports-key": "b83f5a413036c3f8de516083d89c9fcc",
              },
            }
          );
          setPartidos(respuesta.data.response);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error al obtener los partidos");
        setLoading(false);
      }
    };

    partidosData();
  }, [seleccionLeague]);

  const SeleccionDeLiga = (id) => {
    setSeleccionLeague(id);
  };


  return (
    <PartidosContext.Provider
      value={{
        partidos,
        SeleccionDeLiga,
        loading,
        register,
        login,
        loginGoogle,
        logout,
        registrarseGoogle,
        auth
      }}
    >
      {children}
    </PartidosContext.Provider>
  );
};

PartidosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PartidosProvider };

export default PartidosContext;
