import React from 'react';
import rental from '/images/rental.jpg'
import { principal } from '../Estilo/proyectos.module.css';

const Proyectos = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.location.href = "http://3.82.145.148:3000/";
  };

  return (
    
    <div className={principal}>
      
      <h1>PROJECTS</h1>
      <h2>Car Rental En Digital House</h2>
      <a href="" onClick={handleClick}>
        <img src={rental} alt="Proyecto" />
        
      </a>
      
    </div>
  );
};

export default Proyectos;
