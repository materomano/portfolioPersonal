import React from 'react';
import { principal, iconos } from '../Estilo/portada.module.css';

const Portada = () => {
  return (
    <div className={principal}>
      <div>
        <h1>MATEO ROMANO</h1>
        <h2>Software Developer</h2>
       
       
      </div>
      <div className={iconos}>
        <a href="https://www.instagram.com/mateoromano_/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/mateo-romano-b243b4252/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/materomano"><i className="fab fa-github"></i></a>
        <a href="mailto:mate.romano83@gmail.com"><i className="far fa-envelope"></i></a>
      </div>
    </div>
  );
}

export default Portada;

