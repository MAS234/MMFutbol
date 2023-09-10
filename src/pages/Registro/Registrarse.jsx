import { useState, useContext } from "react";
import PartidosContext from "../../context/PartidosProvider";
import { useNavigate } from "react-router-dom";
import google from "../../assets/Google.png"


function Registrarse() {

  const navigate = useNavigate();
  const {register, GoogleAuthProvider, signInWithPopup, auth} = useContext(PartidosContext);

  // STATES
  const [nombre, setNombre] = useState("");  
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [openContraseña, setOpenContraseña] = useState(false);
  
  // FUNCION DE REGISTRARSE 
  const handleRegister = async () => {
    try {
      await register(emailRegister, passwordRegister);
      alert("Registrado con éxito");
      navigate("/inicio");
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const registrarseGoogle = async () => {
    try{
      const responseGoogle = new GoogleAuthProvider();
      await signInWithPopup(auth, responseGoogle);
      alert("Registrado correctamente con google")
      navigate("/inicio");
    }
    catch(error){
      console.log("Ocurrio un error al registrarse", error)
    }
  }


    // VALIDACIONES 
    const validarFormulario =  (e) => {
      e.preventDefault();

      if(nombre === "" || emailRegister === "" || passwordRegister === "" || confirmarPassword === ""){
        setOpen(true);

      }else{
        setOpen(false)

        if(passwordRegister !== confirmarPassword){
          setOpenContraseña(true)
        }
        else{

          setOpenContraseña(false)
          handleRegister();
        }
      }
    }

  return (
    <div className="gradientCartaRegistro h-screen w-full flex flex-col justify-center items-center">

      <div className=" w-80 h-[95%] cardRyL shadow-lg shadow-gray-800 m-5">

        <h1 className="text-center text-white  text-2xl mt-5">REGISTRATE</h1>
        {/* VALIDACION  */}
        {open && <p className="text-center text-white bg-red-600 mt-2 p-1 rounded-lg text-sm w-52 m-auto">TODOS LOS CAMPOS DEBEN ESTAR COMPLETOS</p>}
        <form  className="flex flex-col gap-5 m-5">

            <div className="flex flex-col ">
            <label htmlFor="nombre" className="text-white">Nombre</label>
            <input 
            type="text" 
            id="nombre" 
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Ingrese su nombre" 
            required/>
            </div>

            <div className="flex flex-col ">
            <label htmlFor="correo" className="text-white">Correo</label>

            <input 
            type="email" 
            id="correo" 
            onChange={(e) => setEmailRegister(e.target.value)}
            className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Ingrese su correo" 
            required/>

            </div>

            <div className="flex flex-col ">
            <label htmlFor="Contraseña" className="text-white">Contraseña</label>
            <input 
            type="password" 
            id="Contraseña" 
            onChange={(e) => setPasswordRegister(e.target.value)}
            className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Ingrese su contraseña" 
            required/>
            {openContraseña && <p className="text-center mt-1 text-white bg-red-600 rounded-md p-1 m-auto">Las contraseñas deben ser iguales</p>}
            </div>

            <div className="flex flex-col ">
            <label htmlFor="ConfirmarContraseña" className="text-white">Confirmar Contraseña</label>
            <input 
            type="password" 
            id="ConfirmarContraseña" 
            onChange={(e) => setConfirmarPassword(e.target.value)}
            className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Confirme su contraseña" 
            required/>
            {/* VALIDACION  */}
            {openContraseña && <p className="text-center mt-1 text-white bg-red-600 rounded-md p-1 m-auto">Las contraseñas deben ser iguales</p>}
            </div>

            <button 
            type="button" 
            className="m-auto mt-[20%] w-52  text-white text-xl bg-[#37b6ff00] border p-2 rounded-lg hover:bg-[#37b6ff] duration-200"
            onClick={validarFormulario}
            >
            Registrarse 
          </button>

        </form>
        
      </div>

      <div className="m-5 flex items-center justify-evenly gap-2">
      <div
        className="cardRyL  w-32 text-white text-center p-3 text-xl  cursor-pointer"
        onClick={() => navigate("/")}
      >
        Volver
      </div>

      <div
        className="cardRyL flex justify-center items-center gap-3  w-36 text-white text-center p-3 text-xl  cursor-pointer"
        onClick={() => registrarseGoogle()}
      >
        <img src={google } alt="google" className="w-6" />
        Google
      </div>
      </div>

    </div>
  )
}

export default Registrarse
