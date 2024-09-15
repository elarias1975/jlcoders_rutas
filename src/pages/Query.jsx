import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";


export const Query = () => {
  const navigation = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [q,setQ] = useState("")

  useEffect(()=> {
    setQ(searchParams.get("username" || ""))
  },[searchParams]);

  return (
    <div>
      <h1>Query123</h1>
      <p>La query que tengo es {q}</p>
      <button className="btn btn-primary" onClick={()=> navigation("/")} >Ir a la App</button>
    </div>
  )
}
