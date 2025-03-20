
import { createRoot } from 'react-dom/client'
import { Route,createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import "./app.css";
; 

import App from './App.tsx'
import Home from './components/Home.tsx'


const  router = createBrowserRouter(createRoutesFromElements(
  
  <Route path = '' element  ={<App></App>}>
    
    <Route path='/' element ={<Home></Home>}></Route>

  </Route>
) )
 


createRoot(document.getElementById('root')!).render(

  <RouterProvider router = {router}></RouterProvider> 
 
)
