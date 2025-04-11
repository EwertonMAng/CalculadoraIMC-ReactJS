import { useState } from "react"
import "./CalculadoraIMC.css"
import Botao from './Botao'

const CalculadoraIMC = ({calcularIMC}) => {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const limparForm = (e) => {

    e.preventDefault();
    setAltura("");
    setPeso("");

  }

  const textoValidado = (text) => {
    return text.replace(/[^0-9,]/g, "")
  }

  const manipulandoPeso = (e) => {
    const valorValidado = textoValidado(e.target.value);

    setPeso(valorValidado)

  }

  const manipulandoAltura = (e) => {
    const valorValidado = textoValidado(e.target.value);

    setAltura(valorValidado)

  }

  return (
    <div id="calculadora-container" >

        <h2>Calculadora de IMC</h2>
        <form id="formulario-imc">
          <div className="formulario-inputs">
            <div className="controle-form">
              <label htmlFor="altura">Altura:</label>
              <input type="text"
                
                name="altura"
                id="altura"
                placeholder="Exemplo 1,75 m"
                onChange={(e) => manipulandoAltura(e)}
                value={altura}
              />
            </div>
            <div className="controle-form">
              <label htmlFor="peso">Peso:</label>
              <input type="text"
                name="peso"
                id="peso"
                placeholder="Exemplo 80.5 kg"
                onChange={(e) => manipulandoPeso(e)}
                value={peso}
              />
            </div>
          </div>
          <div className="controle-acao">
              <Botao id="botao-calc" texto="Calcular" acao={(e) => calcularIMC(e, peso, altura)} />
              <Botao id="botao-limp" texto="Limpar" acao={limparForm} />
          </div>
        </form>

   
    </div>
  )
}

export default CalculadoraIMC
