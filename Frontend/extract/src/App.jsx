import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'u

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/LoginForm';
import Upload from './Components/Upload/Upload';
import About from './Components/About';


const App = () => {
  const current_theme = localStorage.getItem('current_theme')


  const[theme,setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme)

  },[theme])


  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App