import { useState } from "react";
import Navbar from "../NavbarMenu/Navbar";
import SliderBtn from "../Swiper/SliderBtn";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import UsePartidos from "../../hooks/UsePartidos";

function PartidosJugados() {
  const [busquedaInput, setBusquedaInput] = useState("");
  const [filtroPartido, setFiltroPartido] = useState([]);

  const filtrarPartidos = (equipo) => {
    const filtrado = partidosJugados.filter(
      (partido) =>
        partido.teams.home.name.toLowerCase().includes(equipo.toLowerCase()) ||
        partido.teams.away.name.toLowerCase().includes(equipo.toLowerCase())
    );
    setFiltroPartido(filtrado);
  };

  const { loading, partidos } = UsePartidos();

  const partidosJugados = partidos.filter(
    (partido) => !partido.fixture.status.short.includes("NS")
  );

  console.log(partidosJugados);

  return (
    <>
      <div className="mr-5 ml-5">
        {/* SLIDER  */}
      <div className="mt-5">
        <SliderBtn />
      </div>

      {/* BUTTON ARROW */}
      <div className="flex justify-evenly items-center mt-10 ">
        <Link to={"/inicio"}>
          <button className="mr-5 bg-[#37B6FF] p-2 rounded-lg shadow-md shadow-gray-400 hover:bg-[#0d6aa0]">
            <AiOutlineArrowLeft className="text-white w-5 h-5" />
          </button>
        </Link>

        <h1 className=" font-semibold text-2xl text-gray-600 mr-24">
          RESULTADOS
        </h1>
      </div>

      {/* LIGA EN LA ESTA EL USUARIO  */}
      <h1 className="text-center mt-2 font-semibold text-xl">{partidosJugados.length > 0 && partidosJugados[0].league.name}</h1>

      {/* BUSCADOR  */}
      <div className="flex justify-evenly gap-10 mt-10 mb-5">
        <input
          type="text"
          className="shadow shadow-gray-500 h-10  rounded-md p-2 text-[#37B6FF] border-none"
          placeholder="Manchester City"
          value={busquedaInput}
          onChange={(e) => setBusquedaInput(e.target.value)}
        />

        <button
          className="bg-[#37B6FF] p-2 rounded-lg font-semibold text-white hover:bg-[#0f679a]"
          onClick={() => filtrarPartidos(busquedaInput)}
        >
          Buscar
        </button>
      </div>

      <div>
        {/* LOADING DE CARGA  */}
        {loading ? (
          <div className="m-auto flex justify-center items-center mt-40">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
            // MUESTRA LOS RESULTADOS 
          <div className="flex-col justify-center items-center m-2">
            {(filtroPartido.length > 0 ? filtroPartido : partidosJugados).map(
              (partido) => (
                <div
                  key={partido.fixture.id}
                  className="p-5  text-white w-[100%] h-24 shadow-lg shadow-gray-500 bg-white mt-5 mb-5 rounded-lg flex justify-between items-center"
                >
                  <div className="flex-col  items-center justify-center w-20">
                    <img
                      src={partido.teams.home.logo}
                      alt={partido.teams.home.name}
                      className="w-8 m-auto"
                    />
                    <p className="text-gray-500 font-semibold text-sm ml-2 text-center">
                      {partido.teams.home.name}
                    </p>
                  </div>

                  <div className="flex  items-center p-3">

                  <div className="text-gray-500 font-semibold text-center text-lg flex-col">
                    <p>
                    {partido.goals.home} : {partido.goals.away}
                    </p>
                    <p>
                    {partido.fixture.status.short}
                    </p>
                    <p className="text-gray-500 font-semibold text-center text-xs">
                        {new Date(partido.fixture.date).toLocaleDateString()}
                      </p>

                 </div>
                    
                  </div>

                  <div className="flex-col items-center justify-center w-20">
                    <img
                      src={partido.teams.away.logo}
                      alt={partido.teams.away.name}
                      className="w-8 m-auto"
                    />
                    <p className="text-gray-500 font-semibold text-xs mr-2 text-center">
                      {partido.teams.away.name}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
      </div>

      <div className="h-24">
        <Navbar />
      </div>
    </>
  );
}

export default PartidosJugados;
