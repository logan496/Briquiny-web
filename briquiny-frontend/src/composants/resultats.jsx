import {useState} from "react";
function resultats(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Percent, setPercent] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Exams, setExams] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Year, setYear] = useState(0)
    const URL_UPDATE_DATE = "http://localhost:3000/briquiny/admin/update/percent"
    const URL_UPDATE_YEAR = "http://localhost:3000/briquiny/admin/update/year_exams"
    const sendExamsInfos = async (event) =>{
        event.preventDefault()

        const dataSendDate = {
            exams: Exams,
            pourcentage: Percent
        }

        const dataSendYear = {
            exams: Exams,
            year: Year
        }

        await fetch(URL_UPDATE_DATE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataSendDate)
        })
            .then(response => response.json())
            .then(res => alert(res.data.message))
            .catch(error => alert(error))

        await fetch(URL_UPDATE_YEAR, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataSendYear)
        })
            .then(response => response.json())
            .catch(error => alert(error))
    }


    return(
        <div className="resultats-container">
            <h2>RESULTAT(S) EXAMEN(S)</h2>
            <form className="resutats-form" method="post">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label>NOM DE L'EXAMEN</label> :
                {/*<input type="text" name="result-exams" value={Exams} placeholder=""/>*/}
                <input type="number" name="result-year" placeholder="Annee" className="resultats__container" value={Year} onChange={(e) => setYear(e.target.value)}/>
                <input type="text" name="result-percent" placeholder="Pourcentage" className="resultats__container" value={Percent} onChange={(e) => setPercent(e.target.value)}/>
                <input type="submit" name="submit-result" value="METTRE A JOUR" className="change-date" onClick={sendExamsInfos}/>
            </form>

        </div>
    )
}

export default resultats