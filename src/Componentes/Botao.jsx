import './Botao.css'


const Botao = ({id, texto, acao}) => {

    const executarAcao = (e) => {
      acao(e);
    }


  return (
    
      <button id={id} onClick={executarAcao}>{texto}</button>
    
  )
}

export default Botao
