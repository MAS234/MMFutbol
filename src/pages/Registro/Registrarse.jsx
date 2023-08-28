
function Registrarse() {

    const handleButton = (e) =>{
        e.preventDefault();
    }

  return (
    <div className="gradientCartaRegistro h-screen w-full flex justify-center items-center">
      <div className=" w-80 h-[90%] cardRyL shadow-lg shadow-gray-800 m-5">

        <h1 className="text-center text-white  text-2xl mt-5">REGISTRATE</h1>
        <form  className="flex flex-col gap-5 m-5">

            <div className="flex flex-col ">
            <label htmlFor="nombre" className="text-white">Nombre</label>
            <input type="text" id="nombre" className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Ingrese su nombre" required/>
            </div>

            <div className="flex flex-col ">
            <label htmlFor="correo" className="text-white">Correo</label>
            <input type="email" id="correo" className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Ingrese su correo" required/>
            </div>

            <div className="flex flex-col ">
            <label htmlFor="Contraseña" className="text-white">Contraseña</label>
            <input type="password" id="Contraseña" className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Ingrese su contraseña" required/>
            </div>

            <div className="flex flex-col ">
            <label htmlFor="ConfirmarContraseña" className="text-white">Confirmar Contraseña</label>
            <input type="password" id="ConfirmarContraseña" className="p-2 bg-transparent border border-white w-62 rounded-lg text-white" placeholder="Confirme su contraseña" required/>
            </div>

            <button 
            type="button" 
            className="m-auto mt-28 w-52  text-white text-xl bg-[#37b6ff00] border p-2 rounded-lg hover:bg-[#37b6ff] duration-200"
            onClick={(() => handleButton())}
            >
            Registrarse 
          </button>

            


            
        </form>
        
      </div>
    </div>
  )
}

export default Registrarse
