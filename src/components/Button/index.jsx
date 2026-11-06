import React from 'react'
import './styles.css';

function Button({onClick}) {
  return (
    <div className="button-container">
      <button onClick={onClick}>
        Buscar
      </button>
     </div>
  )
}

export default Button
