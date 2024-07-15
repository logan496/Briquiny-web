import { useEffect, useState } from "react";
import axios from "axios";

function Scolarite(props) {
    const scaleValue  = props;
    const [data3D, setData3D] = useState([]);
    const API_URL_RECEIVE = 'http://localhost:3000/briquiny/admin/send/cycle';
    const val = { "etablissement": scaleValue };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_URL_RECEIVE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(val)
                });
                const jsonData = await response.json();
                setData3D(jsonData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [scaleValue]);

const handleMontantInscription = (e, index) => {
        const newData = [...data3D];
        newData[index].montantInscription = e.target.value;
        setData3D(newData);
    };

    const handleMontant = (e, index) => {
        const newData = [...data3D];
        newData[index].montant = e.target.value;
        setData3D(newData);
    };

    const sendMontantInscription = async (cycle, montantInscription) => {
        try {
            await axios.put('http://localhost:3000/briquiny/admin/update/cycle/price_inscription', { cycles: cycle, montant_inscription: montantInscription });
            alert('Montant inscription mis à jour avec succès');
        } catch (error) {
            alert('Erreur lors de la mise à jour du montant inscription');
            console.error(error);
        }
    };

    const sendMontant = async (cycle, montant) => {
        try {
            await axios.put('http://localhost:3000/briquiny/admin/update/cycle/price', { cycles: cycle, nouv_montant: montant });
            alert('Montant mis à jour avec succès');
        } catch (error) {
            alert('Erreur lors de la mise à jour du montant');
            console.error(error);
        }
    };

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
                    data3D.map((data, index) => (
                        <tr key={index}>
                            <td>{data.cycle}</td>
                            <td>
                                <input
                                    value={data.montant}
                                    onChange={(e) => handleMontant(e, index)}
                                />
                            </td>
                            <td>
                                <input
                                    value={data.montantInscription}
                                    onChange={(e) => handleMontantInscription(e, index)}
                                />
                            </td>
                            <td>
                                <button onClick={() => sendMontantInscription(data.cycle, data.montantInscription)}>Inscription</button>
                                <button onClick={() => sendMontant(data.cycle, data.montant)}>Montant</button>
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
    );
}

export default Scolarite;
