import React from "react";
import diploma from "/images/DIPLOMA.png";
import certificado from "/images/certificado.png";

import { principal, foto, tittle, next  } from "../Estilo/estudios.module.css";

const Estudios = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.open("/mateoromano/Membresia.pdf", "_blank"); // Ajusta la ruta con la base URL correcta
  };
  const handleClock = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.open("/mateoromano/ProgramaNextJs.pdf", "_blank"); // Ajusta la ruta con la base URL correcta
  };

  return (
    <>
      <section className={tittle}>
        <h1>STUDIES</h1>
      </section>

      <div className={principal} onClick={handleClick}>
        <div>
          <h1>DIGITAL HOUSE</h1>
          <h3>JULIO 2022 -- ABRIL 2024</h3>
        </div>
        <div className={foto}>
          <img src={diploma} alt="imagen" />
        </div>
      </div>

      <div className={next} onClick={handleClock} >
        <div>
          <h1>CODER HOUSE</h1>
          <h3>JULIO 2022 -- ABRIL 2024</h3>
        </div>
        <div className={foto}>
          <img src={certificado} alt="imagen" />
        </div>
      </div>
    </>
  );
};

export default Estudios;

