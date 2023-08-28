import UsePartidos from "../../hooks/UsePartidos";
import { Link } from "react-router-dom";

import "./inicioPartido.css"

function InicioPartidos() {

  const { partidos, loading } = UsePartidos();

  // Partidos jugados 
  const partidosJugados = partidos.filter(
    (partido) =>  partido.fixture.status.short === "FT"
  )

  partidosJugados.sort((a,b) => new Date(b.fixture.date) - new Date(a.fixture.date))

  const ultimoPartidoJugado = partidosJugados.length > 0 ? partidosJugados[0] : null;

  // Partidos no jugados 
  const partidosNoJugados = partidos.filter(
    (partido) => partido.fixture.status.short.includes("FT")
  );

  const primerosTresPartidosNoJugados = partidosNoJugados.slice(1, 4);

  return (
    <>
      {loading ? (
        <div className="m-auto flex justify-center items-center">
            <div className="lds-spinner">
             <div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
      ):(
        <div className="flex justify-center items-center m-2">
        <div  className="gradientCarta w-96 p-2 h-60 rounded-xl mt-5 shadow-lg shadow-gray-500 ">
          <h1 className="text-center text-white text-xl font-semibold mt-3">
            {ultimoPartidoJugado && ultimoPartidoJugado.league.name}
          </h1>

          {ultimoPartidoJugado && (
            <Link
              to={`/detalles/${ultimoPartidoJugado.fixture.id}`}
              key={ultimoPartidoJugado.fixture.id}
              className="p-5 text-white flex justify-between items-center"
              
            >
              <div className="w-20 ">
                <img
                  src={ultimoPartidoJugado.teams.home.logo}
                  alt={ultimoPartidoJugado.teams.home.name}
                  className="w-20"
                />
                <p className="text-center font-semibold">
                  {ultimoPartidoJugado.teams.home.name}
                </p>
                <p className="text-center">Local</p>
              </div>

              <div className="flex-col text-center justify-evenly items-center">
                <p className="text-4xl font-semibold">
                  {ultimoPartidoJugado.goals.home} : {ultimoPartidoJugado.goals.away}
                </p>
                <p className="text-white font-semibold rounded-lg bg-green-500 w-10 m-auto mt-2">
                  {ultimoPartidoJugado.fixture.status.elapsed}
                </p>

                <p className="mt-2">{ultimoPartidoJugado.fixture.status.long}</p>
              </div>

              <div className="w-20 ">
                <img
                  src={ultimoPartidoJugado.teams.away.logo}
                  alt={ultimoPartidoJugado.teams.away.name}
                  className="w-20"
                />
                <p className="text-center font-semibold">
                  {ultimoPartidoJugado.teams.away.name}
                </p>
                <p className="text-center">Visitante</p>
              </div>
            </Link>
          )}
        </div>
      </div>
      )}

      <div className="flex items-center justify-center">

      <h1 className="mt-8 ml-6 font-semibold text-2xl text-gray-600">
        PARTIDOS
      </h1>

      </div>

      {loading ? (
        <div className="m-auto flex justify-center items-center mt-40">
        <div className="lds-spinner">
         <div></div><div></div><div></div><div></div><div></div>
        </div>
       </div>
      ):(
        <div className="flex-col justify-center items-center m-2">
        {primerosTresPartidosNoJugados.map((partido) => (
          <Link
          to={`/inicio`}
            key={partido.fixture.id}
            className="p-5 fondoGradienteCards  text-gray-500 hover:text-white w-[100%] shadow-lg shadow-gray-500 bg-white mt-5 mb-5 rounded-lg flex justify-between items-center"
          >
            <div className="flex items-center flex-col text-center w-20">
              <img
                src={partido.teams.home.logo}
                alt={partido.teams.home.name}
                className="w-10 m-auto"
              />
              <p className=" font-semibold text-sm ml-2">
                {partido.teams.home.name}
              </p>
            </div>

            <div className="flex-col  items-center justify-center w-20">
              <p className=" font-semibold text-center text-sm">
                {new Date(partido.fixture.date).toLocaleDateString()}
              </p>
              <p className=" font-semibold text-center text-sm">
                {new Date(partido.fixture.date)
                  .toLocaleTimeString()
                  .slice(0, -3)}
              </p>
            </div>

            <div className="flex-col items-center justify-center w-20">
              <img
                src={partido.teams.away.logo}
                alt={partido.teams.away.name}
                className="w-10 m-auto"
              />
              <p className=" font-semibold text-xs mr-2 text-center">
                {partido.teams.away.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </>
  )
}

export default InicioPartidos
