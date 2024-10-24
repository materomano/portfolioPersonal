import { useEffect, useState } from 'react';
import fotomia from '/images/fotomateo.png';
import fondo from '/images/fondo.jpg';
import { principal, main, hidden, show } from '../Estilo/mateo.module.css';
import { useLang } from '../components/LangContext.jsx';

const Sobremi = () => {
  const { lang } = useLang();

  const content = {
    es: {
      greeting: "Hola, soy Mateo Romano, tengo 21 años y soy estudiante de programación. A lo largo de mi estudio, he desarrollado habilidades en varios lenguajes de programación, incluyendo Java, JavaScript, React y muchos más. Tengo un gran interés por la tecnología y la informática, por lo cual opté por la programación. Tengo facilidad para adaptarme y trabajar en equipo, me apasiona la investigación y tengo ganas de aprender. Busco día a día la mejora continua."
    },
    en: {
      greeting: "Hello, I am Mateo Romano, I am 21 years old and I am a programming student. Throughout my study, I have developed skills in several programming languages, including Java, JavaScript, React and many more. I have a great interest in technology and computer science, which is why I chose programming. I am easy to adapt and work in a team, I am passionate about research and I am eager to learn every day."
    }
  };

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const palabras = content[lang].greeting.split(' '); // Cambia según el idioma seleccionado

  useEffect(() => {
    // Resetea el estado cuando cambia el idioma
    setText('');
    setIndex(0);
  }, [lang]);

  useEffect(() => {
    if (index < palabras.length) {
      const timer = setTimeout(() => {
        setText(prevText => prevText + ' ' + palabras[index]);
        setIndex(index + 1);
      }, 100); // Cada palabra aparece después de 300ms, puedes ajustar este tiempo
      return () => clearTimeout(timer);
    } else {
      // Reinicia la animación después de mostrar todas las palabras
      const restartTimer = setTimeout(() => {
        setText('');  // Vacía el texto
        setIndex(0);  // Reinicia el índice
      }, 3000); 
      return () => clearTimeout(restartTimer);
    }

  }, [index, palabras]);

  return (
    <div
      className={`${principal} ${text ? show : hidden}`}
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className={main}>
        <img src={fotomia} alt="Mateo Romano" />
        <p>{text}</p> 
      </div>
    </div>
  );
};

export default Sobremi;


