import "./index.css";
import succes from "../../assets/success.svg";

function Briquiny_kotto(){
    return(
        <div className="container">

            <div className="container_div1">
                <h1>ECOLE PRIMAIRE BRIQUINY KOTTO</h1>
            </div>
            <div className="container_div2">

                <div className="container_div2_div1">
                    <div className="container_div2_div1_button">
                        Briquiny Kotto c'est :
                    </div>
                    <div className="container_div2_div1_box">
                        <div className="container_div2_div1_box_div">
                            <p className="container_div2_div1_box_div--p1">70</p>
                            <p className="container_div2_div1_box_div--p2">Enseignants</p>
                        </div>
                        <div className="container_div2_div1_box_div">
                            <p className="container_div2_div1_box_div--p1">18</p>
                            <p className="container_div2_div1_box_div--p2">Annees <br />d'experience</p>
                        </div>
                        <div className="container_div2_div1_box_div">
                            <p className="container_div2_div1_box_div--p1">2000</p>
                            <p className="container_div2_div1_box_div--p2">Eleves formes</p>
                        </div>
                    </div>
                    <p className="container_div2_div1--p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit neque autem harum natus excepturi, ipsa dolorum obcaecati, fugit quaerat laborum consequuntur suscipit ad magnam, aperiam aliquid commodi. Quam voluptatum quasi rem ratione quas deserunt dolorem recusandae delectus nemo ut, illum, optio, fugit consequatur reiciendis. Ipsa quibusdam sed a qui.
                    </p>
                </div>
                {/** Main div */}
                <div className="container_div2_div2">

                    <div className="contain3">
                        
                        <div>
                            <div className="container_div2_div2_circle2 circle3 text_rotate">
                                Hello1
                            </div>
                            <p className="text_rotate">C.E.P 2023</p>
                        </div>

                        <div className="contain2 circle2">
                            <div>
                                <div className="container_div2_div2_circle2 circle">
                                    Hello2
                                </div>
                                <p>C.E.P 2022</p>
                            </div>
                            <div className="contain circle">
                                <div className="container_div2_div2_circle">
                                    <img src={succes} alt="icon" />
                                </div>
                                <div>
                                    <div>
                                        <div className="container_div2_div2_circle2 circle4">
                                            Hello3
                                        </div>
                                        <p>C.E.P 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Briquiny_kotto;