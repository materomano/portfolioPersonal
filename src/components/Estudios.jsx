import React from 'react'
import diploma from "../assets/images/DIPLOMA.png"
import {principal, foto} from '../Estilo/estudios.module.css'
const Estudios = () => {
  return (
    <div className={principal}>
    
        <div>
            <h1>DIGITAL HOUSE </h1>
            <h3>21 de julio 2022 --- 24 de abril 2024</h3>
           
        </div>
       
        <div className={foto}>
          <img src={diploma} alt="imagen" />
        </div>
       

    </div>
  )
}

export default Estudios