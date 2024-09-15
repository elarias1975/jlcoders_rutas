import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Nosotros = () => {
  const navigation = useNavigate();

  return (
    <div>
    <h1>Nosotros</h1>
    <button type="button" class="btn btn-warning"
            onClick={()=>navigation("/")}>Volver a App            
    </button>

    </div>
  )
}
