import { dados } from "./dados/dados"

import { useState } from 'react'

import CalculadoraIMC from './Componentes/CalculadoraIMC'
import ImcTabela from "./Componentes/ImcTabela";

import './App.css'



function App() {

  const calcularIMC = (e, peso, altura) => {
    e.preventDefault();

    console.log(peso,altura)

    if(!peso || !altura) return;

    const pesoFloat = +peso.replace(",", ".")
    const alturaFloat = +altura.replace(",", ".")

    const resultadoIMC = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);

    setIMC(resultadoIMC);

    dados.forEach((item) => {
      if (resultadoIMC >= item.min && resultadoIMC <= item.max) {
        setInfo(item.info)
        setInfoClasse(item.infoClasse)

      }
    });

    if (!info) return;    
  }

  const resetarCalculo = (e) => {
    e.preventDefault();

    setIMC("");
    setInfo("");
    setInfoClasse("")

  }


  const [imc, setIMC] = useState("");
  const [info, setInfo] = useState("");
  const [infoClasse, setInfoClasse] = useState("");
  
  


  return (
    <>
     
      <div className="container">
         {!imc ? <CalculadoraIMC calcularIMC={calcularIMC} /> : <ImcTabela dados={dados} imc={imc} info={info} infoClasse={infoClasse} resetarCalculo={resetarCalculo} />}
      </div>
      
    </>
  )
}

export default App
