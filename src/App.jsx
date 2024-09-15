import { useState } from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'
import { Inicio } from './pages/Inicio'

function App() {
  
  const navigation = useNavigate();
  const [parametro,setParametro] = useState("");
  const [query,setQuery] = useState("");

  const irAParametro =()=>{
    parametro ===""
    ? alert("debes digitar un parámetro")
    : navigation(`/params/${parametro}`);
  };

  const irAQuery =()=>{
    query ===""
    ? alert("debes digitar una query")
    : navigation(`/query?username=${query}`);
  };
  return (
    <>  
    <Inicio />
    <button type="button" class="btn btn-primary"
            onClick ={()=> navigation("/nosotros")}>Ir a Nosotros
    </button>
    <br/>
    <br/>
    {/* Parametros */}
    <h1>Configurar parametros</h1>
    <input type="text" 
            placeholder='parametro'
            onChange={(e)=>setParametro(e.target.value)}/>
    <button className='btn btn-primary'
            onClick={()=>irAParametro()}>Ir a la page parametro</button>
    <br/>
    <br/>
    {/* Querys             */}
    <h1>Configurar querys</h1>
    <input type="text" 
            placeholder='query'
            onChange={(e)=>setQuery(e.target.value)}/>
    <button className='btn btn-primary'
            onClick={()=>irAQuery()}>Ir a la page query</button>
    </>
  );
}

export default App
