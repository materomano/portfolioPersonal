import React from 'react';
import { encabezado } from '../Estilo/header.module.css'; // Importa estilos locales de módulo CSS
import { useLang } from '../components/LangContext';

const Header = () => {
  const { switchLang } = useLang();
  
  return (
    <div className={encabezado}>
      <ul>
        <li>
          <a href="#portada">Inicio</a>
        </li>
        <li>
          <a href="#sobre-mi">Sobre Mi</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#estudios">Estudios</a>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src="https://img.icons8.com/color/48/argentina-circular.png"
            alt="argentina-circular"
            onClick={() => switchLang('es')}
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/color/48/usa-circular.png"
            alt="usa-circular"
            onClick={() => switchLang('en')}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;


