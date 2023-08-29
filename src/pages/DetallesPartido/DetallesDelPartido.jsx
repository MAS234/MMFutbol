import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Alineacion from "../../componentes/Alineacion/Alineacion";

import Navbar from "../../componentes/NavbarMenu/Navbar";

// DATOS DE PRUEBA
// import Barcelona from "../../assets/Barcelona.png"
// import City from "../../assets/manchester.png"

function DetallesDelPartido() {
  const { id } = useParams();

  const [partidoResultado, setPartidoResultado] = useState(null);
  const [alineacionLocal, setAlineacionLocal] = useState(null);
  const [alineacionVisitante, setAlineacionVisitante] = useState(null);
  const [alineacionNumeroL, setAlineacionNumeroL] = useState(null);
  const [alineacionNumeroV, setAlineacionNumeroV] = useState(null);

  useEffect(() => {
    // LLAMADA AL RESULTADO DEL PARTIDO
    axios
      .get(`https://v3.football.api-sports.io/fixtures?id=${id}`, {
        headers: {
          "x-apisports-key": "b83f5a413036c3f8de516083d89c9fcc",
        },
      })
      .then((response) => {
        const partido = response.data.response[0];
        setPartidoResultado(partido);
        setAlineacionLocal(partido.lineups[0].startXI)
        setAlineacionVisitante(partido.lineups[1].startXI)
        setAlineacionNumeroL(partido.lineups[0].formation)
        setAlineacionNumeroV(partido.lineups[1].formation)
      })
      .catch((error) => {
        console.log("ERROR AL OBTENER EL PARTIDO", error);
      });
  }, [id]);


  console.log("resultadoYStadisticas:", partidoResultado);


  return (
    <>
      <h1 className="text-center text-gray-600 font-bold text-2xl mt-5">
        DETALLES DEL PARTIDO
      </h1>

      <div className="m-5 mt-0">
        {/* LIGA  */}
        <div className="fondoDetalles w-full h-90% mb-20 rounded-xl mt-10 border border-blue-700 p-5">
          {partidoResultado && (
            <>
              {/* DATOS REALES  */}
              <h1 className="text-center text-2xl mt-5 text-white font-semibold ">
                {partidoResultado.league.name}
              </h1>

              {/* RESULTADO */}
              <div className="flex items-center justify-between mt-5 p-2">
                <div className="text-center flex-col items-center justify-center ">
                  {/* DATOS REALES  */}

                  <img
                    src={partidoResultado.teams.home.logo}
                    alt={partidoResultado.teams.home.name}
                    className="w-16 m-auto"
                  />
                  <p className="text-base w-20 text-white font-semibold">
                    {partidoResultado.teams.home.name}
                  </p>
                </div>

                <div className="text-center text-5xl font-semibold text-white">
                  {/* DATOS REALES   */}
                  <p className="text-center">
                    {partidoResultado.goals.home} :{" "}
                    {partidoResultado.goals.away}
                  </p>
                </div>

                <div className="text-center flex-col items-center justify-center ">
                  {/* DATOS REALES  */}
                  <img
                    src={partidoResultado.teams.away.logo}
                    alt={partidoResultado.teams.away.name}
                    className="w-16 m-auto"
                  />
                  <p className="text-base w-20  flex-wrap text-center text-white font-semibold">
                    {partidoResultado.teams.away.name}
                  </p>
                </div>
              </div>

              <h1 className="text-center text-2xl mt-10 text-white font-semibold ">
                ESTADISTICAS
              </h1>

              <div className="flex flex-col justify-between text-white mt-5">
                <div className="text-white w-1/2">
                  {/* GOLES  */}
                  <h2 className="text-left text-lg font-semibold">Goles</h2>
                  {partidoResultado.events.map(
                    (event, index) =>
                      event.type === "Goal" && (
                        <div key={index} className="flex w-72  justify-between mt-2 gap-2">
                          <p className="w-auto">GOl {event.player.name}</p>

                          <img
                            src={event.team.logo}
                            alt={event.team.name}
                            className="w-8"
                          />
                        </div>
                      )
                  )}
                </div>

                <div className="w-1/2">
                  {/* TARJETAS  */}
                  <h2 className="text-left text-lg font-semibold">Tarjetas</h2>
                  {partidoResultado.statistics[(0, 1)]?.statistics
                    .filter(
                      (statistic) =>
                        statistic.type === "Yellow Cards" ||
                        statistic.type === "Red Cards"
                    )
                    .map((statistic, index) => (
                      <p key={index} className="mt-2">
                        {statistic.type} : {statistic.value}
                      </p>
                    ))}
                </div>
              </div>

              <h1 className="text-center text-white text-2xl mt-8">ALINEACION</h1>

              <div className="m-5">
              <Alineacion
              alineacionLocal={alineacionLocal}
              alineacionVisitante={alineacionVisitante}
              alineacionNumeroL={alineacionNumeroL}
              alineacionNumeroV={alineacionNumeroV}
              />
              </div>

              

            </>
          )}
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default DetallesDelPartido;
