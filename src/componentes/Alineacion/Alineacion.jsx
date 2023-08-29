import "./alineacion.css"; // Importa tu archivo CSS
import PropTypes from "prop-types";

function Alineacion({
  alineacionLocal,
  alineacionVisitante,
  alineacionNumeroV,
  alineacionNumeroL,
}) {
  console.log("local", alineacionLocal, alineacionNumeroL);
  console.log("visitante", alineacionVisitante, alineacionNumeroV);

  return (
    <div className="campo shadow-lg w-full shadow-gray-700 flex justify-between items-center">
      <div>
        <h1 className="volterarAlineacion text-center text-white font-semibold text-xl">
          {alineacionNumeroL}
        </h1>

        <div className="campoLocal">
          {alineacionLocal.map((jugador, index) => {
            const [fila, columna] = jugador.player.grid.split(":");
            return (
              <div
                key={index}
                className="jugador-local shadow-lg shadow-gray-700"
                style={{
                  gridColumn: columna,
                  gridRow: fila,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div>

        <h1 className="text-center text-white font-semibold text-xl">{alineacionNumeroV}</h1>

      <div className="campoVisitante">
        {alineacionVisitante.map((jugador, index) => {
          const [fila, columna] = jugador.player.grid.split(":");
          return (
            <div
              key={index}
              className="jugador-visitante shadow-lg shadow-gray-700"
              style={{
                gridColumn: columna,
                gridRow: fila,
              }}
            ></div>
          );
        })}
      </div>

      </div>


    </div>
  );
}

Alineacion.propTypes = {
  alineacionLocal: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.shape({
        grid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  alineacionVisitante: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.shape({
        grid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  alineacionNumeroL: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.shape({
        grid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  alineacionNumeroV: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.shape({
        grid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Alineacion;
