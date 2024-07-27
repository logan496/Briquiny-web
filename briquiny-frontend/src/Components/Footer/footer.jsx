import { NavLink, useLocation } from 'react-router-dom'
import './footer.css'
import { useEffect, useState } from 'react'

function Footer() {

  const phoneList = [
    {
      id: 1,
      name: "logbessou",
      number: "674536627 / 692255374",
    },
    {
      id: 2,
      name: "kotto",
      number: "677777777",
    },
    {
      id: 3,
      name: "college_briquiny",
      number: "698199784",
    }
  ];

  const [number, setNumber] = useState(0);
  const currentRoute = useLocation();
  const param = new URLSearchParams(window.location.search)

  function ChangeCurrentNumber(){
    if(currentRoute.pathname === '/briquiny_kotto'){
      setNumber(phoneList[1].number);
    }
    else if(param.get("active") === 'briquiny_kotto'){
      setNumber(phoneList[1].number);
    }
    if(currentRoute.pathname === '/briquiny_logbessou'){
      setNumber(phoneList[0].number);
    }
    else if(param.get("active") === 'briquiny_logbessou'){
      setNumber(phoneList[0].number);
    }
    if(currentRoute.pathname === '/college_briquiny'){
      setNumber(phoneList[2].number);
    }
    else if(param.get("active") === 'college_briquiny'){
      setNumber(phoneList[2].number);
    }
  }

  useEffect(() => {
    ChangeCurrentNumber();
  }, [useLocation().pathname]);



  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_section footer_section1">
          <h2>BRIQUINY</h2>
          <p>
            Rejoignez l’une de nos écoles et assurez <br />
            une formation de qualité à vos enfants ! !
          </p>
        </div>
        <div className="footer_section footer_section2">
          <h2>NOUS CONTACTER</h2>
          <p>Tel : {number}</p>
          <p>E-mail : testexemple@gmail.com</p>
        </div>
        <div className="footer_section footer_section3">
          <h2>DECOUVREZ</h2>
          <ul>
            <li><NavLink to={"/briquiny_kotto"}>Briquiny Kotto</NavLink></li>
            <li><NavLink to={"/briquiny_logbessou"}>Briquiny Logbessou</NavLink></li>
            <li><NavLink to={"/college_briquiny"}>college Briquiny</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        copyright@2024 - briquiny | coded by <a href='/'>FTDcode</a>       
      </div>
    </div>
  )
}

export default Footer
