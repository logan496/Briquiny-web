import './briquiny_college.css'
import success_icon from '../../assets/success.svg'
import { useState, useRef, useEffect } from 'react'

function Briquiny_college() {
  const [ isOverlayOpen, setIsOverlayOpen ] =  useState(false)
  const mainBubbleRef = useRef(null)
  const bubble1Ref = useRef(null) 
  const bubble2Ref = useRef(null) 
  const bubble3Ref = useRef(null) 
  const line1Ref = useRef(null) 
  const line2Ref = useRef(null) 
  const line3Ref = useRef(null) 

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

  const svgAttributesSetter = (svgLine, firstBlock, secondBlock)=>{
    if (firstBlock && svgLine) {
      const x1 = secondBlock.offsetLeft + secondBlock.offsetWidth / 2;
      const y1 = secondBlock.offsetTop + secondBlock.offsetHeight / 2;
      const x2 = firstBlock.offsetLeft + firstBlock.offsetWidth / 2;
      const y2 = firstBlock.offsetTop + firstBlock.offsetHeight / 2;

      svgLine.setAttribute("x1", x1);
      svgLine.setAttribute("y1", y1);
      svgLine.setAttribute("x2", x2);
      svgLine.setAttribute("y2", y2);
    }
  }

  useEffect(()=>{
    const mainBubbleElem = mainBubbleRef.current
    const bubble1Elem = bubble1Ref.current
    const bubble2Elem = bubble2Ref.current
    const bubble3Elem = bubble3Ref.current
    const line1Elem = line1Ref.current
    const line2Elem = line2Ref.current
    const line3Elem = line3Ref.current


    svgAttributesSetter(line1Elem, mainBubbleElem, bubble1Elem)
    svgAttributesSetter(line2Elem, mainBubbleElem, bubble2Elem)
    svgAttributesSetter(line3Elem, mainBubbleElem, bubble3Elem)

    

  },[])

  return (
    <div className="bqn_college">
      {
        isOverlayOpen ? <Obstructor results={resArr} setter={setIsOverlayOpen}/> : null
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
          <svg width="100"><line stroke='black' ref={line1Ref}/></svg>
          <svg width="100"><line stroke='black' ref={line2Ref}/></svg>
          <svg width="100"><line stroke='black' ref={line3Ref}/></svg>
          <div ref={mainBubbleRef} className="succes_container">
            <img src={success_icon} alt="success_icon" />
          </div>
          <button ref={bubble1Ref} onClick={()=>setIsOverlayOpen(true)}>Bacc</button>
          <button ref={bubble2Ref} onClick={()=>setIsOverlayOpen(true)}>Probatoire</button>
          <button ref={bubble3Ref} onClick={()=>setIsOverlayOpen(true)}>BEPC</button>
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
        <button onClick={()=>setter(false)}>ok</button>
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