import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact_us from './pages/Contact_us';
import Home from './pages/Briquiny_home/briquiny_home';
import Footer from './Components/Footer/footer';
import Briquiny_kotto from './pages/Briquiny_kotto';
import Header from './Components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Briquiny_logbessou from './pages/Briquiny_logbessou';
import Briquinny_college from './pages/Briquiny_college/Briquinny_college';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact_us' element={ <Contact_us /> } />
        <Route path='/briquiny_kotto' element={ <Briquiny_kotto /> } />
        <Route path='/briquiny_logbessou' element={ <Briquiny_logbessou /> } />
        <Route path='/college_briquiny' element={ <Briquinny_college /> } />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
