import React, { useState } from 'react';

import Fondos from './componentes/Fondos';
import GalletaFortuna from './componentes/GalletaFortuna';
import Phrases from '../phrases.json';
import './App.css';
function App() {
  const [index, setIndex] = useState(0);

  const cambiarFondoAleatorio = () => {
    setIndex(Math.floor(Math.random() * 4));
  };

  return (
    <div className="App">
   
      
      <div className="content">
        <GalletaFortuna FortunaData={Phrases[index]} />
        <button onClick={cambiarFondoAleatorio}>Cual es mi fortuna</button>
      </div>
      <Fondos fondoIndex={index} cambiarFondoAleatorio={cambiarFondoAleatorio} />
    </div>
  );
}

export default App;
