import React from 'react'
import {iconos,h2} from "../Estilo/footer.module.css"
const Footer = () => {
  return (
    <div >

        <div>
          <h2 className={h2}>CONTACT</h2>
            <div className={iconos}>
              <a href="https://www.instagram.com/mateoromano_/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/mateo-romano-b243b4252/"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/materomano"><i className="fab fa-github"></i></a>
             <a href="mailto:mate.romano83@gmail.com"><i className="far fa-envelope"></i></a>
            </div>
        </div>





    </div>
  )
}

export default Footer