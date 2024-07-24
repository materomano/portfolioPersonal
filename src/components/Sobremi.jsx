import React, { useEffect, useRef } from 'react';
import fotomia from '../assets/images/fotomateo.png';
import fondo from '../assets/images/fondo.jpg'
import { principal, main, hidden, show } from '../Estilo/mateo.module.css';
import { useLang } from '../components/LangContext.jsx';

const Sobremi = () => {
  const { lang } = useLang();
  const revealRefs = useRef([]);

  const content = {
    es: {
      greeting: "Hola, soy Mateo Romano, tengo 20 años y soy estudiante de programación. A lo largo de mi estudio, he desarrollado habilidades en varios lenguajes de programación, incluyendo Java, JavaScript, React y muchos más. Tengo un gran interés por la tecnología y la informática, por lo cual opté por la programación. Tengo facilidad para adaptarme y trabajar en equipo, me apasiona la investigación y tengo ganas de aprender. Busco día a día la mejora continua."
    },
    en: {
      greeting: "Hello, I am Mateo Romano, I am 20 years old and I am a programming student. Throughout my study, I have developed skills in several programming languages, including Java, JavaScript, React and many more. I have a great interest in technology and computer science, which is why I chose programming. I am easy to adapt and work in a team, I am passionate about research and I am eager to learn every day."
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(show);
          entry.target.classList.remove(hidden);
        } else {
          entry.target.classList.add(hidden);
          entry.target.classList.remove(show);
        }
      });
    });

    revealRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      revealRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div
      className={`${principal} ${hidden}`}
      style={{ backgroundImage: `url(${fondo})` }}
      ref={el => {
        if (el && !revealRefs.current.includes(el)) {
          revealRefs.current.push(el);
        }
      }}
    >
      <div className={main}>
        <img src={fotomia} alt="Mateo Romano" />
        <p>{content[lang].greeting}</p>
      </div>
    </div>
  );
};

export default Sobremi;
