import { Ligas } from "../data/data";
import {Link} from "react-router-dom"

function Bienvenida() {

  return (
    <div className="gradientFondo h-[100VH]">

      <div className="flex flex-col justify-center items-center h-screen">

        <h1 className="text-center text-white text-5xl sombra">BIENVENIDO</h1>
        
        <h2 className="text-center text-white text-5xl sombra mt-5">
          <span className="text-[#37B6FF] font-semibold">MM</span>GOAL
        </h2>

        <div className="flex gap-4 mt-28 flex-wrap justify-center items-center ">

          {Ligas.map((liga) => (
            <div key={liga.id} className="float">
              <img src={liga.img} alt={liga.name} className="w-16 h-auto "/>
            </div>
          ))}

        </div>

        <Link to={"/inicio"}>
        <button className="mt-28 text-white text-2xl bg-[#37b6ff00] border p-3 rounded-lg hover:bg-[#37b6ff] duration-200" >
          Avanzar 
        </button>
        </Link>


      </div>
    </div>
  );
}

export default Bienvenida;






