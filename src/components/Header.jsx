import React from 'react'
import {encabezado} from '../Estilo/header.module.css'
import Sobremi from './Sobremi'
import Estudios from "./Estudios"
import Portada from "./Portada"
const Header = () => {
  return (
    <>
      <div className={encabezado}>
        <ul>
          <li>
            <a href="#portada">Inicio</a>
            <a href="#sobre-mi">Sobre Mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#estudios">Estudios</a>
          </li>
        </ul>
      </div>

   
    
      
     
      </>
  
  )
}

export default Header