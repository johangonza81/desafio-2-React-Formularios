import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Componentes/Formulario';
import Registro from './Componentes/Registro';

import './App.css'
import { useState } from 'react';






function App() {
  

  return (
    <>
      <div className='container'>
        <h2>Crea una Cuenta</h2>
        <Registro />
           
        </div>
    </>
  )
}

export default App
