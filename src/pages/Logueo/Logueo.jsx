import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import PartidosContext from "../../context/PartidosProvider";
import google from "../../assets/Google.png"


function Logueo() {
  const navigate = useNavigate();
  const {login, loginGoogle} = useContext(PartidosContext);

  //   STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false)

//   FUNCION DE LOGUEO 
  const handleLogin = async () => {
    try {
        await login(email, password);
        alert("Logueado");
        navigate("/inicio");
      } catch (error) {
        console.error("Error al registrar:", error);
        alert("No se encontro el usuario(ocurrio un error)");
      }
  }

  const handleLoginGoogle = async () => {
    try {
        await loginGoogle();
        alert("Logueado");
        navigate("/inicio");
      } catch (error) {
        console.error("Error al registrar:", error);
        alert("No se encontro el usuario(ocurrio un error)");
      }
  }

//   VALIDACION 
  const validacion = (e) =>{
    e.preventDefault();


    if(email === "" || password === ""){
        setOpen(true)
    }else{
        setOpen(false)
        handleLogin();

    }
  }

  return (
    <div className="gradientCartaRegistro h-screen w-full flex flex-col justify-center items-center">
      <div className=" w-80 h-[70%] cardRyL shadow-lg shadow-gray-800 m-5">
        <h1 className="text-center text-white  text-2xl mt-5">INGRESAR</h1>
        {open && <p className="text-center text-white bg-red-600 mt-2 p-1 rounded-lg text-sm w-52 m-auto">TODOS LOS CAMPOS DEBEN ESTAR COMPLETOS</p>}

        <form className="flex flex-col gap-5 m-5">
          <div className="flex flex-col ">
            <label htmlFor="correo" className="text-white">
              Correo
            </label>

            <input
              type="email"
              id="correo"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 bg-transparent border border-white w-62 rounded-lg text-white"
              placeholder="Ingrese su correo"
              required
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="Contraseña" className="text-white">
              Contraseña
            </label>
            <input
              type="password"
              id="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 bg-transparent border border-white w-62 rounded-lg text-white"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button
            type="button"
            className="m-auto mt-[20%] uppercase w-52  text-white text-xl bg-[#37b6ff00] border p-2 rounded-lg hover:bg-[#37b6ff] duration-200"
            onClick={validacion}
          >
            Ingresa
          </button>
        </form>
      </div>

      <div className="flex items-center justify-evenly gap-2">
      <div
        className="cardRyL  w-32 text-white text-center p-3 text-xl  cursor-pointer"
        onClick={() => navigate("/")}
      >
        Volver
      </div>

      <div
        className="cardRyL flex justify-center items-center gap-3  w-36 text-white text-center p-3 text-xl  cursor-pointer"
        onClick={() => handleLoginGoogle()}
      >
        <img src={google } alt="google" className="w-6" />
        Google
      </div>
      </div>


    </div>
  );
}

export default Logueo;
