import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact_us from './pages/Contact_us';
import Briquiny_kotto from './pages/Briquiny_kotto';
import Header from './Components/Header';
import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={ <Contact_us /> } />
        <Route path='/contact_us' element={ <Contact_us /> } />
        <Route path='/briquiny_kotto' element={ <Briquiny_kotto /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
)
