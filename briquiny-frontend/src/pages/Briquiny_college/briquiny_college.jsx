import './briquiny_college.css'
import success_icon from '../../assets/success.svg'
import { useState } from 'react'

function Briquiny_college() {
  const [ isObsOpen, setIsObsOpen ] =  useState(false)

  const resArr = [
    {
      id:1,
      year:"2021",
      perc:"87"
    },
    {
      id:2,
      year:"2022",
      perc:"90"
    },
    {
      id:3,
      year:"2023",
      perc:"85"
    },
  ]

  return (
    <div className="bqn_college">
      {
        isObsOpen ? <Obstructor results={resArr} setter={setIsObsOpen}/> : null
      }
      <div className="bqn_colllege_head">
        <h1>Collège Briquiny</h1>
      </div>
      <div className="content_wrapper">
        <div className="clg_section1">
          <h3 className="clg_section_title">Collège Briquiny c'est :</h3>
          <div className="nbrs_wrapper">
            <StatItem nbr={70} desc={"Enseignants"} />
            <StatItem nbr={18} desc={"Années d'espérience"} />
            <StatItem nbr={"2000+"} desc={"Elèves formés"} />
          </div>
          <div className="section1_text_container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus assumenda eius eos quasi aliquid perferendis numquam fuga, sed voluptate maiores exercitationem a, earum totam incidunt. Id quidem nobis neque animi quas, sunt molestiae rerum officia assumenda dolores, nam totam enim provident autem quis minima voluptas soluta. Nulla, laboriosam distinctio.
            </p>
          </div>
        </div>
        <div className="clg_section2">
          {/* pour l'affichage des stats du collèges */}
          <div className="liaison"></div>
          <div className="liaison"></div>
          <div className="liaison"></div>
          <div className="succes_container">
            <img src={success_icon} alt="success_icon" />
          </div>
          <button onClick={()=>setIsObsOpen(true)}>Bacc</button>
          <button onClick={()=>setIsObsOpen(true)}>Probatoire</button>
          <button onClick={()=>setIsObsOpen(true)}>BEPC</button>
        </div>
        <div className="clg_section3">
          <h3 className="clg_section_title">Service proposés</h3>
          <div className="services_wrapper">
            <ServiceItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing."}/>
            <ServiceItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing."}/>
            <ServiceItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing."}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Briquiny_college

function Obstructor ({results, setter}) {
  return(
    <div className="obstructor_wrapper">
      <div className="obstructor">
        <button onClick={()=>setter(false)}>sortir</button>
        <div className="results_container">
          {
            results.map((item)=>{
              return (
                <div className='result_item' key={item.id}>
                  <p className="result_perc">{`${item.perc}%`}</p>
                  <p className="result_year">{item.year}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function StatItem ({ nbr, desc }) {
  return (
    <div className="stat_item">
      <h1>{nbr}</h1>
      <p>{desc}</p>
    </div>
  )
}

function ServiceItem ({ src, desc }){
  return(
    <div className="service_item">
      {src ? 
        <img src={src} alt={desc} /> :
        <div className="service_item_subst"></div>
      }
      <p>{desc}</p>
    </div>
  )
}