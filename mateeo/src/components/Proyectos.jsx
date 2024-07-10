import React from 'react';
import { principal } from '../Estilo/proyectos.module.css';

const Proyectos = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.location.href = "http://18.208.133.96:3000/";
  };

  return (
    <div className={principal}>
      <h2>Car Rental</h2>
      <a href="" onClick={handleClick}>
        <img src="/images/proyecto.png" alt="Proyecto" />
        
      </a>
      
    </div>
  );
};

export default Proyectos;
