import { useEffect, useState } from "react";


function Scolarite(props) {
    // eslint-disable-next-line react/prop-types
    const scaleValue = props.scaleValue
    const [data3D, setData3D] = useState([]);
    const API_URL_RECEIVE = 'http://localhost:3000/briquiny/admin/send/cycle';
    // const API_URL_SEND = 'http://localhost:3000/briquiny/admin/update/cycle'
    const val = { "etablissement": scaleValue };

    useEffect(() => {
        async function fetchData() {
            try {
                await fetch(API_URL_RECEIVE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(val)
                })
                    .then((response) => response.json())
                    .then((jsonData) => {
                        setData3D(jsonData)
                    })

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    // const handleChange = (event, dataId) => {
    //     setModifiedData({
    //         ...modifiedData,
    //         [dataId]:{
    //             cycle: event.target.value,
    //             montant: parseInt(event.target.value)
    //         }
    //     })
    //     const handleUpdate = async () => {
    //         try{
    //             const updateData = Object.values(modifiedData)
    //             const response = await fetch(API_URL_SEND, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type' : 'application/json'
    //                 },
    //                 body: JSON.stringify(updateData)
    //             })
    //             if (response.ok){
    //                 setData3D(data3D.map(row => {
    //                     if(row.id === modifiedData[row.id].id){
    //                         row.cycle = modifiedData[row.id].cycle
    //                         row.montant = modifiedData[row.id].montant
    //                         return row
    //                     }
    //                     return row
    //                 }))
    //                 setModifiedData({})
    //             }else{
    //                 console.log("erreur")
    //             }
    //         }catch (error){
    //             console.log(error)
    //         }
    //     }
    // }
    return (
        <div className="scolarite-container">
            <h2>FRAIS DE SCOLARITE</h2>
            <table className="frais-scolarite-table">
                <thead>
                <tr>
                    <th>Cycle</th>
                    <th>Montant</th>
                    <th>Inscription</th>
                </tr>
                </thead>
                <tbody>
                {data3D.length > 0 ? (
                    data3D.map(data => (
                        <tr key={data.ets}>
                            <td>{data.cycle}</td>
                            <td>{data.montant}</td>
                            <td>{data.montantInscription}</td>
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
    );
}

export default Scolarite;
