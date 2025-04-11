import Botao from './Botao'

import "./ImcTabela.css";


const ImcTabela = ({ dados, imc, info, infoClasse, resetarCalculo }) => {
  return (
    <div id="resultado-container">
      <p id="numeroIMC">
        Seu IMC: <span className={infoClasse}>{imc}</span>
      </p>
      <p id="infoIMC">
        Situação atual: <span className={infoClasse} >{info}</span>
      </p>
      <h3>Confira as classificações:</h3>
      <div id="tabelaIMC">
        <div className="tabelaCabecalho">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {dados.map((item) => (
          <div className="tabelaDados" key={item.info}>
            <p>{item.classificacao}</p>
            <p>{item.info}</p>
            <p>{item.obesidade}</p>
          </div>
        ))}
      </div>
      <Botao id="voltar-btn" texto="Voltar" acao={resetarCalculo} />
    </div>
  )
}

export default ImcTabela
