import "./index.css"
import map from "../../assets/map.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Contact_us(){

    const phoneList = [
        {
          id: 1,
          name: "logbessou",
          number: "674536627 / 692255374",
          email: "logbessou@gmail.com",
          locatiion: "Logbessou"
        },
        {
          id: 2,
          name: "kotto",
          number: "677777777",
          email: "kotto@gmail.com",
          locatiion: "Kotto"
        },
        {
          id: 3,
          name: "college_briquiny",
          number: "698199784",
          email: "college_briquiny@gmail.com",
          locatiion: "College Briquiny"
        }
      ];

      const [number, setNumber] = useState("");
      const [locatiion, setLocation] = useState("");
      const [email, setEmail] = useState("");
      const [currentName, setCurrentname] = useState("");
    //   const [currentLocationMap, setCurrentLocationMap] = useState("");
    //   const currentRoute = useLocation();
      const param = new URLSearchParams(window.location.search)

      function ChangeCurrentNumber(){
        if(param.get("active") === 'briquiny_kotto'){
          setNumber(phoneList[1].number);
          setLocation(phoneList[1].locatiion);
          setEmail(phoneList[1].email);
          setCurrentname("BRIQUINY KOTTO");
        }
        if(param.get("active") === 'briquiny_logbessou'){
          setNumber(phoneList[0].number);
          setLocation(phoneList[0].locatiion);
          setEmail(phoneList[0].email);
          setCurrentname("BRIQUINY LOGBESSOU");
        }
        if(param.get("active") === 'college_briquiny'){
          setNumber(phoneList[2].number);
          setLocation(phoneList[2].locatiion);
          setEmail(phoneList[2].email);
          setCurrentname("COLLEGE BRIQUINY");
        }
      }

      useEffect(() => {
        ChangeCurrentNumber();
      }, [useLocation().pathname]);

    return(
        <div className="container">
            <div className="container_contact">
                <h1 className="container_contact--h1">{currentName}</h1>
                <div className="container_contact_div">
                    <div className="container_contact_div_div">
                        <div className="container_contact_div_div_div1">
                            <p className="container_contact_div_div_div1--p">Situe a :</p>
                            <p>{locatiion}</p>
                        </div>
                        <div className="container_contact_div_div_div2">
                            <p className="container_contact_div_div_div2--p">Tel : </p>
                            <p>{number}</p>
                            {/* <p>Lorem ipsum dolor sit.</p> */}
                        </div>
                        <div className="container_contact_div_div_div3">
                            <p className="container_contact_div_div_div3--p">E-mail : </p>
                            <p>{email}</p>
                        </div>
                    </div>
                    <img className="container_contact_div--img" src={map} alt="location" />
                </div>
            </div>
        </div>
    )
}

export default Contact_us;