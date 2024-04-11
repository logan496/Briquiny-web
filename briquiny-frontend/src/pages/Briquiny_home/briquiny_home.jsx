function Home() {
  return (
    <div className="home">
      <div className="home_main_img">
        <h1>BRIQUINNY FORCE TRANQUILLE</h1>
      </div>
      <div className="home_first_content_wrapper">
        {/* <Content_item/>
        <Content_item/> */}
      </div>
      <div className="nos_structures">
        <h2>Découvrez nos structures</h2>
        <div className="structures_item_container">
          <div className="structure_item">Briquiny Kotto</div>
          <div className="structure_item">Briquiny Logbessou</div>
          <div className="structure_item">College briquiny</div>
        </div>
      </div>
    </div>
  )
}

export default Home

function Content_item({src, sectionTitle, subtitle, text}) {
  return (
    <div className="content_item">
      <img src={src} alt="" />
      <div className="content_item_infos">
        <h2>{sectionTitle}</h2>
        <h2>{subtitle}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}