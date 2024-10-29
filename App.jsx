import { useState } from 'react'
import './App.css'

function App() {
  const [nro, setNro] = useState(0)
  const [numeros, setNumeros] = useState([])

  const guardarNumero = () => {
    setNumeros([...numeros, nro]) 
  }

  return ( 
    <>
      <h1>Lista de Números</h1>
      <div className='ContainerImputs'>
        <input 
          onChange={(e) => setNro(Number(e.target.value))} 
          type="number" 
          placeholder="Número"
        />
        <button className='button' onClick={guardarNumero}>Guardar</button>
      </div>
      <div>
        <h2>Números ingresados:</h2>
        <p>[{numeros + ""}]</p>
      </div>
    </>
  )
}

export default App
