import React from 'react'
import './styles.css';

function Input({value, onChange}) {
  return (
    <div className="input-container">
        <input value={value} onChange={onChange} placeholder='NomeDoUsuario/Repositório'/>
    </div>
  )
}

export default Input
