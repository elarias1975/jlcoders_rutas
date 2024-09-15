import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {Nosotros} from './pages/Nosotros.jsx';
import { Params } from './pages/Params.jsx';
import {Query}from './pages/Query.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/nosotros",
    element:<Nosotros />
  },
  {
    path:"/params/:name",
    element : <Params/>
  },
  {
    path :"/query",
    element:<Query />,
  }
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
)
