import SliderBtn from "./Swiper/SliderBtn";
import UsePartidos from "../hooks/UsePartidos";

function Inicio() {
  const { partidos } = UsePartidos();

  const primerPartido = partidos.length > 0 ? partidos[0] : null;

  const partidosNoJugados = partidos.filter(
    (partido) => !partido.fixture.status.short.includes("FT")
  );

  const primerosTresPartidosNoJugados = partidosNoJugados.slice(1, 4);

  return (
    <>
      <h1 className="text-center text-gray-600 text-3xl  mt-5">
        <span className="text-[#37B6FF] font-semibold">MM</span>GOAL
      </h1>

      <div className="h-20 mt-5">
        <SliderBtn />
      </div>

      <h1 className="mt-5 ml-7 text-2xl font-semibold  text-[#38a3e1]">VIVO</h1>

      <div className="flex justify-center items-center m-2">
        <div className="gradientCarta w-96 p-2 h-60 rounded-xl mt-5 shadow-lg shadow-gray-500 ">
          <h1 className="text-center text-white text-xl font-semibold mt-3">
            {primerPartido && primerPartido.league.name}
          </h1>

          {primerPartido && (
            <div
              key={primerPartido.fixture.id}
              className="p-5 text-white flex justify-between items-center"
            >
              <div className="w-20 ">
                <img
                  src={primerPartido.teams.home.logo}
                  alt={primerPartido.teams.home.name}
                  className="w-20"
                />
                <p className="text-center font-semibold">
                  {primerPartido.teams.home.name}
                </p>
                <p className="text-center">Local</p>
              </div>

              <div className="flex-col text-center justify-evenly items-center">
                <p className="text-4xl font-semibold">
                  {primerPartido.goals.home} : {primerPartido.goals.away}
                </p>
                <p className="text-white font-semibold rounded-lg bg-green-500 w-10 m-auto mt-2">
                  {primerPartido.fixture.status.elapsed}
                </p>

                <p className="mt-2">{primerPartido.fixture.status.long}</p>
              </div>

              <div className="w-20 ">
                <img
                  src={primerPartido.teams.away.logo}
                  alt={primerPartido.teams.away.name}
                  className="w-20"
                />
                <p className="text-center font-semibold">
                  {primerPartido.teams.away.name}
                </p>
                <p className="text-center">Visitante</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <h1 className="mt-8 ml-6 font-semibold text-2xl text-gray-600">
        PARTIDOS
      </h1>

      <div className="flex-col justify-center items-center m-2">
        {primerosTresPartidosNoJugados.map((partido) => (
          <div
            key={partido.fixture.id}
            className="p-5 text-white w-[100%] shadow-lg shadow-gray-500 bg-white mt-5 mb-5 rounded-lg flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                src={partido.teams.home.logo}
                alt={partido.teams.home.name}
                className="w-10"
              />
              <p className="text-gray-500 font-semibold text-sm ml-2">
                {partido.teams.home.name}
              </p>
            </div>

            <div className="flex flex-col items-center flex-grow">
              {" "}
              {/* Agregamos flex-grow para expandir el espacio */}
              <p className="text-gray-500 font-semibold text-center text-sm">
                {new Date(partido.fixture.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 font-semibold text-center text-sm">
                {new Date(partido.fixture.date)
                  .toLocaleTimeString()
                  .slice(0, -3)}
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-gray-500 font-semibold text-sm mr-2">
                {partido.teams.away.name}
              </p>
              <img
                src={partido.teams.away.logo}
                alt={partido.teams.away.name}
                className="w-10"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inicio;

// function ListaPartidos() {
//     const { partidos } = useContext(PartidosContext);

//     return (
//       <div>
//         <h2>Lista de Partidos</h2>
//         <ul>
//           {partidos.map(partido => (
//             <li key={partido.fixture.id}>
//               <div>
//                 <img
//                   src={partido.teams.home.logo}
//                   alt={`Logo ${partido.teams.home.name}`}
//                   style={{ width: '50px', height: '50px' }}
//                 />
//                 <span>{partido.teams.home.name}</span>
//               </div>
//               <div>
//                 <img
//                   src={partido.teams.away.logo}
//                   alt={`Logo ${partido.teams.away.name}`}
//                   style={{ width: '50px', height: '50px' }}
//                 />
//                 <span>{partido.teams.away.name}</span>
//               </div>
//               <div>
//                 {partido.goals.home} - {partido.goals.away}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
