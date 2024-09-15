import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Params = () => {
  const navigation = useNavigate();
  const {name} = useParams();

  return (
    <div>
      <h1>Params</h1>
      <p>El parámetro que tengo es {name} </p>
      <button className="btn btn-primary" 
              onClick={()=> navigation("/")} >Ir a la App
      </button>
    </div>
  )
}
