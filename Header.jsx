import React from 'react';
import { encabezado } from '../Estilo/header.module.css'; // Importa estilos locales de módulo CSS
import { useLang } from '../components/LangContext'; // Asumiendo que tienes un contexto de idioma

const Header = () => {
  const { switchLang, lang } = useLang(); // Obtenemos switchLang y lang del contexto

  // Función que maneja el desplazamiento suave
  const scrollToSection = (id) => {
    const section = document.querySelector(id); // Buscar el elemento por id
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  // Función para renderizar los <li> dependiendo del idioma
  const renderMenuItems = () => {
    if (lang === 'es') {
      // Renderiza los elementos en español
      return (
        <>
          <li>
            <a onClick={() => scrollToSection('#portada')}>Inicio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('#sobre-mi')}>Sobre Mi</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('#proyectos')}>Proyectos</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('#estudios')}>Estudios</a>
          </li>
        </>
      );
    } else if (lang === 'en') {
      // Renderiza los elementos en inglés
      return (
        <>
          <li>
            <a onClick={() => scrollToSection('#portada')}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('#sobre-mi')}>About Me</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('#proyectos')}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('#estudios')}>Studies</a>
          </li>
        </>
      );
    }
  };

  return (
    <div className={encabezado}>
      <ul>
        {renderMenuItems()}
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


