import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_section footer_section1">
          <h2>BRIQUINY</h2>
          <p>Rejoignez l’une de nos écoles et assurez une formation de qualité à vos enfants ! !</p>
        </div>
        <div className="footer_section footer_section2">
          <h2>NOUS CONTACTER</h2>
          <p>Tel : +237 6 -- -- -- --</p>
          <p>E-mail : testexemple@gmail.com</p>
        </div>
        <div className="footer_section footer_section3">
          <h2>DECOUVREZ</h2>
          <ul>
            <li><a href="/">Briquiny Kotto</a></li>
            <li><a href="/">Briquiny Logbessou</a></li>
            <li><a href="/">college Briquiny</a></li>
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
