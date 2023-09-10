import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.tsx'
import  Home  from './Pages/Home/index.tsx'
import  Movie  from './Pages/Movie/index.tsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={ <App />}>
        <Route path='/' element={<Home/>} />
        <Route path='movie/:id' element={<Movie/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
