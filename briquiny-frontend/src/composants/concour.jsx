import {useState, useEffect} from "react";
import axios from "axios";

function Date(){
    // const [data, setData] = useState([])
    // const scaleValue = props
    // const URL_RECEIVE = "http://localhost:3000/briquiny/admin/send/date"
    // const val = {'etablissement': scaleValue}
    // useEffect(
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     async function fecthData(){
    //
    //         await fetch(URL_RECEIVE,{
    //             method: 'POST',
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             },
    //             body: val,
    //         })
    //             .then(response => response.json())
    //             .then(dataJson => setData(dataJson))
    //             .catch(error => alert(error))
    //     }
    // )



    // const handleChange = async () => {
    //     await axios.put('http://localhost:3000/briquiny/admin/update/date', data)
    //         .then(response => alert(response.data.message))
    //         .catch(error => {
    //             alert(error)
    //             console.log(error)
    //         })
    // }

    return(
        <div className="date">
            <h2>DATE DU CONCOUR</h2>
            <form className="date-concour" method="post">
                <label>DATE DU CONCOUR</label> : <input type="date" name="date-concour" className="change__date"/>
                <input type="submit" name="change-date" value="METTRE A JOUR" className="change-date" />
            </form>
        </div>
    )
}

export default Date