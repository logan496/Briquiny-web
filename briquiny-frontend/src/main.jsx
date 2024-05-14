import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logout from "./pages/login/logout.jsx";
import Briquiny_kotto from './pages/briquiny-kotto/briquiny-kotto.jsx'
import Briquiny_logbessou from './pages/briquiny-logbessou/briquiny-logbessou.jsx'
import GSB_briquiny from './pages/GSB-briquiny/GSB-briquiny.jsx'
import Login from './pages/login/Login.jsx'

// import SlideRoutes from 'react-slide-routes';
import  './styles/Home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/briquiny-logbessou' element={ <Briquiny_logbessou/> } />
          <Route path='/briquiny-kotto' element={<Briquiny_kotto/>} />
          <Route path="/GSB-briquiny" element={<GSB_briquiny/>} />
          <Route path="/logout" element={<Logout/>} />
      </Routes>
    </Router>
  </React.StrictMode>,

)
