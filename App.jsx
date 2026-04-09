import { useState } from 'react'
import './App.css'
import logo from './assets/ambev-logo.webp'
import guarana from './assets/guarana.png'
import brahma from './assets/brahma.png'
import skol from './assets/skol.png'
import pepsi from './assets/pepsi.jpg'
import bebidaGenerica from './assets/bebida.png'

export default function App() {

   const BRINDES = [
    { opcao: "Guaraná Antartica", 
      numero:"1",
      teor: "Teor alcoólico: 0%",
      slogan: "É Coisa Nossa",
      img: guarana
    },

    { opcao: "Brahma", 
      numero:"2",
      teor: "Teor alcoólico: 4,7%",
      slogan: "Brahmosidade: A cremosidade que só a Brahma tem",
      img: brahma
    },

    { opcao: "Skol", 
      numero:"3",
       teor: "Teor alcoólico: 4,7%",
      slogan: "A cerveja que desce redondo",
      img: skol
    },

    { opcao: "Pepsi", 
      numero:"4",
      teor: "Teor alcoólico: 0%",
      slogan: "Viva o Agora",
      img: pepsi
    },
  ]; 

  const gerarCodigo = () => {
    if (!codigoGerado) {
      const numero = Math.floor(100000000 + Math.random() * 900000000);
      setCodigo(numero);
      setCodigoGerado(true);
      setMensagem("");
    } else {
      setMensagem("⚠️Seu código já foi gerado!⚠️");
    }
  };

  const [opcao, setOpcao] = useState(null); 
  const [codigo, setCodigo] = useState(0);
  const [codigoGerado, setCodigoGerado] = useState(false);
  const [mensagem, setMensagem] = useState("");



  return (
    <>
    <main>
      <header>
        <img src={logo} alt="" id='logo' />
      </header>
      <p className='brindefrase'>Descubra seu brinde de hoje!</p>

      <button 
        className='cartas' 
        onClick={() => setOpcao(BRINDES[0])}
      >1</button>
      
      <button 
        className='cartas' 
        onClick={() => setOpcao(BRINDES[1])}
      >2</button>

      <button 
        className='cartas' 
        onClick={() => setOpcao(BRINDES[2])}
      >3</button>
      
      <button 
        className='cartas' 
        onClick={() => setOpcao(BRINDES[3])}
      >4</button>


      <div className='resultado'>
        <h2>{opcao ? opcao.opcao : "Escolha uma carta"}</h2>

        {opcao ? (
          <>
            <img src={opcao.img} alt="" />
            <p className='slogan'>{opcao.slogan}</p>
            <p className='teor'>{opcao.teor}</p>
          </>
        ) : (
          <img src={bebidaGenerica} alt=""/>
        )}
      </div>

      <footer>
        <h3>Quer um desconto em seu próximo brinde? Resgate o código!</h3>

        <div className='boxCodigo'>

          <p className='textoCodigo'>Código Promocional</p>

          {mensagem && (
            <p className='mensagem'>{mensagem}</p>
          )}

          <p className='codigo'>
            {codigo !== 0 ? codigo : "--------"}
          </p>

          <button 
            onClick={gerarCodigo}
          >Resgatar Código</button> 

        </div>
      </footer> 
      
    </main>
    </>
  )
}