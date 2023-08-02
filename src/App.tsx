import React from 'react';
import './App.css';
import Botao from './components/Botao';
import Numero from './components/Numero';

function App() {
  return (
    <div className="App">
      <Numero />
      <Botao />
      <p>versão 0.1.0</p>
    </div>
  );
}

export default App;
