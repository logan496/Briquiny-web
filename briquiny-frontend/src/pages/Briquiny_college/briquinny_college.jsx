function Briquinny_college() {
  return (
    <div className="bqn_college">
      <div className="bqn_colllege_head">
        <p>Collège Briquiny</p>
      </div>
      <div className="content_wrapper">
        <div className="clg_section1">
          <h2 className="clg_section_title">Collège Briquiny c'est :</h2>
          <div className="nbrs_wrapper">
            <StatItem nbr={70} desc={"Enseignants"} />
            <StatItem nbr={18} desc={"Années d'espérience"} />
            <StatItem nbr={"2000+"} desc={"Elèves formés"} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus assumenda eius eos quasi aliquid perferendis numquam fuga, sed voluptate maiores exercitationem a, earum totam incidunt. Id quidem nobis neque animi quas, sunt molestiae rerum officia assumenda dolores, nam totam enim provident autem quis minima voluptas soluta. Nulla, laboriosam distinctio.
          </p>
        </div>
        <div className="clg_section2">
          {/* pour l'affichage des stats du collèges */}
        </div>
        <div className="clg_section3">
          <h2 className="clg_section_title">Service proposés</h2>
        </div>
      </div>
    </div>
  )
}

export default Briquinny_college

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
      <img src={src} alt={desc} />
      <p>{desc}</p>
    </div>
  )
}