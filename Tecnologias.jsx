import React from 'react';
import { useLang } from '../components/LangContext.jsx'; // Importa el contexto de idioma
import { principal, front, back, icono } from "../Estilo/teconologias.module.css";

const Tecnologias = () => {
  const { lang } = useLang(); // Usa el contexto para obtener el idioma seleccionado

  // Define los títulos en ambos idiomas
  const titles = {
    es: {
      tecnologias: "SKILLS",
      frontend: "Frontend",
      backend: "Backend"
    },
    en: {
      tecnologias: "SKILLS",
      frontend: "Frontend",
      backend: "Backend"
    }
  };

  return (
    <div className={principal}>
      <h1>{titles[lang].tecnologias}</h1> {/* Cambia el título según el idioma */}

      <div className={front}>
        <h2>{titles[lang].frontend}</h2> {/* Título del FrontEnd */}
        <div className={icono}>
          <div>
            <i className="fa-brands fa-react"></i>
            <h5>React</h5>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <h5>Html</h5>
          </div>
          <div>
            <i className="fa-brands fa-css3-alt"></i>
            <h5>CSS</h5>
          </div>
          <div>
            <i className="fa-brands fa-js"></i>
            <h5>Javascript</h5>
          </div>
        </div>
      </div>

      <div className={back}>
        <h2>{titles[lang].backend}</h2> {/* Título del BackEnd */}
        <div className={icono}>
          <div>
            <i className="fa-brands fa-java"></i>
            <h5>Java</h5>
          </div>
          <div>
            <i className="fa-brands fa-gitlab"></i>
            <h5>GitLab</h5>
          </div>
          <div>
            <i className="fa-solid fa-code-branch"></i>
            <h5>Git</h5>
          </div>
          <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="..." /> {/* SVG Path */}
            </svg>
            <h5>MySQL</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
