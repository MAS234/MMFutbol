import { Link } from "react-router-dom"

function PantallaError() {
  return (
    <>
      <div className="  flex-col text-center justify-center items-center mt-72">

        
        <p className="  text-2xl  font-semibold text-center text-red-600">NO ENCONTRADO, VUELVA A LA APLICACION</p>

        <Link to={"/inicio"}>
        <div className="bg-[#37B6FF] hover:bg-[#065381] w-32 m-auto mt-10 text-2xl p-2 rounded-md text-white hover:">
            VOLVER
        </div>
        </Link>

      </div>
    </>
  )
}

export default PantallaError
