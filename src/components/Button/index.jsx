import React from 'react'
import './styles.css';

function Button({onClick}) {
  return (
     <button className="button" onClick={onClick}>
       Buscar
     </button>
  )
}

export default Button
