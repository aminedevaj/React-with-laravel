import React from 'react'
import Navbar from './compononet/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './compononet/Login/Login';

import Register from './compononet/Login/Register';
import Layout from './compononet/Layout/Layout';
import ProjectCat from './compononet/Project/ProjectCat';
import About from './compononet/About/About';
import Footer from './compononet/Footer/Footer';

const App = () => {
  return (
    <div>
   
      
      <Navbar />
    
    <Routes>
    <Route path='/' element={<Layout/>}/>


    
    <Route path='/About' element={<About/>}/>

    <Route path='/ProjectCat'  element={<ProjectCat  />}>
          <Route path=':id'  element={<ProjectCat />} />
          
      </Route>
      

      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
           
    </Routes>

    <Footer/>
  

      



    </div>
  )
}

export default App