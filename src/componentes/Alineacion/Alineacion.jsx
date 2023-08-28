import "./alineacion.css";
// import PropTypes from "prop-types";

function Alineacion( alineaciones ) {

  console.log("alineaciones",alineaciones)
  
  return (
    <div className="flex justify-center items-center">
      <div className="campo w-96 h-72 rounded-lg">

        {/* locales  */}
        <div>
        {alineaciones.alineacionLocal.map((jugador, index) => (
            <div
              key={index}
              className={`jugador-local jugador-local-${index + 1}`}
              style={{
                gridColumn: jugador.player.grid.split(":")[1], // Columna
                gridRow: jugador.player.grid.split(":")[0], 
              }}
            >
              {jugador.player.name}
            </div>
          ))}
        </div>

        {/* visitante  */}
        <div>

        </div>

      </div>
    </div>
  );
}



export default Alineacion;
