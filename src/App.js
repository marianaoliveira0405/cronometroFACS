import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador'
import LabelCronometro from './LabelCronometro'
import Botao from './Botao'
import Relogio from './Relogio'
import LabelRelogio from './LabelRelogio'
import LabelTemporizador from './LabelTemporizador'
import Temporizador from './Temporizador'


function App() {
  return (
    <div>
      <LabelCronometro name="CRONOMETRO"/>
      <Contador/>
      <LabelRelogio name="RELOGIO"/>
      <Relogio/>
      <LabelTemporizador name="TEMPORIZADOR"/>
      <Temporizador/>
    </div>

      );
}

export default App;
