import AppsRoutes from "./routes/AppsRoutes"
import { PartidosProvider } from "./context/PartidosProvider"

function App() {

  return (
    <>
    <PartidosProvider>
     <AppsRoutes/>
    </PartidosProvider>
    </>
  )
}

export default App
