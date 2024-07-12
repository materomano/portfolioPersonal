import Header from "./components/Header"
import Sobremi from "./components/Sobremi"
import Estudios from "./components/Estudios"
import React from "react"
import Portada from "./components/Portada"
import Tecnologias from "./components/Tecnologias"
import Footer from "./components/Footer"
import Proyectos from "./components/Proyectos"


function App() {
  return (
    <div>
      <Header/>
      <div id="portada">
        <Portada/>
      </div>
      <div id="sobre-mi">
        <Sobremi/>
      </div>
      <div id="tecnologias">
        <Tecnologias/>
      </div>
      <div id="estudios">
        <Estudios/>
      </div>
      <div id="proyectos">
        <Proyectos/>
      </div>
      <Footer/>
    </div>
  );
}
export default App
