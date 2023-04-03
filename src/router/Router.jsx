import React from 'react'
import CodeVerificaction from '../components/CodeVerificaction'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../components/SignIn'

const Router = () => {
  return ( 
    <BrowserRouter> 
     <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/codeverificaction' element={<CodeVerificaction/>} />
           
       
         </Routes>
     </BrowserRouter>
      
    
  )
}

export default Router
