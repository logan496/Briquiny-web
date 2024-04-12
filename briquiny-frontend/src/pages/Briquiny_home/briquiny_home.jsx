import './briquiny_home.css'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="home_main_img">
        <h1>BRIQUINNY FORCE TRANQUILLE</h1>
      </div>
      <div className="home_content">
        <div className="home_first_content_wrapper">
          <Content_item 
            sectionTitle={"A propos de nous"}
            subtitle={"Un complexe éducatif de renom"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet commodi quaerat voluptas, unde ipsa cupiditate quisquam eaque mollitia aperiam iste sint, repellendus omnis cumque. Inventore laudantium molestias esse velit et unde rerum perspiciatis! Facere ut cum, aliquam reiciendis repellat voluptatum est sapiente, vitae a perspiciatis dolorum cumque? Officiis, harum!"}
          />
          <Content_item 
            sectionTitle={"Nos objectifs"}
            subtitle={"Offrir une éducation de qualité"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet commodi quaerat voluptas, unde ipsa cupiditate quisquam eaque mollitia aperiam iste sint, repellendus omnis cumque. Inventore laudantium molestias esse velit et unde rerum perspiciatis! Facere ut cum, aliquam reiciendis repellat voluptatum est sapiente, vitae a perspiciatis dolorum cumque? Officiis, harum!"}
          />
        </div>
        <div className="nos_structures">
          <h2>DECOUVREZ NOS STRUCTURES</h2>
          <div className="structures_item_container">
            <Link to={"/briquiny_kotto"}>
              <div className="structure_item">Briquiny Kotto</div>
            </Link>
            <Link to={"/briquiny_logbessou"}>
              <div className="structure_item">Briquiny Logbessou</div>
            </Link>
            <Link to={"/college_briquiny"}>
              <div className="structure_item">College briquiny</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

function Content_item({src, sectionTitle, subtitle, text}) {
  return (
    <div className="content_item">
      { 
        src ?
        <img src={src} alt="" /> : 
        <div className="img_subs"></div>
      }
      <div className="content_item_infos">
        <h2>{sectionTitle}</h2>
        <h2>{subtitle}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}