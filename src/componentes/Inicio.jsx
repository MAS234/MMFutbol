import SliderBtn from "./Swiper/SliderBtn";
import InicioPartidos from "./PartidosInicio/InicioPartidos";
import Navbar from "./NavbarMenu/Navbar";

function Inicio() {

  return (
    <>

    <div className="h-screen">
    <h1 className="text-center text-gray-600 text-3xl  mt-5">
        <span className="text-[#37B6FF] font-semibold">MM</span>GOAL
      </h1>

      <div className="h-20 mt-5">
        <SliderBtn />
      </div>

      <h1 className="mt-5 ml-7 text-2xl font-semibold  text-[#38a3e1]">VIVO</h1>


      <InicioPartidos/>

      <div className="h-24">
      <Navbar/>
      </div>

    </div>

      

    </>
  );
}

export default Inicio;


