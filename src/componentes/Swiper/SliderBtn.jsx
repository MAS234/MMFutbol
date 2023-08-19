import { Swiper, SwiperSlide } from "swiper/react";
import Premier from "../../assets/premierLeague.png";
import Laliga from "../../assets/La_Liga.png";
import Champions from "../../assets/Champions.png"
import Bundesliga from "../../assets/Bundesliga.png"
import MLS from "../../assets/MLS.png"

import "swiper/css";

export default function SliderBtn() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide className="flex justify-center items-center gap-5 p-3">
          <button className=" text-white text-base flex justify-evenly items-center gap-4 font-semibold bg-[#1294DF] p-2 rounded-lg hover:bg-[#0069a5] h-16 shadow-lg shadow-gray-500">
            <img className="w-10" src={Premier} alt="premier" />
            Premier League
          </button>

          <button className=" text-white text-base flex justify-evenly w-40 items-center gap-4 font-semibold bg-[#1294DF] p-2 rounded-lg hover:bg-[#0069a5] h-16 shadow-lg shadow-gray-500">
            <img className="w-12" src={Laliga} alt="laLiga" />
            La Liga
          </button>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center gap-5 p-3">
          <button className=" text-white text-base flex justify-evenly items-center
          font-semibold gap-2 bg-[#1294DF] p-3 rounded-lg hover:bg-[#0069a5] w-64 h-16 shadow-lg shadow-gray-500">
            <img className="w-10" src={Champions} alt="Champions" />
            Champions
          </button>

          <button className=" text-white text-base flex justify-center font-semibold items-center gap-2 bg-[#1294DF] p-3 rounded-lg hover:bg-[#0069a5] w-64 h-16 shadow-lg shadow-gray-500">
            <img className="w-12" src={Bundesliga} alt="Bundesliga" />
            Bundesliga
          </button>
        </SwiperSlide>

        <SwiperSlide>
        <button className=" text-white text-xl flex justify-evenly
        font-semibold
        items-center gap-4 bg-[#1294DF] p-2 rounded-lg hover:bg-[#0069a5] shadow-lg shadow-gray-500 h-16 w-60 ">
            <img className="w-12" src={MLS} alt="MLS" />
            MLS
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
