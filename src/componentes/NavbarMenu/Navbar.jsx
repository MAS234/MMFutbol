import { useState } from 'react';
import {  AiFillHome } from "react-icons/ai";
import {BsCalendar3} from "react-icons/bs"
import {BiFootball} from "react-icons/bi"


import { Link } from 'react-router-dom';

import "./style.css"

function Navbar() {

    const [activeIndex, setActiveIndex] = useState(-1);

    const handleItemClick = (index) => {
      setActiveIndex(index);
    };
  
    const icons = [
        AiFillHome,
        BsCalendar3,
        BiFootball,
    ];
  
    const colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];

    const rutas = [
        "/inicio",
        "/partidos",
        "/jugados"
        
    ]

  return (
    <>
    <div className='navigation fixed bottom-0 w-full '>
      <ul>
        {icons.map((Icon, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? 'active' : ''}`}
            style={{ '--clr': colors[index] }}
            onClick={() => handleItemClick(index)}
          >
            <Link to={rutas[index]}>
              <span className='icon'>
                <Icon className='m-auto mt-2 text-2xl'/>
              </span>
            </Link>
          </li>
        ))}
        <div className='indicator'></div>
      </ul>
    </div>
    </>
  )
}




export default Navbar
