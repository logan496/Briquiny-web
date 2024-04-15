import "./index.css";

import { useEffect, useState } from "react";

import Service from "./service";

import succes from "../../assets/success.svg";

function Briquiny_kotto(){

    // The state to manage the type of the display
    const [isMobile, setIsMobile] = useState(null);
    const [isMobile1, setIsMobile2] = useState(null);

    const lorem = "Lorem ipsum dolor sit amet";
    const img = "circle";
    // The functions to define if the display is the mobile or not
    function changeDisplayType(){
        if (window.screen.width < 600 && !isMobile) {
            setIsMobile(true);
        } else if(window.screen.width > 600 && isMobile){
            setIsMobile(false);
        }
    }

    function changeDisplayType2(){
        if (window.screen.width < 600 && !isMobile) {
            setIsMobile(true);
        } else if(window.screen.width > 600 && isMobile){
            setIsMobile(false);
        }
    }

    // The method to listen the size of the screen and refresh the display of the elements
    window.addEventListener("resize", changeDisplayType);

    // The function to define the type of the display during the first render of the site
    useEffect(() => {
        changeDisplayType();
    }, [])

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

                {
                    isMobile ? 
                        <div className="mobile_container">
                            <div className="mobile_container_div">
                                <div className="mobile_circle">
                                    Hello1
                                </div>
                                <p className="exam">C.E.P 2023</p>
                            </div>
                            <div className="mobile_container_div1">
                                <div className="slide">
                                    <div className="mobile_circle">
                                        Hello1
                                    </div>
                                </div>
                                <p className="exam">C.E.P 2023</p>
                            </div>
                            <div className="mobile_container_div1">
                                <div className="slide">
                                    <div className="mobile_circle">
                                        Hello1
                                    </div>
                                </div>
                                <p className="exam">C.E.P 2023</p>
                            </div>
                        </div>
                     : (
                        <div>
                            {/** Main div */}
                            <div className="container_div2_div2">

                                <div className="contain3">
                                    
                                    <div>
                                        <p className="text_rotate p1">C.E.P 2023</p>
                                        <div className="container_div2_div2_circle2 circle3 text_rotate">
                                            Hello1
                                        </div>
                                    </div>

                                    <div className="contain2 circle2">
                                        <div>
                                            <div className="container_div2_div2_circle2 circle">
                                                Hello2
                                            </div>
                                            <p className="p2">C.E.P 2022</p>
                                        </div>
                                        <div className="contain circle">
                                            <div className="container_div2_div2_circle">
                                                <img src={succes} alt="icon" />
                                            </div>
                                            <div className="pcontain">
                                                <div className="container_div2_div2_circle2 circle4">
                                                    Hello3
                                                </div>
                                                <p className="p3">C.E.P 2021</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                }
                
                <div className="bloc">
                    <div className="bloc_div1">
                        Services proposes
                    </div>
                    <div className="bloc_div2">
                        <div className="bloc_div2_div1">
                            <Service img={img} lorem={lorem} />
                            <Service img={img} lorem={lorem} />                        
                        </div>
                        <div className="bloc_div2_div2">
                            <Service img={img} lorem={lorem} />
                            <Service img={img} lorem={lorem} />
                        </div>
                    </div>
                    <div className="bloc_div3">
                        <div className="bloc_div3_div">
                            <p className="bloc_div3_div--p">Pour plus d'informations cliquez ici</p>
                            <div className="bloc_div1">Plus d'informations</div>
                        </div>
                        <div className="bloc_div3_box">
                            box
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Briquiny_kotto;