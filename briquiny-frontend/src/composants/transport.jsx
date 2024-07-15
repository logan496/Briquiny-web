import {useState, useEffect} from "react";
import axios from "axios"

function transport(props){
    const scaleValue = props
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([])
    const API_URL_RECEIVE = 'http://localhost:3000/briquiny/admin/send/zone'
    const val = {"etablissement": scaleValue}

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function fetchData(){

            await fetch(API_URL_RECEIVE, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(val)
            })
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => alert(error))
        }

        fetchData()
    }, [scaleValue]);

    const handleMontant = (e, index) => {
        const newData = [...data]
        newData[index].montant = e.target.value
        setData(newData)
    }


    const sendMontant = async (zones, montant ) =>{
        await axios.put('http://localhost:3000/briquiny/admin/update/transport/price', {zone: zones, nouv_montant: montant})
            .then(response => {
                const res = response.data.message
                alert(res)
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })
    }




    return(
        <div className="transport-container">
            <h2>FRAIS TRANSPORT</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Zones</th>
                        <th scope="col">Montant</th>
                    </tr>
                </thead>
                <tbody>
                {data.length > 0 ? (
                    data.map((items, index)=> (
                        <tr key={index}>
                            <td>{items.zone}</td>
                            <td>
                                <input
                                    value={items.montant}
                                    onChange={(e) => handleMontant(e, index)}
                                />
                            </td>
                            <td>
                                <button className="send" onClick={() => sendMontant(items.zone, items.montant)}>Mettre à jour</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Chargement des données...</td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    )
}

export default transport