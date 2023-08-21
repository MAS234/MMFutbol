import  { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import UsePartidos from "../../hooks/UsePartidos";
import { Link } from "react-router-dom";
import SliderBtn from "../Swiper/SliderBtn";
import Navbar from "../NavbarMenu/Navbar";

function Partidos() {
  const { loading, partidos } = UsePartidos();

  const partidosNoJugados = partidos.filter(
    (partido) => !partido.fixture.status.short.includes("FT")
  );

  const partidosPorJugar = partidosNoJugados.slice(1, 20);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPartidos, setFilteredPartidos] = useState([]);

  const filterPartidos = (teamName) => {
    const filtered = partidosPorJugar.filter(
      (partido) =>
        partido.teams.home.name.toLowerCase().includes(teamName.toLowerCase()) ||
        partido.teams.away.name.toLowerCase().includes(teamName.toLowerCase())
    );
    setFilteredPartidos(filtered);
  };

  return (
    <>
      <div className="mr-5 ml-5">
        <div className="mt-5">
          <SliderBtn />
        </div>

        <div className="flex justify-evenly items-center mt-10 ">
          <Link to={"/inicio"}>
            <button className="mr-12 bg-[#37B6FF] p-2 rounded-lg shadow-md shadow-gray-400 hover:bg-[#0d6aa0]">
              <AiOutlineArrowLeft className="text-white w-5 h-5" />
            </button>
          </Link>

          <h1 className=" font-semibold text-2xl text-gray-600 mr-24">
            PARTIDOS
          </h1>
        </div>

        <h1 className="text-center mt-2 font-semibold text-xl">{partidosPorJugar.length > 0 && partidosPorJugar[0].league.name}</h1>

        <div className="flex justify-evenly gap-10 mt-10 mb-5">
          <input
            type="text"
            className="shadow shadow-gray-500 h-10  rounded-md p-2 text-[#37B6FF] border-none"
            placeholder="Manchester City"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button className="bg-[#37B6FF] p-2 rounded-lg font-semibold text-white hover:bg-[#0f679a]" onClick={() => filterPartidos(searchInput)}>Buscar</button>
        </div>

        <div>
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
            <div className="flex-col justify-center items-center m-2">
              {(filteredPartidos.length > 0 ? filteredPartidos : partidosPorJugar).map(
                (partido) => (
                  <div
                    key={partido.fixture.id}
                    className="p-5  text-white w-[100%] shadow-lg shadow-gray-500 bg-white mt-5 mb-5 rounded-lg flex justify-between items-center"
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

                    <div className="flex flex-col items-center p-3">
                      <p className="text-gray-500 font-semibold text-center text-xs">
                        {new Date(partido.fixture.date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-500 font-semibold text-center text-xs">
                        {new Date(partido.fixture.date)
                          .toLocaleTimeString()
                          .slice(0, -3)}
                      </p>
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
      <Navbar/>
      </div>
    </>
  );
}

export default Partidos;
