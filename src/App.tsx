import React from 'react';
import './App.css';
import Botao from './components/Botao';
import Numero from './components/Numero';

function App() {
  return (
    <div className="App">
      <h1>App Contador</h1>
      <Numero />
      <Botao />
      <hr/>
      <p>versão 1.0.0</p>
    </div>
  );
}

export default App;
